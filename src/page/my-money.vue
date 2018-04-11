<template>

	<div class="point-container">

		<div class="my-point">
			<div class="point-logo fl"><img src="../assets/img/money-logo.png" alt="" /></div>
			<div class="point-wrap fl">
				<div class="title">我的余额</div>
				<div class="point"><span>¥</span>{{point/100}}</div>

			</div>
			<div style="" class="money-warp">
				<div class="account" >充值账户:{{recharge}}</div>
				<div class="g"></div>
				<div class="account" >赠送账户：<span>{{giftLeft}}</span></div>
			</div>

		</div>
			<div class="bg">
				<div class="item-row" @click="href('recharge')">

					<div class="my-orders-ic fl w16"><img src="../assets/img/re.png" /></div>

					<div class="item-row-title fl">
					充值 
					</div>
					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>

				</div>
			</div>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">全部</mt-tab-item>
			<mt-tab-item id="2">收入</mt-tab-item>
			<mt-tab-item id="3">支出</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
					<ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50" infinite-scroll-immediate-check='false'>

						<li v-for="item in list" class="page-infinite-listitem ">
							<moneyList :msg="item"></moneyList>

						</li>
					</ul>
					<p v-show="loading" class="page-infinite-loading">
						<mt-spinner type="fading-circle"></mt-spinner>
						加载中...
					</p>
				</div>

			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<div class="page-infinite-wrapper" ref="wrapper2" :style="{ height: wrapperHeight + 'px' }">
					<ul class="page-infinite-list" v-infinite-scroll="loadMore2" infinite-scroll-disabled="loading" infinite-scroll-distance="50" infinite-scroll-immediate-check='false'>

						<li v-for="item in list2" class="page-infinite-listitem">
							<moneyList :msg="item"></moneyList>

						</li>
					</ul>
					<p v-show="loading" class="page-infinite-loading">
						<mt-spinner type="fading-circle"></mt-spinner>
						加载中...
					</p>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<div class="page-infinite-wrapper" ref="wrapper3" :style="{ height: wrapperHeight + 'px' }">
					<ul class="page-infinite-list" v-infinite-scroll="loadMore3" infinite-scroll-disabled="loading" infinite-scroll-distance="50" infinite-scroll-immediate-check='false'>

						<li v-for="item in list3" class="page-infinite-listitem">
							<moneyList :msg="item"></moneyList>

						</li>
					</ul>
					<p v-show="loading" class="page-infinite-loading">
						<mt-spinner type="fading-circle"></mt-spinner>
						加载中...
					</p>
				</div>
			</mt-tab-container-item>
		</mt-tab-container>
		<div class="empty"></div>
	</div>
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
	/*animation*/
	/*公共样式*/
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	.black {
		color: #000000 !important;
	}
	
	/*积分bannner*/
	.point-container{
		text-align: center;
	}
	.my-point {
		height: 3.1rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		width: 100%;
		background: url(../assets/img/pbacks.png) no-repeat;
		background-size: 100%;
		color: #FFFFFF;
		padding-top: .3rem;
		box-sizing: border-box;
	}
	
	.point-logo {
		margin-left: .4rem;
		width: 1.26rem;
		height: 1.26rem;
	}
	
	.point-wrap {
		margin-left: .35rem;
	}
	
	.point-logo img {
		width: 100%;
	}
	
	.title {
		margin-bottom: 4px;
		color: #dbdff8;
	}
	
	.point {
		text-align: center;
		font-size: 28px;
	}
	/*选项卡*/
	
	.mint-tab-item-label {
		font-size: 15px !important;
	}
	
	.mint-navbar .mint-tab-item {
		padding: 12px 0;
	}
	
	.is-selected {
		color: #fd825c !important;
	}
	
	.mint-navbar .mint-tab-item.is-selected {
		border-bottom: 3px solid #fd825c !important;
	}
	
	.mint-tab-container-item li {
		height: 1.6rem;
		display: flex;
		align-items: center;
		padding: .2rem;
	}
	
	.money-warp {
		width: 100%;
		flex-wrap: wrap-reverse;
		height: .8rem;
		margin-bottom: -.3rem;
		background: rgba(0, 0, 0, .3);
		display: flex;
		align-items: center;
	}
	
	.account {
		flex-grow: 1;
		text-align: center;
		    font-size: 14px;
	}
	
	.g {
		height: 20px;
		width: 1px;
		background: #fff;
	}
	.bg {
		background: #ffffff;
	}
		.my-orders-ic {
		line-height: .34rem;
		width: .4rem;
		float: left;
		margin-right: .2rem;
		height: .34rem;
		line-height: .34rem;
	}
	.w16 {
		width: 18px !important;
		line-height: 18px !important;
	}
	.fl {
		float: left;
	}
	.ic-r {
		line-height: .34rem;
		height: .34rem;
		width: .12rem;
		float: right;
		margin-left: .2rem;
	}
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
	.item-row>div>img{
		    width: 100%;
	}
	.item-row-title{
		color: #fe832c;
		    font-size: 16px;
	}
</style>

</script>

<script>
	import moneyList from '../components/money-list.vue'
	import Vue from 'vue';
	import http from '../utils/http'
	import api from '../utils/api'
	import cookies from '../utils/common'
	import {
		Tabbar,
		Navbar,
		TabItem
	} from 'mint-ui';
	import {
		Cell
	} from 'mint-ui';
	import {
		TabContainer,
		TabContainerItem
	} from 'mint-ui';
	import { InfiniteScroll } from 'mint-ui';
	import { Spinner } from 'mint-ui';
	//
	Vue.component(Spinner.name, Spinner);
	Vue.use(InfiniteScroll);
	Vue.component(Cell.name

		, Cell);
	Vue.component(Tabbar.name

		, Tabbar);
	Vue.component(TabContainer.name, TabContainer);
	Vue.component(TabContainerItem.name, TabContainerItem);

	Vue.component(Navbar.name, Navbar);
	Vue.component(TabItem.name, TabItem);

	export default {
		data() {
			return {
				selected: "1",
				list: [],
				list2: [],
				list3: [],
				loading: false,
				wrapperHeight: 0,
				wrapperHeight2: 0,
				wrapperHeight3: 0,
				pointMsg2: [],
				pointMsg3: [],
				point: '1480',
				pointMsg: [
				],
				recharge:'',
				giftLeft:''
			}
		},
		components: {
			moneyList
		},
		methods: {
			href(adress) {
				console.log(adress)
				this.$router.push(adress)
			},
			loadMore() {
				this.loading = true;
				let lastValue = this.list.length - 1
				if(lastValue < this.pointMsg.length) {
					setTimeout(() => {
						let last = this.list.length - 1
						for(let i = last; i < last + 3; i++) {
							if(this.pointMsg[i]) {
								this.list.push(this.pointMsg[i]);

							}

						}
						this.loading = false;
					}, 2500);
				} else {
					this.loading = false;
				}
			},
			loadMore2() {
				this.loading = true;
				let lastValue = this.list2.length - 1
				if(lastValue < this.pointMsg2.length) {
					setTimeout(() => {
						let last = this.list2.length - 1
						for(let i = last; i < last + 3; i++) {
							if(this.pointMsg2[i]) {
								this.list2.push(this.pointMsg2[i]);

							}

						}
						this.loading = false;
					}, 2500);
				} else {
					this.loading = false;
				}
			},
			loadMore3() {
				this.loading = true;
				let lastValue = this.list3.length - 1
				if(lastValue < this.pointMsg3.length) {
					setTimeout(() => {
						let last = this.list3.length - 1
						for(let i = last; i < last + 3; i++) {
							if(this.pointMsg3[i]) {
								this.list3.push(this.pointMsg3[i]);

							}

						}
						this.loading = false;
					}, 2500);
				} else {
					this.loading = false;
				}
			},
			getFinanceByUserId: async function() {
				let params = {};
				params.userId = '1';
				params.token = cookies.cookie.getCookie('token')
				const res = await http.get(api.getFinanceByUserId, params)
				if(res.data.code == 0) {
					this.pointMsg = res.data.data
					this.point = res.data.balance
					console.log(this.pointMsg)
					for(var i = 0; i < this.pointMsg.length; i++) {
						if(this.pointMsg[i].changeType == 1) {
							this.pointMsg2.push(this.pointMsg[i])
						}
						if(this.pointMsg[i].changeType == -1) {
							this.pointMsg3.push(this.pointMsg[i])
						}
					}
					for(let i = 0; i <= 6; i++) {
						this.list.push(this.pointMsg[i]);

					}

					for(let i = 0; i <= 6; i++) {
						if(this.pointMsg2[i]) {
							this.list2.push(this.pointMsg2[i]);
						}
					}
					for(let i = 0; i <= 6; i++) {
						if(this.pointMsg3[i]) {
							this.list3.push(this.pointMsg3[i]);
						}
					}
				}
			},

		
		getGiftLeft: async function() {
				let params = {};
				params.userId = '1';
				params.token = cookies.cookie.getCookie('token')
				const res = await http.get(api.getGiftLeft, params)
				if(res.data.code == 0) {
					this.recharge=res.data.balance
					this.giftLeft=res.data.giftLeft
				console.log(res.data)
					
				}
		

		}
		},
		created() {
			this.getFinanceByUserId()
			this.getGiftLeft()

		},
		mounted() {
			this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;

		},
		watch: {
			selected: function(val) {

			}
		},
	}
</script>