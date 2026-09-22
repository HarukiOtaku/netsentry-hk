#!/usr/bin/env node
/**
 * NetSentry HK — 每日摘要發佈腳本
 *
 * 由上游摘要檔（目錄由環境變數 NETSENTRY_CRON_DIR 指定，或用 --file 指定單一檔案）
 * 抽出當日摘要，轉成網站用的 markdown，更新首頁、存檔頁與 RSS／JSON Feed。
 *
 * 用法：
 *   NETSENTRY_CRON_DIR=/path/to/summaries node scripts/publish-digest.mjs
 *   node scripts/publish-digest.mjs --file=/path/to/output.md --date=YYYY-MM-DD
 *   node scripts/publish-digest.mjs --dry-run       # 只顯示會做甚麼，不寫檔
 *   node scripts/publish-digest.mjs --notify        # 只輸出精簡通知訊息
 *   node scripts/publish-digest.mjs --scan-public   # 掃描公開檔案有冇不應公開的資訊
 *   node scripts/publish-digest.mjs --commit        # 寫檔後 git add + commit
 *   node scripts/publish-digest.mjs --commit --push # 再加 push
 *
 * 守門（HARD GUARDS）：格式不合（段落太少／找不到摘要）、內容含個人資料或內部資訊
 * → 直接 exit 1，不寫任何檔、不 commit。
 */
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DOCS = path.join(ROOT, 'docs')
const DIGEST_DIR = path.join(DOCS, 'digests')
const PUBLIC_DIR = path.join(DOCS, 'public')
// 上游摘要檔目錄（由環境變數提供，公開 repo 不記錄任何本機路徑）
const CRON_DIR = process.env.NETSENTRY_CRON_DIR || ''
const SITE = process.env.NETSENTRY_SITE || 'https://netsentry-hk.vercel.app'
const FEED_LIMIT = 30

const argv = process.argv.slice(2)
const flag = (name) => argv.includes(`--${name}`)
const opt = (name) => {
  const hit = argv.find((a) => a.startsWith(`--${name}=`))
  return hit ? hit.slice(name.length + 3) : null
}
const DRY = flag('dry-run')
const WANT_COMMIT = flag('commit')
const WANT_PUSH = flag('push')
const DATE_OPT = opt('date')
const FILE_OPT = opt('file')

const TZ_OFFSET = Number(process.env.NETSENTRY_TZ_OFFSET ?? 8) // HKT = UTC+8
const log = (...a) => {
  // --notify 模式只准輸出通知訊息（stdout 會直接送去 Discord）
  if (!flag('notify')) console.log(...a)
}
const die = (msg) => {
  console.error(`FATAL: ${msg}`)
  process.exit(1)
}

/* ---------------------------------------------------------------- helpers */

function hkToday() {
  const now = new Date()
  const hk = new Date(now.getTime() + TZ_OFFSET * 3600 * 1000)
  return hk.toISOString().slice(0, 10)
}

function weekdayZh(dateStr) {
  const names = ['日', '一', '二', '三', '四', '五', '六']
  const d = new Date(`${dateStr}T12:00:00Z`)
  return `星期${names[d.getUTCDay()]}`
}

function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return '連結'
  }
}

/* ------------------------------------------------------------ 來源檔案層 */

function pickSourceFile() {
  if (FILE_OPT) {
    if (!fs.existsSync(FILE_OPT)) die(`--file 指定的檔案不存在：${FILE_OPT}`)
    return FILE_OPT
  }
  if (!CRON_DIR) die('需要 --file=<檔案>，或設定環境變數 NETSENTRY_CRON_DIR=<目錄>')
  if (!fs.existsSync(CRON_DIR)) die(`找不到摘要目錄：${CRON_DIR}`)
  const files = fs
    .readdirSync(CRON_DIR)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .reverse()
  const date = DATE_OPT || hkToday()
  const hit = files.find((f) => f.startsWith(date))
  if (!hit) die(`找不到 ${date} 的摘要檔（可用 --file 指定）`)
  return path.join(CRON_DIR, hit)
}

function extractResponse(text) {
  // 輸出檔可能內嵌「上一次執行」的完整內容；真正今次輸出是最後一個 "## Response" 區塊
  const parts = text.split(/^##\s*Response\s*$/m)
  if (parts.length < 2) return text
  return parts[parts.length - 1]
}

/* ---------------------------------------------------------------- 解析層 */

const SECTION_DEFS = [
  { key: 'tldr', title: 'TL;DR', test: (s) => /^(?:[#>*\s]*)?(?:⚡\s*)?TL;DR/i.test(s) },
  { key: 'products', title: '產品與發布會', test: (s) => /^(?:[#>*\s]*)?(?:\d[.、)]\s*)?產品/.test(s) },
  { key: 'ai', title: 'AI 模型與開源趨勢', test: (s) => /^(?:[#>*\s]*)?(?:\d[.、)]\s*)?AI 模型/.test(s) },
  { key: 'github', title: 'GitHub 值得關注', test: (s) => /^(?:[#>*\s]*)?(?:\d[.、)]\s*)?GitHub/.test(s) },
  { key: 'global', title: '全球重點新聞', test: (s) => /^(?:[#>*\s]*)?(?:\d[.、)]\s*)?全球重點新聞/.test(s) },
  { key: 'hk', title: '香港本地', test: (s) => /^(?:[#>*\s]*)?(?:\d[.、)]\s*)?香港本地/.test(s) },
  { key: 'events', title: '活動與展會', test: (s) => /^(?:[#>*\s]*)?(?:\d[.、)]\s*)?活動/.test(s) },
  { key: 'misc', title: '其他要點', test: (s) => /^(?:[#>*\s]*)?(?:\d[.、)]\s*)?其他/.test(s) },
  { key: 'followup', title: '昨日跟進', test: (s) => /^(?:[#>*\s]*)?(?:🔄\s*)?昨日跟進/.test(s) },
]

/** 📌 今日總結 / 趨勢總結：不論放喺頂或尾，都會被抽出嚟做成頂部總結卡 */
const SUMMARY_RE = /^(?:[#>*\s]*)?(?:📌\s*)?(?:今日總結|趨勢總結)/
const SUMMARY_PREFIX_RE = /^(?:[#>*\s]*)?(?:📌\s*)?(?:今日總結|趨勢總結)\s*\*{0,2}\s*[：:—-]*\s*/
const DATE_LINE_RE = /^(?:\*\*)?資料截至/

const INDEX_START = /^─*\s*網站索引（勿刪）\s*─*$/
const INDEX_END = /^─*\s*索引完\s*─*$/

function cleanHeading(line) {
  return line
    .replace(/^#{1,6}\s*/, '')
    .replace(/\*\*/g, '')
    .replace(/^[•\-\s]+/, '')
    .trim()
}

/** 偵測用：移除粗體標記同項目符號，令 `📌 **今日總結**`、`⚡ **TL;DR**` 之類都認得到 */
function probeOf(line) {
  return line.replace(/\*\*/g, '').replace(/^[•]\s*/, '').trim()
}

/** 移除總結行嘅前綴（📌、**、今日總結／趨勢總結、冒號） */
function stripSummaryPrefix(line) {
  return line
    .replace(/^[#>\s]*/, '')
    .replace(/^\*{0,2}\s*/, '')
    .replace(/^📌\s*/, '')
    .replace(/^\*{0,2}\s*/, '')
    .replace(/^(?:今日總結|趨勢總結)\s*/, '')
    .replace(/^\*{0,2}\s*/, '')
    .replace(/^[：:—-]\s*/, '')
    .trim()
}

/** Discord markdown → 網站 markdown */
function convertInline(line) {
  let out = line
  // 項目符號統一成 markdown
  out = out.replace(/^\s*•\s*/, '- ')
  // <https://…> → [來源：host](url)
  const hadAngleLink = /<(?:https?:\/\/)[^>\s]+>/.test(out)
  out = out.replace(/<((?:https?:\/\/)[^>\s]+)>/g, (_m, url) => `[來源：${hostOf(url)}](${url})`)
  // 來源原本用 〔…〕 包住，轉連結後清走殘留括號
  if (hadAngleLink) out = out.replace(/[〔〕]/g, '')
  return out
}

function parseDigest(raw) {
  const lines = raw.replace(/\r\n?/g, '\n').split('\n')
  let title = null
  const intro = []
  const summary = []
  const sections = []
  const footer = []
  const indexMeta = {}
  let inIndex = false
  let inFooter = false
  let inSummary = false
  let current = null

  for (const line of lines) {
    const trimmed = line.trim()
    const probe = probeOf(trimmed)

    if (INDEX_START.test(probe)) {
      inIndex = true
      continue
    }
    if (INDEX_END.test(probe)) {
      inIndex = false
      continue
    }
    if (inIndex) {
      const m = probe.match(/^([a-z0-9_]+)\s*:\s*(.*)$/i)
      if (m) indexMeta[m[1].toLowerCase()] = m[2].trim()
      continue
    }

    // 尾段（資料截至）：之後所有行歸 footer
    if (inFooter) {
      if (trimmed) footer.push(convertInline(line))
      continue
    }
    if (DATE_LINE_RE.test(probe)) {
      inFooter = true
      current = null
      footer.push(convertInline(line))
      continue
    }

    // 今日總結／趨勢總結（不分位置）→ 抽出做頂部總結卡
    if (SUMMARY_RE.test(probe)) {
      inSummary = true
      current = null
      const rest = stripSummaryPrefix(trimmed)
      if (rest) summary.push(rest)
      continue
    }
    if (inSummary) {
      const nextDef = SECTION_DEFS.find((d) => d.test(probeOf(trimmed)))
      if (!nextDef && !DATE_LINE_RE.test(probeOf(trimmed)) && trimmed) {
        summary.push(convertInline(line))
        continue
      }
      inSummary = false
    }

    if (!title) {
      if (/🗓️/.test(trimmed) && /摘要/.test(trimmed)) {
        title = cleanHeading(trimmed.replace(/^🗓️\s*/, ''))
        continue
      }
    }

    const def = SECTION_DEFS.find((d) => d.test(probe))
    if (def) {
      current = { key: def.key, title: def.title, lines: [] }
      sections.push(current)
      continue
    }

    if (!current) {
      if (title && trimmed) intro.push(convertInline(line))
      continue
    }

    let body = convertInline(line)
    // TL;DR 段：把「1. 2. 3.」統一成項目符號，方便網站同通知一致顯示
    if (current.key === 'tldr') body = body.replace(/^\s*\d+[.、)]\s+/, '- ')
    current.lines.push(body)
  }

  return { title, intro, summary, sections, footer, indexMeta }
}

/* ---------------------------------------------------------------- 產出層 */

function digestFrontMatter(date, title) {
  return `---\ntitle: ${JSON.stringify(title)}\ndate: ${date}\n---\n`
}

function sectionBlocks(sections) {
  return sections
    .map((s) => {
      const body = s.lines.join('\n').trim()
      if (!body) return ''
      return `::: section ${s.key} ${s.title}\n## ${s.title}\n\n${body}\n:::\n`
    })
    .filter(Boolean)
    .join('\n')
}

/** 行內 markdown → HTML（raw HTML 區塊內 markdown 唔會被處理，所以要自己轉） */
function mdInlineToHtml(s) {
  let out = String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  out = out.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>')
  return out
}

/** 頂部總結卡（讀者第一眼就見到） */
function summaryCard(parsed) {
  const parts = (parsed.summary || []).filter(Boolean)
  if (!parts.length) return ''
  const text = mdInlineToHtml(parts.join(' ').replace(/\s+/g, ' ').trim())
  return `<div class="ns-summary">\n<p><strong>📌 今日總結</strong>：${text}</p>\n</div>\n`
}

/** 頁尾（資料截至、異常提示） */
function footerBlock(parsed) {
  const parts = (parsed.footer || []).filter(Boolean)
  if (!parts.length) return ''
  return `<div class="ns-footer">\n<p>${mdInlineToHtml(parts.join(' ').replace(/\s+/g, ' ').trim())}</p>\n</div>\n`
}

function buildDigestPage(date, parsed) {
  const title = parsed.title || `每日科技與資安摘要 — ${date}`
  const intro = parsed.intro.length ? `${parsed.intro.join('\n')}\n` : ''
  return `${digestFrontMatter(date, title)}\n# ${title}\n\n${intro}\n${summaryCard(parsed)}\n${sectionBlocks(parsed.sections)}\n${footerBlock(parsed)}`
}

function buildHomePage(date, parsed) {
  const title = parsed.title || `每日科技與資安摘要 — ${date}`
  return `${digestFrontMatter(date, '今日摘要')}
# ${title}

<p class="ns-lead">今日重點 · 永久連結 <a href="/digests/${date}">/digests/${date}</a> · <a href="/digests/">全部存檔</a></p>

${summaryCard(parsed)}
${sectionBlocks(parsed.sections)}
${footerBlock(parsed)}`
}

function allDigestFiles() {
  return fs
    .readdirSync(DIGEST_DIR)
    .filter((f) => /^\d{4}-\d{2}-\d{2}\.md$/.test(f))
    .sort()
    .reverse()
}

function readDigestMeta(file) {
  const raw = fs.readFileSync(path.join(DIGEST_DIR, file), 'utf8')
  const date = file.replace('.md', '')
  const titleM = raw.match(/^title:\s*(.+)$/m)
  const title = titleM ? titleM[1].trim().replace(/^"|"$/g, '') : `每日科技與資安摘要 — ${date}`
  const keyM = raw.match(/^---\n[\s\S]*?^---\n/m)
  const body = raw
  const items = (body.match(/^- \*\*/gm) || []).length
  const tldr = [...body.matchAll(/^- .+$/gm)]
    .filter((m) => m[0].includes('｜') === false)
    .slice(0, 3)
    .map((m) => m[0].replace(/^- /, '').replace(/\*\*/g, ''))
  const summaryM = body.match(/(?:趨勢總結)?\*\*?([^\n]{10,200})/)
  void keyM
  void summaryM
  return { date, title, items, tldr }
}

function buildArchivePage() {
  const files = allDigestFiles()
  const byMonth = new Map()
  for (const f of files) {
    const meta = readDigestMeta(f)
    const month = meta.date.slice(0, 7)
    if (!byMonth.has(month)) byMonth.set(month, [])
    byMonth.get(month).push(meta)
  }
  let out = `${digestFrontMatter(hkToday(), '摘要存檔')}
# 摘要存檔

共 ${files.length} 日摘要。每日一篇，全部附原始來源連結。

`
  for (const [month, metas] of [...byMonth.entries()].sort().reverse()) {
    const [y, m] = month.split('-')
    out += `## ${y} 年 ${Number(m)} 月\n\n`
    for (const meta of metas) {
      out += `- [${meta.title}](/digests/${meta.date}) — ${meta.items} 條要點\n`
    }
    out += '\n'
  }
  return out
}

function xmlEscape(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildFeeds() {
  const files = allDigestFiles().slice(0, FEED_LIMIT)
  const metas = files.map(readDigestMeta)
  const now = new Date().toUTCString()
  const items = metas
    .map((meta) => {
      const url = `${SITE}/digests/${meta.date}`
      const desc = meta.tldr.join(' / ')
      return `    <item>
      <title>${xmlEscape(meta.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${meta.date}T05:30:00+08:00`).toUTCString()}</pubDate>
      <description>${xmlEscape(desc)}</description>
    </item>`
    })
    .join('\n')
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NetSentry HK — 每日科技與資安摘要</title>
    <link>${SITE}</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>每日科技、資安與 AI 摘要：5 分鐘掌握重點，每條資訊都導向原始來源。</description>
    <language>zh-HK</language>
    <lastBuildDate>${now}</lastBuildDate>
${items}
  </channel>
</rss>
`
  const json = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'NetSentry HK — 每日科技與資安摘要',
    home_page_url: SITE,
    feed_url: `${SITE}/feed.json`,
    language: 'zh-HK',
    items: metas.map((meta) => ({
      id: `${SITE}/digests/${meta.date}`,
      url: `${SITE}/digests/${meta.date}`,
      title: meta.title,
      date_published: `${meta.date}T05:30:00+08:00`,
      summary: meta.tldr.join(' / '),
    })),
  }
  return { rss, json: JSON.stringify(json, null, 2) + '\n' }
}

/* ------------------------------------------------------- 私隱／人稱守門層 */

/**
 * 基本守門規則（刻意唔含任何個人／內部關鍵字，避免掃描器本身洩密）。
 * 個人／內部專屬規則由環境變數 NETSENTRY_BANNED_JSON 指向的檔案提供。
 */
const BASE_PATTERNS = [
  { re: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/, label: '電郵地址' },
  { re: /同你有關|你部|你嘅|你手上|你嘅設定|你自己部/, label: '第二人稱／針對特定讀者' },
  {
    re: /ssh-ed25519|BEGIN (RSA|OPENSSH|EC) PRIVATE KEY|ghp_[A-Za-z0-9]{20,}|sk-[A-Za-z0-9]{20,}|AIza[0-9A-Za-z_-]{20,}/,
    label: '憑證／金鑰',
  },
]

/** 由外部檔案載入額外守門規則（唔會放喺公開 repo） */
function loadExtraPatterns() {
  const p = process.env.NETSENTRY_BANNED_JSON
  if (!p || !fs.existsSync(p)) return []
  try {
    const arr = JSON.parse(fs.readFileSync(p, 'utf8'))
    return arr
      .filter((x) => x && x.pattern)
      .map((x) => ({
        re: new RegExp(x.pattern, x.flags || 'i'),
        label: x.label || x.pattern,
        allowIf: x.allowIf || null,
      }))
  } catch (e) {
    die(`守門規則檔格式錯誤（${p}）：${e.message}`)
  }
}

function loadOverrides() {
  // 逐日文字修正檔：預設讀環境變數指定的路徑（唔會放喺公開 repo）
  const p = process.env.NETSENTRY_OVERRIDES || path.join(ROOT, 'scripts', 'overrides.json')
  if (!fs.existsSync(p)) return {}
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'))
  } catch (e) {
    die(`文字修正檔格式錯誤（${p}）：${e.message}`)
  }
}

/** 套用逐日文字修正 */
function applyOverrides(text, date) {
  const rules = loadOverrides()[date] || []
  let out = text
  let applied = 0
  for (const rule of rules) {
    if (!rule || !rule.find) continue
    if (out.includes(rule.find)) {
      out = out.split(rule.find).join(rule.replace ?? '')
      applied += 1
    }
  }
  return { text: out, applied }
}

/** 取命中位置所在嘅整行（用嚟做 allowIf 判斷） */
function lineAround(text, idx) {
  const start = text.lastIndexOf('\n', idx) + 1
  let end = text.indexOf('\n', idx)
  if (end === -1) end = text.length
  return text.slice(start, end)
}

/** 掃描一段文字（基本規則＋外部規則）；回傳命中清單。規則可帶 allowIf（命中行符合就放行） */
function scanText(text, extra = null) {
  const sets = [BASE_PATTERNS, extra || loadExtraPatterns()]
  const hits = []
  for (const set of sets) {
    for (const rule of set) {
      const { re, label, allowIf } = rule
      const allowRe = allowIf ? new RegExp(allowIf, 'i') : null
      const g = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g')
      let m
      while ((m = g.exec(text)) !== null) {
        if (m[0].length === 0) {
          g.lastIndex += 1
          continue
        }
        const line = lineAround(text, m.index)
        if (allowRe && allowRe.test(line)) continue
        hits.push({ label, sample: String(m[0]).slice(0, 40) })
        break // 同一條規則最多報一次
      }
    }
  }
  return hits
}

/** 掃描公開追蹤檔案（README、docs、設定檔）有冇不應公開的資訊 */
function scanPublicFiles() {
  // 掃描器本身含有偵測規則字串，所以跳過自己
  const SKIP_FILES = new Set(['scripts/publish-digest.mjs'])
  const SKIP_EXT = /\.(png|jpe?g|webp|gif|svg|ico|woff2?|ttf|otf|lock)$/i
  let files = []
  try {
    files = execFileSync('git', ['ls-files'], { cwd: ROOT, encoding: 'utf8' }).split('\n').filter(Boolean)
  } catch {
    die('scan-public 需要在 git 工作區內執行')
  }
  const hits = []
  for (const f of files) {
    if (SKIP_EXT.test(f) || SKIP_FILES.has(f)) continue
    let text
    try {
      text = fs.readFileSync(path.join(ROOT, f), 'utf8')
    } catch {
      continue
    }
    const found = scanText(text)
    if (found.length) hits.push({ file: f, found })
  }
  return hits
}

/* ---------------------------------------------------------------- 通知訊息 */

/** Discord 精簡通知（標題＋總結＋重點＋連結） */
function buildNotifyMessage(date, parsed) {
  const title = parsed.title || `每日科技與資安摘要 — ${date}`
  const summary = (parsed.summary || []).join(' ').replace(/\s+/g, ' ').trim()
  const tldrSection = parsed.sections.find((s) => s.key === 'tldr')
  const bullets = (tldrSection ? tldrSection.lines : [])
    .filter((l) => /^\s*(?:-\s+|\d+[.、)]\s+)\S/.test(l))
    .slice(0, 3)
    .map(
      (l) =>
        '• ' +
        l
          .replace(/^\s*(?:-\s+|\d+[.、)]\s+)/, '')
          .replace(/\[來源：[^\]]*\]\([^)]*\)/g, '')
          .replace(/\s+/g, ' ')
          .trim(),
    )
  const order = ['products', 'ai', 'github', 'global', 'hk', 'events', 'misc']
  const counts = parsed.sections
    .filter((s) => order.includes(s.key))
    .map((s) => `${s.title} ${s.lines.filter((l) => /^\s*-\s+\*\*/.test(l)).length}`)
  const lines = [title]
  if (summary) lines.push(`📌 ${summary}`)
  else lines.push('⚠️ 今日摘要缺 📌 總結（已記錄，稍後修正）')
  if (bullets.length) lines.push('⚡ 今日重點：', ...bullets)
  if (counts.length) lines.push(`📊 ${counts.join('｜')}`)
  lines.push(`🔗 全文（每條附原始來源連結）：${SITE}/digests/${date}`, `📚 存檔：${SITE}/digests/`)
  return lines.filter(Boolean).join('\n')
}

/* ------------------------------------------------------------------ 寫檔 */

function writeIfChanged(file, content, dry) {
  const abs = path.join(ROOT, file)
  const old = fs.existsSync(abs) ? fs.readFileSync(abs, 'utf8') : null
  if (old === content) {
    log(`  = 無變化：${file}`)
    return false
  }
  if (dry) {
    log(`  ~ 會更新：${file}（${old ? `${old.length} → ` : '新增 '}${content.length} bytes）`)
    return true
  }
  fs.mkdirSync(path.dirname(abs), { recursive: true })
  fs.writeFileSync(abs, content)
  log(`  ✓ 已寫入：${file}`)
  return true
}

/* -------------------------------------------------------------- git 步驟 */

function run(cmd, args) {
  return execFileSync(cmd, args, { cwd: ROOT, encoding: 'utf8' })
}

function gitCommit(paths, date, push) {
  if (!paths.length) {
    log('無檔案變動，略過 commit')
    return
  }
  run('git', ['add', '--', ...paths])
  const status = run('git', ['diff', '--cached', '--name-status'])
  const deletions = status
    .split('\n')
    .filter(Boolean)
    .filter((l) => l.startsWith('D\t'))
  if (deletions.length) die(`偵測到刪除，為安全起見中止：\n${deletions.join('\n')}`)
  const unexpected = status
    .split('\n')
    .filter(Boolean)
    .map((l) => l.split('\t').pop())
    .filter((f) => !paths.includes(f))
  if (unexpected.length) die(`有預期以外的檔案被 staged，中止：\n${unexpected.join('\n')}`)
  if (!status.trim()) {
    log('staged diff 為空，略過 commit')
    return
  }
  run('git', ['commit', '-m', `digest: ${date}`])
  log(`  ✓ commit 完成：digest: ${date}`)
  if (push) {
    run('git', ['push', 'origin', 'main'])
    log('  ✓ push 完成')
  }
}

/* ------------------------------------------------------------------ main */

function main() {
  // --scan-public：只掃描公開檔案，唔會發佈
  if (flag('scan-public')) {
    const hits = scanPublicFiles()
    if (!hits.length) {
      console.log('✅ 公開資訊掃描通過：未發現不應公開的個人資料或內部資訊')
      return
    }
    console.error('❌ 公開資訊掃描發現問題，請先清理：')
    for (const h of hits) {
      console.error(`  • ${h.file}`)
      for (const f of h.found) console.error(`      - ${f.label}：${f.sample}`)
    }
    process.exit(1)
  }

  const src = pickSourceFile()
  log(`來源檔：${src}`)
  const raw = fs.readFileSync(src, 'utf8')
  const fileDate = path.basename(src).slice(0, 10)
  const ovDate = DATE_OPT || fileDate
  const { text: response, applied: ovApplied } = applyOverrides(extractResponse(raw), ovDate)

  // 上游任務失敗（例如 LLM 被內容審查阻擋／API 出錯）→ 輸出檔只會有錯誤報告，唔可以當摘要發佈
  if (
    /^##\s*Error\s*$/m.test(response) ||
    /Traceback \(most recent call last\)/.test(response) ||
    /Content Exists Risk/.test(response)
  ) {
    const errLine = (response.match(/^(?:RuntimeError|Exception|Error):.*$/m) || [''])[0].trim()
    die(`上游摘要任務失敗（輸出係錯誤報告，未產生摘要內容）${errLine ? '：' + errLine : ''}`)
  }

  const parsed = parseDigest(response)

  const dateFromFile = fileDate
  const date = ovDate
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) die(`日期格式不正確：${date}`)
  if (ovApplied) log(`已套用 ${ovApplied} 條逐日文字修正（scripts/overrides.json）`)

  // 私隱／內部資訊守門：命中即中止，除非明確加 --allow-persona
  const privacyHits = scanText(response)
  if (privacyHits.length && !flag('allow-persona')) {
    die(
      '內容含禁止出現於公開網站的字句，已中止發佈（可用 --allow-persona 強制，但請先人手檢查）：\n' +
        privacyHits.map((h) => `  • ${h.label}：${h.sample}`).join('\n'),
    )
  }

  const realSections = parsed.sections.filter((s) => s.lines.join('').trim().length > 0)
  if (realSections.length < 3) {
    die(
      `解析出的段落太少（${realSections.length} 個），疑似格式不合 → 不發佈。\n` +
        `偵測到：${parsed.sections.map((s) => s.title).join('、') || '（無）'}`,
    )
  }
  if (!parsed.title) log('⚠️ 找不到標題行，將用預設標題')
  log(`日期：${date}（${weekdayZh(date)}）｜段落：${realSections.map((s) => s.title).join('、')}`)
  if (parsed.indexMeta && Object.keys(parsed.indexMeta).length) {
    log(`網站索引：${JSON.stringify(parsed.indexMeta)}`)
  }

  const digestPage = buildDigestPage(date, { ...parsed, sections: realSections })
  const homePage = buildHomePage(date, { ...parsed, sections: realSections })

  if (flag('notify')) {
    // --notify：只輸出 Discord 精簡通知（唔寫任何檔）
    process.stdout.write(buildNotifyMessage(date, parsed) + '\n')
    return
  }

  const changed = []
  if (writeIfChanged(path.join('docs', 'digests', `${date}.md`), digestPage, DRY)) {
    changed.push(path.join('docs', 'digests', `${date}.md`))
  }
  if (writeIfChanged(path.join('docs', 'index.md'), homePage, DRY)) changed.push('docs/index.md')

  // 存檔與 feed 依賴實體檔案：DRY 模式下先寫入 digest 檔才可正確產生
  if (!DRY) {
    if (writeIfChanged(path.join('docs', 'digests', 'index.md'), buildArchivePage(), false)) {
      changed.push('docs/digests/index.md')
    }
    const feeds = buildFeeds()
    if (writeIfChanged(path.join('docs', 'public', 'feed.xml'), feeds.rss, false)) {
      changed.push('docs/public/feed.xml')
    }
    if (writeIfChanged(path.join('docs', 'public', 'feed.json'), feeds.json, false)) {
      changed.push('docs/public/feed.json')
    }
  }

  log(DRY ? '\n（dry-run：未寫入任何檔案）' : `\n完成，共更新 ${changed.length} 個檔案`)
  if (WANT_COMMIT && !DRY) gitCommit(changed, date, WANT_PUSH)
}

main()
