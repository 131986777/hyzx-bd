// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
//import BScroll from 'better-scroll'
//import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import base from './assets/css/base.css'
import iscroll from './assets/js/iscroll'
import cess from './assets/js/rem.js'
Vue.use(IScrollView, IScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})