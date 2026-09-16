#!/usr/bin/env bash
# 發佈後驗證：逐項檢查線上網站（預設 https://netsentry-hk.vercel.app）
# 用法：bash scripts/verify-site.sh [base-url]
set -uo pipefail

BASE="${1:-https://netsentry-hk.vercel.app}"
TODAY="${2:-$(TZ=Asia/Hong_Kong date +%F)}"
FAIL=0

check() { # url expected_label
  local url="$1" label="$2"
  local code
  code=$(curl -s -o /dev/null -w '%{http_code}' -m 20 "$url")
  if [ "$code" = "200" ]; then
    printf '  ✅ %-12s %s\n' "$code" "$label"
  else
    printf '  ❌ %-12s %s  (%s)\n' "$code" "$label" "$url"
    FAIL=1
  fi
}

echo "驗證目標：$BASE（日期 $TODAY）"
check "$BASE/" "首頁"
check "$BASE/digests/" "存檔頁"
check "$BASE/digests/$TODAY" "今日摘要"
check "$BASE/about" "關於"
check "$BASE/robots.txt" "robots.txt"
check "$BASE/sitemap.xml" "sitemap.xml"
check "$BASE/feed.xml" "RSS"
check "$BASE/feed.json" "JSON Feed"

echo "--- 安全 header 檢查（首頁）---"
hdr=$(curl -sI -m 20 "$BASE/")
for h in "x-content-type-options" "referrer-policy" "x-frame-options"; do
  if grep -qi "^$h:" <<<"$hdr"; then
    printf '  ✅ %s\n' "$h"
  else
    printf '  ❌ 缺少 %s\n' "$h"
    FAIL=1
  fi
done

echo "--- 敏感路徑不應存在 ---"
for p in "/.git/config" "/package.json" "/scripts/publish-digest.mjs"; do
  code=$(curl -s -o /dev/null -w '%{http_code}' -m 20 "$BASE$p")
  if [ "$code" = "404" ] || [ "$code" = "403" ]; then
    printf '  ✅ %-4s %s\n' "$code" "$p"
  else
    printf '  ⚠️  %-4s %s（應為 404）\n' "$code" "$p"
    FAIL=1
  fi
done

if [ "$FAIL" = "0" ]; then
  echo "🎉 全部通過"
else
  echo "⚠️ 有項目未通過（詳見上面）"
fi
exit "$FAIL"
