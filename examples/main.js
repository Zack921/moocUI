import Vue from 'vue'
import App from './App.vue'

import 'mooc-ui/dist/css/index.css'
import Mui from 'mooc-ui'
Vue.use(Mui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
