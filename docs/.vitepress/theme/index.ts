import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import SectionFilter from './SectionFilter.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 模塊勾選列：只會在含有 ns-section 的頁面（每日摘要）出現
      'doc-before': () => h(SectionFilter),
    })
  },
}
