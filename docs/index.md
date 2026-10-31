---
title: "今日摘要"
date: 2026-11-01
---

# 每日科技與資安摘要 — 2026-11-01（星期日）

<p class="ns-lead">今日重點 · 永久連結 <a href="/digests/2026-11-01">/digests/2026-11-01</a> · <a href="/digests/">全部存檔</a></p>

<div class="ns-summary">
<p><strong>📌 今日總結</strong>：考評局國際試系統外洩約1.69萬人資料。私隱署裁定聯合醫院外洩逾5.6萬人違例。GitLab與思科洞仍在已知利用目錄。Mistral公開1兆參數權重。</p>
</div>

::: section tldr 今日速覽
## 今日速覽

- 考評局：約1.69萬名國際試申請人資料外洩，文憑試系統未受影響。
- 私隱署裁定醫管局對承辦商監管不足，聯合醫院外洩56,243人資料違例。
- GitLab遠端執行與思科SSL VPN阻斷服務漏洞仍列已知利用目錄。
:::

::: section products 產品與發布會
## 產品與發布會

- **Mistral Large 4（Le Chonk）開源權重上線**：2026-10-29把約1兆總參數、每token約490億活躍參數的多模態MoE放到Hugging Face，上文100萬token；授權為Mistral Ecosystem Open-Weight（修改MIT，Model-as-a-Service須另取商業授權）。API定價每百萬token輸入0.70美元、輸出2.10美元。官方稱Artificial Analysis Coding Agent Index 48%、Terminal-Bench 4.0為41%、Cyber Index 51%。為何重要：開源權重把編碼與防禦網安一併標成主場。來源：[來源：mistral.ai](https://mistral.ai/news/mistral-large-4-oss/)（官方；查證：已抽原文）；[來源：huggingface.co](https://huggingface.co/blog/mistral-large4)（官方；查證：已抽原文）
:::

::: section github GitHub 值得關注
## GitHub 值得關注

- **GitLab Orbit正式推出**：官方稱把合併請求、流水線、部署與漏洞做成可查詢圖譜；測試指代理重試可減最多45倍，設計夥伴可在七分鐘內查詢3,400萬個實體。為何重要：把漏洞影響範圍接到擁有團隊。來源：[來源：about.gitlab.com](https://about.gitlab.com/blog/gitlab-orbit-ga/)（官方；查證：已抽原文）
:::

::: section ai AI 模型與開源趨勢
## AI 模型與開源趨勢

- **mistralai/Mistral-Large-4-1T-A52B**：約1T總參數、49B活躍、上文1M token；授權Mistral Ecosystem Open-Weight。已抽模型卡未列近月下載量。為何重要：開源權重強調網安與編碼代理。來源：[來源：huggingface.co](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B)（官方；查證：已抽原文）
- **nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B**：總參數約34B、活躍約4.3B，上文65,536 token，支援40種語言、最長一小時錄音；授權OpenMDW 1.1；Hugging Face網誌附列下載約24.4k、讚數539。發布日期2026-10-28。為何重要：開源語音模型把轉寫、翻譯與說話人標記放進同一權重。來源：[來源：huggingface.co](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)（官方；查證：已抽原文）；[來源：huggingface.co](https://huggingface.co/blog/nvidia/nemotron-transcribe-granary)（官方；查證：已抽原文）
- **baidu/Unlimited-OCR-2**：2026-10-27發布，以SR-SWA處理超長文件解析。已抽頁未列參數量、授權及下載數。為何重要：開源OCR把超長文件注意計算壓成固定工作集。來源：[來源：huggingface.co](https://huggingface.co/baidu/Unlimited-OCR-2)（官方；查證：已抽原文）
:::

::: section github GitHub 值得關注
## GitHub 值得關注

- **thedotmack/claude-mem**（Apache-2.0，已抽頁顯示約107.3k星）：為編碼代理做跨會話記憶，壓縮後再注入後續對話。用途：減少代理失憶。為何值得留意：日榜前列的代理記憶外掛。來源：[來源：github.com](https://github.com/thedotmack/claude-mem)（官方；查證：已抽原文）
- **CopilotKit/OpenBot**（MIT，已抽頁顯示約9.1k星）：開源AI同事，每個機器人有獨立瀏覽器、檔案與工具，行動事先決定並事後留痕。用途：把多個代理放進可審計工作區。為何值得留意：開源個人代理工作區新進日榜。來源：[來源：github.com](https://github.com/CopilotKit/OpenBot)（官方；查證：已抽原文）
- **cloudflare/security-audit-skill**（MIT，已抽頁顯示約55.0k星）：六階段保安審計技能，獨立代理驗證發現並輸出機器可讀報告。用途：讓編碼代理做有驗證的程式碼審計。為何值得留意：代理保安審計技能持續高星。來源：[來源：github.com](https://github.com/cloudflare/security-audit-skill)（官方；查證：已抽原文）
:::

::: section global 全球重點新聞
## 全球重點新聞

- **GitLab未認證遠端執行程式碼入KEV**：CVE-2026-97229｜CVSS 10.0｜受影響：CE／EE，已抽媒體指須升至19.2.8、19.3.5、19.4.2或更新｜已被利用(KEV)？是，CISA於2026-10-29加入｜修補：上述版本或更新｜HKCERT級別：未抽對應該編號的新公告。CISA指特製正規表達式可經CI/CD設定在伺服器執行程式碼。媒體稱Alpine Linux實例曾在未完成修補時遇攻擊並重建。為何重要：開發平台利用鏈獲官方確認。來源：[來源：cisa.gov](https://www.cisa.gov/news-events/alerts/2026/10/29/cisa-adds-two-known-exploited-vulnerabilities-catalog)（官方；查證：已抽原文）；[來源：heise.de](https://www.heise.de/en/news/Attackers-target-Cisco-firewalls-and-GitLab-flaw-11505764.html)（媒體；查證：已抽原文）
- **思科ASA／FTD SSL VPN阻斷服務入KEV**：CVE-2026-76418｜CVSS 8.6｜受影響：啟用SSL VPN且隧道群組設二次驗證的ASA／FTD｜已被利用(KEV)？是，CISA於2026-10-29加入｜修補：ASA 9.16.4.104、9.18.4.96、9.20.4.50、9.22.3.200、9.23.1.48、9.24.1.27／9.24.10.1；FTD 7.0.11、7.2.13、7.4.9、7.6.7、7.7.14、10.0.3、10.1.1｜HKCERT級別：高度風險。思科指無正式權宜措施，特製請求可令裝置重啟。為何重要：邊緣防火牆VPN路徑正被利用。來源：[來源：cisco.com](https://www.cisco.com/c/en/us/support/docs/csa/cisco-sa-asaftd-tunnel-dos-s6mgkb75.html)（官方；查證：已抽原文）；[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/cisco-products-denial-of-service-vulnerability_20261029)（官方；查證：已抽原文）
- **Mistral為防禦網安開源權重設護欄**：官方稱對惡意網安請求平均拒絕率96.6%；企業設計夥伴可預覽專用變體，限於自有或獲授權系統。為何重要：開源模型把防禦用途與攻擊拒絕分開寫進產品政策。來源：[來源：mistral.ai](https://mistral.ai/news/mistral-large-4-oss/)（官方；查證：已抽原文）
:::

::: section hk 香港本地
## 香港本地

- **考評局：約16,900名國際試申請人資料外洩**：2026-10-29發現、10-30公布，涉兩項國際考試、居於內地的申請人，資料包括姓名、出生日期及電郵；已報警及通報私隱專員公署。局方稱涉事系統僅用於小規模國際考試，文憑試及絕大部分國際考試報考系統獨立，暫無證據顯示受影響。為何重要：考試機構國際試系統遭攻擊。來源：[來源：hkeaa.edu.hk](https://www.hkeaa.edu.hk/DocLibrary/Media/PR/PR_20261030_eng.pdf)（官方；查證：已抽原文）；[來源：news.rthk.hk](https://news.rthk.hk/rthk/ch/component/k2/1876013-20261030.htm)（官方；查證：已抽原文）
- **私隱署裁定醫管局聯合醫院外洩違例**：事故影響56,243人（55,761名病人、482名員工），資料含姓名、香港身份證號碼、手術程序及預約日期等，曾外洩至暗網。承辦商員工未獲授權匯出資料後被捕；醫管局仍未能確定匯出方法。公署指對承辦商監察、風險評估及權限管控不足，違反《私隱條例》，已送達執行通知。為何重要：醫療供應鏈監管缺失被定性違例。來源：[來源：hk01.com](https://www.hk01.com/%E7%A4%BE%E6%9C%83%E6%96%B0%E8%81%9E/60405409/%E8%81%AF%E5%90%88%E9%86%AB%E9%99%A2%E9%80%BE5%E8%90%AC%E7%97%85%E4%BA%BA%E8%B3%87%E6%96%99%E5%A4%96%E6%B3%84-%E7%A7%81%E9%9A%B1%E7%BD%B2%E5%AE%8C%E6%88%90%E8%AA%BF%E6%9F%A5%E8%AD%81%E9%81%95%E4%BE%8B-%E5%B7%B2%E6%8C%87%E7%A4%BA%E7%B3%BE%E6%AD%A3)（媒體；查證：已抽原文）
- **HKCERT：思科產品阻斷服務漏洞（高度風險）**：2026-10-29。CVE-2026-76418｜CVSS未於HKCERT頁列明｜Cisco Secure Firewall ASA／FTD｜已被利用(KEV)？HKCERT註明正被廣泛利用｜修補：按思科公告｜HKCERT級別：高度風險。可致裝置重啟。為何重要：本港把該VPN洞列為當日高度風險新公告。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/cisco-products-denial-of-service-vulnerability_20261029)（官方；查證：已抽原文）
:::

::: section events 活動與展會
## 活動與展會

- **香港金融科技周 x StartmeupHK 2026**：日期 2026-11-02 至 2026-11-06（主論壇11月2至3日）｜地點 香港灣仔香港會議展覽中心｜形式 線下論壇及展覽，另設深圳行程｜報名狀態 門票發售中（行政通行證2,899美元、基本719美元、初創329美元）；大灣區企業創新行已截止報名。來源：[來源：fintechweek.hk](https://www.fintechweek.hk/cn/tickets)（官方；查證：已抽原文）；[來源：info.gov.hk](https://www.info.gov.hk/gia/general/202610/23/P2026102100283.htm)（官方；查證：已抽原文）
- **HKtag 網絡安全開發大賽**：日期 報名至 2026-11-13 23:59；開發期至2027年4月｜地點 網上報名，工作坊場地待公布｜形式 高中／大專組隊開發開源CTF平台，每隊最多六人，費用全免｜報名狀態 接受報名。來源：[來源：events.hk-tag.org](https://events.hk-tag.org/wp-content/uploads/2026/10/2026-10-09-events-page-ctf-platform.html)（官方；查證：已抽原文）
- **香港網安奪旗賽2026預賽**：日期 2026-11-06 至 2026-11-07｜地點 線上｜形式 網上比賽｜報名狀態 截止仍為2026-11-04 12:00 HKT。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hkcert-capture-the-flag-challenge-2026)（官方；查證：已抽原文）
- **中國國際高新技術成果交易會（高交會）**：日期 2026-11-26 至 2026-11-28｜地點 深圳國際會展中心（寶安新館）｜形式 線下展覽｜報名狀態 觀眾電子門票預登記。來源：[來源：jufair.com](https://www.jufair.com/exhibition/chtf/)（媒體；查證：已抽原文）
:::

::: section misc 其他要點
## 其他要點

- **GitLab官方套件才含Ruby修補**：媒體指自行編譯Ruby時升級GitLab本體不一定關上CVE-2026-97229。來源：[來源：heise.de](https://www.heise.de/en/news/Attackers-target-Cisco-firewalls-and-GitLab-flaw-11505764.html)（媒體；查證：已抽原文）
- **思科無正式權宜措施**：官方建議升級至已修復版本；移除二次驗證會降低VPN安全，只宜作權宜。來源：[來源：cisco.com](https://www.cisco.com/c/en/us/support/docs/csa/cisco-sa-asaftd-tunnel-dos-s6mgkb75.html)（官方；查證：已抽原文）
:::

::: section followup 昨日跟進
## 昨日跟進

- **GitLab與思科KEV聯邦限期為今日**：CVE-2026-97229、CVE-2026-76418於2026-10-29加入，上期所報限期為2026-11-01；今日目錄仍列該兩項。來源：[來源：cisa.gov](https://www.cisa.gov/news-events/alerts/2026/10/29/cisa-adds-two-known-exploited-vulnerabilities-catalog)（官方；查證：已抽原文）
- **Ivanti Connect Secure權限提升明日到期**：CVE-2026-111357聯邦限期為2026-11-02。來源：[來源：cisa.gov](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)（官方；查證：已抽原文）
- **「以攻築防2026」已於2026-10-31晚上結束**：三日兩夜60小時演練按原定完結。來源：[來源：info.gov.hk](https://www.info.gov.hk/gia/general/202610/29/P2026102900334.htm)（官方；查證：上期已抽，完結日未變）
:::

<div class="ns-footer">
<p>資料截至 2026-11-01 05:30（HKT）；本期覆蓋 2026-10-31 至 2026-11-01。</p>
</div>
