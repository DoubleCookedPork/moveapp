import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
import './styles/index.less'
import zhCN from 'vee-validate/dist/locale/zh_CN'
import VeeValidate, {
  Validator
} from 'vee-validate'

Vue.use(VeeValidate, {
  // 配置改变的时候去触发，默认是input
  events: ''
})
Validator.localize('zh_CN', zhCN)
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
