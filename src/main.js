// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'lib-flexible'
import 'reset-css'
import router from './router'
import axiosAjax from './plugins/axiosAjax'
import publics from './plugins/public'
import './assets/scss/function.scss'

Vue.config.productionTip = false
let remote = {
  API_URL: 'http://192.168.0.104:8080/'
}
Vue.use(axiosAjax, remote)
Vue.use(publics)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
