---
title: "今日摘要"
date: 2026-10-15
---

# 每日科技與資安摘要 — 2026-10-15（星期四）

<p class="ns-lead">今日重點 · 永久連結 <a href="/digests/2026-10-15">/digests/2026-10-15</a> · <a href="/digests/">全部存檔</a></p>

<div class="ns-summary">
<p><strong>📌 今日總結</strong>：CISA 新增四項已知利用漏洞，涵蓋防火牆與電郵閘道；NVIDIA 向英國捐 2.5 億美元代理安全算力；香港評微軟十月更新為高度風險。</p>
</div>

::: section tldr 今日速覽
## 今日速覽

- CISA 新增四項 KEV，含 Palo Alto 與 Cisco。
- NVIDIA 五年向英國捐 2.5 億美元代理安全算力。
- HKCERT 評微軟十月更新為高度風險。
:::

::: section products 產品與發布會
## 產品與發布會

- **NVIDIA 五年向英國捐 2.5 億美元代理安全算力**：10月13日公布，每年約 5,000 萬美元算力，經英國 NVIDIA Cloud Partners 提供；部分支援 BOLD、SOFAIR 及 Imperial College London。供應商與商務條款仍待敲定。為何重要：代理安全研究獲國家級算力。來源：[來源：nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-commits-250-million-to-advance-uk-agentic-safety-and-security-research-over-the-next-five-years)（官方；查證：已抽原文）
- **NVIDIA 加大歐洲初創投資**：官方稱全歐累計承諾近 100 億美元，並計劃投資 Doctolib、Entalpic、Genesis AI、Pigment。為何重要：歐洲主權 AI 基建加碼。來源：[來源：blogs.nvidia.com](https://blogs.nvidia.com/blog/france-ecosystem-agentic-computing/)（官方；查證：已抽原文）
:::

::: section github GitHub 值得關注
## GitHub 值得關注

- **Liquid AI 發布 LFM2.5-24B-A2B**：24.0B 參數、啟動約 2.45B，上下文 131,072；官方稱 Apple M5 Max 約 184 token/s，單卡 B300 可逾 21K 輸出 token/s。授權為 LFM 1.0。為何重要：端側 MoE 代理模型再推高。來源：[來源：liquid.ai](https://www.liquid.ai/blog/lfm2-5-24b-a2b)（官方；查證：已抽原文）
:::

::: section ai AI 模型與開源趨勢
## AI 模型與開源趨勢

- **LiquidAI/LFM2.5-24B-A2B**：24.0B（啟動 2.45B），近月下載 4,067，讚數卡頁未列，LFM 1.0。為何重要：開源端側推理模型對標更大 MoE。來源：[來源：huggingface.co](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B)（官方；查證：已抽原文）
- **jialinyyzz/humanizer**：12B 本地改寫模型，近月下載 65,616，讚數卡頁未列，Apache-2.0。為何重要：開源改寫模型熱度急升。來源：[來源：huggingface.co](https://huggingface.co/jialinyyzz/humanizer)（官方；查證：已抽原文）
- **google/embeddinggemma-2**：約 7.40 億參數，近月下載 135,175，讚數卡頁未列，Apache-2.0。為何重要：多模態嵌入仍居熱門前列。來源：[來源：huggingface.co](https://huggingface.co/google/embeddinggemma-2)（官方；查證：已抽原文）
:::

::: section github GitHub 值得關注
## GitHub 值得關注

- **morluto/rea**（MIT，230,246 星、57,342 fork）：以代理連接反組譯與應用行為分析。用途：在無源碼時檢查二進制與應用。為何值得留意：代理輔助逆向工程星數已破 23 萬。來源：[來源：github.com](https://github.com/morluto/rea)（官方；查證：已抽原文）
- **Graphify-Labs/graphify**（Apache-2.0，126,077 星）：把程式庫、文件與設定建成可查詢圖譜。用途：以圖譜取代全文搜尋給編碼代理。為何值得留意：本地 AST 圖譜成為代理記憶方案。來源：[來源：github.com](https://github.com/Graphify-Labs/graphify)（官方；查證：已抽原文）
- **NVIDIA/OpenShell**（Apache-2.0，16,216 星）：為自主代理提供政策沙箱與核心層隔離。用途：限制檔案、系統呼叫與網絡。為何值得留意：晶片廠開源代理執行時。來源：[來源：github.com](https://github.com/NVIDIA/OpenShell)（官方；查證：已抽原文）
- **DietrichGebert/ponytail**（MIT，162,965 星）：令編碼代理先用現有元件、少寫多餘程式。用途：壓低代幣與回歸風險。為何值得留意：代理技能庫星數持續高位。來源：[來源：github.com](https://github.com/DietrichGebert/ponytail)（官方；查證：已抽原文）
:::

::: section global 全球重點新聞
## 全球重點新聞

- **CISA 10月14日新增四項 KEV**：CVE-2026-0322（Palo Alto PAN-OS 程式碼注入）、CVE-2026-76519（Cisco Secure Email Gateway 相對路徑遍歷）、CVE-2026-105133 及 CVE-2026-105134（AhsayCBS 不當認證與指令注入）。美國聯邦限期 2026-10-17。為何重要：防火牆、電郵閘道與備份套件同日入目錄。來源：[來源：cisa.gov](https://www.cisa.gov/news-events/alerts/2026/10/14/cisa-adds-four-known-exploited-vulnerabilities-catalog)（官方；查證：已抽原文）
- **Palo Alto PAN-OS 管理介面已遭有限利用**：CVE-2026-0322｜CVSS 8.6｜PAN-OS 12.2 < 12.2.4 等（Cloud NGFW、Prisma Access 不受影響）｜已被利用(KEV)？是｜修補：12.2.4 起｜HKCERT 級別：未列。需已認證攻擊者，官方稱風險在管理介面暴露於互聯網時最高。為何重要：防火牆管理面仍是現行目標。來源：[來源：security.paloaltonetworks.com](https://security.paloaltonetworks.com/CVE-2026-0322)（官方；查證：已抽原文）
- **Cisco 電郵閘道任意檔案寫入**：CVE-2026-76519｜CVSS 9.8｜啟用 File Reputation 且 Content Scanner Tools 低於 25.3.0.5525｜已被利用(KEV)？是｜修補：廠商已發更新，無可行權宜｜HKCERT 級別：未列。未認證攻擊者可經特製附件寫檔並以 root 執行。為何重要：郵件閘道可被一封信打穿。來源：[來源：cisco.com](https://www.cisco.com/c/en/us/support/docs/csa/cisco-sa-esa-afw-zqYJkjxp.html)（官方；查證：已抽原文）
- **curl 8.23.0 一次修 24 項漏洞**：CVE-2026-92392｜嚴重程度 High｜HTTP/2 上傳 use-after-free，特定條件可遠端執行｜已被利用(KEV)？否｜修補：8.23.0｜HKCERT 級別：未列。同期移除 SMB／SMBS。為何重要：基礎傳輸庫單次修補量偏高。來源：[來源：curl.se](https://curl.se/docs/CVE-2026-92392.html)（官方；查證：已抽原文）
- **OpenAI 產品團隊僱員涉在會議室放置錄音裝置**：傳媒引述檢方，該人於 10月9日被解僱並拘捕；公司稱暫未見模型權重、源碼或客戶資料被取走。為何重要：前線實驗室內部竊聽成執法案件。來源：[來源：techcrunch.com](https://techcrunch.com/2026/10/13/fbi-arrests-openai-employee-accused-of-planting-hidden-recording-device-in-conference-room/)（媒體；查證：已抽原文）
:::

::: section hk 香港本地
## 香港本地

- **HKCERT：微軟每月保安更新（高度風險）**：10月14日。CVE-2026-96951｜CVSS：本頁未列｜Windows Shell｜已被利用(KEV)？是｜修補：2026年10月月度更新｜HKCERT 級別：高度風險。公告亦指 .NET 相關概念驗證碼已公開。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/microsoft-monthly-security-update-october-2026)（官方；查證：已抽原文）
- **HKCERT：Ivanti Connect Secure（極高度風險）**：10月14日。CVE-2026-104935｜CVSS：本頁未列｜Connect Secure｜已被利用(KEV)？是｜修補：見廠商｜HKCERT 級別：極高度風險。遠端攻擊者可觸發遠端執行、繞過限制及仿冒。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/ivanti-connect-secure-remote-code-execution-vulnerability_20261014)（官方；查證：已抽原文）
- **HKCERT：Google Chrome 多個漏洞（中度風險）**：10月14日。受影響為 Chrome 155.0.8059.79（Linux）及 155.0.8059.79/.80（Mac／Windows）以前版本；修補見上述版本起。HKCERT 級別：中度風險。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/google-chrome-multiple-vulnerabilities_20261014)（官方；查證：已抽原文）
- **政府公布本港算力現況**：整體約 5,000 PFLOPS，數碼港超算中心佔 3,000 PFLOPS、使用率逾九成；沙嶺數據園區預計 2027 年首階段運作，全面運作時稱可提供每秒 18 萬 PFLOPS。為何重要：本地 AI 算力供應仍緊。來源：[來源：info.gov.hk](https://www.info.gov.hk/gia/general/202610/14/P2026101400411.htm)（官方；查證：已抽原文）
- **創科加速器先導計劃原則上支持九宗申請**：政府與機構按 1:2 配對，資助上限 3,000 萬元、項目期最多三年；計劃共收逾 50 宗申請。為何重要：加速器網絡開始落地。來源：[來源：info.gov.hk](https://www.info.gov.hk/gia/general/202610/14/P2026100700327.htm)（官方；查證：已抽原文）
:::

::: section events 活動與展會
## 活動與展會

- **CSA HKM Knowledge Sharing Event – October 2026**：日期 2026-10-22｜地點 網上（12:30–13:30）｜形式 廣東話網上研討會｜報名狀態 活動頁已公布。來源：[來源：csahkm.org](https://csahkm.org/2026/10/08/csa-hkm-knowledge-sharing-event-october-2026/)（官方；查證：已抽原文）
- **家長講座（二）分析假新聞與假資訊**：日期 2026-10-24｜地點 線上 Zoom（10:30–12:00）｜形式 粵語講座｜報名狀態 截至 2026-10-24 12:00。來源：[來源：info.edcity.hk](https://info.edcity.hk/zh/event/12255)（官方；查證：已抽原文）
- **HKCERT 中小企免費網絡安全網上研討會（供應鏈場）**：日期 2026-10-28｜地點 網上（15:30–16:30）｜形式 廣東話網上研討會｜報名狀態 免費、截止 2026-10-26。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hkcert-free-cybersecurity-webinar-series-for-smes-2026)（官方；查證：已抽原文）
:::

::: section misc 其他要點
## 其他要點

- **HKCERT：MongoDB 多個漏洞（中度風險）**：影響 Server 7.0 至 7.0.45 前、8.0 至 8.0.34 前、8.3.0 至 8.3.13 前及 9.0 部分版本；點名 CVE-2026-96297 等。HKCERT 級別：中度風險。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/mongodb-multiple-vulnerabilities_20261014)（官方；查證：已抽原文）
- **HKCERT：Adobe 十月更新（中度風險）**：涵蓋 Bridge、ColdFusion、Commerce、Photoshop 等 11 類產品，整體評中度風險。來源：[來源：hkcert.org](https://www.hkcert.org/security-bulletin/adobe-monthly-security-update-october-2026)（官方；查證：已抽原文）
:::

::: section followup 昨日跟進
## 昨日跟進

- **GovWare／SICW**：新加坡會期 2026-10-13 至 2026-10-15，今日為最後一日。
- **香港網安奪旗賽 2026**：免費報名仍至 2026-10-20。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hkcert-capture-the-flag-challenge-2026)（官方；狀態無變）
- **CISA CVE-2026-96951／CVE-2026-104935**：美國聯邦限期 2026-10-16。
:::

<div class="ns-footer">
<p>資料截至 2026-10-15 05:30（HKT）；本期覆蓋 2026-10-14 至 2026-10-15，並補上 72 小時內未報事項。 ⚠️ 今日部分來源未能讀取：CEATEC 2026 官網首頁、GitHub Trending 官方列表頁、Ahsay 廠商公告全文。</p>
</div>
