<template>
	<iscroll-view ref="scrollView" class="scroll-view" @pullUp="pullUp" @pullDown="pullDown" :options="{mouseWheel: true, bounce:true,click:true}">
		<div class="point-container">

			<div class="my-point">
				<div class="point-logo fl"><img src="../assets/img/point-logo.png" alt="" /></div>
				<div class="point-wrap fl">
					<div class="title">当前积分</div>
					<div class="point">1048</div>
				</div>
			</div>
			<mt-navbar v-model="selected">
				<mt-tab-item id="1">全部</mt-tab-item>
				<mt-tab-item id="2">奖励</mt-tab-item>
				<mt-tab-item id="3">消费</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected" swipeable>
				<mt-tab-container-item id="1">
					<ul>
						<li>
							<div class="shop-img"> <img src="../assets/img/rechange.png"/></div>
							<div class="shop-wap">
								<div class="shop-event">充值200元</div>
								<div class="shop-botton">兑换获得积分</div>
							</div>
							<div class="shop-wap-right">
								<div class="shop-date">10-28</div>
								<div class="shop-point">+20</div>
							</div>
						</li>
						<li>
							<div class="shop-img"> <img src="../assets/img/sell.png"/></div>
							<div class="shop-wap">
								<div class="shop-event">售后退款-交易啊大大哒</div>
								<div class="shop-botton">售后退款</div>
							</div>
							<div class="shop-wap-right">
								<div class="shop-date">10-28</div>
								<div class="shop-point black">-20</div>
							</div>
						</li>
						<li>
							<div class="shop-img"> <img src="../assets/img/sell.png"/></div>
							<div class="shop-wap">
								<div class="shop-event">幸运大转盘-交易啊大大哒</div>
								<div class="shop-botton">活动扣除积分</div>
							</div>
							<div class="shop-wap-right">
								<div class="shop-date">10-28</div>
								<div class="shop-point black">-20</div>
							</div>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
						<ul>
						<li>
							<div class="shop-img"> <img src="../assets/img/rechange.png"/></div>
							<div class="shop-wap">
								<div class="shop-event">充值200元</div>
								<div class="shop-botton">兑换获得积分</div>
							</div>
							<div class="shop-wap-right">
								<div class="shop-date">10-28</div>
								<div class="shop-point">+20</div>
							</div>
						</li>
						
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
						<ul>
							<li>
							<div class="shop-img"> <img src="../assets/img/sell.png"/></div>
							<div class="shop-wap">
								<div class="shop-event">幸运大转盘-交易啊大大哒</div>
								<div class="shop-botton">活动扣除积分</div>
							</div>
							<div class="shop-wap-right">
								<div class="shop-date">10-28</div>
								<div class="shop-point black">-20</div>
							</div>
						</li>
					</ul>
				</mt-tab-container-item>
			</mt-tab-container>
			<div class="empty"></div>
		</div>
	</iscroll-view>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
	/*animation*/
	
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
	.black{
		color: #000000 !important;
	}
	/*积分bannner*/
	
	.my-point {
		height: 2.3rem;
		display: flex;
		align-items: center;
		j width: 100%;
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
	.mint-navbar .mint-tab-item{
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
	
	.shop-img {
		width: 1.2rem;
		height: 1.2rem;
		background: yellow;
	}
	
	.shop-img img {
		width: 100%;
	}
	
	.shop-wap {
		margin-left: .2rem;
	}
	
	.shop-event {
		font-size: 15px;
		margin-bottom: 5px;
		width: 150px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.shop-botton {
		box-sizing: border-box;
		height: .4rem;
		padding: 0 .05rem;
		/*padding: rem;*/
		text-align: center;
		border: 1px solid #d6d6d6;
		border-radius: 3px;
		color: #d6d6d6;
		line-height: .4rem;
		font-size: 13px;
		width:  fit-content;
	}
	
	.shop-wap-right {
		flex: 1;
		text-align: right;
	}
	
	.shop-date {
		margin-bottom: 8px;
		color: #b2b2b2;
		font-size: 13.5px;
	}
	
	.shop-point {
		color: #fe832c;
		font-size: 21px;
	}
</style>

<script>
	import Vue from 'vue';
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
					selected: "1"
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

					console.log(adress)
					this.$router.push(adress)
				}

			},
			mounted() {
				$('.item-row').click(function() {

				})
				this.$refs.scrollView.refresh()
			}
	}
</script>