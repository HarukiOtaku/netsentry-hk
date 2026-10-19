---
title: "今日摘要"
date: 2026-10-20
---

# 每日科技與資安摘要 — 2026-10-20（星期二）

<p class="ns-lead">今日重點 · 永久連結 <a href="/digests/2026-10-20">/digests/2026-10-20</a> · <a href="/digests/">全部存檔</a></p>

<div class="ns-summary">
<p><strong>📌 今日總結</strong>：美國國土安全部下令文職機關剔除 DeepSeek 及以其模型開發的服務；微軟擴展 Project Perception 以監察企業代理；MiniMax 推出 M3.1 Flash；HKCERT 列思科電郵閘道漏洞為高度風險並指正被利用。</p>
</div>

::: section tldr 今日速覽
## 今日速覽

- 美國文職機關須移除 DeepSeek 產品及第三方衍生服務。
- 微軟以 Guardian Agents 持續監督企業內人工智能代理。
- MiniMax 推出 M3.1 Flash，官方稱代理任務成本降七成。
:::

::: section products 產品與發布會
## 產品與發布會

- **MiniMax 推出 M3.1 Flash**：10 月 19 日正式上線 API、M Plan 及 MiniMax Code。官方稱匿名測試代號 Space Bunny 已處理逾 200 萬億 token；線上推理近 3 倍快、代理任務使用成本降 70%；每百萬 token 定價輸入 0.15 美元、輸出 0.60 美元、快取輸入 0.015 美元；日常輸出可達每秒 200 以上 token，中位數 170 以上。自報 DeepSWE v1.1 73.7%、OSWorld V2 61.7、CyberGym 82%、BankerToolBench 76.2。權重稍後開放。為何重要：代理與編程模型價格戰再下一城。來源：[來源：minimax.io](https://www.minimax.io/blog/minimax-m31f)（官方；查證：已抽原文）
- **微軟擴展 Project Perception 監察「代理內部人」**：10 月 19 日，保安業務負責人發文指前沿模型不論來源都不可自動信任，企業代理常過權、可存取資料與系統。Perception 以感測、情境與執行器為代理分配身分、容器與權限，並以 Guardian Agents 按動態風險即時監督。為何重要：防守焦點由外來攻擊轉到內部代理。來源：[來源：blogs.microsoft.com](https://blogs.microsoft.com/blog/2026/10/19/securing-the-agentic-insider/)（官方；查證：已抽原文）
- **DeepSeek-V4.1-Flash-1017 開源小更新**：Hugging Face 標為 763B、MIT，熱門榜約 17,900 次下載、1,660 讚；官方稱相對前版縮短輸出並改進推理、編程與代理評測，上下文 100 萬 token。為何重要：開源編程代理權重持續迭代。來源：[來源：huggingface.co](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)（官方；查證：已抽原文）
:::

::: section ai AI 模型與開源趨勢
## AI 模型與開源趨勢

- **openbmb/MiniCPM-V-4.7-35B-A3B**：35B-A3B 混合專家視覺語言模型，熱門榜約 76,400 次下載、1,060 讚；官方稱可在 iPhone 17 Pro Max 以約 3GB 記憶體達每秒 13 以上 token。授權未於已抽原文列明。為何重要：端側混合專家視覺模型下載量較上期明顯上升。來源：[來源：huggingface.co](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B)（官方；查證：已抽原文）
- **nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4**：120B 總參數、12B 啟動，OpenMDW-1.1；熱門榜約 9,320 次下載、169 讚；NVFP4 量化，上下文最長 100 萬 token。為何重要：開源多模態代理模型進入熱門榜。來源：[來源：huggingface.co](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)（官方；查證：已抽原文）
- **black-forest-labs/flux-3-image-klein-comfy**：約 5.6B 圖像變換器，熱門榜約 393,000 次下載、949 讚；FLUX Kommunity License。為何重要：開源圖像生成編輯權重下載量居前列。來源：[來源：huggingface.co](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)（官方；查證：已抽原文）
:::

::: section github GitHub 值得關注
## GitHub 值得關注

- **NVIDIA/SkillSpector**（Apache-2.0，約 2.06 萬星）：掃描 Claude Code、Codex 及 MCP 技能的提示注入、外洩與供應鏈風險。用途：安裝代理技能前做靜態檢查。為何值得留意：NVIDIA 官方掃描器當日仍有提交。來源：[來源：github.com](https://github.com/NVIDIA/SkillSpector)（官方；查證：已抽原文）
- **HKUDS/CLI-Anything**（Apache-2.0，約 5.51 萬星）：把現有軟件變成代理可呼叫的命令列介面。用途：讓代理以統一方式操作桌面與專業軟件。為何值得留意：當日熱門榜錄得約 607 星。來源：[來源：github.com](https://github.com/HKUDS/CLI-Anything)（官方；查證：已抽原文）
- **usestrix/strix**（Apache-2.0，約 7.00 萬星）：開源人工智能滲透測試工具，用以發現並修補應用漏洞。用途：以代理自動化安全測試。為何值得留意：開源攻防代理庫星數高、近日仍有提交。來源：[來源：github.com](https://github.com/usestrix/strix)（官方；查證：已抽原文）
:::

::: section global 全球重點新聞
## 全球重點新聞

- **美國下令文職機關剔除 DeepSeek**：國土安全部通知（文件號 2026-21447，案號 DHS-2026-0628）依據《2018 年聯邦採購供應鏈安全法》，排除杭州深度求索人工智能及其關聯實體的資訊科技產品與服務，並要求文職機關資訊系統移除 DeepSeek、關聯產品，以及使用 DeepSeek 實作開發的第三方產品與服務。通知 10 月 19 日 8:45 提交，預定 10 月 20 日刊憲。英國廣播公司報道禁令適用財政部、國務院、司法部等文職機關，國防部所屬機關不包括在內。為何重要：開源權重模型首次被整府供應鏈令涵蓋第三方衍生服務。來源：[來源：public-inspection.federalregister.gov](https://public-inspection.federalregister.gov/2026-21447.pdf)（官方；查證：已抽原文）；[來源：bbc.co.uk](https://www.bbc.co.uk/news/articles/cjkgeq0k1wevo)（媒體；查證：已抽原文）
- **思科 Secure Email Gateway 任意檔案寫入已被利用**：CVE-2026-76519｜CVSS 3.1 9.8｜AsyncOS 受影響版本須升至 15.5.5-014 或 16.5.0-780；16.0 須遷移；Content Scanner Tools 須 25.3.0.5525 或之後｜已被利用(KEV)？是｜HKCERT 級別：高度風險。未認證攻擊者在啟用檔案信譽服務時，可經特製附件寫入任意檔案並以 root 執行指令。雲端閘道由思科處理；自託管無暫行措施。為何重要：郵件閘道可成權限最高的入侵點。來源：[來源：sec.cloudapps.cisco.com](https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-esa-afw-zqYJkjxp)（官方；查證：已抽原文）
:::

::: section github GitHub 值得關注
## GitHub 值得關注

- **本期未見 CISA 於 10 月 17 至 19 日新增 KEV 官方警報**。上期 BeyondTrust 與 Fortinet 條目的美國聯邦限期已過。為何重要：新利用面暫未擴張，既有限期已到。來源：[來源：cisa.gov](https://www.cisa.gov/news-events/alerts/2026/10/16/cisa-adds-two-known-exploited-vulnerabilities-catalog)（官方；查證：已抽原文）
:::

::: section hk 香港本地
## 香港本地

- **HKCERT：思科 Secure Email Gateway 遠端執行程式碼漏洞（高度風險）**：2026-10-15。CVE-2026-76519｜CVSS 未於 HKCERT 頁列出｜見上節廠商版本｜已被利用(KEV)？HKCERT 註明正被廣泛利用｜修補：見思科公告｜HKCERT 級別：高度風險。可致權限提升、遠端執行程式碼及資料篡改。為何重要：本地高度風險公告對應現行利用。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/cisco-secure-email-gateway-remote-code-execution-vulnerability_20261015)（官方；查證：已抽原文）
- **HKCERT：IBM WebSphere 產品多個漏洞（中度風險）**：2026-10-15。CVE-2026-17615 等共 15 個編號｜CVSS 未列｜WebSphere Application Server 8.5、9.0，以及 Liberty 17.0.0.3–26.0.0.10 等｜已被利用(KEV)？未列｜修補：IBM 支援文件｜HKCERT 級別：中度風險。可致阻斷服務、繞過限制、資料洩露、仿冒及篡改。為何重要：企業應用伺服器同日有本地公告。來源：[來源：hkcert.org](https://www.hkcert.org/tc/security-bulletin/ibm-websphere-products-multiple-vulnerabilities_20261015)（官方；查證：已抽原文）
- **創新科技嘉年華下周五開鑼**：創新科技署主辦，2026-10-24 至 2026-11-01 於香港科學園免費開放，約 150 場工作坊及十多場網上講座。展覽無需門票；工作坊須網上報名，先到先得。為何重要：本地年度創科公眾活動臨近。來源：[來源：info.gov.hk](https://www.info.gov.hk/gia/general/202610/05/P2026100500293.htm)（官方；查證：已抽原文）
:::

::: section events 活動與展會
## 活動與展會

- **創新科技嘉年華 2026**：日期 2026-10-24 至 2026-11-01｜地點 香港科學園｜形式 實體展覽、工作坊及網上講座｜報名狀態 展覽免費入場；工作坊網上報名進行中，先到先得。來源：[來源：innocarnival.hk](https://innocarnival.hk/hk/About/)（官方；查證：已抽原文）
- **香港網安奪旗賽 2026**：日期 初賽 2026-11-06 至 2026-11-07（網上 24 小時）｜地點 網上初賽｜形式 奪旗比賽｜報名狀態 網上報名今日 2026-10-20 截止。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hkcert-capture-the-flag-challenge-2026)（官方；查證：已抽原文）
- **Japan IT Week【秋】**：日期 2026-10-21 至 2026-10-23（10:00–17:00）｜地點 日本千葉 幕張メッセ 1–8 廳｜形式 實體展覽｜報名狀態 預先登記免費至今日 2026-10-20 23:59，其後 5,500 日圓（含稅）。來源：[來源：japan-it.jp](https://www.japan-it.jp/hub/ja-jp.html)（官方；查證：已抽原文）
- **香港金融科技周 x StartmeupHK**：日期 2026-11-02 至 2026-11-06｜地點 香港會議展覽中心及其他地點｜形式 實體展覽及會議｜報名狀態 早鳥登記進行中。來源：[來源：fintechweek.hk](https://www.fintechweek.hk/hk/home)（官方；查證：上期已抽，本期無新變化）
:::

::: section misc 其他要點
## 其他要點

- **思科掃描工具可獨立更新**：Content Scanner Tools 25.3.0.5525 或之後已含修補，官方稱無需升級主程式或重啟；已開自動更新者無需額外操作。來源：[來源：sec.cloudapps.cisco.com](https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-esa-afw-zqYJkjxp)（官方；查證：已抽原文）
- **MiniMax 權重稍後才開放**：M3.1 Flash 現階段只經 API、訂閱與桌面程式提供。來源：[來源：minimax.io](https://www.minimax.io/blog/minimax-m31f)（官方；查證：已抽原文）
- **DeepSeek 令文將於今日刊憲**：聯邦公報預定 2026-10-20 刊登正式通知。來源：[來源：public-inspection.federalregister.gov](https://public-inspection.federalregister.gov/2026-21447.pdf)（官方；查證：已抽原文）
:::

::: section followup 昨日跟進
## 昨日跟進

- **CISA CVE-2025-61624／CVE-2026-102764**：美國聯邦限期已於 2026-10-19 屆滿。Rapid7 同日補充：BeyondTrust 確認兩宗已知 Remote Support 入侵可追溯至 2026-08-29；SaaS 已於 2026-10-09 完成修補。來源：[來源：rapid7.com](https://www.rapid7.com/blog/post/etr-cve-2026-102764-critical-beyondtrust-remote-support-authentication-bypass-exploited-in-the-wild/)（媒體；查證：已抽原文）
- **香港網安奪旗賽 2026**：報名今日 2026-10-20 截止。
- **Japan IT Week【秋】**：免費預先登記今日 23:59 結束。
:::

<div class="ns-footer">
<p>資料截至 2026-10-20 05:30（HKT）；本期覆蓋 2026-10-19 至 2026-10-20，並補上 72 小時內未報之思科電郵閘道、IBM WebSphere、GitHub Android 審計及創新科技嘉年華。 ⚠️ 今日部分來源未能讀取：Reuters 有關 DeepSeek 禁令正文（改以聯邦公報與英國廣播公司核對）、Hugging Face MiniCPM 授權欄。</p>
</div>
