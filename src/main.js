import Vue from 'vue'
import App from './App.vue'
import Pig from './index.js'


Vue.config.productionTip = false

Vue.use(Pig)

new Vue({
  render: h => h(App),
}).$mount('#app')