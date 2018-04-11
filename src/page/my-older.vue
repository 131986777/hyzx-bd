<template>

		<div class="bodys">
			<div class="point-container">
				<mt-navbar v-model="selected">
					<mt-tab-item id="1" @click='ce'>全部</mt-tab-item>
					<mt-tab-item id="2">待付款</mt-tab-item>
					<mt-tab-item id="3">待自提</mt-tab-item>
					<mt-tab-item id="4">待分拣</mt-tab-item>
					<mt-tab-item id="5">待评价</mt-tab-item>
				</mt-navbar>

				<!-- tab-container -->
				<mt-tab-container v-model="selected">
					<mt-tab-container-item id="1">
						<ul>
							<li>
								<div class="item-old">
									<span class="fl">订单编号：</span>
									<span>21321321321</span>
									<span class="status fr">待付款</span>
								</div>
								<div class="shop">
									<div class="shop-img"></div>
									<div class="shop-wrap">
										<div class="shop-name fl">正将龙利鱼</div>
										<div class="shop-wap-right fr">
											<span class="shop-price fr">
											￥<span>100</span>
											</span>
											<span class="shop-num fr c">
											X<span>1</span>
											</span>
										</div>
										<div class="shop-size fl c">商品规格：<span>330g</span></div>

									</div>
								</div>
								<div class="shop">
									<div class="shop-img"></div>
									<div class="shop-wrap">
										<div class="shop-name fl">正将龙利鱼</div>
										<div class="shop-wap-right fr">
											<span class="shop-price fr">
											￥<span>100</span>
											</span>
											<span class="shop-num fr c">
											X<span>1</span>
											</span>
										</div>
										<div class="shop-size fl c">商品规格：<span>330g</span></div>

									</div>
								</div>
								<div class="shop">
									<div class="shop-img"></div>
									<div class="shop-wrap">
										<div class="shop-name fl">正将龙利鱼</div>
										<div class="shop-wap-right fr">
											<span class="shop-price fr">
											￥<span>100</span>
											</span>
											<span class="shop-num fr c">
											X<span>1</span>
											</span>
										</div>
										<div class="shop-size fl c">商品规格：<span>330g</span></div>

									</div>
								</div>
								<div class="shop-message">
									<div class="shop-older fr">
										<span> 共三件商品</span>
										<span> 合计：75.30</span>
									</div>
									<div class="shop-time fr">
										<span> 下单时间：2017/10/31     17:26:30</span>
									</div>

								</div>
								<div class="shop-btns ">
									<div class="ljzf shop-bth ">立即支付</div>
									<div class="qxdd shop-bth ">取消订单</div>

								</div>
							</li>
							<li>
								<div class="item-old">
									<span class="fl">订单编号：</span>
									<span>21321321321</span>
									<span class="status fr">待付款</span>
								</div>
								<div class="shop">
									<div class="shop-img"></div>
									<div class="shop-wrap">
										<div class="shop-name fl">正将龙利鱼</div>
										<div class="shop-wap-right fr">
											<span class="shop-price fr">
											￥<span>100</span>
											</span>
											<span class="shop-num fr c">
											X<span>1</span>
											</span>
										</div>
										<div class="shop-size fl c">商品规格：<span>330g</span></div>

									</div>
								</div>
								<div class="shop">
									<div class="shop-img"></div>
									<div class="shop-wrap">
										<div class="shop-name fl">正将龙利鱼</div>
										<div class="shop-wap-right fr">
											<span class="shop-price fr">
											￥<span>100</span>
											</span>
											<span class="shop-num fr c">
											X<span>1</span>
											</span>
										</div>
										<div class="shop-size fl c">商品规格：<span>330g</span></div>

									</div>
								</div>
								<div class="shop">
									<div class="shop-img"></div>
									<div class="shop-wrap">
										<div class="shop-name fl">正将龙利鱼</div>
										<div class="shop-wap-right fr">
											<span class="shop-price fr">
											￥<span>100</span>
											</span>
											<span class="shop-num fr c">
											X<span>1</span>
											</span>
										</div>
										<div class="shop-size fl c">商品规格：<span>330g</span></div>

									</div>
								</div>
								<div class="shop-message">
									<div class="shop-older fr">
										<span> 共三件商品</span>
										<span> 合计：75.30</span>
									</div>
									<div class="shop-time fr">
										<span> 下单时间：2017/10/31     17:26:30</span>
									</div>

								</div>
								<div class="shop-btns ">
									<div class="ljzf shop-bth ">立即支付</div>
									<div class="qxdd shop-bth ">取消订单</div>

								</div>
							</li>
						</ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="2">
						<ul>

							<li>
								<div class="item-old">
									<span class="fl">订单编号：</span>
									<span>21321321321</span>
									<span class="status fr">待付款</span>
								</div>
								<div class="shop">
									<div class="shop-img"></div>
									<div class="shop-wrap">
										<div class="shop-name fl">正将龙利鱼</div>
										<div class="shop-wap-right fr">
											<span class="shop-price fr">
											￥<span>100</span>
											</span>
											<span class="shop-num fr c">
											X<span>1</span>
											</span>
										</div>
										<div class="shop-size fl c">商品规格：<span>330g</span></div>

									</div>
								</div>
								<div class="shop">
									<div class="shop-img"></div>
									<div class="shop-wrap">
										<div class="shop-name fl">正将龙利鱼</div>
										<div class="shop-wap-right fr">
											<span class="shop-price fr">
											￥<span>100</span>
											</span>
											<span class="shop-num fr c">
											X<span>1</span>
											</span>
										</div>
										<div class="shop-size fl c">商品规格：<span>330g</span></div>

									</div>
								</div>
								<div class="shop">
									<div class="shop-img"></div>
									<div class="shop-wrap">
										<div class="shop-name fl">正将龙利鱼</div>
										<div class="shop-wap-right fr">
											<span class="shop-price fr">
											￥<span>100</span>
											</span>
											<span class="shop-num fr c">
											X<span>1</span>
											</span>
										</div>
										<div class="shop-size fl c">商品规格：<span>330g</span></div>

									</div>
								</div>
								<div class="shop-message">
									<div class="shop-older fr">
										<span> 共三件商品</span>
										<span> 合计：75.30</span>
									</div>
									<div class="shop-time fr">
										<span> 下单时间：2017/10/31     17:26:30</span>
									</div>

								</div>
								<div class="shop-btns ">
									<div class="ljzf shop-bth ">立即支付</div>
									<div class="qxdd shop-bth ">取消订单</div>

								</div>
							</li>
								<li>
								<div class="item-old">
									<span class="fl">订单编号：</span>
									<span>21321321321</span>
									<span class="status fr">待付款</span>
								</div>
								<div class="shop">
									<div class="shop-img"></div>
									<div class="shop-wrap">
										<div class="shop-name fl">正将龙利鱼</div>
										<div class="shop-wap-right fr">
											<span class="shop-price fr">
											￥<span>100</span>
											</span>
											<span class="shop-num fr c">
											X<span>1</span>
											</span>
										</div>
										<div class="shop-size fl c">商品规格：<span>330g</span></div>

									</div>
								</div>
								<div class="shop">
									<div class="shop-img"></div>
									<div class="shop-wrap">
										<div class="shop-name fl">正将龙利鱼</div>
										<div class="shop-wap-right fr">
											<span class="shop-price fr">
											￥<span>100</span>
											</span>
											<span class="shop-num fr c">
											X<span>1</span>
											</span>
										</div>
										<div class="shop-size fl c">商品规格：<span>330g</span></div>

									</div>
								</div>
								<div class="shop">
									<div class="shop-img"></div>
									<div class="shop-wrap">
										<div class="shop-name fl">正将龙利鱼</div>
										<div class="shop-wap-right fr">
											<span class="shop-price fr">
											￥<span>100</span>
											</span>
											<span class="shop-num fr c">
											X<span>1</span>
											</span>
										</div>
										<div class="shop-size fl c">商品规格：<span>330g</span></div>

									</div>
								</div>
								<div class="shop-message">
									<div class="shop-older fr">
										<span> 共三件商品</span>
										<span> 合计：75.30</span>
									</div>
									<div class="shop-time fr">
										<span> 下单时间：2017/10/31     17:26:30</span>
									</div>

								</div>
								<div class="shop-btns ">
									<div class="ljzf shop-bth ">立即支付</div>
									<div class="qxdd shop-bth ">取消订单</div>

								</div>
							</li>
								<li>
								<div class="item-old">
									<span class="fl">订单编号：</span>
									<span>21321321321</span>
									<span class="status fr">待付款</span>
								</div>
								<div class="shop">
									<div class="shop-img"></div>
									<div class="shop-wrap">
										<div class="shop-name fl">正将龙利鱼</div>
										<div class="shop-wap-right fr">
											<span class="shop-price fr">
											￥<span>100</span>
											</span>
											<span class="shop-num fr c">
											X<span>1</span>
											</span>
										</div>
										<div class="shop-size fl c">商品规格：<span>330g</span></div>

									</div>
								</div>
								<div class="shop">
									<div class="shop-img"></div>
									<div class="shop-wrap">
										<div class="shop-name fl">正将龙利鱼</div>
										<div class="shop-wap-right fr">
											<span class="shop-price fr">
											￥<span>100</span>
											</span>
											<span class="shop-num fr c">
											X<span>1</span>
											</span>
										</div>
										<div class="shop-size fl c">商品规格：<span>330g</span></div>

									</div>
								</div>
								<div class="shop">
									<div class="shop-img"></div>
									<div class="shop-wrap">
										<div class="shop-name fl">正将龙利鱼</div>
										<div class="shop-wap-right fr">
											<span class="shop-price fr">
											￥<span>100</span>
											</span>
											<span class="shop-num fr c">
											X<span>1</span>
											</span>
										</div>
										<div class="shop-size fl c">商品规格：<span>330g</span></div>

									</div>
								</div>
								<div class="shop-message">
									<div class="shop-older fr">
										<span> 共三件商品</span>
										<span> 合计：75.30</span>
									</div>
									<div class="shop-time fr">
										<span> 下单时间：2017/10/31     17:26:30</span>
									</div>

								</div>
								<div class="shop-btns ">
									<div class="ljzf shop-bth ">立即支付</div>
									<div class="qxdd shop-bth ">取消订单</div>

								</div>
							</li>
						</ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="3">
						<ul>

						</ul>
					</mt-tab-container-item>
				</mt-tab-container>
				<div class="empty"></div>
			</div>
		</div>

</template>

<!--<script>
	export default {
		mounted: function(){
			
		}
	}
</script>-->

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
	/*animation*/
	/*选项卡*/
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	.c {
		clear: both;
	}
	
	.child-view {
		background: #F0F0F0;
	}
	
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
	
	.item-old {
		height: .72rem;
		padding: 0 12px;
		font-size: .26rem;
		color: #333;
		line-height: .72rem;
		border-bottom: 1px solid #dedede;
	}
	
	.point-container {
		background: #FFFFFF;
	}
	
	.status {
		color: #fd825c !important;
	}
	
	.shop {
		box-sizing: border-box;
		height: 1.6rem;
		padding: 10px 12px;
		padding-top: 0;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	
	.shop:nth-child(2) {
		padding-top: 10px;
	}
	
	.shop-img {
		width: 1.2rem;
		height: 1.2rem;
		background: url(../../static/jd.png);
		background-size: 100% 100%;
		margin-right: 20px;
	}
	
	.shop-name {
		font-size: .28rem;
	}
	
	.shop-wrap {
		height: 1.2rem;
		line-height: 1;
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}
	
	.shop-size {
		margin-top: 10px;
		clear: left;
		font-size: .28rem;
		color: #999;
	}
	
	.shop-num {
		font-size: .2rem;
		margin-top: 6px;
		color: #999;
	}
	
	.shop-message {
		padding: 10px;
		box-sizing: border-box;
		height: 1.2rem;
		font-size: .26rem;
		color: #333;
	}
	
	.shop-older {
		font-size: .26rem;
		color: #333;
	}
	
	.shop-time {
		clear: both;
	}
	
	.shop-btns {
		height: 1.28rem;
		line-height: 1.28rem;
		clear: both;
		width: 100%;
		text-align: right;
		border-top: 1px solid #DEDEDE;
	}
	
	.shop-bth {
		width: 1.5rem;
		height: .56rem;
		font-size: .3rem;
		border-radius: 2px;
		line-height: .56rem;
		background-color: white;
		text-align: center;
		margin-right: 10px;
		display: inline-block;
	}
	
	.ljzf {
		border: 1px solid #FD825C;
		color: #fd825c;
	}
	
	.qxdd {
		border: 1px solid #333;
		color: #333;
	}
	
	li {
		margin-top: 10px;
	}
	.point-container{
		height: 100%;
	}
	.mint-tab-container{
		height: 94.5%;
	    overflow: auto;
	    overflow:scroll;
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
					selected: "1",
					s:''
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


					this.$router.push(adress)
				},
				
				ce(){
					alert()
				}
				

			},
			watch: {
				selected: function(val){

//					alert(this.selected);
				}
			},
			mounted() {

			}
	}
</script>