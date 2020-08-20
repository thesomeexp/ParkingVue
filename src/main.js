// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
/* 完整引入elmentui*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import SvgIcon from '@/components/SvgIcon'// svg component
// 引入Global
import global_ from './utils/Global'

Vue.prototype.GLOBAL = global_;
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$qs = qs;
Vue.use(ElementUI);
Vue.component('svg-icon', SvgIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
