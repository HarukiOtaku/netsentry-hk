---
title: "今日摘要"
date: 2026-11-21
---

# 每日科技與資安摘要 — 2026-11-21（星期六）

<p class="ns-lead">今日重點 · 永久連結 <a href="/digests/2026-11-21">/digests/2026-11-21</a> · <a href="/digests/">全部存檔</a></p>

<div class="ns-summary">
<p><strong>📌 今日總結</strong>：VMware vCenter 零日被中國關聯組織利用逾兩個月，20 日列入 KEV；Linux KVM 出現客機逃逸，可讀取約 127GB 主機記憶體。OpenAI 公開反蒸餾措施，推理軌跡外洩成功率由 54% 降至 0.2%。</p>
</div>

::: section tldr 今日速覽
## 今日速覽

- vCenter 零日 CVE-2026-123890 列入 KEV，23 日到期。
- KVM 客機可讀 127GB 主機記憶體，修補已出。
- Windows 鎖機畫面繞過 FastUnlock 仍無修補。
:::

::: section products 產品與發布會
## 產品與發布會

- **Gemini Mac 版可代操作電腦**：11 月 19 日起，以「@Computer use」在獨立背景視窗代為點擊、輸入、開選單與填表，主畫面與游標不受佔用；需 Apple Silicon Mac、macOS Sequoia 15.0 或以上、美國英文，以及 AI Plus／Pro／Ultra 訂閱，可逐個 App 授權並隨時暫停。為何重要：助理由對話走向代操作桌面。來源：[來源：blog.google](https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/) （類型：官方；查證：已抽原文）
- **OpenAI 將 Dots 下放至 20 美元層**：以小規模測試 ChatGPT Plus 用戶，同時向全部 Business Standard 開放，美國合資格用戶每人可建立一個 Dot，歐洲、英國及瑞士未提供；每個 Dot 各自運行雲端電腦，可接數千個 App。為何重要：長駐代理由高階方案趨向普及。來源：[來源：thenextweb.com](https://thenextweb.com/news/openai-dots-chatgpt-plus-test-business-standard) （類型：媒體；查證：已抽原文）
- **Responses API 增設長完成窗口**：背景任務可選 2 小時窗口（每 token 較 Standard 便宜 30%）或 8 小時（便宜 40%），公開測試中，支援 GPT-6.2 Astra、GPT-6.2 Sol、GPT-6.1 Terra 及 GPT-6 Luna，須用 Standard 處理且不可串流。為何重要：可等待的工作換取更低單價。來源：[來源：tokenpost.com](https://www.tokenpost.com/news/technology/61971) （類型：媒體；查證：已抽原文）
:::

::: section ai AI 模型與開源趨勢
## AI 模型與開源趨勢

- **sensenova/SenseNova-Loop-9B**：約 9B 參數，以循環架構令 32 個實體層執行 56 次；下載 1.63k、讚 439、Apache 2.0。為何重要：小模型以重複計算換推理深度。來源：[來源：huggingface.co](https://huggingface.co/sensenova/SenseNova-Loop-9B) （類型：官方；查證：已抽原文）
- **harness-hub/Qwen3.8-27B-pi-adapted**：以強化學習訓練的 LoRA，配 pi 編碼代理；下載 1.87k、讚 853；Terminal-Bench 2.1 關閉思考得 56.6%，高於基底模型最高思考的 54.2%，每題 token 少約 4.5 倍。為何重要：代理專用微調直接換取成本。來源：[來源：huggingface.co](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) （類型：社群；查證：已抽原文）
- **thinkingmachines/Inkling-2-Mini**：26B 圖文輸入模型，下載 136、讚 143，屬 Inkling-2 系列新增細版。為何重要：大型模型家族開始補齊輕量版本。
- **Qwen/Qwen3.8-27B**：28B，下載 6.45M、讚 20.8k，仍是 27B 級最活躍的微調基底。為何重要：生態改動集中同一底座。
（後兩者來源：[來源：huggingface.co](https://huggingface.co/models?sort=trending) ；類型：官方；查證：已抽原文）
:::

::: section github GitHub 值得關注
## GitHub 值得關注

- **elementalsouls/Claude-BugHunter**（Python，14,020 星，+1,660）：Claude Code 技能包，用於漏洞挖掘及外部紅隊工作，內含 82 個技能、15 個斜線指令、681 條已披露報告模式，覆蓋 24 類漏洞。為何值得留意：紅隊知識被包成可審核的技能。來源：[來源：github.com](https://github.com/trending) （類型：社群；查證：已抽原文）
- **mjmirza/app-store-compliance**（Shell，2,655 星，+874）：整理 117 種 App Store／Play 被拒模式與修正，附 privacy manifest 與 Data safety 檢查，並追蹤 95 個法規期限（EU AI Act、DSA、COPPA）。為何值得留意：合規死線變成可自動核對項。
- **jingyaogong/minimind**（Python，67,648 星，+841）：兩小時由零訓練一個 64M 參數模型。為何值得留意：本地訓練門檻再降。
- **nginx/nginx**（C，32,538 星，+246）：官方 NGINX 原始碼庫，因本週 HTTP/2 漏洞修補再受注視。為何值得留意：修補期內官方 repo 是唯一可信來源。
:::

::: section global 全球重點新聞
## 全球重點新聞

- **Linux KVM 客機逃逸**：CVE-2026-99312｜CVSS 8.8（核心 CVE 團隊）／Red Hat 初步評 5.6｜受影響：AMD 主機且開啟 nested virtualization｜已被利用：否，屬研究披露｜修補：7.3.5、6.18.64、6.12.118。Terra Security 在 DigitalOcean 一台 Droplet 內以 guest root 讀取約 127GB 主機記憶體，並在自家裸機把 32 bytes 寫入主機核心頁；Intel 主機不受影響，關閉 kvm_amd 的 nested 參數可完全封堵。為何重要：雲端租戶隔離前提被打破。來源：[來源：thehackernews.com](https://thehackernews.com/2026/11/new-linux-kvm-flaw-cve-2026-99312-lets.html) 、[來源：terra.security](https://www.terra.security/blog/kvm-guest-to-host-escape) （類型：媒體＋研究；查證：已抽原文）
- **VMware vCenter 零日被利用逾兩個月**：CVE-2026-123890｜CVSS 9.8｜受影響：9.1.x、9.0.x、8.0、5.x｜KEV：是（11 月 20 日加入，11 月 23 日到期）｜修補：9.1.1.0200、9.0.2.0200、8.0 U3m，7.0 無公開修補，官方無繞道方案。Armory Castle 先經 BeyondTrust CVE-2026-102764 進入，9 月初以自製工具 BONESAW 取得 administrator@vsphere.local 工作階段，偷走 LMDB 資料庫與 SAML 簽署材料，再偽造權杖並裝後門。為何重要：虛擬化層一失守即全盤皆輸。來源：[來源：securityweek.com](https://www.securityweek.com/newly-patched-vmware-vcenter-flaw-exploited-as-zero-day-by-chinese-apt/) 、[來源：cloud.google.com](https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-vsphere) （類型：媒體＋官方；查證：已抽原文）
- **FastUnlock 鎖機畫面零日**：暫無 CVE、暫無微軟修補。手法是在「忘記 PIN」的帳戶復原畫面啟動 Narrator，經隱藏背景視窗進入設定，再經藍牙與裝置開自動播放，插入外置媒體即可以 WSIAccount（非管理員）身分執行程式；條件為物理接觸機器及至少一個微軟網上帳戶。ThreatLocker 當日已覆核成功，BitLocker 開機前 PIN 可作緩解，微軟未見濫用跡象。為何重要：「有鎖就安全」的假設要重寫。來源：[來源：thehackernews.com](https://thehackernews.com/2026/11/new-unpatched-windows-0-day-fastunlock.html) （類型：媒體；查證：已抽原文）
- **SonicWall Gen 6 全面停止修補**：11 月 18 日產品通告，所有跑 SonicOS 6.x 的 Gen 6／6.5 機種已終止支援，連嚴重漏洞亦不再提供修補；涉 TZ300 至 NSa 9650、NSv 10–1600、SuperMassive 9200–9800 等。建議停用 WAN 管理與 SSL VPN、強制 MFA，並換 Gen 8／SonicOS 8，設定可經 NSM 遷移。為何重要：無支援的邊緣設備是現成入口。來源：[來源：thehackernews.com](https://thehackernews.com/2026/11/sonicwall-warns-gen-6-firewalls-wont.html) 、[來源：sonicwall.com](https://sonicwall.com/blog/the-lights-may-be-flashing-but-the-patches-have-stopped-gen-6-firewalls-are-putting-your-whole-business-at-risk) （類型：媒體＋官方；查證：已抽原文）
- **JPMorgan、Visa、Mastercard 同報第三方事故**：N0n 集團 11 月 16 日聲稱取得三間客戶資料；JPMorgan 稱供應商持有的市場推廣資料（部分客戶姓名及電郵）被存取，Visa 指事故涉亞太一間第三方服務商，Mastercard 稱某權益計劃少量卡會員的電郵外洩。三者均稱支付網絡與卡號未受影響，皆未公布受影響人數。為何重要：外判服務不等於外判風險。來源：[來源：securityweek.com](https://www.securityweek.com/jpmorgan-visa-mastercard-cite-third-party-incidents-amid-data-leak/) （類型：媒體；查證：已抽原文）
:::

::: section hk 香港本地
## 香港本地

- **ChromeOS 多個漏洞（HKCERT 極高度風險）**：CVE-2026-125350｜CVSS 8.8｜受影響：16868.24.0 之前的 ChromeOS（瀏覽器 158.0.8127.65 之前）｜KEV：是（11 月 10 日加入，11 月 24 日到期）｜修補：OS 16868.24.0 或之後｜級別：極高度風險。XML 釋放後使用漏洞，可在沙箱內執行任意程式碼，HKCERT 指正被廣泛利用，同源問題亦影響 Edge 及 Opera。為何重要：瀏覽器核心漏洞波及多個品牌。來源：[來源：hkcert.org](https://hkcert.org/tc/security-bulletin/chromeos-multiple-vulnerabilities_20261120) 、[來源：nvd.nist.gov](https://nvd.nist.gov/vuln/detail/cve-2026-125350) （類型：官方；查證：已抽原文）
- **ASUS 路由器多個漏洞（HKCERT 中度風險）**：CVE-2026-19399、CVE-2026-84730 等 10 個｜CVSS：未標示｜受影響：3.0.0.4_386、3.0.0.4_388、3.0.0.6_102 三個系列之前版本｜KEV：否｜修補：更新至上述系列或之後｜級別：中度風險。可遠端執行任意程式碼、提升權限、洩露敏感資料及繞過保安限制。為何重要：家用路由器長期直連互聯網。來源：[來源：hkcert.org](https://hkcert.org/security-bulletin/asus-router-multiple-vulnerabilities_20261120) （類型：官方；查證：已抽原文）
- **Citrix XenServer 多個漏洞（HKCERT 中度風險）**：CVE-2026-99286、CVE-2026-99287、CVE-2026-100080 至 CVE-2026-100082 等｜CVSS：未標示｜受影響：XenServer 8.4、9｜KEV：否｜修補：Citrix 公告 CTX697354｜級別：中度風險。可致阻斷服務與權限提升。為何重要：虛擬化平台補丁需與 vCenter 一併排期。來源：[來源：hkcert.org](https://hkcert.org/security-bulletin/citrix-xenserver-multiple-vulnerabilities_20261120) （類型：官方；查證：已抽原文）
- **蘇黎世保險（香港）客戶平台遭未授權存取**：11 月 17 日偵測到第三方未經授權存取客戶網上平台，可能涉及姓名、香港身份證號碼、出生日期、電話、電郵，以及保單名稱、保障期與跟進中介人姓名；初步無證據顯示銀行戶口或信用卡資料外洩。平台已停用待維修，客戶及監管機構已獲通知。為何重要：保險客戶門戶成新目標。來源：[來源：hk.epochtimes.com](http://hk.epochtimes.com/news/2026-11-19/23585286) （類型：媒體；查證：已抽原文）
:::

::: section events 活動與展會
## 活動與展會

- **網絡安全技術論壇及高峰會 2026**｜2026-12-17 至 18｜香港灣仔博覽道 1 號香港會議展覽中心（首日會議廳、次日 S221）｜實體｜接受登記。數字辦、生產力局與 HKIRC 首度合併兩大旗艦活動，主題「網絡安全—從新興威脅到智能體治理」，議程涵蓋 AI 法規、代理式 AI 管治與 TLS 憑證縮短至 47 天。為何重要：本地全年最大政策與實務場。來源：[來源：csss.hk](https://csss.hk/zh/cybersecurity-symposium-summit-2026-hk) （類型：官方；查證：已抽原文）
- **香港網絡安全與未來應變研討會 2027**｜2027-01-07 09:30–17:00｜會展 2 樓 S222–S230｜實體｜免費入場，報名 2026 年 11 月中開始。主題「AI 安全與韌性．領先應對進階威脅」，廣東話配英文術語。為何重要：免費且針對企業與中小企。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hong-kong-cyber-trust-and-future-readiness-seminar-2027) （類型：官方；查證：已抽原文）
- **香港網安奪旗賽 2026 決賽**｜2027-01-07 10:00–17:00｜香港會議展覽中心（場地待定）｜實體｜公開報名已於 2026-11-04 截止，決賽只限晉級隊伍。設中學、大專、公開及國際四組，同日舉行頒獎禮。為何重要：本地最大規模攻防競賽。來源：[來源：hkcert.org](https://www.hkcert.org/tc/event/hkcert-capture-the-flag-challenge-2026) （類型：官方；查證：已抽原文）
:::

::: section misc 其他要點
## 其他要點

- **OpenAI 反制對抗性蒸餾**：加強保護思維鏈，在內部自適應紅隊測試中，於前一個提示抽取受保護推理的平均成功率由 GPT-6 Astra 的 54.0% 降至 GPT-6.2 Astra 的 0.2%；今年每週執法涉及數千至數萬個帳戶。為何重要：蒸餾等同把能力搬去無防護模型再作惡。來源：[來源：openai.com](https://openai.com/index/combatting-adversarial-distillation/) （類型：官方；查證：已抽原文）
- **MedChemBench 基準上線**：99 條題目、取自 117 篇論文與專利、涵蓋 761 個分子結構，考分子結構重建、科學推理、排序選擇與性質預測；xhigh 推理下 GPT-6.2 Astra 得 84.5%，GPT-6 Astra 83.3%，GPT-5.6 Sol 58.2%。為何重要：藥物化學開始有可比較的推理基準。來源：[來源：openai.com](https://openai.com/index/introducing-medchembench/) （類型：官方；查證：已抽原文）
:::

::: section followup 昨日跟進
## 昨日跟進

- **Anthropic IPO 完成結算**：承銷商全數行使超額配股權，合共發行 11.27 億股、每股 83 美元，集資總額約 935 億美元，Anthropic 實收約 916 億；另向 AMD、Broadcom、Google、Micron、Microsoft、NVIDIA、TSMC 配售 3.13 億股、約 260 億美元，總額約 1,195 億美元。來源：[來源：anthropic.com](https://www.anthropic.com/news/ipo-close) （類型：官方；查證：已抽原文）
- **tencent/Hy4-flash**：讚 269→533，下載 159→3.95k；維持 220B 總參數、每 token 啟用 12B、1M 上下文、Tencent Hy License。
:::

<div class="ns-footer">
<p>資料截至 2026-11-21 05:30（HKT）</p>
</div>
