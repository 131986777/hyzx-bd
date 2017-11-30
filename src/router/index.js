import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'

import personal from '@/components/personal.vue'
import personalDetail from '@/components/personal-detail.vue'
import myPoint from '@/components/my-point.vue'
import pointShop from '@/components/point-shop.vue'
import pointDetails from '@/components/point-details.vue'
import myCard from '@/components/my-card.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.inc(0.2);
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });
Vue.use(Router)

const router = new Router({
	routes: [{
			path: '/',
			name: 'index',
			component: resolve => require(["../components/index.vue"], resolve)
		}, {
			path: '/personal',
			name: 'personal',
			component: resolve => require(["../components/personal.vue"], resolve)
		}, {
			path: '/personalDetail',
			name: 'personalDetail',
			component: resolve => require(["../components/personal-detail.vue"], resolve)
		}, {
			path: '/myPoint',
			name: 'myPoint',
			component: resolve => require(["../components/my-point.vue"], resolve)
		}, {
			path: '/pointShop',
			name: 'pointShop',
			component: resolve => require(["../components/point-shop.vue"], resolve)
		}, {
			path: '/pointDetails',
			name: 'pointDetails',
			component: resolve => require(["../components/point-details.vue"], resolve)
		}, {
			path: '/myCard',
			name: 'myCard',
			component: resolve => require(["../components/my-card.vue"], resolve)
		}

	]
})

router.beforeEach((to, from, next) => {
	NProgress.start();
	next();
});

router.afterEach(() => {
	NProgress.done();
});
export default router