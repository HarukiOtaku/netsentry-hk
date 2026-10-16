---
title: "今日摘要"
date: 2026-10-17
---

# 每日科技與資安摘要 — 2026-10-17（星期六）

<p class="ns-lead">今日重點 · 永久連結 <a href="/digests/2026-10-17">/digests/2026-10-17</a> · <a href="/digests/">全部存檔</a></p>

<div class="ns-summary">
<p><strong>📌 今日總結</strong>：CISA 將 Fortinet 路徑遍歷與 BeyondTrust 遠端支援驗證繞過列入已知利用目錄；Microsoft 完成二點八兆參數基礎模型預訓練；HKCERT 公布 Chrome 及 Juniper 漏洞；香港金融科技周門票現正發售。</p>
</div>

::: section tldr 今日速覽
## 今日速覽

- CISA 新增 Fortinet 與 BeyondTrust 兩項 KEV，聯邦限期 10 月 19 日。
- Microsoft 完成 MAI-Base-2 預訓練，總參數 2.8 兆、啟動 800 億。
- HKCERT 評 Chrome 為中度風險，修補版本 155.0.8059.84。
:::

::: section products 產品與發布會
## 產品與發布會

- **Microsoft 完成 MAI-Base-2 預訓練**：10 月 15 日。MoE 基礎模型總參數 2.8 兆、啟動 800 億；以 16k 顆 GB200、38 日於 8 至 9 月訓練，平均 MFU 21%、goodput 89%。官方稱預訓練 FLOPs 效率較 DeepSeek-V4-Pro-Base 高 4 至 12 倍，現正進行後訓練，並計劃經 Foundry 向可信夥伴授權權重。為何重要：美資自研基礎模型進入後訓練。來源：[來源：microsoft.ai](https://microsoft.ai/news/frontier-pre-training-at-microsoft-ai/)（官方；查證：已抽原文）
- **Google Chrome 桌面穩定版保安更新**：修補至 Linux 155.0.8059.84、Mac／Windows 155.0.8059.84／.85；GovCERT 點名 CVE-2026-110913 至 CVE-2026-110922，遠端攻擊者可觸發阻斷服務或遠端執行程式碼。為何重要：瀏覽器仍是常見初始入侵面。來源：[來源：govcert.gov.hk](https://www.govcert.gov.hk/en/alerts_detail.php?id=2116)（官方；查證：已抽原文）
- **JetBrains 推出 Mellum2.1 Thinking**：12B 總參數、啟動 2.5B 的 MoE，上下文 131,072；官方自測 LiveCodeBench v6 為 82.0、SWE-bench Verified 為 47.0，授權 Apache-2.0。為何重要：小型編程代理模型強化倉庫內工具使用。來源：[來源：huggingface.co](https://huggingface.co/JetBrains/Mellum2.1-12B-A2.5B-Thinking)（官方；查證：已抽原文）
:::

::: section ai AI 模型與開源趨勢
## AI 模型與開源趨勢

- **meta-models/Muse-Spark-Open-816B-A42B**：約 822B，近月下載 815，讚 434，Muse Model License；816B 總／42B 啟動，上下文 100 萬 token，10 月 15 日開源權重。為何重要：美資開源權重代理模型開始在 Hub 流通。來源：[來源：huggingface.co](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)（官方；查證：已抽原文）
- **JetBrains/Mellum2.1-12B-A2.5B-Thinking**：12B，近月下載 2,939，讚 156，Apache-2.0。為何重要：開源編程思考模型持續出現在熱門集合。來源：[來源：huggingface.co](https://huggingface.co/JetBrains/Mellum2.1-12B-A2.5B-Thinking)（官方；查證：已抽原文）
- **openbmb/MiniCPM-V-4.7-35B-A3B**：35.21B，近月下載 17,553，讚 843，Apache-2.0；官方稱 iPhone 17 Pro Max 約 3GB 記憶體可逾 13 token/s。為何重要：端側多模態 MoE 下載量較上期再升。來源：[來源：huggingface.co](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B)（官方；查證：已抽原文）
:::

::: section github GitHub 值得關注
## GitHub 值得關注

- **morluto/rea**（MIT，278,468 星）：以 MCP 連接代理，分析原生二進位、JavaScript／Electron 與執行期行為。用途：在本機還原應用行為至二進位層。為何值得留意：代理化逆向工程星數繼續急升。來源：[來源：github.com](https://github.com/morluto/rea)（官方；查證：已抽原文）
- **anthropics/claude-plugins-official**（Apache-2.0，37,701 星）：Anthropic 維護的 Claude Code 插件目錄。用途：以標準結構安裝官方及外部插件。為何值得留意：代理插件生態開始有官方目錄。來源：[來源：github.com](https://github.com/anthropics/claude-plugins-official)（官方；查證：已抽原文）
- **ruvnet/ruflo**（MIT）：多代理 harness，含記憶、聯邦、安全審核及 Claude Code／Codex／Hermes 整合。用途：部署可設權限的代理群組與工作流。為何值得留意：代理編排工具仍佔趨勢前列。來源：[來源：github.com](https://github.com/ruvnet/ruflo)（官方；查證：已抽原文）
:::

::: section global 全球重點新聞
## 全球重點新聞

- **CISA 10 月 16 日新增兩項 KEV**：CVE-2025-61624｜CVSS 未於廠商公告列出｜FortiOS、FortiPAM、FortiProxy、FortiSwitchManager｜已被利用(KEV)？是｜修補：FortiOS 7.6.5／7.4.10 或遷至已修分支；FortiProxy 7.6.5／7.4.12；FortiSwitchManager 7.2.8／7.0.7；另有虛擬修補 FG-VD-59270（FMWP 25.120）｜HKCERT 級別：未列此 CVE。需管理員讀寫權限，可經特定 CLI 寫入或刪除檔案。聯邦限期 2026-10-19。為何重要：防火牆管理面持續被用於現行攻擊。來源：[來源：cisa.gov](https://www.cisa.gov/news-events/alerts/2026/10/16/cisa-adds-two-known-exploited-vulnerabilities-catalog)（官方；查證：已抽原文）
- **BeyondTrust Remote Support 驗證繞過列入 KEV**：CVE-2026-102764｜CVSS 9.3（v4.0）｜Remote Support 所有 ≤26.2.3｜已被利用(KEV)？是｜修補：BT26-05-RS（v24.3.1–v26.2.3）；SaaS 已於 2026-10-09 套用；低於 24.3.1 須先升級｜HKCERT 級別：未列。遠端攻擊者可對設備執行檔案操作。聯邦限期 2026-10-19。為何重要：遠端支援設備可被未授權操作。來源：[來源：beyondtrust.com](https://www.beyondtrust.com/trust-center/security-advisories/bt26-05)（官方；查證：已抽原文）
- **Google Chrome 多個漏洞**：CVE-2026-110913 至 CVE-2026-110922｜受影響：155.0.8059.84（Linux）及 155.0.8059.84／.85（Mac／Windows）之前｜已被利用(KEV)？否｜修補：上述版本或更新｜HKCERT 級別：中度風險。為何重要：特製網頁可打到桌面瀏覽器。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/google-chrome-multiple-vulnerabilities_20261016)（官方；查證：已抽原文）
- **Juniper Junos OS 多個漏洞**：CVE-2026-102079、CVE-2026-102080、CVE-2026-102083、CVE-2026-102085｜Junos OS Evolved、MX、SRX｜已被利用(KEV)？否｜修補：見廠商 2026-10 安全公告｜HKCERT 級別：中度風險。可致阻斷服務、資料篡改、洩露、權限提升及繞過限制。為何重要：骨幹路由與防火牆系列同批出補丁。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/juniper-junos-os-multiple-vulnerabilities_20261015)（官方；查證：已抽原文）
:::

::: section hk 香港本地
## 香港本地

- **HKCERT：Google Chrome 多個漏洞（中度風險）**：2026-10-16。CVE-2026-110913 至 CVE-2026-110922｜修補 155.0.8059.84 或之後。HKCERT 級別：中度風險。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/google-chrome-multiple-vulnerabilities_20261016)（官方；查證：已抽原文）
- **HKCERT：Juniper Junos OS 多個漏洞（中度風險）**：2026-10-15。點名 CVE-2026-102079 等四項，影響 Evolved／MX／SRX。HKCERT 級別：中度風險。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/juniper-junos-os-multiple-vulnerabilities_20261015)（官方；查證：已抽原文）
- **HKCERT：SUSE Linux 內核多個漏洞（高度風險）**：原公告 2026-10-02，最後更新 2026-10-16。遠端攻擊者可觸發阻斷服務、權限提升、資料篡改等。HKCERT 級別：高度風險。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/)（官方；查證：已抽原文）
:::

::: section events 活動與展會
## 活動與展會

- **香港金融科技周 x StartmeupHK 2026**：日期 2026-11-02 至 2026-11-06｜地點 香港灣仔香港會議展覽中心（主論壇 11 月 2 至 3 日）｜形式 實體論壇及展覽｜報名狀態 門票發售中（早鳥已於 5 月 31 日結束，行政通行證 2,299 美元）。來源：[來源：fintechweek.hk](https://www.fintechweek.hk/hk/tickets)（官方；查證：已抽原文）
- **數碼港創業投資論壇 2026**：日期 2026-11-04 至 2026-11-05｜地點 香港數碼港 3 期 Core E 3 樓 Function Room 1-3｜形式 實體為主、兼有線上｜報名狀態 登記開放。來源：[來源：calendar.hkust.edu.hk](https://calendar.hkust.edu.hk/node/48678)（官方；查證：已抽原文）
- **Japan IT Week【秋】**：日期 2026-10-21 至 2026-10-23（10:00–17:00）｜地點 日本千葉市幕張メッセ 1–8 廳｜形式 實體展覽（含資訊安全及 AI 基礎設施展）｜報名狀態 10 月 20 日 23:59 前免費預先登記。來源：[來源：japan-it.jp](https://www.japan-it.jp/it/ja-jp.html)（官方；查證：已抽原文）
:::

::: section misc 其他要點
## 其他要點

- **Fortinet 提供虛擬修補**：CVE-2025-61624 除版本升級外，虛擬修補名稱 FG-VD-59270.0day，載於 FMWP 資料庫更新 25.120。來源：[來源：fortiguard.fortinet.com](https://fortiguard.fortinet.com/psirt/FG-IR-26-122)（官方；查證：已抽原文）
- **BeyondTrust SaaS 已先修**：Remote Support 雲端客戶於 2026-10-09 已套用修補；自建實例須於設備介面手動套用，或先升至 24.3.1 以上。來源：[來源：beyondtrust.com](https://www.beyondtrust.com/trust-center/security-advisories/bt26-05)（官方；查證：已抽原文）
:::

::: section followup 昨日跟進
## 昨日跟進

- **CISA CVE-2026-96951／CVE-2026-104935**：美國聯邦限期已於 2026-10-16 屆滿。
- **CISA CVE-2026-0322／CVE-2026-76519 等**：美國聯邦限期為今日 2026-10-17。
- **CEATEC 2026**：已於 2026-10-16 結束。
:::

<div class="ns-footer">
<p>資料截至 2026-10-17 05:30（HKT）；本期覆蓋 2026-10-16 至 2026-10-17，並補上 72 小時內未報之 Juniper 公告。 ⚠️ 今日部分來源未能讀取：Chrome 官方部落格正文、GitHub Trending 官方列表頁、OpenAI GPT-Live 專頁、NVD 上 Fortinet CVSS。</p>
</div>
