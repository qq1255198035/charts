import Vue from 'vue'
import App from './App.vue'
import G2 from '@antv/g2';
const { Global } = G2; // 获取 Global 全局对象
Global.setTheme('dark'); // 传入值为 'default'、'dark' 的一种，如果不是，那么使用 default 主题。
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
