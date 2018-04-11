<template>
	<div class="point-content">
		<div class="recharge" v-if="recharge">
			<div class="shop-img"> <img src="../assets/img/rechange.png" /></div>
			<div class="shop-wap">
				<div class="shop-event">{{msg.eventIntro}}</div>
				<div class="shop-botton">{{msg.eventIntro}}</div>
			</div>
			<div class="shop-wap-right">
				<div class="shop-date">{{msg.addDatetime}}</div>
				<div class="shop-point"><span>+</span><span>{{msg.changePoint}}</span></div>
			</div>
		</div>
		<div class="consumption" v-if="consumption">
			<div class="shop-img"> <img src="../assets/img/sell.png" /></div>
			<div class="shop-wap">
				<div class="shop-event">{{msg.eventIntro}}</div>
				<div class="shop-botton">{{msg.eventIntro}}</div>
			</div>
			<div class="shop-wap-right">
				<div class="shop-date">{{msg.addDatetime}}</div>
				<div class="shop-point black"><span>-</span><span>{{msg.changePoint}}</span></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				recharge: false,
				consumption: false
			}
		},
		props: {
			msg: Object //这样可以指定传入的类型，如果类型不对，会警告
		},
		mounted() {
			//判断 显示模块
			if(this.msg.changeType == 1) {
				this.recharge = true;
			}
			if(this.msg.changeType == -1) {
				this.consumption = true;
			}

		}

	}
</script>

<style>
	.point-content,
	.recharge,
	.consumption {
		width: 100%;
		/* height: inherit; */
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
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
		height: 1.2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.shop-event {
		font-size: 15px;
		margin-bottom: .15rem;
		width: 150px;
		height: 24px;
		line-height: 24px;
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
		width: fit-content;
	}
	
	.shop-wap-right {
		flex: 1;
		text-align: right;
		height: 1.2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;

	}
	
	.shop-date {
		margin-bottom: 8px;
		color: #b2b2b2;
		font-size: 13.5px;
			height: 24px;
		line-height: 24px;

	}
	
	.shop-point {
		color: #fe832c;
		font-size: 21px;
		height: .4rem;
		line-height: .4rem;
	}
</style>