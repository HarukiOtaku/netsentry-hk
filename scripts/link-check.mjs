#!/usr/bin/env node
/**
 * NetSentry HK — 網站維護檢查
 *
 * 1. 檢查最新摘要內所有外部來源連結是否可以存取（HEAD，失敗退回 GET）
 * 2. 檢查最近幾日的舊頁面永久連結是否仍然有效
 *
 * 用法：
 *   node scripts/link-check.mjs [--site=https://netsentry-hk.vercel.app] [--max=25] [--timeout=10]
 *
 * 最後一行輸出為 Discord 用的摘要（例如：🛠️ 維護：來源連結 22/24 可存取｜舊頁 3/3 正常）
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DIGEST_DIR = path.join(ROOT, 'docs', 'digests')
const arg = (name, def) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`))
  return hit ? hit.slice(name.length + 3) : def
}
const SITE = arg('site', 'https://netsentry-hk.vercel.app')
const MAX_LINKS = Number(arg('max', 25))
const TIMEOUT = Number(arg('timeout', 10))

function digestFiles() {
  return fs
    .readdirSync(DIGEST_DIR)
    .filter((f) => /^\d{4}-\d{2}-\d{2}\.md$/.test(f))
    .sort()
    .reverse()
}

async function checkUrl(url, method = 'HEAD') {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), TIMEOUT * 1000)
  try {
    const res = await fetch(url, { method, redirect: 'follow', signal: ctrl.signal, headers: { 'user-agent': 'NetSentryHK-linkcheck/1.0' } })
    return res.status
  } catch {
    return 0
  } finally {
    clearTimeout(t)
  }
}

async function main() {
  const files = digestFiles()
  if (!files.length) {
    console.log('🛠️ 維護：未有摘要檔，略過連結檢查')
    return
  }

  // --- 1. 最新摘要的來源連結 ---
  const latest = fs.readFileSync(path.join(DIGEST_DIR, files[0]), 'utf8')
  // 只接受合法 URL 字元（RFC 3986），避免把中文標點／後綴（例如「（類型：官方）」）當成 URL 一部分
  const URL_RE = /https?:\/\/[A-Za-z0-9\-._~:/?#[\]@!$&*+,;=%]+/g
  const urls = [...new Set((latest.match(URL_RE) || []).map((u) => u.replace(/[.,;:]+$/, '')))].slice(0, MAX_LINKS)
  let ok = 0
  const broken = []
  for (const u of urls) {
    let status = await checkUrl(u, 'HEAD')
    if (status === 0 || status >= 400) status = await checkUrl(u, 'GET')
    if (status > 0 && status < 400) ok += 1
    else broken.push(`${status || 'timeout'} ${u}`)
  }

  // --- 2. 舊頁永久連結 ---
  const older = files.slice(1, 4)
  let oldOk = 0
  for (const f of older) {
    const date = f.replace('.md', '')
    const status = await checkUrl(`${SITE}/digests/${date}`, 'GET')
    if (status === 200) oldOk += 1
    else broken.push(`${status} ${SITE}/digests/${date}`)
  }

  if (broken.length) {
    console.error('以下連結有問題：')
    for (const b of broken) console.error(`  - ${b}`)
  }

  const line = `🛠️ 維護：來源連結 ${ok}/${urls.length} 可存取｜舊頁 ${oldOk}/${older.length} 正常`
  console.log(line)
}

main().catch((e) => {
  console.log(`🛠️ 維護檢查失敗：${e.message}`)
})
