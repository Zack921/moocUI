import Vue from 'vue'
import App from './App.vue'

import '../components/css/index.scss'
import Mui from '../components/lib'
// import 'mooc-ui/dist/css/index.css'
// import Mui from 'mooc-ui'
Vue.use(Mui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
