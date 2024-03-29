// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入bootstrap
import $ from 'jquery'
// import "jquery"
// import "jquery/dist/jquery.js"
// import "bootstrap"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css"


import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
