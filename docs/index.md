---
title: "今日摘要"
date: 2026-11-04
---

# 每日科技與資安摘要 — 2026-11-04（星期三）

<p class="ns-lead">今日重點 · 永久連結 <a href="/digests/2026-11-04">/digests/2026-11-04</a> · <a href="/digests/">全部存檔</a></p>

<div class="ns-summary">
<p><strong>📌 今日總結</strong>：CISA將WordPress升級視窗遠端執行漏洞列入已知利用目錄。OpenAI加碼懸賞。美團發布LongCat-2.5。HKCERT警示Android漏洞。法律科技節開幕。</p>
</div>

::: section tldr 今日速覽
## 今日速覽

- CISA將WordPress CVE-2026-119977列入KEV，聯邦限期11月6日。
- OpenAI把核心產品關鍵漏洞懸賞提高至3萬美元。
- 美團發布1.6萬億參數原生多模態模型LongCat-2.5。
:::

::: section products 產品與發布會
## 產品與發布會

- **美團發布LongCat-2.5**：11月2日由LongCat團隊公布，面向長程智能體任務的原生多模態模型；總參數1.6萬億，每token約激活480億參數，強化視覺理解與智能體編程，並優化國產算力上的長上下文訓練與W4A4推理。官方評測表另對照GPT-5.6-Sol與Claude Opus 5。為何重要：把長程代理與視覺編碼放進同一套權重。來源：[來源：tech.meituan.com](https://tech.meituan.com/2026/11/02/Meituan-LongCat-2.5.html)（官方；查證：已抽原文）
- **OpenAI加碼漏洞懸賞並籌備新一輪安全衝刺**：11月2日公布，核心產品（ChatGPT、Codex、API Platform）關鍵漏洞最高3萬美元；例外關鍵發現連獎金最高約17.2萬美元；新獎勵適用未結案報告，過去30日已發獎金若較低會補差。同時與Cathedral合作，讓對方研究員用OpenAI模型測試內部防禦；上一輪曾調動25%產品工程師。為何重要：模型廠把懸賞與內部紅隊一併加碼。來源：[來源：openai.com](https://openai.com/index/rewarding-defenders-with-bigger-bug-bounties/) ；[來源：openai.com](https://openai.com/index/preparing-our-next-security-sprint-to-harden-openai/)（官方；查證：已抽原文；多來源）
- **Vercel Labs發布agent-desktop 1.1.0**：11月3日推出，以作業系統無障礙樹而非截圖操作桌面應用，提供CLI與C函式庫，支援macOS、Windows、Linux；授權Apache-2.0。快照、剪貼簿與除錯產物可能含桌面私隱內容。為何重要：電腦使用代理開始離開像素點擊。來源：[來源：github.com](https://github.com/vercel-labs/agent-desktop)（官方；查證：已抽原文）
:::

::: section ai AI 模型與開源趨勢
## AI 模型與開源趨勢

- **LiquidAI/LFM3-1.7B**：1.73B參數、256K上文、授權LFM Open License v1.0；Hugging Face顯示近月下載約4.78萬、讚約1,340。為本地代理與單卡微調而設，4-bit約佔1GB記憶體。為何重要：小型開源權重把代理套件做到手機級。來源：[來源：huggingface.co](https://huggingface.co/LiquidAI/LFM3-1.7B) ；[來源：huggingface.co](https://huggingface.co/models)（官方；查證：已抽原文；多來源）
- **deepseek-ai/DeepSeek-V4.1-Flash-1017**：MIT授權；Hub列出約763B、近月下載約18.7萬、讚約4,800。官方稱相對V4.1-Flash縮短執行時間與輸出長度，Terminal-Bench 4.0為42.3。為何重要：開源快模型繼續壓低代理成本。來源：[來源：huggingface.co](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) ；[來源：huggingface.co](https://huggingface.co/models)（官方；查證：已抽原文；多來源）
- **speridlabs/idol**：單圖轉3D高斯點雲，最多約104.9萬個Gaussian、約7.2GB顯示記憶體；Hub顯示近月下載約1.07萬、讚468。為何重要：消費級顯示卡可做單圖三維重建。來源：[來源：huggingface.co](https://huggingface.co/speridlabs/idol) ；[來源：huggingface.co](https://huggingface.co/models)（官方；查證：已抽原文；多來源）
:::

::: section github GitHub 值得關注
## GitHub 值得關注

- **vercel-labs/agent-desktop**（Apache-2.0，約10,818星，11月3日日榜第一、當日+2,275）：讀取無障礙樹並以ref點擊或輸入。用途：給代理操作本機桌面應用。為何值得留意：日榜首位反映電腦使用需求。來源：[來源：github.com](https://github.com/vercel-labs/agent-desktop) ；[來源：githubtrending.today](https://githubtrending.today/archive/2026-11-03/)（官方／社群；查證：已抽原文；多來源）
- **pingdotgg/t3code**（MIT，約4.41萬星）：以手機、網頁及桌面遙控本機Claude Code、Codex、Cursor等代理。用途：把本機編碼代理變成可遙控控制面。為何值得留意：11月3日日增約3,229星。來源：[來源：github.com](https://github.com/pingdotgg/t3code)（官方；查證：已抽原文）
- **cloudflare/security-audit-skill**（MIT，約57,482星）：六階段安全審計技能，產出可獨立核實的機器可讀發現。用途：讓編碼代理按覆蓋率獵洞並交叉驗證。為何值得留意：雲端廠把內部漏洞發掘流程開源成單倉起點。來源：[來源：github.com](https://github.com/cloudflare/security-audit-skill)（官方；查證：已抽原文）
:::

::: section global 全球重點新聞
## 全球重點新聞

- **WordPress核心升級視窗遠端執行漏洞列入CISA KEV**：CVE-2026-119977｜CVSS：8.1（Wordfence）｜受影響：4.7至7.1.3｜已被利用(KEV)？是（2026-11-03加入，聯邦限期2026-11-06，須按BOD 26-04做取證分流）｜修補：7.1.4，並回溯至4.7各分支｜HKCERT級別：未有對應公告。無驗證攻擊者可在完整套件升級的短暫視窗，利用可預測且可從網頁存取的暫存路徑執行程式碼。為何重要：全球網站核心在升級瞬間被利用。來源：[來源：cisa.gov](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) ；[來源：nvd.nist.gov](https://nvd.nist.gov/vuln/detail/CVE-2026-119977) ；[來源：wordpress.org](https://wordpress.org/news/2026/10/wordpress-7-1-4/)（官方；查證：已抽原文；多來源）
- **HKCERT：Microsoft Edge多個漏洞（中度風險）**：2026-11-02。遠端攻擊者可觸發阻斷服務及遠端執行任意程式碼。CVE-2026-110913等｜CVSS：公告未列｜受影響：156.0.4314.58之前｜已被利用(KEV)？公告未寫｜修補：156.0.4314.58或之後｜HKCERT級別：中度風險。為何重要：瀏覽器仍是網頁木馬入口。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/microsoft-edge-multiple-vulnerabilities_20261102)（官方；查證：已抽原文）
- **HKCERT：SUSE Linux內核多個漏洞（中度風險）**：2026-11-03。可導致阻斷服務、權限提升、資料篡改、繞過限制、資料洩露及遠端執行程式碼。CVE-2026-53016等｜CVSS：公告未列｜受影響：SLES 12 SP5、15 SP4至SP7及對應Micro／Real Time等｜已被利用(KEV)？公告未寫｜修補：SUSE官方更新｜HKCERT級別：中度風險。為何重要：企業Linux分支仍須同步打補丁。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/suse-linux-kernel-multiple-vulnerabilities_20261103)（官方；查證：已抽原文）
- **HKCERT：Debian Linux內核多個漏洞（中度風險）**：2026-11-03。可導致阻斷服務、權限提升及敏感資料洩露。CVE-2026-89638等｜CVSS：公告未列｜受影響：Debian stable（trixie）6.12.113-1之前｜已被利用(KEV)？公告未寫｜修補：升級內核套件｜HKCERT級別：中度風險。為何重要：穩定版伺服器內核漏洞面仍然大。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/debian-linux-kernel-multiple-vulnerabilities_20261103)（官方；查證：已抽原文）
:::

::: section hk 香港本地
## 香港本地

- **HKCERT：Android多個漏洞（中度風險）**：2026-11-03。可導致阻斷服務、權限提升、資料洩露及遠端執行任意程式碼。CVE-2026-0053等｜CVSS：公告未列｜受影響：保安更新級別早於2026-11-01的裝置｜已被利用(KEV)？公告未寫｜修補：安裝供應商保安更新｜HKCERT級別：中度風險。為何重要：手機月度補丁一旦落後就暴露遠端路徑。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/android-multiple-vulnerabilities_20261103)（官方；查證：已抽原文）
- **金管局公布多間銀行欺詐網站及偽冒登入畫面**：2026-11-03。涉及東亞、上海商業、創興、集友、富邦及滙豐；金管局重申銀行不會以短訊或電郵超連結要求提供登入密碼或一次性密碼，懷疑洩露應聯絡銀行並向警方報案。為何重要：偽冒網銀在金融科技周期間同步出現。來源：[來源：info.gov.hk](https://www.info.gov.hk/gia/general/202611/03/P2026110300495.htm)（官方；查證：已抽原文）
- **律政司推出訂購法律科技服務資助計劃**：2026-11-03起至2027-01-29。獨資或不多於五名合夥人的律師事務所、執業不多於七年的大律師可申請；指定14間供應商，實報實銷訂購一年服務，最高資助2萬元。為何重要：把法律科技從展示會落到中小型事務所。來源：[來源：news.gov.hk](https://www.news.gov.hk/chi/2026/11/20261103/20261103_113941_609.html)（官方；查證：已抽原文）
- **HKCERT同日另發三星產品多個漏洞（中度風險）**：受影響為運行Android 14至17的三星產品。細節頁未能完整抽出，不展開CVE。為何重要：與Android公告同日，廠商分支亦須跟月更。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin)（官方；查證：已抽原文）
:::

::: section events 活動與展會
## 活動與展會

- **數碼港創業投資論壇2026**：日期 2026-11-04 至 2026-11-05｜地點 香港數碼港｜形式 線下創投論壇，聚焦企業級AI智能體等｜報名狀態 即將舉行／進行中。來源：[來源：cyberport.hk](https://www.cyberport.hk/zh-hk/news/events/)（官方；查證：已抽原文）
- **香港法律科技節——展覽及灼見講台**：日期 2026-11-04 至 2026-11-06｜地點 香港灣仔香港會議展覽中心N206-208（灼見講台另於N209-210）｜形式 線下展覽及每場約30分鐘示範工作坊｜報名狀態 法律周期間舉行，展覽今日開放。來源：[來源：legalweek.hk](https://www.legalweek.hk/tc/law-tech/exhibition-n-insight-stage/)（官方；查證：已抽原文）
- **香港網安奪旗賽2026初賽**：日期 2026-11-06 18:00 至 2026-11-07 18:00（HKT，24小時）｜地點 線上｜形式 網上奪旗賽｜報名狀態 截止為2026-11-04 12:00 HKT（今日正午）。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hkcert-capture-the-flag-challenge-2026) ；[來源：ctf.hkcert.org](https://ctf.hkcert.org/contest-format)（官方；查證：已抽原文；多來源）
:::

::: section misc 其他要點
## 其他要點

- **WordPress 7.1.4已於10月28日推出並回溯至4.7**：官方列明升級流程弱點可在升級視窗導致遠端執行，屬安全短周期版本。來源：[來源：wordpress.org](https://wordpress.org/news/2026/10/wordpress-7-1-4/)（官方；查證：已抽原文）
- **OpenAI承諾六個月內提供10億美元補貼算力予前線防禦者**：配合Daybreak客戶使用其最強模型強化自身系統。來源：[來源：openai.com](https://openai.com/index/preparing-our-next-security-sprint-to-harden-openai/)（官方；查證：已抽原文）
:::

::: section followup 昨日跟進
## 昨日跟進

- **香港網安奪旗賽報名今日正午截止**：2026-11-04 12:00 HKT後不再接受申請；初賽仍於11月6日至7日網上舉行。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hkcert-capture-the-flag-challenge-2026)（官方；查證：已抽原文）
- **香港金融科技周進入後半**：活動至2026-11-06，與法律科技節重疊。來源：[來源：cyberport.hk](https://www.cyberport.hk/zh-hk/news/events/)（官方；查證：已抽原文）
:::

<div class="ns-footer">
<p>資料截至 2026-11-04 05:30（HKT）；本期覆蓋 2026-11-03 至 2026-11-04。</p>
</div>
