---
title: "今日摘要"
date: 2026-11-07
---

# 每日科技與資安摘要 — 2026-11-07（星期六）

<p class="ns-lead">今日重點 · 永久連結 <a href="/digests/2026-11-07">/digests/2026-11-07</a> · <a href="/digests/">全部存檔</a></p>

<div class="ns-summary">
<p><strong>📌 今日總結</strong>：CISA將SonicWall SSLVPN列入已知利用目錄。OpenAI發表濕實驗基準並承諾自付電費。微軟揭代理式AI盜用GitHub密鑰。網安奪旗賽初賽今日結束。</p>
</div>

::: section tldr 今日速覽
## 今日速覽

- CISA將SonicWall SSLVPN漏洞列入KEV，聯邦限期11月20日。
- OpenAI發表BioBasicsBench，Astra濕實驗平均得分66.7%。
- 微軟：代理式框架可由GitHub盜密，五分鐘內進入Key Vault。
:::

::: section products 產品與發布會
## 產品與發布會

- **OpenAI公布國家社區契約**：11月5日發表National Community Compact及Compute Campus Policy Blueprint，承諾自有運算園區支付全部電費及配套基建、公開用水用電與噪音評估，並不向公職人員使用保密協議，只保留保安、商業機密等狹義保護。佐治亞州Effingham縣已有480萬美元資助1.4萬名學生免費校餐；俄亥俄州Pike縣與SB Energy合共承諾600萬美元托兒支援。為何重要：數據中心擴建開始被要求公開成本與社區約束。來源：[來源：openai.com](https://openai.com/index/setting-new-standard-responsible-ai-infrastructure/)（官方；查證：已抽原文）
- **OpenAI發表BioBasicsBench**：11月6日與酶設計公司Ligo推出100項濕實驗基準，涵蓋蛋白質、影像與流式、定量、核酸及分子克隆；共測7個模型、37種推理設定、18,500筆結果。xhigh設定下GPT-6 Astra平均得分66.7%（95% CI 60.3–73.1%），GPT-5.6 Sol為43.8%。為何重要：把原始實驗圖與對照檢查列成可比較指標。來源：[來源：openai.com](https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science/)（官方；查證：已抽原文）
- **Microsoft 365 Education A7全面供應**：Partner Center 11月5日宣布教育方案十多年來最大更新，A7已一般可用，並將於11月10日及17日舉辦合作夥伴說明會。為何重要：教育雲把進階AI與管治捆成新主方案。來源：[來源：learn.microsoft.com](https://learn.microsoft.com/en-us/partner-center/announcements/2026-november)（官方；查證：已抽原文）
- **Business Central與Copilot Business捆綁**：兩款CSP永久組合12月1日出現於價目預覽、2027年1月1日開賣；Essentials+Copilot Business每用戶每月95美元（分開買101美元），Premium組合125美元（分開買131美元），最多300席。為何重要：中小企業ERP首次把Copilot固定進目錄價。來源：[來源：learn.microsoft.com](https://learn.microsoft.com/en-us/partner-center/announcements/2026-november)（官方；查證：已抽原文）
:::

::: section ai AI 模型與開源趨勢
## AI 模型與開源趨勢

- **ricursiveAI/Ripple-65B-Preview**：65B稠密Transformer，預訓練12萬億token，上文1,048,576；Apache-2.0。官方稱Terminal-Bench 2.1得80.52，訓練及研發成本3,200萬美元。Hub近月下載約2,013、讚約324。為何重要：美國開源權重把代理編程分數做到消費級體積。來源：[來源：huggingface.co](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) ；[來源：ricursive.com](https://www.ricursive.com/ripple)（官方；查證：已抽原文；多來源）
- **ccore/Qwen3.5-4B-3D-Coder**：約50億參數，Hub顯示近月下載約19萬、讚約778，11月6日更新。授權未在已抽頁面列明。為何重要：小型3D編碼模型以下載量擠進熱門。來源：[來源：huggingface.co](https://huggingface.co/models)（官方；查證：已抽原文）
- **Qwen/Qwen3.8-27B**：約280億參數，近月下載約785萬、讚約1.93萬。為何重要：開源多模態下載仍由中型指令模型帶動。來源：[來源：huggingface.co](https://huggingface.co/models)（官方；查證：已抽原文）
:::

::: section github GitHub 值得關注
## GitHub 值得關注

- **garrytan/gstack**（MIT，約14.0萬星，當日約+612）：把Claude Code編成虛擬工程團隊，含架構鎖定、瀏覽器測試、OWASP與STRIDE審計及發佈流程。用途：用固定角色約束編碼代理。為何值得留意：日榜前列顯示「整套軟件工廠技能」正在擴散。來源：[來源：github.com](https://github.com/garrytan/gstack) ；[來源：githubtrending.today](https://githubtrending.today/)（官方／社群；查證：已抽原文；多來源）
- **max-sixty/worktrunk**（約1.16萬星，當日約+546）：為並行AI代理工作流管理Git worktree。用途：讓多個代理同時改同一倉庫而不互相覆蓋。為何值得留意：代理並行開發開始需要專門的分支工具。來源：[來源：githubtrending.today](https://githubtrending.today/)（社群；查證：已抽原文）
- **google/skills**（約2.25萬星，當日約+211）：Google產品與技術的代理技能包。用途：把官方產品操作寫成可重用技能。為何值得留意：平台商開始直接發佈代理技能。來源：[來源：githubtrending.today](https://githubtrending.today/)（社群；查證：已抽原文）
:::

::: section global 全球重點新聞
## 全球重點新聞

- **CISA將SonicWall SSLVPN漏洞列入已知利用目錄**：CVE-2026-19868｜CVSS：廠商列7.1（CWE-308）｜受影響：啟用SAML的SSLVPN；Gen 7為SonicOS 7.3.3-7015及更早、Gen 8為8.2.2-8015及更早｜已被利用(KEV)？是，2026-11-06加入，目錄共1,769條；勒索活動：Unknown｜修補：7.3.4-7015、8.2.3-8015｜聯邦限期2026-11-20｜HKCERT級別：未有對應新公告。廠商PSIRT稱已調查潛在利用。為何重要：邊界VPN的SAML／MFA可被替代驗證路徑繞過。來源：[來源：cisa.gov](https://www.cisa.gov/news-events/alerts/2026/11/06/cisa-adds-one-known-exploited-vulnerability-catalog) ；[來源：psirt.global.sonicwall.com](https://psirt.global.sonicwall.com/vuln-detail/SNWLID-2026-0014)（官方；查證：已抽原文；多來源）
- **微軟：威脅者用代理式AI搜刮GitHub外洩密鑰**：11月5日威脅情報指，自2026年8月起有攻擊者以代理式進攻框架大量查詢公開倉庫中的憑證、應用程式密鑰及推理API金鑰；至少一宗由掃描GitHub到從Azure Key Vault竊取資料只用五分鐘。移除公開檔案並不能使已洩密鑰失效，須撤銷或輪替。為何重要：外洩密鑰的後續攻擊已可交給代理自動完成。來源：[來源：microsoft.com](https://www.microsoft.com/en-us/security/blog/2026/11/05/threat-actors-use-agentic-ai-tooling-to-find-and-abuse-exposed-secrets/)（官方；查證：已抽原文）
- **（遊戲相關）Anthropic發表Project EVE**：11月6日研究指Claude在EVE Online模擬市場以利潤極大化交易；較新模型在九個兩週窗口均獲利，Fable 5平均資本約增43%，Opus 4.6約4%。為何重要：用長期線上遊戲經濟測試代理是否會穩定套利。來源：[來源：anthropic.com](https://www.anthropic.com/research/project-eve-claude-plays-mmorpgs)（官方；查證：已抽原文）
- **NVIDIA開源工具支援6G研究**：11月6日網誌稱Aerial無線軟件開源一週年，並與Sionna等工具一併供下一代網路研究。為何重要：電信AI模擬棧繼續以開源擴展。來源：[來源：blogs.nvidia.com](https://blogs.nvidia.com/recent-news/)（官方；查證：已抽原文）
:::

::: section hk 香港本地
## 香港本地

- **HKCERT：OpenSSH繞過保安限制漏洞（中度風險）**：2026-11-06。CVE-2026-123158｜CVSS：公告未列｜受影響：OpenSSH 10.6p2之前；在Linux使用musl且未啟用PAM時，sshd缺乏密碼驗證繞過的因應（例如Alpine Linux）；Red Hat、SUSE、Ubuntu、Debian等用glibc者不受影響｜已被利用(KEV)？公告未寫；概念驗證碼已被公開｜修補：OpenSSH 10.6p2｜HKCERT級別：中度風險。為何重要：輕量發行版SSH驗證可被繞過。來源：[來源：hkcert.org](https://www.hkcert.org/security-bulletin/openssh-multiple-vulnerabilities_20261106)（官方；查證：已抽原文）
- **HKCERT：IBM WebSphere產品多個漏洞（中度風險）**：2026-11-06。可導致阻斷服務、繞過保安限制及敏感資料洩露。CVE-2026-78384、CVE-2026-89058、CVE-2026-89059、CVE-2026-107937、CVE-2026-108039｜CVSS：公告未列｜受影響：WebSphere Application Server 9.0、Liberty 17.0.0.3至26.0.0.11｜已被利用(KEV)？公告未寫｜修補：廠商支援文件7295357、7295373｜HKCERT級別：中度風險。為何重要：企業應用伺服器仍是內網橫向入口。來源：[來源：hkcert.org](https://www.hkcert.org/security-bulletin/ibm-websphere-products-multiple-vulnerabilities_20261106)（官方；查證：已抽原文）
- **HKCERT第三季事故統計**：11月5日網誌，2026年第三季錄得4,404宗保安事故，較2025年同期3,839宗約增15%；釣魚2,672宗、約佔61%，殭屍網絡729宗約17%，脆弱系統469宗約11%。釣魚目標中社交媒體及即時通訊約46%，銀行金融及電子支付約21%。為何重要：本地事故量按年再升，釣魚仍佔六成。來源：[來源：hkcert.org](https://www.hkcert.org/blog/hkcert-security-incident-statistics-and-cybersecurity-trends-in-hong-kong-for-q3-2026)（官方；查證：已抽原文）
:::

::: section events 活動與展會
## 活動與展會

- **香港網安奪旗賽2026**：日期 2026-08-27 至 2027-01-08｜地點 線上｜形式 網上奪旗賽｜報名狀態 賽事進行中。來源：[來源：cybersecurity.hk](https://www.cybersecurity.hk/en/index.php)（官方；查證：已抽原文）
- **狩網運動2026／BugHunting Campaign**：日期 2026-09-07 至 2027-02-28｜地點 香港（機構系統檢測）｜形式 漏洞懸賞｜報名狀態 報名已於2026-10-31截止，檢測仍進行。來源：[來源：cybersecurity.hk](https://www.cybersecurity.hk/en/index.php) ；[來源：info.gov.hk](https://www.info.gov.hk/gia/general/202609/01/P2026090100419.htm)（官方；查證：已抽原文；多來源）
- **釣魚電郵及短訊演習2026**：日期 2026-10-20 至 2026-12-07｜地點 香港（電郵及短訊）｜形式 道德釣魚演習｜報名狀態 活動進行中。來源：[來源：cybersecurity.hk](https://www.cybersecurity.hk/en/index.php)（官方；查證：已抽原文）
- **香港國際數據私隱學院 x HKCERT「防範網絡攻擊」研討會**：日期 2026-11-12 15:30–16:30｜地點 香港灣仔皇后大道東248號大新金融中心12樓，可網上視像｜形式 講座｜報名狀態 免費，須於2026-11-11 13:00前登記。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hong-kong-s-first-five-year-plan-seminar-series-data-privacy-academy-x-hkcert-seminar-on-stay-ahead-of-cyber-threats-prevention-strategies-for-smes-and-ngos)（官方；查證：已抽原文）
:::

::: section misc 其他要點
## 其他要點

- **NVIDIA稱Vera兼顧吞吐與代理速度**：11月5日網誌指代理搜尋、查庫、寫碼及執行動作每步都依賴CPU。來源：[來源：blogs.nvidia.com](https://blogs.nvidia.com/recent-news/)（官方；查證：已抽原文）
- **NVIDIA討論全棧協同設計紓緩AI記憶體壓力**：11月5日指更長上文與代理應用加劇GPU記憶體緊張。來源：[來源：blogs.nvidia.com](https://blogs.nvidia.com/recent-news/)（官方；查證：已抽原文）
:::

::: section followup 昨日跟進
## 昨日跟進

- **WordPress升級視窗遠端執行漏洞**：CVE-2026-119977聯邦限期為2026-11-06，已屆滿；CISA目錄仍列該條，並要求依BOD 26-04處理公開暴露資產。來源：[來源：cisa.gov](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)（官方；查證：已抽原文）
- **vercel-labs/agent-desktop持續急升**：GitHub顯示約1.65萬星、授權Apache-2.0；11月6日日榜仍錄得約+2,173星。來源：[來源：github.com](https://github.com/vercel-labs/agent-desktop) ；[來源：githubtrending.today](https://githubtrending.today/)（官方／社群；查證：已抽原文；多來源）
- **moonshotai/Kimi-K3.1-Pro下載續升**：Hugging Face Trending仍居首位，近月下載由上期約1.17萬增至約1.84萬，讚約1,470。來源：[來源：huggingface.co](https://huggingface.co/models) ；[來源：huggingface.co](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)（官方；查證：已抽原文；多來源）
:::

<div class="ns-footer">
<p>資料截至 2026-11-07 05:30（HKT）；本期覆蓋 2026-11-06 至 2026-11-07。</p>
</div>
