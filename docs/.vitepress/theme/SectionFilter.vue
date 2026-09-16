<script setup>
import { ref, onMounted, computed } from 'vue'
import { onContentUpdated } from 'vitepress'

/**
 * 模塊勾選列
 * - 頁面頂部列出所有「重點模塊」（產品與發布會 / AI 模型與開源趨勢 / GitHub / 全球重點新聞 / 香港本地 / 其他 / 昨日跟進）
 * - 未剔選的模塊不會顯示
 * - 選擇會記在瀏覽器（localStorage），下次自動沿用
 * - 支援分享參數：?show=ai,github（只顯示指定模塊）
 * - 沒有 JavaScript 時：全部模塊照樣顯示（優雅降級，不影響 SEO）
 */
const STORAGE_KEY = 'netsentry-visible-sections'
const groups = ref([])
const ready = ref(false)
const panelOpen = ref(false)

function readUrlSelection() {
  try {
    const p = new URLSearchParams(window.location.search)
    const raw = p.get('show')
    if (!raw) return null
    return raw
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
  } catch {
    return null
  }
}

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const arr = JSON.parse(raw)
    return Array.isArray(arr) ? arr : null
  } catch {
    return null
  }
}

function save() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(groups.value.filter((g) => g.checked).map((g) => g.key)),
    )
  } catch {
    /* ignore */
  }
}

function collect() {
  const nodes = Array.from(document.querySelectorAll('section.ns-section'))
  if (!nodes.length) {
    groups.value = []
    ready.value = false
    return
  }
  const selected = readUrlSelection() ?? readStored() // null = 全部顯示
  groups.value = nodes.map((el, i) => {
    const key = el.dataset.key || `s${i}`
    const title = el.dataset.title || key
    const count = el.querySelectorAll('li').length
    return { key, title, count, checked: selected === null ? true : selected.includes(key), el }
  })
  ready.value = true
  apply()
}

function apply() {
  const visible = new Set(groups.value.filter((g) => g.checked).map((g) => g.key))
  groups.value.forEach((g) => {
    if (g.el) g.el.hidden = !visible.has(g.key)
  })
  save()
}

function toggle() {
  apply()
}

function allOn() {
  groups.value.forEach((g) => (g.checked = true))
  apply()
}

function allOff() {
  groups.value.forEach((g) => (g.checked = false))
  apply()
}

const checkedCount = computed(() => groups.value.filter((g) => g.checked).length)
const summary = computed(() => `${checkedCount.value}/${groups.value.length} 個模塊`)

onMounted(() => {
  collect()
  onContentUpdated(() => {
    requestAnimationFrame(collect)
  })
})
</script>

<template>
  <div v-if="ready && groups.length" class="ns-filter">
    <div class="ns-filter__head">
      <button
        class="ns-filter__togglebtn"
        type="button"
        :aria-expanded="panelOpen ? 'true' : 'false'"
        @click="panelOpen = !panelOpen"
      >
        🎛️ 選擇想看的模塊 <span class="ns-filter__count">（{{ summary }}）</span>
      </button>
      <div class="ns-filter__actions">
        <button type="button" @click="allOn">全部顯示</button>
        <button type="button" @click="allOff">全部隱藏</button>
      </div>
    </div>
    <fieldset class="ns-filter__list" :class="{ 'is-open': panelOpen }">
      <legend class="ns-filter__legend">未剔選的模塊不會顯示（你的選擇會被記住）</legend>
      <label v-for="g in groups" :key="g.key" class="ns-filter__item">
        <input type="checkbox" :value="g.key" v-model="g.checked" @change="toggle" />
        <span class="ns-filter__title">{{ g.title }}</span>
        <span class="ns-filter__badge">{{ g.count }}</span>
      </label>
    </fieldset>
  </div>
</template>

<style scoped>
.ns-filter {
  margin: 0 0 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  padding: 12px 14px;
}
.ns-filter__head {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}
.ns-filter__togglebtn {
  font-size: 15px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 4px 0;
}
.ns-filter__count {
  font-weight: 500;
  color: var(--vp-c-text-2);
  font-size: 13px;
}
.ns-filter__actions button {
  font-size: 13px;
  padding: 4px 10px;
  margin-left: 6px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
}
.ns-filter__actions button:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.ns-filter__list {
  display: none;
  flex-wrap: wrap;
  gap: 8px 14px;
  border: 0;
  margin: 10px 0 0;
  padding: 0;
}
.ns-filter__list.is-open {
  display: flex;
}
.ns-filter__legend {
  display: none;
}
.ns-filter__item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  cursor: pointer;
}
.ns-filter__item:hover {
  border-color: var(--vp-c-brand-1);
}
.ns-filter__badge {
  font-size: 12px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-default-soft);
  border-radius: 999px;
  padding: 0 7px;
}
@media (min-width: 768px) {
  .ns-filter__list {
    display: flex;
  }
  .ns-filter__togglebtn {
    cursor: default;
  }
}
</style>
