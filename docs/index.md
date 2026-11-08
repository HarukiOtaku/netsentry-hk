---
title: "今日摘要"
date: 2026-11-09
---

# 每日科技與資安摘要 — 2026-11-09（星期一）

<p class="ns-lead">今日重點 · 永久連結 <a href="/digests/2026-11-09">/digests/2026-11-09</a> · <a href="/digests/">全部存檔</a></p>

<div class="ns-summary">
<p><strong>📌 今日總結</strong>：警方公布首三季科技罪案2.16萬宗、損失近39億，並揭4.4萬高風險漏洞。OpenAI夥Hacktron測第三方接駁。HKCERT警示OpenSSH繞過且驗證碼已公開。</p>
</div>

::: section tldr 今日速覽
## 今日速覽

- 港警首三季揭逾4.4萬高風險漏洞，RDP佔37,950項。
- OpenAI夥Hacktron擴Daybreak Red，專測第三方接駁。
- OpenSSH 10.6p2修musl密碼驗證繞過，PoC已公開。
:::

::: section products 產品與發布會
## 產品與發布會

- **OpenAI與Hacktron合作測第三方接駁**：11月6日宣布雙方工程師將選定高優先範圍，重點測試系統與第三方服務的接駁；Hacktron經Daybreak Red取得擴大的前沿模型權限。同文指本週稍早亦安排Cathedral研究員參與下一輪安全衝刺，並上調漏洞賞金。為何重要：代理接駁面成為紅隊主戰場。來源：[來源：openai.com](https://openai.com/index/partnering-with-hacktron/)（官方；查證：已抽原文）
- **Gemini Omni 1.2 Flash開放15秒影片**：11月5日於Gemini API及Gemini for business一般可用；原生影片由1.1版的10秒延長至15秒，並可以1秒為單位指定3至15秒，支援多輪對話式剪輯。為何重要：短片生成改為單次成片。來源：[來源：blog.google](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/)（官方；查證：已抽原文）
- **OpenSSH 10.6p2釋出**：官方稱2026-11-05發布，屬「關鍵保安因應」，修補部分Linux在停用PAM時的密碼驗證繞過；團隊並寫明近期大量保安報告來自人工智能或經其協助。為何重要：遠端管理通道需立即對號入座。來源：[來源：openssh.com](https://www.openssh.com/txt/release-10.6p2)（官方；查證：已抽原文）
:::

::: section ai AI 模型與開源趨勢
## AI 模型與開源趨勢

- **Qwen/Qwen3.8-27B**：圖像—文本生成，約280億參數；Hub顯示近月下載約781萬、讚約1.93萬。授權未在已抽列表列明。為何重要：開源多模態旗艦仍以下載量領跑。來源：[來源：huggingface.co](https://huggingface.co/models)（官方；查證：已抽原文）
- **Pika-Labs/Pika-H3-Flex**：圖像轉影片，約330億參數；近月下載約1,080、讚約506，頁面顯示約5小時前更新。授權未在已抽列表列明。為何重要：短片開源權重進入趨勢前列。來源：[來源：huggingface.co](https://huggingface.co/models)（官方；查證：已抽原文）
- **NousResearch/Arete-27B**：文本生成，約270億參數；近月下載約989、讚約214，約1日前更新。授權未在已抽列表列明。為何重要：新27B權重開始累積社群用量。來源：[來源：huggingface.co](https://huggingface.co/models)（官方；查證：已抽原文）
:::

::: section github GitHub 值得關注
## GitHub 值得關注

- **vercel-labs/agent-browser**（Apache-2.0，約4.66萬星，當日約+190）：Rust命令列讓編碼代理以無障礙樹快照驅動瀏覽器。用途：把「開頁、點選、核對」拆成可重跑的短指令。為何值得留意：當日日榜首位。來源：[來源：github.com](https://github.com/vercel-labs/agent-browser) ；[來源：githubtrending.today](https://githubtrending.today/archive/2026-11-08/)（官方／社群；查證：已抽原文；多來源）
- **milind-soni/OpenMausBot**（Apache-2.0，約1.81萬星，當日約+1,955）：本機優先的多智能體聊天客戶端，接駁已安裝的Claude／Codex／Grok命令列。用途：用現有訂閱在本機跑一組可審批的代理。為何值得留意：當日星數增幅居前列。來源：[來源：github.com](https://github.com/milind-soni/OpenMausBot) ；[來源：githubtrending.today](https://githubtrending.today/archive/2026-11-08/)（官方／社群；查證：已抽原文；多來源）
- **google/skills**（Apache-2.0，約2.35萬星，當日約+443）：Google產品與技術的代理技能庫。用途：讓編碼代理按固定技能呼叫雲端與開發工作流。為何值得留意：廠商技能包與社群技能並列熱門。來源：[來源：github.com](https://github.com/google/skills) ；[來源：githubtrending.today](https://githubtrending.today/archive/2026-11-08/)（官方／社群；查證：已抽原文；多來源）
- **sherlock-project/sherlock**（MIT，約10.32萬星，當日約+1,766）：以用戶名在400多個社交網絡查找帳號。用途：開源情報與帳號盤點。為何值得留意：資安偵察工具重返日榜。來源：[來源：github.com](https://github.com/sherlock-project/sherlock) ；[來源：githubtrending.today](https://githubtrending.today/archive/2026-11-08/)（官方／社群；查證：已抽原文；多來源）
:::

::: section global 全球重點新聞
## 全球重點新聞

- **微軟：第三季電郵釣魚約73億封**：7至9月偵測約73億封電郵釣魚，9月近30億封、較8月升41%；約1.29億封偽冒受追蹤商務服務寄件網域，部分因機構或使用者例外規則而送達。Tycoon2FA相關郵件7月約2.1萬封，較2月890萬封跌約99.8%。為何重要：驗證失敗的郵件仍可被例外放行。來源：[來源：microsoft.com](https://www.microsoft.com/en-us/security/blog/2026/11/05/email-threat-landscape-q3-2026-trends-and-insights/)（官方；查證：已抽原文）
- **Anthropic量化科研使用Claude**：以私隱保護方法分析2026-08-02至09-30共207,049段科研會話；資料分析約佔Claude三分一、Claude Code近一半。若現有能力廣泛採用，部分領域產出或可倍增；若非實體研究全由人工智能承擔，計算機科學與統計或可達約15倍。問卷中約四成活躍使用者預期2030年前模型可獨立完成整項研究。為何重要：科研加速幅度開始有用量數據。來源：[來源：anthropic.com](https://www.anthropic.com/research/how-researchers-use-claude)（官方；查證：已抽原文）
- **MaxxBench測試編碼代理是否死記基準**：unLAP把89項DeepSWE功能任務的指示或起始代碼做小改動，觀察代理跟新要求還是猜隱藏測試。公開說明舉例包括把瀏覽器報告檔名改為小寫。為何重要：基準過擬合改以改題來檢驗。來源：[來源：maxxbench.unlap.ai](https://maxxbench.unlap.ai/research/why-maxxbench/)（官方；查證：已抽原文）
- **OpenSSH警告人工智能已能獨立撞見同一漏洞**：10.6p2發行說明寫明，人工智能指出的缺陷其後常被另一研究人員再次發現，意味不向開源項目通報的對手同樣找得到。為何重要：披露窗口被壓縮。來源：[來源：openssh.com](https://www.openssh.com/txt/release-10.6p2)（官方；查證：已抽原文）
:::

::: section hk 香港本地
## 香港本地

- **警方：首三季科技罪案21,573宗、揭逾4.4萬高風險漏洞**：2026年1至9月整體科技罪案較上年跌11.5%，約八成屬網絡詐騙，損失約38.97億港元（上年同期約45.91億，跌約15%）。系統入侵29宗、勒索軟件40宗（上年同期34宗）。高風險漏洞逾44,000項，其中37,950項涉RDP、6,083項涉PHP網站；並聯同供應商清除或封鎖逾12,000項網上威脅（釣魚網站4,245、殭屍網絡設備3,616、惡意程式4,215）。行動亦發現65間學校防火牆韌體過時並已提供更新支援。為何重要：家用與中小企常見入口仍大面積暴露。來源：[來源：hk01.com](https://www.hk01.com/%E7%A4%BE%E6%9C%83%E6%96%B0%E8%81%9E/60407616/%E7%B6%B2%E7%BD%AA%E6%A1%88%E9%A6%96%E4%B8%89%E5%AD%A3%E5%A4%B1%E8%BF%9139%E5%84%84-%E8%AD%A6%E6%96%B9%E6%8F%AD4-4%E8%90%AC%E7%B6%B2%E7%B5%A1%E6%BC%8F%E6%B4%9E-rdp%E8%88%87php%E6%88%90%E9%87%8D%E7%81%BD%E5%8D%80)（媒體；查證：已抽原文）
- **HKCERT：OpenSSH繞過保安限制（中度風險）**：2026-11-06。CVE-2026-123158｜CVSS：公告未列｜受影響：OpenSSH 10.6p2之前｜已被利用(KEV)？已抽CISA目錄未列｜修補：10.6p2｜HKCERT級別：中度風險。概念驗證碼已公開；影響使用musl且未啟用PAM的Linux（例如Alpine），Red Hat、SUSE、Ubuntu、Debian等glibc發行版不受影響。GovCERT同日發高危保安警報（A26-11-09）。為何重要：容器與精簡發行版SSH面需優先對號。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/openssh-multiple-vulnerabilities_20261106) ；[來源：govcert.gov.hk](https://www.govcert.gov.hk/tc/alerts_detail.php?id=2164)（官方；查證：已抽原文；多來源）
- **HKCERT：IBM WebSphere多個漏洞（中度風險）**：2026-11-06。CVE-2026-78384、CVE-2026-89058、CVE-2026-89059、CVE-2026-107937、CVE-2026-108039｜CVSS：公告未列｜受影響：WebSphere Application Server 9.0、Liberty 17.0.0.3至26.0.0.11｜已被利用(KEV)？已抽目錄未列｜修補：IBM支援節點7295357、7295373｜HKCERT級別：中度風險。可致阻斷服務、繞過保安限制及敏感資料洩露。為何重要：企業應用伺服器仍是內網要害。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/ibm-websphere-products-multiple-vulnerabilities_20261106)（官方；查證：已抽原文）
:::

::: section events 活動與展會
## 活動與展會

- **「防範網絡攻擊 — 中小企及非牟利機構的防禦策略」研討會**：日期 2026-11-12 15:30–16:30｜地點 香港灣仔皇后大道東248號大新金融中心12樓，亦可網上視像｜形式 粵語講座，線上或實體｜報名狀態 免費，須於2026-11-11 13:00前登記，名額有限先到先得。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hong-kong-s-first-five-year-plan-seminar-series-data-privacy-academy-x-hkcert-seminar-on-stay-ahead-of-cyber-threats-prevention-strategies-for-smes-and-ngos)（官方；查證：已抽原文）
- **Japan IT Week 関西展（門票細則已公布）**：日期 2026-11-18 至 2026-11-20 10:00–17:00｜地點 日本大阪インテックス大阪4・5號館｜形式 系統開發、資安、AI基建等綜合展覽，預定約200社、16,000名來場｜報名狀態 11月17日前預先登記免費，18日起登記5,500日圓（含稅）。來源：[來源：japan-it.jp](https://www.japan-it.jp/it/ja-jp/about.html)（官方；查證：已抽原文）
- **HKCERT中小企免費網絡安全網上研討會（第四場）**：日期 2026-11-25 15:30–16:30｜地點 線上｜形式 廣東話網上講座，主題為雲端依賴、智能裝置與營運韌性｜報名狀態 免費須預先登記，截止2026-11-23。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hkcert-free-cybersecurity-webinar-series-for-smes-2026)（官方；查證：已抽原文）
:::

::: section misc 其他要點
## 其他要點

- **Hugging Face趨勢改由Qwen3.8-27B以下載量壓陣**：近月約781萬次，單圖3D的idol仍居趨勢前列。來源：[來源：huggingface.co](https://huggingface.co/models)（官方；查證：已抽原文）
- **GitHub日榜最大增幅屬安全審計技能與開源Grok Bot替代**：cloudflare/security-audit-skill當日約+2,085星；OpenMausBot約+1,955星。來源：[來源：githubtrending.today](https://githubtrending.today/archive/2026-11-08/)（社群；查證：已抽原文）
:::

::: section followup 昨日跟進
## 昨日跟進

- **moonshotai/Kimi-K3.1-Pro用量續升**：Hub顯示近月下載約25,569、讚約1,709（上期約18,432／1,354）；總參數2.8萬億、啟動1,040億，授權為Kimi K3.1 Pro。來源：[來源：huggingface.co](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)（官方；查證：已抽原文）
- **香港網絡安全與未來應變研討會2027已列場地**：2027-01-07 09:30–17:00，香港會議展覽中心2樓會議室S222–S230；免費，報名將於2026年11月中開始。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hong-kong-cyber-trust-and-future-readiness-seminar-2027)（官方；查證：已抽原文）
- **nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B授權已核實**：OpenMDW-1.1；總參數約340億、啟動約43億，支援40種語言、最長約1小時錄音。來源：[來源：huggingface.co](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)（官方；查證：已抽原文）
:::

<div class="ns-footer">
<p>資料截至 2026-11-09 05:30（HKT）；本期覆蓋 2026-11-08 至 2026-11-09，並補錄上次未報之11月5至6日官方公告。</p>
</div>
