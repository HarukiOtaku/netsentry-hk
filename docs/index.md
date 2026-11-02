---
title: "今日摘要"
date: 2026-11-03
---

# 每日科技與資安摘要 — 2026-11-03（星期二）

<p class="ns-lead">今日重點 · 永久連結 <a href="/digests/2026-11-03">/digests/2026-11-03</a> · <a href="/digests/">全部存檔</a></p>

<div class="ns-summary">
<p><strong>📌 今日總結</strong>：金管局公布代理式金融管治及後量子密碼工具包。HKCERT警示Ivanti被利用漏洞與群暉勒索。DeepSeek開源編碼代理。Northflank金鑰外洩。</p>
</div>

::: section tldr 今日速覽
## 今日速覽

- 金管局推出SAGE項目與PQC工具包。
- HKCERT：Ivanti漏洞正被利用；群暉NAS遭勒索。
- DeepSeek開源dsh-superagent研究原型。
:::

::: section products 產品與發布會
## 產品與發布會

- **DeepSeek開源dsh-superagent研究原型**：10月31日提交，針對單一GitHub倉庫的主動式編碼代理，可監聽GitHub，亦可選接飛書；授權請求會開獨立工作項與目錄，並在原對話回覆（例如提交拉取請求）。官方標明僅供參考、非正式產品、非生產就緒，使用前須審查及改寫。為何重要：把「路由器加工人」編碼代理架構公開。來源：[來源：github.com](https://github.com/deepseek-ai/dsh-superagent-prototype)（官方；查證：已抽原文）
- **金管局推出SAGE項目**：在金融科技周公布，全稱為Securing Agentic Finance with Governance and Enablement，賦能業界探索代理式金融並建立管治框架；同時成立跨界別專家小組，並就銀行應用代理式人工智能發表討論文件。為何重要：把代理式人工智能納入金融監管議程。來源：[來源：hkma.gov.hk](https://www.hkma.gov.hk/chi/news-and-media/press-releases/2026/11/20261102-3/)（官方；查證：已抽原文）
- **金管局與香港科技大學推出PQC工具包**：為銀行提供系統化框架及實用工具，指引後量子密碼學過渡；將隨業界應用持續優化。為何重要：量子運算可能破解現有加密。來源：同上（官方；查證：已抽原文）
- **Ensemble TX推進24/7代幣化結算**：實現代幣化存款全天候真實價值交易；已完成代幣化外匯基金票據二級市場試驗，下一步擴大至受監管穩定幣；另與數碼港推出tConnect Launchpad。轉數快可望於今年年底接通銀聯國際，逐步支援逾一億商戶掃碼付款。為何重要：代幣化與跨境支付同步落地。來源：同上（官方；查證：已抽原文）
:::

::: section ai AI 模型與開源趨勢
## AI 模型與開源趨勢

- **baidu/Unlimited-OCR-2**：3.34B參數、授權MIT、讚202、近月下載513；SR-SWA把超長圖文注意力壓到固定參考集（例如512 token）。為何重要：開源OCR把百頁級文件一次解析。來源：[來源：huggingface.co](https://huggingface.co/baidu/Unlimited-OCR-2)（官方；查證：已抽原文）
- **nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B**：總參數約34B、約4.3B啟動（含音訊編碼器），上文65,536 token，支援最長一小時錄音、40種語言；授權OpenMDW-1.1、讚418、近月下載4,276。為何重要：開源語音模型把長錄音與多語轉錄放上單卡。來源：[來源：huggingface.co](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)（官方；查證：已抽原文）
- **mistralai/Mistral-Large-4-1T-A52B**：約1T總參數、每token約52B啟動（含嵌入與輸出層），上文1M，原生多模態；授權Mistral Ecosystem Open-Weight License、讚1,165、近月下載278。為何重要：開源權重把編碼、資安與視覺接地放進同一套權重。來源：[來源：huggingface.co](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B)（官方；查證：已抽原文）
:::

::: section github GitHub 值得關注
## GitHub 值得關注

- **thedotmack/claude-mem**（Apache-2.0，103,031星）：自動擷取工具觀察、生成摘要並注入後續會話。用途：讓代理在重開會話後仍記得專案脈絡。為何值得留意：跨會話記憶外掛持續佔日榜前列。來源：[來源：github.com](https://github.com/thedotmack/claude-mem)（官方；查證：已抽原文）
- **lightpanda-io/browser**（AGPL-3.0，37,010星）：以Zig重寫的無頭瀏覽器，非Chromium分支；基準指100頁峰值記憶體123MB對比無頭Chrome 2GB，執行約5秒對比46秒。用途：給代理做低成本網頁自動化。為何值得留意：代理瀏覽開始離開完整瀏覽器堆疊。來源：[來源：github.com](https://github.com/lightpanda-io/browser)（官方；查證：已抽原文）
- **deepseek-ai/dsh-superagent-prototype**（抽出正文未列授權名稱）：把授權請求路由到獨立工人會話。用途：研究「少佔人手、多交成果」的倉庫代理。為何值得留意：官方開源內部日常開發用的編排原型。來源：[來源：github.com](https://github.com/deepseek-ai/dsh-superagent-prototype)（官方；查證：已抽原文）
:::

::: section global 全球重點新聞
## 全球重點新聞

- **Northflank控制平面機密遭竊，客戶人工智能金鑰被盜用**：10月30日11:43 UTC接Wiz警報，約一小時內認為攻擊路徑已受控；運行中工作負載未見被存取，證據顯示針對控制平面機密。部分客戶報稱平台上的人工智能應用程式介面金鑰遭未授權使用。公司已在車隊修補CVE-2026-98432｜CVSS：公告未列｜受影響：平台控制平面及仍接駁的BYOC叢集｜已被利用(KEV)？公告未寫｜修補：廠商已於車隊打補丁｜HKCERT級別：未有對應公告。現正監察中，獨立取證仍在進行。為何重要：開發平台一被攻破，金鑰可被拿去燒雲端額度。來源：[來源：status.northflank.com](https://status.northflank.com/cmvv0rn5a092f14rutwccodpp)（官方；查證：已抽原文）
- **群暉NAS遭勒索軟件攻擊**：廠商指攻擊者利用一項已於2024年12月修補的漏洞，針對已終止支援的DSM。另已為PHP相依套件發布PHP2Shell相關更新，涵蓋DSM 7.4、7.3、7.2、7.1、7.0及6.2；廠商未確認勒索是否涉及PHP2Shell。為何重要：過期網存裝置仍暴露在公網就會被自動化加密。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/security-alert-ransomware-attacks-targeting-synology-nas-devices_20261102)（官方；查證：已抽原文）
- **群暉DSM多個漏洞**：遠端攻擊者可觸發阻斷服務、敏感資料洩露及資料篡改。受影響：DSM 7.2.1於7.2.1-69057-12前、7.2.2於7.2.2-72806-9前、7.3於7.3.2-86009-4前、7.4於7.4-90075前。修補見Synology-SA-26:13。為何重要：現行支援分支仍須升級才能堵住讀寫與拒絕服務路徑。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/synology-products-multiple-vulnerabilities_20261102)（官方；查證：已抽原文）
- **Ivanti Connect Secure兩項漏洞正被廣泛利用**：可與較早的遠端執行漏洞串聯。CVE-2026-111357｜CVSS：HKCERT未列｜缺關鍵功能認證，本地已驗證攻擊者可提權；CVE-2026-118527｜可預測識別碼，遠端已驗證攻擊者可把受控檔案上傳至已知磁碟位置｜受影響：22.8R2.5及之前、25.1.1.2及之前｜已被利用(KEV)？是｜修補：廠商安全公告｜HKCERT級別：高度風險。為何重要：遠端存取閘道被利用中，修補窗口已過聯邦限期。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/ivanti-connect-secure-multiple-vulnerabilities_20261102)（官方；查證：已抽原文）；[來源：cisa.gov](https://www.cisa.gov/news-events/alerts/2026/10/30/cisa-adds-two-known-exploited-vulnerabilities-catalog)（官方；查證：已抽原文）
:::

::: section hk 香港本地
## 香港本地

- **HKCERT：Ivanti Connect Secure多個漏洞（高度風險）**：2026-11-02。細節見上段CVE。為何重要：本地正式把兩項已知利用漏洞定為高度風險。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/ivanti-connect-secure-multiple-vulnerabilities_20261102)（官方；查證：已抽原文）
- **HKCERT：針對Synology NAS的勒索軟件警報**：2026-11-02。建議立即升級仍支援的DSM、經套件中心更新PHP；DSM 6.2以前應停用受影響套件。懷疑中招須隔離裝置、保存證據，不要依賴付款取回資料。為何重要：家用與中小企網存是本港常見備份點。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/security-alert-ransomware-attacks-targeting-synology-nas-devices_20261102)（官方；查證：已抽原文）
- **HKCERT：Synology產品多個漏洞（中度風險）**：2026-11-02。受影響版本及修補見上段。為何重要：與勒索警報同日發出，現行DSM亦須打補丁。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/synology-products-multiple-vulnerabilities_20261102)（官方；查證：已抽原文）
:::

::: section events 活動與展會
## 活動與展會

- **香港法律周2026**：日期 2026-11-02 至 2026-11-06｜地點 香港（專屬網站及政府直播）｜形式 線下會議，並提供網上直播｜報名狀態 已開幕；法律科技節2026於11月4日起一連三日，法律科技論壇11月5日舉行。來源：[來源：info.gov.hk](https://www.info.gov.hk/gia/general/202611/02/P2026110200643.htm)（官方；查證：已抽原文）
- **香港網安奪旗賽2026預賽**：日期 2026-11-06 至 2026-11-07｜地點 線上｜形式 網上比賽｜報名狀態 截止為2026-11-04 12:00 HKT（明日正午）。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hkcert-capture-the-flag-challenge-2026)（官方；查證：已抽原文）
- **「防範網絡攻擊 — 中小企及非牟利機構的防禦策略」研討會**：日期 2026-11-12 15:30–16:30｜地點 香港灣仔皇后大道東248號大新金融中心12樓，可網上或實體｜形式 粵語講座｜報名狀態 免費，須於2026-11-11 13:00前報名。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hong-kong-s-first-five-year-plan-seminar-series-data-privacy-academy-x-hkcert-seminar-on-stay-ahead-of-cyber-threats-prevention-strategies-for-smes-and-ngos)（官方；查證：已抽原文）
:::

::: section misc 其他要點
## 其他要點

- **dsh-superagent非生產就緒**：官方寫明程式來自日常開發、不少工程由編碼代理完成，可能仍有缺陷，風格亦不統一。來源：[來源：github.com](https://github.com/deepseek-ai/dsh-superagent-prototype)（官方；查證：已抽原文）
- **Northflank客戶須立刻輪替機密**：即使未見異常，亦應先轉人工智能供應商金鑰、雲端憑證、付款金鑰、私鑰及資料庫憑證，並查供應商用量與賬單。來源：[來源：status.northflank.com](https://status.northflank.com/cmvv0rn5a092f14rutwccodpp)（官方；查證：已抽原文）
:::

::: section followup 昨日跟進
## 昨日跟進

- **Ivanti CVE-2026-111357聯邦限期已到**：CISA加入日為2026-10-30，限期2026-11-02；HKCERT同日改以高度風險通報受影響版本。來源：[來源：cisa.gov](https://www.cisa.gov/news-events/alerts/2026/10/30/cisa-adds-two-known-exploited-vulnerabilities-catalog)（官方；查證：已抽原文）
- **香港金融科技周進行中**：2026-11-02至2026-11-06，金管局已於開幕日公布SAGE、PQC工具包及Ensemble新階段。來源：[來源：hkma.gov.hk](https://www.hkma.gov.hk/chi/news-and-media/press-releases/2026/11/20261102-3/)（官方；查證：已抽原文）
- **香港網安奪旗賽報名明日截止**：2026-11-04 12:00 HKT後不再接受申請。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hkcert-capture-the-flag-challenge-2026)（官方；查證：已抽原文）
:::

<div class="ns-footer">
<p>資料截至 2026-11-03 05:30（HKT）；本期覆蓋 2026-11-02 至 2026-11-03。</p>
</div>
