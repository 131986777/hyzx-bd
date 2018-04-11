<template>
	<div>
		<div v-if="mjWsy">
			<li>
				<div class="card-img fl ">
					<div class="card-price "><span class="card-num"><span class="symbol">¥</span><span class="price">20</span></span>
					</div>
					<div class='card-condition'>满300元可用</div>
				</div>
				<div class="card-wrap">
					<div class="card-title of">
						<div class="card-type fl">满减卷</div>
						<div class="card-name ">全类品</div>
					</div>
					<div class="card-date of">
						<div class="card-datatime fl">2012/01/02-2017/03/04</div>
						<div class="card-user fr">立即使用</div>
					</div>
					<div class="of" @click="showDeail()">
						<div class="card-detail "><span>详细信息</span>
							<div class="card-more fr"><img src="../assets/img/card-more.png" width="100%"></div>
						</div>
					</div>
				</div>

			</li>
			<div class="card-detail-message ">
				<span id="">
							限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注
							</span>
			</div>
		</div>
		<div v-if="zkWsy">
			<li>
				<div class="card-img fl card2">
					<div class="card-price"><span class="card-num"><span class="price">7</span><span class="symbol">折</span></span>
					</div>
					<div class='card-condition '>全场可用</div>
				</div>
				<div class="card-wrap">
					<div class="card-title of">
						<div class="card-type fl type2">折扣卷</div>
						<div class="card-name ">水果 熟食</div>
					</div>
					<div class="card-date of">
						<div class="card-datatime fl">2012/01/02-2017/03/04</div>
						<div class="card-user fr cy">立即使用</div>
					</div>
					<div class=" of" @click="showDeail($event)">
						<div class="card-detail "><span>详细信息</span>
							<div class="card-more fr"><img src="../assets/img/card-more.png" width="100%"></div>
						</div>
					</div>
				</div>
			</li>
			<div class="card-detail-message">
				<span id="">
							限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注
							</span>
			</div>
		</div>
		<div v-if="zkYsy">
			<li>
				<div class="card-img fl card3">
					<div class="card-price"><span class="card-num"><span class="price">7</span><span class="symbol">折</span></span>
					</div>
					<div class='card-condition '>全场可用</div>
				</div>
				<div class="card-wrap">
					<div class="card-title of">
						<div class="card-type fl card3">折扣卷</div>
						<div class="card-name ">水果 熟食</div>
					</div>
					<div class="card-date of">
						<div class="card-datatime fl">2012/01/02-2017/03/04</div>

					</div>
					<div class=" of" @click="showDeail($event)">
						<div class="card-detail "><span>详细信息</span>
							<div class="card-more fr"><img src="../assets/img/card-more.png" width="100%"></div>
						</div>

					</div>

				</div>
			</li>
			<div class="card-detail-message">
				<span id="">
							限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注
							</span>
			</div>
		</div>
		<div v-if="mjList">
			<li>
				<div class="card-img card3 fl ">
					<div class="card-price "><span class="card-num"><span class="symbol">¥</span><span class="price">20</span></span>
					</div>
					<div class='card-condition'>满300元可用</div>
				</div>
				<div class="card-wrap">
					<div class="card-title of">
						<div class="card-type  card3 fl">满减卷</div>
						<div class="card-name ">全类品</div>
					</div>
					<div class="card-date of">
						<div class="card-datatime fl">2012/01/02-2017/03/04</div>

					</div>
					<div class="of" @click="showDeail()">
						<div class="card-detail "><span>详细信息</span>
							<div class="card-more fr"><img src="../assets/img/card-more.png" width="100%"></div>
						</div>
					</div>
					<div class="outdate"><img src="../assets/img/outdate.png" alt="" /></div>

				</div>

			</li>
			<div class="card-detail-message ">
				<span id="">
							限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注
							</span>
			</div>
		</div>

		<div v-if="zkList">
			<li>
				<div class="card-img fl card3">
					<div class="card-price"><span class="card-num"><span class="price">7</span><span class="symbol">折</span></span>
					</div>
					<div class='card-condition '>全场可用</div>
				</div>
				<div class="card-wrap">
					<div class="card-title of">
						<div class="card-type fl card3">折扣卷</div>
						<div class="card-name ">水果 熟食</div>
					</div>
					<div class="card-date of">
						<div class="card-datatime fl">2012/01/02-2017/03/04</div>

					</div>
					<div class=" of" @click="showDeail($event)">
						<div class="card-detail "><span>详细信息</span>
							<div class="card-more fr"><img src="../assets/img/card-more.png" width="100%"></div>
						</div>

					</div>
					<div class="outdate"><img src="../assets/img/outdate.png" alt="" /></div>

				</div>
			</li>
			<div class="card-detail-message">
				<span id="">
							限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注
							</span>
			</div>
		</div>
		<div v-if="mjYsy">
			<li>
				<div class="card-img card3 fl ">
					<div class="card-price "><span class="card-num"><span class="symbol">¥</span><span class="price">20</span></span>
					</div>
					<div class='card-condition'>满300元可用</div>
				</div>
				<div class="card-wrap">
					<div class="card-title of">
						<div class="card-type  card3 fl">满减卷</div>
						<div class="card-name ">全类品</div>
					</div>
					<div class="card-date of">
						<div class="card-datatime fl">2012/01/02-2017/03/04</div>

					</div>
					<div class="of" @click="showDeail()">
						<div class="card-detail "><span>详细信息</span>
							<div class="card-more fr"><img src="../assets/img/card-more.png" width="100%"></div>
						</div>
					</div>

				</div>

			</li>
			<div class="card-detail-message ">
				<span id="">
							限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注
							</span>
			</div>
		</div>
		<div v-if="zkYsy">
			<li>
				<div class="card-img fl card3">
					<div class="card-price"><span class="card-num"><span class="price">7</span><span class="symbol">折</span></span>
					</div>
					<div class='card-condition '>全场可用</div>
				</div>
				<div class="card-wrap">
					<div class="card-title of">
						<div class="card-type fl card3">折扣卷</div>
						<div class="card-name ">水果 熟食</div>
					</div>
					<div class="card-date of">
						<div class="card-datatime fl">2012/01/02-2017/03/04</div>

					</div>
					<div class=" of" @click="showDeail($event)">
						<div class="card-detail "><span>详细信息</span>
							<div class="card-more fr"><img src="../assets/img/card-more.png" width="100%"></div>
						</div>

					</div>

				</div>
			</li>
			<div class="card-detail-message">
				<span id="">
							限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注
							</span>
			</div>
		</div>
	</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				mjWsy: false,
				zkWsy: false,
				mjList: false,
				zkList: false,
				mjYsy: false,
				zkYsy: false,
				status:'',
			}
		},
		methods: {
			showDeail() {
				if($(event.currentTarget).find('img').hasClass('rotate')) {
					$(event.currentTarget).find('img').removeClass("rotate")
					$(event.currentTarget).parents("li").next().removeClass("height")
				} else {
					$(event.currentTarget).find('img').addClass("addw").addClass("rotate")
					$(event.currentTarget).parents("li").next().addClass("addw").addClass("height")
				}

			}
		},
		props: {
			msg: Object //这样可以指定传入的类型，如果类型不对，会警告
		},
		mounted() {
			console.log(this.msg)
			//判断 显示模块
//			mjWsy: false,
//				zkWsy: false,
//				mjList: false,
//				zkList: false,
//				mjYsy: false,
//				zkYsy: false,
			const  that=this
			switch(this.msg.status) {
				case '1':

					that.status='mjWsy'
					break;
				case '2':
					that.status = "zkWsy";
					break;
				case '3':
					that.status = "mjList";
					break;
				case '4':
					that.status = "zkList";
					break;
				case '5':
					that.status = "mjYsy";
					break;
				case '6':
					that.status = "zkYsy";
					break;
				
			}

			this[this.status]=true;
			//分类
//			console.log(that.msg)
//			for(var i=0;i<that.msg.length;i++){
//				console.log('321321321')
//				if(this.msg[i].status==0||this.msg[i].status==1){
//					console.log('222')
//				}
//			}

		}
	}
</script>

<style>
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	.of {
		overflow: hidden;
	}
	
	.black {
		color: #000000 !important;
	}
	
	.cy {
		color: #fcc45e !important;
		border-color: #fcc45e !important;
	}
	
	.csy {
		color: #c2c2c2 !important;
		border-color: #c2c2c2 !important;
	}
	
	.csy-back {
		background: #c2c2c2 !important;
	}
	
	.img {
		display: block !important;
	}
	
	.addw {
		-webkit-transition: all 0.5s ease-in-out;
		-moz-transition: all 0.5s ease-in-out;
		transition: all 0.5s ease-in-out;
	}
	
	.rotate {
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		transform: rotate(180deg);
	}
	
	.height {
		height: 48px !important;
	}
	/*积分bannner*/
	/*选项卡*/
	
	.mint-tab-container {
		margin-top: .2rem;
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
		display: flex;
		align-items: center;
		padding: .1rem;
		border: 1px solid #ebebeb;
		border-left: 0;
		border-right: 0;
		position: relative;
	}
	
	.mint-tab-container-item li .card-img {
		margin-left: .2rem;
		width: 2.2rem;
		height: 2rem;
		background: url(../assets/img/card.png) no-repeat;
		background-size: 100% 100%;
		text-align: center;
		color: #FFFFFF;
	}
	
	.card2 {
		background: url(../assets/img/card2.png) no-repeat !important;
		background-size: 100% 100% !important;
	}
	
	.card3 {
		background: url(../assets/img/card3.png) no-repeat !important;
		background-size: 100% 100% !important;
	}
	
	.mint-tab-container-item li .card-img .card-price {
		font-size: 43px;
		display: flex;
		margin-left: -10%;
		line-height: initial;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
	}
	
	.mint-tab-container-item li .card-img .card-price .price {
		font-size: .94rem;
		margin-top: .07rem;
	}
	
	.mint-tab-container-item li .card-img .card-price .symbol {
		font-size: .4rem;
		margin-top: .07rem;
	}
	
	.mint-tab-container-item li .card-img .card-condition {
		font-size: .22rem;
	}
	
	.card-wrap {
		padding: .2rem;
		padding-bottom: 0;
		height: 2rem;
		box-sizing: border-box;
		flex: 1;
	}
	
	.card-title {
		line-height: .3rem;
		color: #686868;
		font-size: 12px;
		height: .6rem;
	}
	
	.card-num {
		margin: 3%;
	}
	
	.card-wrap .card-type {
		height: .3rem;
		width: .72rem;
		background: #5394D5;
		color: #fff;
		font-size: .2rem;
		line-height: .32rem;
		text-align: center;
	}
	
	.type2 {
		background: #FCC45E !important;
	}
	
	.card-date {
		font-size: 12px;
		color: #b2b2b2;
		height: .45rem;
		margin-bottom: .2rem;
	}
	
	.card-name {
		font-size: .24rem;
		padding-left: 0.8rem;
	}
	
	.card-more {
		width: .30rem;
	}
	
	.card-detail {
		font-size: 12px;
		color: #b2b2b2;
	}
	
	.card-user {
		height: .45rem;
		width: 1.3rem;
		border-radius: .22rem;
		border: 1px solid #5394d5;
		line-height: .44rem;
		color: #5394d5;
		text-align: center;
		box-sizing: border-box;
	}
	
	.card-detail-message {
		margin: .2rem;
		font-size: 12px;
		box-sizing: border-box;
		height: 0;
		overflow: hidden;
	}
	
	.outdate {
		position: absolute;
		right: 0;
		top: 0;
		width: 23%;
	}
	
	.outdate>img {
		width: 1.8rem;
	}
	
	.border {
		background: radial-gradient(transparent 0, transparent 3px, #c2c2c2 4px);
		background-size: 15px 7px;
		background-position: 7px 9.5px;
		position: absolute;
		left: .2rem;
		top: .1rem;
		height: 2rem;
		box-sizing: border-box;
		width: .2rem;
		z-index: 10;
		border-radius: 41px;
	}
</style>