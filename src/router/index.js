import Vue from 'vue'
import Router from 'vue-router'
//import index from '@/page/index.vue'
//
//import personal from '@/page/personal.vue'
//import personalDetail from '@/page/personal-detail.vue'
//import myPoint from '@/page/my-point.vue'
//import pointShop from '@/page/point-shop.vue'
//import pointDetails from '@/page/point-details.vue'
//import myCard from '@/page/my-card.vue'
//import login from '@/page/login.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.inc(0.2);
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });
Vue.use(Router)

const router = new Router({
	routes: [{
			path: '/',
			name: 'index',
			component: resolve => require(["../page/index.vue"], resolve)
		}, 
		{
			path: '/index',
			name: 'index',
			component: resolve => require(["../page/index.vue"], resolve)
		},{
			path: '/personal',
			name: 'personal',
			component: resolve => require(["../page/personal.vue"], resolve)
		}, {
			path: '/personalDetail',
			name: 'personalDetail',
			component: resolve => require(["../page/personal-detail.vue"], resolve)
		}, {
			path: '/myPoint',
			name: 'myPoint',
			component: resolve => require(["../page/my-point.vue"], resolve)
		}, {
			path: '/myMoney',
			name: 'myMoney',
			component: resolve => require(["../page/my-money.vue"], resolve)
		},{
			path: '/pointShop',
			name: 'pointShop',
			component: resolve => require(["../page/point-shop.vue"], resolve)
		}, {
			path: '/pointDetails',
			name: 'pointDetails',
			component: resolve => require(["../page/point-details.vue"], resolve)
		}, {
			path: '/myCard',
			name: 'myCard',
			component: resolve => require(["../page/my-card.vue"], resolve)
		}, {
			path: '/login',
			name: 'login',
			component: resolve => require(["../page/login.vue"], resolve)
		}, {
			path: '/loginPhone',
			name: 'loginPhone',
			component: resolve => require(["../page/login-phone.vue"], resolve)
		}, {
			path: '/register',
			name: 'register',
			component: resolve => require(["../page/register.vue"], resolve)
		}
		, {
			path: '/myOlder',
			name: 'myOlder',
			component: resolve => require(["../page/my-older.vue"], resolve)
		}, {
			path: '/ex',
			name: 'ex',
			component: resolve => require(["../page/ex.vue"], resolve)
		}, {
			path: '/recharge',
			name: 'recharge',
			component: resolve => require(["../page/recharge.vue"], resolve)
		}
		

	]
})

router.beforeEach((to, from, next) => {
	NProgress.start();
	next();
});

router.beforeEach((to, from, next) => {
	console.log('222')
	next();
});


router.afterEach(() => {
	NProgress.done();
});
export default router