---
title: "今日摘要"
date: 2026-10-14
---

# 每日科技與資安摘要 — 2026-10-14（星期三）

<p class="ns-lead">今日重點 · 永久連結 <a href="/digests/2026-10-14">/digests/2026-10-14</a> · <a href="/digests/">全部存檔</a></p>

<div class="ns-summary">
<p><strong>📌 今日總結</strong>：Google 向付費用戶全面開放前線模型 Gemini 4 Argon；CISA 把 Windows 指令注入及 Ivanti 遠端存取漏洞列入已知利用目錄；微軟十月修補 1,417 項漏洞，其中一項已被利用。</p>
</div>

::: section tldr 今日速覽
## 今日速覽

- Gemini 4 Argon 對 AI Pro／Ultra 及付費 API 全面開放。
- CISA 新增兩項 KEV：Windows 與 Ivanti Connect Secure。
- 微軟 Patch Tuesday 修 1,417 項，一項已遭利用。
:::

::: section products 產品與發布會
## 產品與發布會

- **Google 全面開放 Gemini 4 Argon**：10月13日起，開發者與企業可經 AI Studio／Gemini API 使用，Google AI Ultra 可用於 Antigravity，Ultra 與 Pro 可用於 Gemini 應用及 Search 的 AI Mode。官方稱 DeepSWE v1.1 達 77.9%、Vals Index 68.9% 暫列第一；導入價每百萬 token 輸入 2 美元、輸出 10 美元，至 2026-11-30，其後為 4／20 美元，快取輸入九五折。內部稱 Antigravity 令代理程式碼提交增逾 35%、回滾約減三分一。為何重要：前線模型進入付費大眾層。來源：[來源：blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/)（官方；查證：已抽原文）
- **Anthropic 稱蒸餾攻擊收穫降約 90% 至 99%**：10月12日研究文指，雙階段分類器令平台內被取走的推理 token 降至先前的十分一至百分一，並已封禁數以萬計相關帳戶；誤報率稱低於 0.1%。Fable 5.1／Opus 5.5 的 preserved thinking 禁止 2026-08-31 起新 API 帳戶改寫先前脈絡。為何重要：推理痕跡成模型智財主戰場。來源：[來源：anthropic.com](https://www.anthropic.com/research/distillation-defenses)（官方；查證：已抽原文）
- **SAP 十月 Patch Day**：10月13日發布 16 則新保安備註及 4 則 GitHub 公告。最嚴重為 CVE-2026-89111，SAP Cloud SDK for Python 低於 0.45.2 的 OAuth2 SSRF，CVSS 10.0。為何重要：雲端開發套件可成入侵跳板。來源：[來源：support.sap.com](https://support.sap.com/en/my-support/knowledge-base/security-notes-news/october-2026.html)（官方；查證：已抽原文）
:::

::: section ai AI 模型與開源趨勢
## AI 模型與開源趨勢

- **openbmb/MiniCPM-V-4.7-35B-A3B**：35.21B MoE（啟動約 3B），Apache-2.0；近月下載 630、like 453。官方稱 iPhone 17 Pro Max 約 3GB 記憶體可達每秒 13+ token，並支援 iOS／Android／HarmonyOS。為何重要：開源 MoE 視覺模型開始能在手機流暢跑。來源：[來源：huggingface.co](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B)（官方；查證：已抽原文）
- **Qwen/Qwen-Image-2.1-Turbo**：7B 文生圖／修圖加速版，預設 8 步去噪；近月下載 9,665；授權為 Qwen Research License。為何重要：開源圖像生成轉向更短步數。來源：[來源：huggingface.co](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)（官方；查證：已抽原文）
- **google/embeddinggemma-2 熱度更新**：Hub 現列近月下載 124,930、like 2,090，總參數約 7.40 億，Apache-2.0。為何重要：昨日未列之下載／like 現已可核。來源：[來源：huggingface.co](https://huggingface.co/google/embeddinggemma-2)（官方；查證：已抽原文）
:::

::: section github GitHub 值得關注
## GitHub 值得關注

- **paperclipai/paperclip**（MIT，100,584 星、16,934 fork）：以任務單、組織圖、預算與審批協調多個編碼代理。用途：把分散的代理工作收成可審計流程。為何值得留意：代理編排工具星數已破十萬。來源：[來源：github.com](https://github.com/paperclipai/paperclip)（官方；查證：已抽原文）
- **Armur-Ai/Pentest-Swarm-AI**（AGPL-3.0）：以多個代理並行偵察、分類、驗證與報告，自稱須獲授權測試。用途：自建自動化滲透測試編排。為何值得留意：開源攻防代理熱度上升。來源：[來源：github.com](https://github.com/Armur-Ai/Pentest-Swarm-AI)（官方；查證：已抽原文）
- **microsoft/litebox**（MIT）：縮減對宿主介面的函式庫作業系統，用於沙箱。用途：收窄應用攻擊面。為何值得留意：系統層隔離重新成為開源焦點。來源：[來源：github.com](https://github.com/microsoft/litebox)（官方；查證：已抽原文）
:::

::: section global 全球重點新聞
## 全球重點新聞

- **CISA 新增兩項 KEV**：10月13日列入 CVE-2026-96951（Microsoft Windows 指令注入）及 CVE-2026-104935（Ivanti Connect Secure 以欺騙繞過認證）。CVE-2026-96951｜CVSS：已抽原文未列｜Windows Shell｜已被利用(KEV)？是｜修補：2026年10月微軟月度更新｜HKCERT 級別：未列。CVE-2026-104935｜CVSS：已抽原文未列｜Ivanti Connect Secure｜已被利用(KEV)？是｜修補：CISA 公告未列版本｜HKCERT 級別：未列。為何重要：VPN 與桌面捷徑仍是現行利用鏈。來源：[來源：cisa.gov](https://www.cisa.gov/news-events/alerts/2026/10/13/cisa-adds-two-known-exploited-vulnerabilities-catalog)（官方；查證：已抽原文）
- **微軟十月 Patch Tuesday**：SANS 統計修補 1,417 項，76 項評為嚴重，7 項雲端修復毋須客戶操作；確認遭利用的是 CVE-2026-96951，可繞過 Mark of the Web，受害端仍須開啟檔案。另有 10 項 Windows DHCP 遠端執行（5 項嚴重），以及公開但未見利用的 .NET CVE-2026-108398。為何重要：單月修補量已達四位數。來源：[來源：isc.sans.edu](https://isc.sans.edu/diary/33422)（媒體；查證：已抽原文）
- **SAP Cloud SDK CVSS 10.0**：CVE-2026-89111｜CVSS 10.0｜Python SDK < 0.45.2｜已被利用(KEV)？否｜修補：0.45.2 起｜HKCERT 級別：未列。同期 CVE-2026-89110 評 9.9，影響 NetWeaver Visual Composer VC70RUNTIME 7.50。為何重要：企業核心套件出現滿分 SSRF。來源：[來源：support.sap.com](https://support.sap.com/en/my-support/knowledge-base/security-notes-news/october-2026.html)（官方；查證：已抽原文）
- **Docker Hub 個人存取權杖被轉名**：CVE-2026-105445，帳戶轉組織時 PAT 秘密不變即改掛新擁有者，可在權限範圍內推送或刪除映像。漏洞自 2024-08-26 起至 2026-09-30 修復；Docker 審查約 304,000 次推送，稱未發現利用；受影響權杖於 10月8日停用。為何重要：映像倉庫可被冒名投毒。來源：[來源：docker.com](https://www.docker.com/blog/docker-hub-security-advisory-cve-2026-105445/)（官方；查證：已抽原文）
- **Ahold Delhaize 網絡事故**：10月13日更新指調查中未見顧客或員工資料被取走，部分系統開始受控重啟，歐美門市維持營業，影響因品牌而異。為何重要：大型零售主動斷網仍會打亂供應。來源：[來源：newsroom.aholddelhaize.com](https://newsroom.aholddelhaize.com/update-on-ahold-delhaizes-cybersecurity-incident/)（官方；查證：已抽原文）
:::

::: section hk 香港本地
## 香港本地

- **HKCERT：三星產品多個漏洞（中度風險）**：10月13日。CVE：公告未列｜CVSS：未列｜運行 Android 14／15／16／17 的三星產品｜已被利用(KEV)？未列｜修補：見三星保安更新｜HKCERT 級別：中度風險。遠端攻擊者可觸發權限提升、資料外洩、遠端執行及阻斷服務。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/samsung-products-multiple-vulnerabilities_20261013)（官方；查證：已抽原文）
- **HKCERT：GitLab 多個漏洞（中度風險）**：10月13日。受影響為 CE／EE 19.4.2、19.3.5、19.2.8 以前版本，公告點名包括 CVE-2026-97229 等；修補見 GitLab 19.4.2 系列。HKCERT 級別：中度風險。為何重要：滿分 RCE 在本地被標為中度，自管實例仍應先升級。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/gitlab-multiple-vulnerabilities_20261013)（官方；查證：已抽原文）
- **資訊安全網事故統計**：過去 12 個月（2025年10月至 2026年9月）HKCERT 接獲釣魚 10,362、殭屍網路 2,593、惡意軟件 1,310、網站塗改 141、分散式阻斷服務 1。為何重要：本地事故仍以釣魚為大宗。來源：[來源：infosec.gov.hk](https://www.infosec.gov.hk/tc)（官方；查證：已抽原文）
:::

::: section events 活動與展會
## 活動與展會

- **VXCON 2026**：日期 2026-11-28｜地點 香港、馬哥孛羅香港酒店商場｜形式 實體網安研討會（09:00–17:30）｜報名狀態 Eventbrite 售票，早鳥由港幣 1,500 起，不設退款。來源：[來源：eventbrite.hk](https://www.eventbrite.hk/e/vxcon-2026-tickets-2003240539379)（官方；查證：已抽原文）
- **Cyberport Venture & Capital Forum 2026**：日期 2026-11-04 至 2026-11-05｜地點 香港數碼港三期 Core E 3 樓 Function Room 1-3｜形式 實體為主、輔以線上｜報名狀態 登記已開放。來源：[來源：calendar.hkust.edu.hk](https://calendar.hkust.edu.hk/node/48678)（官方；查證：已抽原文）
- **CEATEC 2026**：日期 2026-10-13 至 2026-10-16｜地點 日本千葉、幕張メッセ｜形式 展覽及會議，10:00–17:00｜報名狀態 免費、須事前登記；官方稱 821 社／團體出展。來源：[來源：ceatec.com](https://www.ceatec.com/ja/)（官方；查證：已抽原文）
:::

::: section misc 其他要點
## 其他要點

- **npm Trusted Publishing 驗證缺陷**：Bloom Security 稱逾 1,500 個套件、合計逾 1,000 萬次下載曾可被搶用已棄 GitHub 倉庫名稱發布；GitHub 稱 10月2日已讓未驗證設定 48 小時後失效，研究方稱未觀察到野外利用。為何重要：OIDC 發布仍可能綁錯身分。來源：[來源：helpnetsecurity.com](https://www.helpnetsecurity.com/2026/10/13/slugfest-npm-trusted-publishing-flaw/)（媒體；查證：已抽原文）
- **日本第一興商客戶資料或經承辦商外洩**：日本哥倫比亞 10月8日披露承辦商電腦中惡意程式，估計約 872.4 萬筆紀錄（約 863.1 萬客戶、9.3 萬員工）可能受影響，盜用仍未確認。為何重要：亞洲娛樂供應鏈再爆大型個資風險。來源：[來源：cybersecuritynews.com](https://cybersecuritynews.com/nippon-columbia-malware-infection-exposed/)（媒體；查證：已抽原文）
:::

::: section followup 昨日跟進
## 昨日跟進

- **GovWare／SICW**：展覽及會議 2026-10-13 至 2026-10-15 在新加坡濱海灣金沙博覽中心舉行，今日為會期第二日。來源：[來源：sicw.gov.sg](https://www.sicw.gov.sg/agenda/govware-conference-exhibition-2026/)（官方；查證：已抽原文）
- **香港網安奪旗賽 2026**：免費報名仍至 2026-10-20；初賽 2026-11-06 至 2026-11-07。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hkcert-capture-the-flag-challenge-2026)（官方；狀態無變，限期尚餘約一週）
- **CISA CVE-2026-86950**：美國聯邦限期已於 2026-10-13 屆滿。來源：[來源：cisa.gov](https://www.cisa.gov/news-events/alerts/2026/10/13/cisa-adds-two-known-exploited-vulnerabilities-catalog)（官方；查證：已抽原文）
:::

<div class="ns-footer">
<p>資料截至 2026-10-14 05:30（HKT）；本期覆蓋 2026-10-13 至 2026-10-14，並補上 72 小時內未報事項。 ⚠️ 今日部分來源未能讀取：Ivanti 官方公告全文、MSRC 漏洞頁細節、GitHub Trending 官方列表頁。</p>
</div>
