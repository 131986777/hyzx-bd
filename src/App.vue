<template>
<div>
	<welcome v-show='welcomeShow'></welcome> 
	<!--<transition :name="transitionName">-->
	<router-view class="child-view scroll"></router-view>
	<!--</transition>-->
</div>
</template>

<style type="text/css">
	.mint-tab-item-label {
		font-size: 13px !important;
	}
</style>
<script>
</script>
<script>
	import templateMessage from './assets/js/templateMessage';
		import welcome from './components/welcome.vue'
	export default {
		name: 'app',

		components: {
		welcome
		},
		data() {
			return {
				transitionName: 'slide-left',
				welcomeShow: false,
			}
		},
		mounted() {
			var _this = this;
			templateMessage.$on('welcomeShow', function(msg){
				console.log('welcomeShow'+ msg);
				if(!msg){ 
					_this.welcomeShow = false;
				}
			});
			
//
//			var overscroll = function(el) {
//
//				el.addEventListener('touchstart', function() {
//
//					var top = el.scrollTop,
//						totalScroll = el.scrollHeight,
//						currentScroll = top + el.offsetHeight
//					//If we're at the top or the bottom of the containers
//					//scroll, push up or down one pixel.
//					//
//					//this prevents the scroll from "passing through" to
//					//the body.
//					if(top === 0) {
//						el.scrollTop = 1
//					} else if(currentScroll === totalScroll) {
//						el.scrollTop = top - 1
//					}
//				})
//
//				el.addEventListener('touchmove', function(evt) {
//					//if the content is actually scrollable, i.e. the content is long enough
//					//that scrolling can occur
//					if(el.offsetHeight < el.scrollHeight)
//						evt._isScroller = true
//				})
//			}
//			 setTimeout(()=>{
//			overscroll(document.querySelector('.scroll'));
//
//   		},100)
//			
//		


			
//			document.body.addEventListener('touchmove', function(evt) {
//				//In this case, the default behavior is scrolling the body, which
//				//would result in an overflow.  Since we don't want that, we preventDefault.
//				if(!evt._isScroller) {
//					alert()
//					evt.preventDefault()
//				}
//			})

		},
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
	.child-view {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		transition: all .5s cubic-bezier(0.420, 0.000, 1.000, 1.000);
		overflow: scroll;
		-webkit-overflow-scrolling: touch;
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
	
	.mint-spinner-fading-circle {
		position: relative
	}
	
	.mint-spinner-fading-circle-circle {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		position: absolute
	}
	
	.mint-spinner-fading-circle-circle::before {
		content: " ";
		display: block;
		margin: 0 auto;
		width: 15%;
		height: 15%;
		border-radius: 100%;
		-webkit-animation: mint-fading-circle 1.2s infinite ease-in-out both;
		animation: mint-fading-circle 1.2s infinite ease-in-out both
	}
	
	.mint-spinner-fading-circle-circle.is-circle2 {
		-webkit-transform: rotate(30deg);
		transform: rotate(30deg)
	}
	
	.mint-spinner-fading-circle-circle.is-circle2::before {
		-webkit-animation-delay: -1.1s;
		animation-delay: -1.1s
	}
	
	.mint-spinner-fading-circle-circle.is-circle3 {
		-webkit-transform: rotate(60deg);
		transform: rotate(60deg)
	}
	
	.mint-spinner-fading-circle-circle.is-circle3::before {
		-webkit-animation-delay: -1s;
		animation-delay: -1s
	}
	
	.mint-spinner-fading-circle-circle.is-circle4 {
		-webkit-transform: rotate(90deg);
		transform: rotate(90deg)
	}
	
	.mint-spinner-fading-circle-circle.is-circle4::before {
		-webkit-animation-delay: -0.9s;
		animation-delay: -0.9s
	}
	
	.mint-spinner-fading-circle-circle.is-circle5 {
		-webkit-transform: rotate(120deg);
		transform: rotate(120deg)
	}
	
	.mint-spinner-fading-circle-circle.is-circle5::before {
		-webkit-animation-delay: -0.8s;
		animation-delay: -0.8s
	}
	
	.mint-spinner-fading-circle-circle.is-circle6 {
		-webkit-transform: rotate(150deg);
		transform: rotate(150deg)
	}
	
	.mint-spinner-fading-circle-circle.is-circle6::before {
		-webkit-animation-delay: -0.7s;
		animation-delay: -0.7s
	}
	
	.mint-spinner-fading-circle-circle.is-circle7 {
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg)
	}
	
	.mint-spinner-fading-circle-circle.is-circle7::before {
		-webkit-animation-delay: -0.6s;
		animation-delay: -0.6s
	}
	
	.mint-spinner-fading-circle-circle.is-circle8 {
		-webkit-transform: rotate(210deg);
		transform: rotate(210deg)
	}
	
	.mint-spinner-fading-circle-circle.is-circle8::before {
		-webkit-animation-delay: -0.5s;
		animation-delay: -0.5s
	}
	
	.mint-spinner-fading-circle-circle.is-circle9 {
		-webkit-transform: rotate(240deg);
		transform: rotate(240deg)
	}
	
	.mint-spinner-fading-circle-circle.is-circle9::before {
		-webkit-animation-delay: -0.4s;
		animation-delay: -0.4s
	}
	
	.mint-spinner-fading-circle-circle.is-circle10 {
		-webkit-transform: rotate(270deg);
		transform: rotate(270deg)
	}
	
	.mint-spinner-fading-circle-circle.is-circle10::before {
		-webkit-animation-delay: -0.3s;
		animation-delay: -0.3s
	}
	
	.mint-spinner-fading-circle-circle.is-circle11 {
		-webkit-transform: rotate(300deg);
		transform: rotate(300deg)
	}
	
	.mint-spinner-fading-circle-circle.is-circle11::before {
		-webkit-animation-delay: -0.2s;
		animation-delay: -0.2s
	}
	
	.mint-spinner-fading-circle-circle.is-circle12 {
		-webkit-transform: rotate(330deg);
		transform: rotate(330deg)
	}
	
	.mint-spinner-fading-circle-circle.is-circle12::before {
		-webkit-animation-delay: -0.1s;
		animation-delay: -0.1s
	}
	
	@-webkit-keyframes mint-fading-circle {
		0%,
		39%,
		100% {
			opacity: 0
		}
		40% {
			opacity: 1
		}
	}
	
	@keyframes mint-fading-circle {
		0%,
		39%,
		100% {
			opacity: 0
		}
		40% {
			opacity: 1
		}
	}
	/*无限滚动*/
	
	.page-infinite {}
	
	.page-infinite-desc {
		text-align: center;
		color: #666;
		padding-bottom: 5px;
		border-bottom: solid 1px #eee;
	}
	
	.page-infinite-listitem {
		height: 50px;
		line-height: 50px;
		border-bottom: solid 1px #eee;
		text-align: center;
	}
	
	.page-infinite-listitem:first-child {
		border-top: solid 1px #eee;
	}
	
	.page-infinite-wrapper {
		margin-top: -1px;
		overflow: scroll;
	}
	
	.page-infinite-loading {
		text-align: center;
		height: 50px;
		line-height: 50px;
	}
	
	.page-infinite-loading div {
		display: inline-block;
		vertical-align: middle;
		margin-right: 5px;
	}
	
	.page-infinite-listitem {
		height: auto;
		line-height: inherit;
		border-bottom: solid 1px #eee;
		text-align: left;
	}
	.mint-navbar{
		z-index: 2;
		height: 5.5%;	
	}
	.mint-tab-container-item{
		margin-top: 5px;
	}
</style>