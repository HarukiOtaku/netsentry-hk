---
title: "今日摘要"
date: 2026-11-13
---

# 每日科技與資安摘要 — 2026-11-13（星期五）

<p class="ns-lead">今日重點 · 永久連結 <a href="/digests/2026-11-13">/digests/2026-11-13</a> · <a href="/digests/">全部存檔</a></p>

<div class="ns-summary">
<p><strong>📌 今日總結</strong>：Barracuda 兩個漏洞今日到期且涉勒索利用，N-able 33 個零日僅補 7 個；DeepMind 用 AI 四週完成 Signal 機器碼驗證，台積電則認 4.6 萬筆員工資料外洩。</p>
</div>

::: section tldr 今日速覽
## 今日速覽

- Barracuda 兩漏洞今日到期，涉勒索利用。
- 台積電認 4.6 萬筆員工資料外洩。
- DeepMind 四週完成 Signal 機器碼驗證。
:::

::: section products 產品與發布會
## 產品與發布會

- **DeepMind 以 AI 完成 Signal 機器碼形式化驗證**：11月10日公布 AlphaProof Code，5 名研究員加 AI 代理，4 週產出約 650 萬行 Lean 證明，覆蓋 libsignal v0.105.4（配 spqr v1.6.0）的 PQXDH 握手與 Triple Ratchet，證明前向保密、認證及入侵後恢復；可信規格與 AArch64 語意約 26,000 行；把兩個已修復舊 bug 重新植入後，系統均證明其不安全。為何重要：驗證成本由數年降至數週。來源：[來源：deepmind.google](https://deepmind.google/blog/introducing-alphaproof-code) ；[來源：google-deepmind.github.io](https://google-deepmind.github.io/code-verification) （類型：官方；查證：已抽原文；多來源）
- **Google 推出 Gemini Decisions API**：11月11日發布，配新模型 gemini-decision-1，單次請求對同一組多模態輸入（最多 256K tokens）問最多 1,000 條是非、選擇（2 至 255 項）或評分題，150 至 250 毫秒回傳並附 0 至 1 信心分；每百萬輸入 tokens 收 0.10 美元、輸出 token 免費。為何重要：代理分支決策改為直接取概率。來源：[來源：blog.google](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) （類型：官方；查證：已抽原文）
- **百度開源 ERNIE-5.5-Flash-Base**：稀疏 MoE，280B 總參數、每 token 啟用 14B，512 個路由專家取前 10，33.5T tokens 預訓練，訓練上下文 128K、微調與推理支援 1M；以 ERNIE 5.5 Flash Base Model License v1.0 發放，近月下載 2,963。為何重要：內地旗艦級 MoE 開放預訓練權重。來源：[來源：huggingface.co](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base) （類型：官方；查證：已抽原文）
:::

::: section ai AI 模型與開源趨勢
## AI 模型與開源趨勢

- **Qwen/Qwen3.8-27B**：27B 稠密、原生視覺語言模型，原生上下文 262,144、可擴至 1,000,000；近月下載 7.23M、讚 19.6k，約 5 日前更新；授權未在已抽頁面列明。為何重要：小體積模型搶佔代理任務。來源：[來源：huggingface.co](https://huggingface.co/models) （類型：官方；查證：已抽原文）
- **moonshotai/Kimi-K3.1-Pro**：圖像—文本、2.8T 參數；近月下載 33.6k、讚 1.94k，約 7 日前更新；授權未列明。為何重要：兆級參數模型續留趨勢前列。來源：[來源：huggingface.co](https://huggingface.co/models) （類型：官方；查證：已抽原文）
- **MiniMax-H3-Image**：文本生成圖像；近月下載 143k、讚 706，約 18 小時前更新；授權未列明。為何重要：圖像模型單日熱度再升。來源：[來源：huggingface.co](https://huggingface.co/models) （類型：官方；查證：已抽原文）
:::

::: section github GitHub 值得關注
## GitHub 值得關注

- **openai/codex-security**（TypeScript，約 11,675 星）：Codex Security 的命令行工具與 TypeScript SDK，用於尋找、驗證及修復安全漏洞。為何值得留意：模型商把手動修補流程產品化。來源：[來源：github-trending.today](https://github-trending.today/) （類型：社群；查證：已抽原文）
- **meta/astryx**（TypeScript，約 24,860 星，當日約 +2,842）：開源設計系統，可自訂主題並附供 AI 代理使用的工具。為何值得留意：agent-ready 前端基建持續吸星。來源：[來源：github-trending.today](https://github-trending.today/) ；[來源：topgit.dev](https://topgit.dev/trending/daily) （類型：社群；查證：已抽原文；多來源）
- **homeassistant-ai/ha-mcp**（Python，約 7,312 星）：以 MCP 讓 Claude、ChatGPT 等助理設定及自動化 Home Assistant。為何值得留意：家居自動化成代理落地場景。來源：[來源：github-trending.today](https://github-trending.today/) （類型：社群；查證：已抽原文）
:::

::: section global 全球重點新聞
## 全球重點新聞

- **Barracuda 兩個已被利用漏洞今日到期**：CISA 11月10日列入 KEV，兩者可串連——先以備份檔還原繞過認證改寫設備全域設定，再以時區值注入系統指令並以 root 執行，KEV 標示已用於勒索活動。CVE-2026-116606、CVE-2026-111560｜CVSS：未列｜受影響：Email Security Gateway、Load Balancer、ADC、Message Archiver、WAF 及 WSG 等｜已被利用(KEV)？是，2026-11-10 列入｜修補：依 Barracuda 公告｜期限：2026-11-13｜HKCERT 級別：未見公告。為何重要：郵件閘道是入侵第一道門。來源：[來源：cisa.gov](https://www.cisa.gov/known-exploited-vulnerabilities-catalog-print) （類型：官方；查證：已抽原文）
- **台積電確認 4.6 萬筆員工資料外洩**：11月12日向美國 SEC 提交 6-K，指部分現職及離職員工資料未經授權出現於外部網站，已核實與某雲端服務商系統資料相符，但與公司系統、生產及客戶資料無關；賣方在 DarkForums、BreachForums 聲稱持有 6.9GB、4.6 萬筆紀錄，開價 3 BTC（約 22 萬美元），樣本 499 筆含 19 個欄位。為何重要：外判雲端成個資外洩新斷點。來源：[來源：cna.com.tw](https://www.cna.com.tw/news/afe/202611120132.aspx) ；[來源：streetinsider.com](https://www.streetinsider.com/SEC+Filings/Form+6-K+TAIWAN+SEMICONDUCTOR+For%3A+Nov+12/27331102.html) （類型：媒體／官方；查證：已抽原文；多來源）
- **N-able 33 個零日僅修 7 個**：Able2Shell 11月9日公開 33 個 N-central 漏洞及 PoC，N-able 同日把託管環境下線，11月10日推 2026.4 Hotfix 2（build 2026.4.1.26）只修 7 個 CVE（最高 CVSS 8.6，CVE-2026-125882 為上載路徑穿越致遠端執行），並暫停內建遙控功能；其餘 PoC 仍公開。為何重要：RMM 權限極高，修補不全即高危。來源：[來源：infosecurity-magazine.com](https://www.infosecurity-magazine.com/news/n-able-n-central-able2shell-0day) ；[來源：n-able.com](https://www.n-able.com/blog/update-on-n-central-2026-4-hf2-and-ongoing-security-response) （類型：媒體／官方；查證：已抽原文；多來源）
- **Zoom 修補 CVSS 9.6 提權漏洞**：11月12日報道，Zoom Workplace for Windows 兩個漏洞容許未登入的遠端攻擊者提權，其中 CVE-2026-108186 屬輸入驗證問題。CVE-2026-108186｜CVSS：9.6｜受影響：Zoom Workplace for Windows｜已被利用(KEV)？未見列入｜修補：依 Zoom 公告 ZSB-26023｜HKCERT 級別：未見公告。為何重要：會議軟件成本機提權入口。來源：[來源：securityaffairs.com](https://securityaffairs.com/202911/security/zoom-fixes-critical-windows-vulnerability-allowing-privilege-escalation.html) （類型：媒體；查證：已抽原文）
- **波蘭停用 ePUAP 政府平台**：11月12日報道，波蘭偵測並阻止針對 ePUAP 的攻擊後把平台及電子信箱下線，市民暫無法提交公文；數碼事務部長稱中央資訊科技中心基建未受影響，官員稱屬預防性停機、未確認資料外洩。為何重要：公共服務平台一停即波及全民生產。來源：[來源：securityaffairs.com](https://securityaffairs.com/202895/security/poland-takes-its-national-e-government-platform-offline-after-a-cyberattack.html) （類型：媒體；查證：已抽原文）
:::

::: section hk 香港本地
## 香港本地

- **GovCERT 高威脅警報：微軟 11 月更新**：11月11日發出 A26-11-15，指 CVE-2026-124194 正被野外利用，涵蓋 Windows 10／11／26H1、Windows Server 2012 至 2025、Office LTSC、Exchange、SharePoint、SQL Server、.NET、Teams 及 VS Code 等；影響可達遠端執行、提權及繞過保安限制。為何重要：月度更新是本地企業最大修補面。來源：[來源：govcert.gov.hk](https://govcert.gov.hk/en/alerts_detail.php?id=2170) （類型：官方；查證：已抽原文）
- **HKCERT：Node.js 多個漏洞**：11月12日公告，遠端攻擊者可致阻斷服務、繞過保安限制、資料洩露及篡改。CVE-2026-123828 等｜CVSS：未列｜受影響：22.23.5、24.22.3、26.13.1 LTS 之前版本｜已被利用(KEV)？未見｜修補：上述 LTS 版本｜HKCERT 級別：中度風險。為何重要：Node.js 是本地 Web 服務主流 runtime。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/node-js-multiple-vulnerabilities_20261112) （類型：官方；查證：已抽原文）
- **HKCERT：Palo Alto 多個漏洞**：11月12日公告，7 個 CVE（CVE-2026-0325 至 CVE-2026-0331）可致遠端執行、提權及仿冒；受影響含 PAN-OS 10.2.18-h14、11.1.16-h5、11.2.16-h2、12.1.10-h4、12.2.4-h2 及 Prisma Access 多個版本之前。CVE-2026-0325 等｜CVSS：未列｜已被利用(KEV)？未見｜修補：依 Palo Alto 公告｜HKCERT 級別：中度風險。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/palo-alto-products-multiple-vulnerabilities_20261112) （類型：官方；查證：已抽原文）
- **HKCERT：Citrix XenServer 多個漏洞**：11月12日公告，影響 XenServer 8.4 及 9，可致阻斷服務、提權、遠端執行及資料篡改。CVE-2026-102705 等｜CVSS：未列｜已被利用(KEV)？未見｜修補：依 Citrix 文章 CTX697316｜HKCERT 級別：中度風險。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/citrix-xenserver-multiple-vulnerabilities_20261112) （類型：官方；查證：已抽原文）
- **警方：首三季逾 34,000 宗騙案**：11月11日報道，首三季騙案按年增約 2,500 宗，損失 60.2 億元、升約 7%；電話騙案 9,999 宗涉款 19.4 億元、升七成；假冒客服 7 月起月均 1,300 宗，較上半年增兩倍多，並出現利用外洩資料的「精準詐騙」。為何重要：外洩資料正被直接轉化為騙案。來源：[來源：news.tvb.com](https://news.tvb.com/tc/1205695) （類型：媒體；查證：已抽原文）
:::

::: section events 活動與展會
## 活動與展會

- **ISACA 中國香港分會混合研討會**：日期 2026-11-17 18:30–19:30｜地點 香港銅鑼灣禮頓道 33-35 號第一商業大廈 2 樓 202 室（另設 Zoom）｜形式 混合、英語、1 CPE，主題「Guardians of the Agents: Practical Safeguards for Generative and Agentic AI」｜報名狀態 2026-11-13 17:00 截止；會員免費、非會員 HK$300。來源：[來源：isaca.org.hk](https://www.isaca.org.hk/events/hybrid-seminar-guardians-of-the-agents-practical-safeguards-for-generative-and-agentic-ai-on-17-november-2026/) （類型：官方；查證：已抽原文）
- **GenAI 深圳 2026**：日期 2026-12-04 至 2026-12-05｜地點 中國深圳（會場待主辦方公布）｜形式 線下大會，首日國際代表日、次日主會場及分論壇｜報名狀態 官網開放報名及徵集講者。來源：[來源：genaishenzhen.com](https://www.genaishenzhen.com/cn/) （類型：官方；查證：已抽原文）
- **釣魚電郵及短訊演習 2026**：日期 2026-10-20 至 2026-12-07｜地點 線上（全港機構）｜形式 模擬釣魚演習，量化員工警覺性｜報名狀態 接受機構報名。來源：[來源：cybersecurity.hk](https://www.cybersecurity.hk/tc/events.php) （類型：官方；查證：已抽原文）
:::

::: section misc 其他要點
## 其他要點

- **Lightricks/LTX-2.5**：圖像轉影片，近月下載 2.85M、讚 11.5k，10 月 11 日更新。來源：[來源：huggingface.co](https://huggingface.co/models) （類型：官方；查證：已抽原文）
- **NousResearch/Arete-27B**：27B 文本模型，近月下載 4.02k、讚 435。來源：[來源：huggingface.co](https://huggingface.co/models) （類型：官方；查證：已抽原文）
- **Zyphra/ZONOS3-Mini**：0.9B 文本轉語音，近月下載 4.17k、讚 171，約 1 小時前更新。來源：[來源：huggingface.co](https://huggingface.co/models) （類型：官方；查證：已抽原文）
:::

::: section followup 昨日跟進
## 昨日跟進

- **meta/astryx 星數續升**：由約 23.2k 升至約 24.9k。來源：[來源：github-trending.today](https://github-trending.today/) （類型：社群；查證：已抽原文）
- **Ripple-65B-Preview 熱度上移**：讚 507→515、下載 7.11k。來源：[來源：huggingface.co](https://huggingface.co/models) （類型：官方；查證：已抽原文）
- **MiniMax-H3-Image 讚數上升**：656→706、下載 143k。來源：[來源：huggingface.co](https://huggingface.co/models) （類型：官方；查證：已抽原文）
:::

<div class="ns-footer">
<p>資料截至 2026-11-13 05:30（HKT）；本期覆蓋 2026-11-10 至 2026-11-13（含 11 月 10 日 CISA 新增 KEV 等未及報道項目）。</p>
</div>
