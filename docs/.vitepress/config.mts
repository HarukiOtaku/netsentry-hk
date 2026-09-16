import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE = process.env.NETSENTRY_SITE || 'https://netsentry-hk.vercel.app'
const root = path.dirname(fileURLToPath(import.meta.url))
const DIGESTS_DIR = path.resolve(root, '../digests')

/** 由 docs/digests/*.md 產生側邊欄（最近 14 日） */
function digestSidebar() {
  try {
    const files = fs
      .readdirSync(DIGESTS_DIR)
      .filter((f) => /^\d{4}-\d{2}-\d{2}\.md$/.test(f))
      .sort()
      .reverse()
      .slice(0, 14)
    return files.map((f) => {
      const day = f.replace('.md', '')
      const raw = fs.readFileSync(path.join(DIGESTS_DIR, f), 'utf8')
      const m = raw.match(/^title:\s*(.+)$/m)
      const title = m ? m[1].trim().replace(/^["']|["']$/g, '') : `每日摘要 ${day}`
      return { text: title.replace(/^每日科技與資安摘要\s*—\s*/, ''), link: `/digests/${day}` }
    })
  } catch {
    return []
  }
}

export default defineConfig({
  lang: 'zh-Hant-HK',
  title: 'NetSentry HK',
  description: '每日科技、資安與 AI 摘要：5 分鐘掌握重點，每條資訊都導向原始來源。',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: SITE },
  appearance: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'NetSentry HK 每日摘要（RSS）', href: `${SITE}/feed.xml` }],
    ['link', { rel: 'alternate', type: 'application/feed+json', title: 'NetSentry HK 每日摘要（JSON Feed）', href: `${SITE}/feed.json` }],
    ['meta', { name: 'theme-color', content: '#0b2a3a' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { property: 'og:site_name', content: 'NetSentry HK' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_HK' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'referrer', content: 'strict-origin-when-cross-origin' }],
  ],
  markdown: {
    config(md) {
      // ::: section <key> <標題>  →  <section class="ns-section" data-key data-title>
      md.use(container, 'section', {
        render(tokens, idx) {
          const info = (tokens[idx].info || '').trim()
          if (tokens[idx].nesting === 1) {
            const rest = info.replace(/^section\s*/, '').trim()
            const sp = rest.indexOf(' ')
            const key = sp === -1 ? rest : rest.slice(0, sp)
            const title = sp === -1 ? rest : rest.slice(sp + 1)
            const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
            return `<section class="ns-section" data-key="${esc(key)}" data-title="${esc(title)}">\n`
          }
          return '</section>\n'
        },
      })
    },
  },
  transformPageData(pageData) {
    // 每頁的 description / OG / canonical（分享時才有預覽卡）
    const rel = pageData.relativePath || 'index.md'
    const clean = rel.replace(/index\.md$/, '').replace(/\.md$/, '')
    const url = `${SITE}/${clean}`.replace(/\/{2,}/g, '/').replace(':/', '://')
    const pageTitle = pageData.title || '每日科技與資安摘要'
    const fm = pageData.frontmatter || {}
    const rawDate = fm.date
    const dateStr =
      rawDate instanceof Date
        ? rawDate.toISOString().slice(0, 10)
        : typeof rawDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(rawDate)
          ? rawDate
          : null
    const desc = dateStr
      ? `每日科技與資安摘要（${dateStr}）：5 分鐘掌握今日科技、資安、AI 與香港本地重點，每條資訊都附原始來源連結。`
      : '每日科技、資安與 AI 摘要：5 分鐘掌握重點，每條資訊都導向原始來源。'
    const head = fm.head ? fm.head : []
    fm.head = head
    head.push(
      ['meta', { name: 'description', content: desc }],
      ['meta', { property: 'og:title', content: `${pageTitle} | NetSentry HK` }],
      ['meta', { property: 'og:description', content: desc }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
      ['meta', { name: 'twitter:title', content: `${pageTitle} | NetSentry HK` }],
      ['meta', { name: 'twitter:description', content: desc }],
      ['link', { rel: 'canonical', href: url }],
    )
  },
  themeConfig: {
    siteTitle: 'NetSentry HK',
    outline: { level: [2, 2], label: '本頁內容' },
    nav: [
      { text: '今日摘要', link: '/' },
      { text: '存檔', link: '/digests/' },
      { text: '關於本站', link: '/about' },
    ],
    sidebar: [{ text: '最近 14 日', items: digestSidebar() }],
    search: { provider: 'local', options: { translations: { button: { buttonText: '搜尋摘要', buttonAriaLabel: '搜尋摘要' } } } },
    docFooter: { prev: '上一日', next: '下一日' },
    darkModeSwitchLabel: '深色／淺色模式',
    lightModeSwitchTitle: '切換到深色模式',
    darkModeSwitchTitle: '切換到淺色模式',
    returnToTopLabel: '回到頂部',
    sidebarMenuLabel: '選單',
    lastUpdated: { text: '最後更新', formatOptions: { dateStyle: 'short', timeStyle: 'short', forceLocale: true } },
    footer: {
      message: '由 AI 每日彙整，內容僅供參考；所有資訊均附原始來源連結，請以原文為準。',
      copyright: 'NetSentry HK',
    },
  },
})
