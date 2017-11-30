<template>
	<div id="app">
		<!--<welcome></welcome>-->
		<!--<transition :name="transitionName">-->
			<router-view class="child-view"></router-view>
		<!--</transition>-->

	</div>
</template>

<style type="text/css">
	.mint-tab-item-label {
		font-size: 13px !important;
	}
</style>
<script>
 import welcome from './components/welcome.vue'
	export default {
		name: 'app',
		
		components: {
            welcome
        },
		data() {
			return {
				transitionName: 'slide-left'
			}
		},
		mounted() {},
		//监听路由的路径，可以通过不同的路径去选择不同的切换效果  
//		watch: {
//			'$route' (to, from) {
//				if(to.path == '/') {
//					this.transitionName = 'slide-right';
//				} else {
//					this.transitionName = 'slide-left';
//				}
//			}
//		}
	}
</script>

<style>
	#app {
		opacity: 1;
	}
	
	.child-view {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		transition: all .5s cubic-bezier(0.420, 0.000, 1.000, 1.000);
	}
	
	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		-webkit-transform: translate(30px, 0);
		transform: translate(30px, 0);
	}
	
	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
		-webkit-transform: translate(-30px, 0);
		transform: translate(-30px, 0);
	}
</style>