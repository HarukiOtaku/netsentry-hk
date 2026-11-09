---
title: "今日摘要"
date: 2026-11-10
---

# 每日科技與資安摘要 — 2026-11-10（星期二）

<p class="ns-lead">今日重點 · 永久連結 <a href="/digests/2026-11-10">/digests/2026-11-10</a> · <a href="/digests/">全部存檔</a></p>

<div class="ns-summary">
<p><strong>📌 今日總結</strong>：CISA將OpenSSH等四漏洞列入已知被利用目錄。Anthropic推出Fable 5.2。HKCERT警示SonicWall SSLVPN遭廣泛利用及ModSecurity繞過。</p>
</div>

::: section tldr 今日速覽
## 今日速覽

- CISA新增四項KEV，包括OpenSSH、GPUStack、FreeSWITCH與Aspera。
- Anthropic推出Fable 5.2，輸入價每百萬token 8美元。
- HKCERT：SonicWall SSLVPN遭廣泛利用；ModSecurity驗證碼已公開。
:::

::: section products 產品與發布會
## 產品與發布會

- **Anthropic推出Claude Fable 5.2與Mythos 5.2**：11月9日發布。兩者為同一底層模型；Fable全面開放，Mythos須經生命科學或網絡核證計劃。輸出較5.1快最多約30%，定價每百萬輸入／輸出token 8／40美元；可選快速模式16／80美元，生成速度最多約2.5倍。Fable 5.2在FrontierCode 2.0（Xhigh）得49.1%，高於5.1的32.4%。API識別碼為`claude-fable-5-2`，亦上架Amazon Bedrock。為何重要：高階技術模型降價並加快。來源：[來源：anthropic.com](https://www.anthropic.com/claude-fable-and-mythos-5-2) （官方；查證：已抽原文）
- **Google擴充第八代TPU：8tx與8i Max**：11月9日。8tx針對機密推理與小規模訓練；8i Max把兩顆8i封入同一封裝，稱計算、SRAM與HBM頻寬均為8i的兩倍。連同4月的8t、8i，同代共四套系統。為何重要：代理負載開始按機密與超長上下文分芯。來源：[來源：blog.google](https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/) （官方；查證：已抽原文）
- **ChatGPT Enterprise上架AWS Marketplace**：11月9日。機構可用現有AWS採購與賬單訂閱，合資格支出可計入AWS承諾；亦涵蓋Healthcare與Financial Services。OpenAI稱ChatGPT每週使用者逾12億。為何重要：企業採購通道與雲承諾對接。來源：[來源：openai.com](https://openai.com/index/chatgpt-enterprise-aws-marketplace/) （官方；查證：已抽原文）
- **Meta推出Muse Ember**：11月9日，定位最小、最省的Muse模型，處理工具呼叫、編碼子任務、路由、擷取與長文解析。官方圖表在max檔顯示每任務成本約0.136美元、指數約35.8，對照Claude Haiku 5.5約0.411美元、36.2。AutomationBench-AA為37.8，高於Haiku 13.9。為何重要：代理高頻步驟改打價格戰。來源：[來源：research.meta.ai](https://research.meta.ai/blog/muse-ember) （官方；查證：已抽原文）
:::

::: section ai AI 模型與開源趨勢
## AI 模型與開源趨勢

- **Qwen/Qwen3.8-27B**：圖像—文本，27B參數；Hub趨勢顯示近月下載約751萬、讚約1.95萬。授權Apache-2.0。為何重要：開源多模態仍以下載量領跑。來源：[來源：huggingface.co](https://huggingface.co/models?sort=trending) ；[來源：huggingface.co](https://huggingface.co/Qwen/Qwen3.8-27B) （官方；查證：已抽原文；多來源）
- **deepseek-ai/DeepSeek-V4.1-Flash-1017**：圖像—文本，約7630億參數；近月下載約31.2萬、讚約5,430。授權MIT。為何重要：開源權重持續佔趨勢前列。來源：[來源：huggingface.co](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) （官方；查證：已抽原文）
- **unsloth/Qwen3.8-Flash-Next-GGUF**：圖像—文本，約1770億參數；近月下載約169萬、讚約1,550。授權未在已抽列表列明。為何重要：量化包下載量緊貼旗艦權重。來源：[來源：huggingface.co](https://huggingface.co/models?sort=trending) （官方；查證：已抽原文）
- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion…GGUF**：約270億參數；近月下載約153萬、讚約2,770，約16小時前更新。授權未在已抽列表列明。為何重要：社群微調包進入趨勢前列。來源：[來源：huggingface.co](https://huggingface.co/models?sort=trending) （官方；查證：已抽原文）
:::

::: section github GitHub 值得關注
## GitHub 值得關注

- **dsx-ai-factory/nvke**（Apache-2.0，約995星，當日約+345）：在自有NVIDIA GPU裸機上提供Kubernetes管理平面，預覽版不建議生產。用途：平台團隊代客開叢集。為何值得留意：當日日榜升幅居前列。來源：[來源：github.com](https://github.com/dsx-ai-factory/nvke) ；[來源：githubtrending.today](https://githubtrending.today/) （官方／社群；查證：已抽原文；多來源）
- **meta/astryx**（MIT，約1.38萬星）：開源設計系統，150多個元件，標榜供人與代理共用同一套API與CLI。用途：以同一參考實作介面。為何值得留意：廠商設計系統進入日榜。來源：[來源：github.com](https://github.com/meta/astryx) （官方；查證：已抽原文）
- **ranxianglei/billion-context**（授權標Other，約4,475星，當日約+460）：長會話上下文壓縮外掛，稱可把視窗壓至約10萬token並節省約5倍token。用途：把月級長會話塞進短上下文。為何值得留意：當日增幅居前列。來源：[來源：github.com](https://github.com/ranxianglei/billion-context) ；[來源：githubtrending.today](https://githubtrending.today/) （官方／社群；查證：已抽原文；多來源）
:::

::: section global 全球重點新聞
## 全球重點新聞

- **CISA將四項漏洞列入KEV**：11月9日。CVE-2026-102895｜CVSS：公告未列｜受影響：GPUStack｜已被利用(KEV)？是｜修補：依供應商｜HKCERT級別：未見對應新公告。未授權管理存取並可建持久管理員金鑰。CVE-2026-116779｜FreeSWITCH程式碼注入。CVE-2026-123158｜OpenSSH（見跟進）。CVE-2026-123218｜IBM Aspera Faspex授權錯誤，IBM支援節點7295921。為何重要：遠端管理與語音交換面已有實戰利用。來源：[來源：cisa.gov](https://www.cisa.gov/news-events/alerts/2026/11/09/cisa-adds-four-known-exploited-vulnerabilities-catalog) （官方；查證：已抽原文）
- **GhostAction再襲GitHub Actions**：11月9日報道。Socket稱10月7日起逾500個帳號提交惡意工作流程，波及數萬個儲存庫，搜尋雲端與人工智能金鑰及完整git歷史；10月9日起平台開始攔截執行。為何重要：CI秘密與歷史金鑰仍被重用。來源：[來源：gbhackers.com](https://gbhackers.com/ghostaction-supply-chain/) （媒體；查證：已抽原文）
- **NVIDIA、Rebellions與SK Telecom合作主權AI基建**：11月8日。Rebellions計劃以NVLink Fusion把新一代R200 NPU接入NVIDIA機架級推理平台，SK Telecom擬於其AI數據中心部署，獲韓國科學ICT部支持。為何重要：亞洲主權AI改走NVLink互連。來源：[來源：nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-rebellions-and-sk-telecom-announce-collaboration-to-advance-sovereign-ai-infrastructure-with-nvidia-nvlink-fusion) （官方；查證：已抽原文）
:::

::: section hk 香港本地
## 香港本地

- **HKCERT：SonicWall SonicOS多個漏洞（中度風險）**：2026-11-09。CVE-2026-19868等｜CVSS：公告未列｜受影響：SonicOS Gen7 7.3.3-7015及之後、Gen8 8.2.2-8015及之後｜已被利用(KEV)？是（CISA已列CVE-2026-19868）｜修補：SNWLID-2026-0014｜HKCERT級別：中度風險。公告稱CVE-2026-19868正被廣泛利用，SSLVPN可能讓持有替代驗證憑證的用戶繞過SAML及MFA。為何重要：遠端登入面已有實戰利用。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/sonicwall-sonicos-sslvpn-security-restriction-bypass-vulnerability_20261109) （官方；查證：已抽原文）
- **HKCERT：ModSecurity繞過保安限制（中度風險）**：2026-11-09。CVE-2026-104269｜CVSS：公告未列｜受影響：≥3.0.0且<3.0.17｜已被利用(KEV)？已抽CISA目錄未列｜修補：3.0.17｜HKCERT級別：中度風險。概念驗證碼已公開；多部分解析未優先採用RFC 2231 `filename*`，後端可能收到繞過WAF檢查的檔名。為何重要：WAF與應用解析不一致可被繞過。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/modsecurity-security-restriction-bypass-vulnerability_20261109) （官方；查證：已抽原文）
- **HKCERT：ChromeOS多個漏洞（中度風險）**：2026-11-09。CVE-2026-79235等｜CVSS：公告未列｜受影響：ChromeOS 16836.32.0（瀏覽器156.0.8078.93）之前｜已被利用(KEV)？已抽目錄未列｜修補：穩定通道更新｜HKCERT級別：中度風險。可致篡改、繞過、資料洩露及遠端執行程式碼。為何重要：終端瀏覽器作業系統需對號。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/chromeos-multiple-vulnerabilities_20261109) （官方；查證：已抽原文）
- **HKCERT：Veeam產品阻斷服務（中度風險）**：2026-11-09。CVE-2026-98432｜CVSS：公告未列｜受影響：Veeam Software／Infrastructure Appliance 13.1、Backup & Replication 13.1／12.3輔助裝置等｜已被利用(KEV)？已抽目錄未列｜修補：KB4966｜HKCERT級別：中度風險。為何重要：備份鏈中斷會放大勒索影響。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/veeam-products-denial-of-service-vulnerability_20261109) （官方；查證：已抽原文）
:::

::: section events 活動與展會
## 活動與展會

- **網絡安全技術論壇及高峰會2026（CSSS 2026）**：日期 2026-12-18 09:00–18:00｜地點 香港灣仔博覽道1號香港會議展覽中心2樓S221–S230｜形式 業界高峰會，主辦為數字辦、生產力局及HKIRC｜報名狀態 轉載頁顯示RSVP，須預先登記。來源：[來源：inno-thought.com](https://www.inno-thought.com/event-details/cybersecurity-symposium-and-summit-2026) （媒體轉載；查證：已抽原文）
- **Entrepreneur Day（E-DAY）**：日期 2026-11-19 至 2026-11-20｜地點 香港（貿發局主辦，數碼港活動曆列出）｜形式 初創對接與分享｜報名狀態 見主辦頁。來源：[來源：cyberport.hk](https://www.cyberport.hk/en/news/events/) （官方；查證：已抽原文）
- **HKCERT中小企免費網絡安全網上研討會（第四場）**：日期 2026-11-25 15:30–16:30｜地點 線上｜形式 廣東話網上講座，主題為雲端依賴、智能裝置與營運韌性｜報名狀態 免費須預先登記，截止2026-11-23。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hkcert-free-cybersecurity-webinar-series-for-smes-2026) （官方；查證：已抽原文）
:::

::: section misc 其他要點
## 其他要點

- **Hugging Face趨勢仍由Qwen3.8-27B以下載量壓陣**：近月約751萬次；DeepSeek-V4.1-Flash-1017讚數約5,430居開源前列。來源：[來源：huggingface.co](https://huggingface.co/models?sort=trending) （官方；查證：已抽原文）
- **GitHub日榜新面孔以GPU Kubernetes管理平面為主**：nvke當日約+345星。來源：[來源：githubtrending.today](https://githubtrending.today/) （社群；查證：已抽原文）
:::

::: section followup 昨日跟進
## 昨日跟進

- **OpenSSH CVE-2026-123158已入CISA KEV**：CISA於11月9日列入，指Linux上OpenSSH可致驗證繞過；HKCERT先前評中度風險、修補為10.6p2。來源：[來源：cisa.gov](https://www.cisa.gov/news-events/alerts/2026/11/09/cisa-adds-four-known-exploited-vulnerabilities-catalog) （官方；查證：已抽原文）
- **「防範網絡攻擊」研討會報名明日截止**：2026-11-12 15:30–16:30，灣仔皇后大道東248號大新金融中心12樓或網上視像；須於2026-11-11 13:00前登記。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hong-kong-s-first-five-year-plan-seminar-series-data-privacy-academy-x-hkcert-seminar-on-stay-ahead-of-cyber-threats-prevention-strategies-for-smes-and-ngos) （官方；查證：已抽原文）
- **NousResearch/Arete-27B授權已核實**：Apache-2.0；模型頁顯示近月下載約1,747、讚約283，27B參數。來源：[來源：huggingface.co](https://huggingface.co/NousResearch/Arete-27B) （官方；查證：已抽原文）
:::

<div class="ns-footer">
<p>資料截至 2026-11-10 05:30（HKT）；本期覆蓋 2026-11-09 至 2026-11-10，並補錄上次未報之11月8日NVIDIA公告。</p>
</div>
