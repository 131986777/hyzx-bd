<template>

	<div class="point-container">

		<div class="my-point">
			<div class="point-logo fl"><img src="../assets/img/point-logo.png" alt="" /></div>
			<div class="point-wrap fl">
				<div class="title">当前积分</div>
				<div class="point">{{point}}</div>
			</div>
		</div>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">全部</mt-tab-item>
			<mt-tab-item id="2">奖励</mt-tab-item>
			<mt-tab-item id="3">消费</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
					<ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50" infinite-scroll-immediate-check='false'>

						<li v-for="item in list" class="page-infinite-listitem ">
							<pointList :msg="item"></pointList>

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
							<pointList :msg="item"></pointList>

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
							<pointList :msg="item"></pointList>

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
	
	.my-point {
		height: 2.3rem;
		display: flex;
		align-items: center;
		width: 100%;
		background: url(../assets/img/pback.png) no-repeat;
		background-size: 100%;
		color: #FFFFFF;
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
</style>

</script>

<script>
	import pointList from '../components/point-list.vue'
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
				pointMsg: [{
						'changeType': '1',
						'eventIntro': '充值200元',
						'addDatetime': '10-28',
						'changePoint': '20',
						'eventIntro': '兑换获得积分'
					},

				]
			}
		},
		components: {
			pointList
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
			getPointList: async function() {
				let params = {};
				params.userId = '1';
				params.token = cookies.cookie.getCookie('token')
				const res = await http.get(api.getPointList, params)
				if(res.data.code == 0) {
					this.pointMsg = res.data.date
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
			}

		},
		created() {
			this.getPointList()
			console.log('23213')

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