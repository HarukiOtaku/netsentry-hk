---
title: "今日摘要"
date: 2026-11-20
---

# 每日科技與資安摘要 — 2026-11-20（星期五）

<p class="ns-lead">今日重點 · 永久連結 <a href="/digests/2026-11-20">/digests/2026-11-20</a> · <a href="/digests/">全部存檔</a></p>

<div class="ns-summary">
<p><strong>📌 今日總結</strong>：Synology NAS 漏洞被用於部署勒索軟件，HKCERT 列極高風險；Apache Axis 與 Roller 同遭野外利用，歐盟委員會系統被攻陷逾十日；Google 推 Gemini 4 Neon 與 Genie 4。</p>
</div>

::: section tldr 今日速覽
## 今日速覽

- Synology DSM 漏洞野外利用，HKCERT 評極高風險。
- 歐盟委員會系統被攻陷逾十日，疑涉 ARTEX 框架。
- Gemini 4 Neon 上線，輸入每百萬 token 3 美元。
:::

::: section products 產品與發布會
## 產品與發布會

- **Gemini 4 Neon 以中階價提供旗艦推理**：輸入每百萬 token 3 美元（快取 0.15、輸出 15），100 萬 token 上下文；Intelligence Index 61 分、Vals Index 70.9%、開發代理指數第 1（58.6）。為何重要：旗艦能力價格再降一級。來源：[來源：blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon) （類型：官方；查證：已抽原文）
- **Genie 4 向 Google AI Ultra 用戶開放**：可在會話中以文字即時改天氣、加角色，首次配實時原生音效，並設社群畫廊；AI Pro 用戶可排候補。為何重要：世界模型由演示變成可編輯產品。來源：[來源：blog.google](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/) （類型：官方；查證：已抽原文）
- **OpenAI 用 Codex 代理自動修性能退化**：Performance Factory 逾三個月追蹤 1,700 多次調查、定位 600 多個根因，每日約 17 次。為何重要：代理開始接手自家基建運維。來源：[來源：openai.com](https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast/) （類型：官方；查證：已抽原文）
:::

::: section ai AI 模型與開源趨勢
## AI 模型與開源趨勢

- **higurashi-ai/Haru-4B**：5B 參數、音頻對音頻，下載 5.31k、讚 1.41k，居 trending 首位。為何重要：低延遲語音對話門檻下降。來源：[來源：huggingface.co](https://huggingface.co/models) （類型：官方；查證：已抽原文）
- **thinkingmachines/Inkling-2-Small**：594B 參數、圖文輸入，下載 30.1k、讚 552。為何重要：大型開源權重持續有新血。
- **internlm/Sage-S2.1-Flash**：321B 參數，下載 678、讚 149。為何重要：國內實驗室續推大模型開放權重。
- **nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB**：8B 參數，下載 163k、讚 569。為何重要：可放進 4GB 記憶體，利本地部署。
（以上四者在列表頁未標示授權，需查模型卡。）
:::

::: section github GitHub 值得關注
## GitHub 值得關注

- **NVIDIA/SkillEvaluator**（Python，3.9k 星，+312）：為 AI 代理技能設品質閘、安全掃描、環境相容性與語意重疊檢查，附可重用 CI 範本。為何值得留意：技能供應鏈開始有自動審查。來源：[來源：githubtrending.today](https://githubtrending.today/archive/2026-11-19/) （類型：社群；查證：已抽原文）
- **affaan-m/ECC**（JavaScript，307k 星，+1,108）：代理執行環境優化系統，含技能、本能、記憶與安全機制，支援 Claude Code、Codex、Cursor。為何值得留意：記憶與權限被當成可調參數。
- **google-research/paper-orchestra**（Python，4.6k 星，+1,524）：多代理自動撰寫 AI 研究論文，為當日最大星數增幅。為何值得留意：論文產出整段自動化。
:::

::: section global 全球重點新聞
## 全球重點新聞

- **Apache Axis 與 Roller 同遭利用**：CVE-2026-90436（CVSS 9.8，Axis 1.x 不安全反射）經 Confluence Data Center 觸發，Rapid7 於 11 月 13 日偵測到，四小時內取得服務帳戶憑證；Confluence 修至 9.2.28，Axis 1.x 已終止支援。CVE-2026-129448（CVSS 9.8）影響 Roller 4.0.0 至 6.1.4，Apache 11 月 17 日確認正被利用，關閉 XML-RPC 亦無效。KEV：前者已列入，11 月 21 日到期。為何重要：終止支援元件仍是最佳跳板。來源：[來源：securityweek.com](https://www.securityweek.com/critical-apache-roller-axis-vulnerabilities-exploited-in-attacks/) （類型：媒體；查證：已抽原文）
- **Optimizely 成供應鏈投毒跳板**：Report URI 檢查 1,611 個腳本，188 個被植入惡意碼，涉 178 個機構，包括 BBC、CNN、Zoom、HSBC；可換走加密錢包地址、竊取支付卡資料與截圖，首宗注入為 11 月 16 日 04:21 UTC，約 7,000 美元加密貨幣已到手；iOS 被投遞 Coruna 與 DarkSword 工具包，未證實成功利用。為何重要：CDN 第三方腳本等同自家程式碼。來源：[來源：securityweek.com](https://www.securityweek.com/optimizely-vulnerability-exploited-to-serve-malware-on-major-websites/) （類型：媒體；查證：已抽原文）
- **Cisco Expressway 漏洞 PoC 公開即被用**：CVE-2026-76466（CVSS 9.8）可未認證以 root 執行指令，僅涉叢集化 Core／Edge；X15.5.20 修補，官方無替代緩解，F6 建議封鎖 TCP 4371–4372（信任節點除外）。為何重要：PoC 到實戰的時間差近乎零。來源：[來源：securityweek.com](https://www.securityweek.com/hackers-exploit-cisco-expressway-vulnerability-soon-after-poc-release/) （類型：媒體；查證：已抽原文）
- **歐盟委員會系統被攻陷逾十日**：薪資、請假、醫療報銷系統受阻，Sysper 11 月 18 日再斷，JSIS 11 月 19 日仍下線；CERT-EU 指 ARTEX 框架可能是攻擊工具，屬懷疑未經確認，員工資料有否外洩未明。為何重要：AI 代理框架疑涉超大型機構入侵。來源：[來源：securityaffairs.com](https://securityaffairs.com/203483/hacking/european-commission-cyberattack-artex-ai-tool-suspected-in-prolonged-disruption.html) （類型：媒體；查證：已抽原文）
:::

::: section hk 香港本地
## 香港本地

- **Synology DSM 多個漏洞（HKCERT 極高風險）**：CVE-2024-10441｜CVSS 9.8｜受影響：DSM 6.2.4-25556-8、7.1.1-42962-7、7.2-64570-4、7.2.1-69057-6、7.2.2-72806-1 之前版本｜KEV：是（11 月 18 日加入）｜修補：更新至上述版本，見 Synology SA_24_20｜HKCERT 級別：極高風險。系統外掛守護程序輸出編碼不當，可未認證執行任意程式碼。為何重要：家用及中小企 NAS 常直連互聯網。來源：[來源：hkcert.org](https://www.hkcert.org/security-bulletin/synology-diskstation-manager-remote-code-execution-vulnerability_20261119) 、[來源：securityaffairs.com](https://securityaffairs.com/203504/hacking/u-s-cisa-adds-apache-axis-vanderbilt-redcapberriai-litellm-and-synology-dsm-flaws-to-its-known-exploited-vulnerabilities-catalog.html) （類型：官方＋媒體；查證：已抽原文）
- **Nginx 多個漏洞（HKCERT 中度風險）**：十個 CVE（CVE-2026-113425 至 CVE-2026-125283）｜受影響：nginx-1.30.7 stable、1.31.9 mainline 之前版本｜KEV：否｜修補：更新至上述版本｜HKCERT 級別：中度風險。CVE-2026-123007 已有公開 PoC，HTTP/2 設定可致工作程序崩潰、記憶體損壞甚至遠端執行。為何重要：HTTP/2 多為預設開啟。來源：[來源：hkcert.org](https://www.hkcert.org/security-bulletin/nginx-multiple-vulnerabilities_20261119) （類型：官方；查證：已抽原文）
- **Drupal 與 Firefox 同日列中度風險**：Drupal Core 10.6.22、11.3.22、11.4.13 之前版本受影響（CVE-2026-132165、CVE-2026-132166），可致權限提升與遠端執行，11.2.x 及 10.5.x 以下已終止支援；Firefox 160.0.1 之前版本受影響（CVE-2026-130020、CVE-2026-130021）。為何重要：CMS 與瀏覽器需同步更新。來源：[來源：hkcert.org](https://www.hkcert.org/security-bulletin/drupal-multiple-vulnerabilities_20261119) 、[來源：hkcert.org](https://www.hkcert.org/security-bulletin/mozilla-firefox-multiple-vulnerabilities_20261119) （類型：官方；查證：已抽原文）
:::

::: section events 活動與展會
## 活動與展會

- **HKCERT 中小企免費網絡安全網上研討會（第四場）**：2026-11-25 15:30–16:30｜網上，廣東話｜免費，需預先登記，截止 2026-11-23｜主題為雲端依賴、智能裝置與營運韌性。為何重要：免費且貼近中小企實務。來源：[來源：hkcert.org](https://www.hkcert.org/event/hkcert-free-cybersecurity-webinar-series-for-smes-2026) （類型：官方；查證：已抽原文）
- **釣魚電郵及短訊演練2026**：2026-10-20 至 2026-12-07｜香港，線上參與｜現正接受報名｜由網罪科、數字辦與 HKIRC 合辦，PCPD 為策略夥伴。為何重要：以演練量度員工真實反應。來源：[來源：cybersecurity.hk](https://cybersecurity.hk/tc/whatsnew.php) （類型：官方；查證：已抽原文）
- **DiCyfor & AI Security Summit（新加坡）**：2026-12-03｜新加坡 voco Orchard Singapore｜實體｜報名開放（官網設登記頁）。為何重要：區域 AI 安全實務交流場。來源：[來源：dicyfor.com](https://www.dicyfor.com/singapore2026) （類型：官方；查證：已抽原文）
:::

::: section misc 其他要點
## 其他要點

- **Anthropic 完成史上最大 IPO**：每股 83 美元發行 9.8 億股，集資 813 億美元，11 月 19 日以代碼 ANT 開始交易，首口 111.50 美元（升 34%），估值約 2 兆美元；招股文件披露 2026 年首九個月淨虧損 1,040 億美元。為何重要：AI 實驗室估值改由公開市場定價。來源：[來源：aljazeera.com](https://aljazeera.com/economy/2026/11/19/anthropic-starts-trading-in-the-us-after-blockbuster-ipo) （類型：媒體；查證：已抽原文）
- **Gemini 4 Neon 優先供網絡防禦者**：合資格 DeepMind Fairwind 成員未來數日陸續取得權限，經雲端客戶團隊申請。為何重要：前沿能力按防禦用途分級發放。來源：[來源：blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon) （類型：官方；查證：已抽原文）
:::

::: section followup 昨日跟進
## 昨日跟進

- **tencent/Hy4-flash**：讚 221→269，下載 159 未變。
- **MiniMax-H3-Image**：讚 1.58k→1.6k，下載 760k。
來源：[來源：huggingface.co](https://huggingface.co/models) （類型：官方；查證：已抽原文）
:::

<div class="ns-footer">
<p>資料截至 2026-11-20 05:30（HKT）</p>
</div>
