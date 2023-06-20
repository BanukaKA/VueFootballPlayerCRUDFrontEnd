import Vue from 'vue'
import App from './App.vue'
import router from './router'

//Author : Banuka Kumara Ambegoda
//Date: 2023/06/19

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')