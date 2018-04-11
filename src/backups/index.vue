<template>
	<div v-iscroll>
		<div class="usercenter-container">
			<div class="personal-profile-wrapper">
				<div class="personal-wrap">
					<div class="personal-img fl">

					</div>
					<div class="user-name fl" @click="href('login')">
						登录/注册
					</div>
				</div>
				<div class="waves">
					<div class="wave1"> <img src="../assets/img/bl.png" /></div>
					<div class="wave2"> <img src="../assets/img/bl2.png" /></div>
				</div>
			</div>

			<div class="item-row-my-orders" @click="href('myOlder')">
				<div class="my-orders-ic fl"><img src="../assets/img/i-3.jpg" /></div>
				<span class="fl" @click='alert()'> 我的订单</span>
				<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>
				<span class="fr older-all"> 查看全部订单</span>

			</div>
			<div class="personal-menu">
				<div class="sub-menu">
					<img src="../assets/img/i-1.jpg" />
					<div class="sub-menu-title">
						待付款
					</div>
				</div>
				<div class="sub-menu">
					<img src="../assets/img/i-2.jpg" />
					<div class="sub-menu-title">
						发货中
					</div>
				</div>
				<div class="sub-menu">
					<img src="../assets/img/i-1.jpg" />
					<div class="sub-menu-title">
						退款中
					</div>
				</div>
			</div>
			<div class="bg">
				<div class="item-row">
					<div class="item-row-title fl">
						我的钱包
					</div>
					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>

					<div class="item-row-wallet fr">
						(登录后查看我的钱包)
					</div>
				</div>
			</div>
			<div class="wallet-list">
				<ul>
					<li>
						<span class="item-row-actural">￥0.0</span>
						<span class="item-row-describe">账户余额</span>
					</li>
					<li>
						<span class="item-row-actural">0</span>
						<span class="item-row-describe">积分</span>
					</li>
					<li>
						<span class="item-row-actural">0</span>
						<span class="item-row-describe">优惠卷</span>
					</li>
				</ul>
			</div>
			<div class="bg" @click="href('personal')">
				<div class="item-row">

					<div class="my-orders-ic fl w16"><img src="../assets/img/i-11.png" /></div>

					<div class="item-row-title fl ">
						基本信息
					</div>
					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>

				</div>
			</div>
			<div class="bg" @click="href('myPoint')">
				<div class="item-row">

					<div class="my-orders-ic fl w16"><img src="../assets/img/i-12.png" /></div>

					<div class="item-row-title fl">
						我的积分
					</div>
					<div class="ic-r fr "> <img src="../assets/img/ic1.png" alt="" /></div>

				</div>
			</div>
			<div class="bg" @click="href('pointShop')">
				<div class="item-row">

					<div class="my-orders-ic fl w16"><img src="../assets/img/i-13.png" /></div>

					<div class="item-row-title fl">
						积分商城
					</div>
					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>

				</div>
			</div>
			<div class="bg" @click="href('myCard')">
				<div class="item-row">

					<div class="my-orders-ic fl w16"><img src="../assets/img/i-14.png" /></div>

					<div class="item-row-title fl">
						我的卡券
					</div>
					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>

				</div>
			</div>
			<div class="bg">
				<div class="item-row">

					<div class="my-orders-ic fl w16"><img src="../assets/img/i-15.png" /></div>

					<div class="item-row-title fl">
						会员活动
					</div>
					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>

				</div>
			</div>
			<div class="bg">
				<div class="item-row">

					<div class="my-orders-ic fl w16"><img src="../assets/img/i-16.png" /></div>

					<div class="item-row-title fl">
						主题活动
					</div>
					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>

				</div>
			</div>
			<div class="bg" @click="callphone()">
				<div class="item-row">

					<div class="my-orders-ic fl w16"><img src="../assets/img/i-17.png" /></div>

					<div class="item-row-title fl">
						联系我们
					</div>

					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>
					<div class="fr tel">400-400-9185</div>
				</div>
			</div>
			<div class="bg">
				<div class="item-row">

					<div class="my-orders-ic fl w16"><img src="../assets/img/i-18.png" /></div>

					<div class="item-row-title fl">
						关于我们
					</div>
					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>

				</div>
			</div>
			<!--<mt-actionsheet :actions="actions" v-model="sheetVisible">
			</mt-actionsheet>-->
			<div class="empty"></div>
		</div>

	</div>

</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
	/*animation*/
	
	.scroll-view {
		/* -- Attention: This line is extremely important in chrome 55+! -- */
		touch-action: none;
		/* -- Attention-- */
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow: hidden;
	}
	
	@-webkit-keyframes wavef {
		0% {
			-webkit-transform: translate(0);
			transform: translate(0)
		}
		50% {
			-webkit-transform: translate(-6%, 25%);
			transform: translate(-6%, 25%)
		}
		to {
			-webkit-transform: translate(5%, 1%);
			transform: translate(5%, 1%)
		}
	}
	
	@keyframes wavef {
		0% {
			-webkit-transform: translate(0);
			transform: translate(0)
		}
		50% {
			-webkit-transform: translate(-6%, 25%);
			transform: translate(-6%, 25%)
		}
		to {
			-webkit-transform: translate(5%, 1%);
			transform: translate(5%, 1%)
		}
	}
	/*公共样式*/
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	.item-row-my-orders,
	.personal-menu,
	.item-row,
	.wallet-list,
	.bg {
		background: #ffffff;
	}
	
	.usercenter-container {
		background: #f8f8f8;
	}
	/*会员展示栏*/
	
	.personal-profile-wrapper {
		position: relative;
		height: 3.04rem;
		background: url(../assets/img/user_banner.png) no-repeat;
		background-size: 100%;
	}
	
	.personal-wrap {
		padding: .97rem 0rem;
		height: 1.1rem;
		line-height: 1.1rem;
	}
	
	.personal-img {
		height: 1.1rem;
		width: 1.1rem;
		border-radius: 50%;
		background: #ffffff;
		margin-left: .3rem;
		background: url(../assets/img/logo.png);
		background-size: 100%;
	}
	
	.user-name {
		margin-left: .58rem;
		color: #FFFFFF;
		font-size: 17px;
	}
	
	.waves {
		position: absolute;
		width: 100%;
		height: .9rem;
		bottom: 0px;
		overflow: hidden;
	}
	
	.wave1 {
		position: absolute;
		bottom: 0px;
		left: -8%;
		width: 115%;
		animation: wavef 4s ease-in-out alternate infinite;
		animation-name: wavef;
		animation-duration: 4s;
	}
	
	.wave2 {
		/*-webkit-animation-delay: .8s;*/
		animation: wavef 4s ease-in-out alternate infinite;
		animation-name: wavef;
		animation-duration: 4s;
		animation-delay: .8s;
		-webkit-animation-delay: .8s;
		position: absolute;
		bottom: 0px;
		left: -8%;
		width: 115%;
	}
	
	.waves>div>img {
		width: 100%;
	}
	/*我的订单*/
	
	.item-row-my-orders {
		line-height: .34rem;
		height: .34rem;
		padding: .3rem;
		font-size: 15px;
		color: #333;
	}
	
	.item-row-my-orders>div>img {
		width: 100%;
	}
	
	.my-orders-ic {
		line-height: .34rem;
		width: .4rem;
		float: left;
		margin-right: .2rem;
		height: .34rem;
		line-height: .34rem;
	}
	
	.ic-r {
		line-height: .34rem;
		height: .34rem;
		width: .12rem;
		float: right;
		margin-left: .2rem;
	}
	
	.older-all {
		font-size: 12px;
		color: #999999;
	}
	
	.personal-menu {
		margin-top: 10px;
		flex-direction: row;
		display: flex;
		text-align: center;
		height: 73px;
	}
	
	.sub-menu {
		box-sizing: border-box;
		position: relative;
		padding-top: 20px;
		padding-bottom: 12px;
		width: 33%;
		text-align: center;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		font-size: 12px;
		color: #666666;
	}
	
	.sub-menu img {
		width: 21px;
		margin-bottom: 8px;
	}
	/*我的钱包*/
	
	.item-row {
		line-height: 18px;
		box-sizing: border-box;
		padding-top: .3rem;
		padding-bottom: .3rem;
		padding-right: .3rem;
		margin-left: .3rem;
		font-size: 15px;
		height: 46px;
		color: #333;
		border-bottom: 1px solid #F8F8F8;
	}
	
	.item-row-actural {
		font-size: 15px;
		color: #333;
	}
	
	.item-row>div>img {
		width: 100%;
	}
	
	.item-row-wallet {
		font-size: 12px;
		color: #999999;
	}
	
	.wallet-list {
		padding: 18px 0;
	}
	
	.wallet-list ul {
		height: 39px;
		flex-direction: row;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	
	.wallet-list ul li {
		width: 33%;
		text-align: center;
		box-sizing: border-box;
		position: relative;
		width: 33%;
		text-align: center;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		font-size: 12px;
		color: #666666;
	}
	/*更改图标16*/
	
	.w16 {
		width: 16px !important;
		line-height: 16px !important;
	}
	
	.empty {
		height: .6rem;
		width: 100%;
	}
	
	.tel {
		color: #3163de;
	}
</style>

<script>
	import Vue from 'vue'
	import VIscroll from 'viscroll';
	import http from '../utils/http'
	import api from '../utils/api'
	Vue.use(VIscroll, {
		mouseWheel: true,
		click: true,
		preventDefault: true,
		tap: false,
		bounce: true,
		//  scrollbars: true,
		//  fadeScrollbars:true
		//  disableTouch: true
	});
	export default {
		data() {
			return {

			}
		},
		methods: {

			pullUp() {
				console.log('1')
			},
			pullDown() {
				console.log(2)
			},
			href(adress) {
				$(document).scrollTop(0)

				this.$router.push(adress)
			},
			callphone() {
				window.location.href = "tel:400-400-9185";
			},
			alert() {
				alert()
			},
			fetchData: async function() {
				let params = {}
				const res = await http.get(api.right, params)
				if(res.data.success) {
					console.log('请求成功')
				}
			}

		},
		mounted() {
			 this.fetchData()
			//				this.$refs.scrollView.refresh()

		}
	}
</script>