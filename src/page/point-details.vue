<template>

	<body>
		<header>
			<img src="../../static/tyq.png" />

		</header>
		<div style=" " class="img">
			<div style="" class="title">云厨无敌抵用券</div>
			<div><span class="jf-1"><img src="../assets/img/jf-1.png"/></span><span class="num">100</span></div>

		</div>
		<div style=" " class="detalis">
			<div class="details">商品简介</div>
			<div class='jf'>
				<li>
					<div class="dian"></div><span>名称:巴布洛生态谷。。。。。。。</span></li>
					<div class="dian"></div><span>名称:巴布洛生态谷。。。。。。。</span></li>
					
				<!--<div style="    font-weight: 600;margin-bottom: .5rem;">详细</div>-->
				<div style="font-size: 14px;line-height: .4rem;">
					<div> 红包面值：1元</div>
					<div> 有效期：3天</div>
				</div>
			</div>
		</div>
		<div style="" class='footer'>
			<button style="">兑换</button>
		</div>
	</body>
</template>

<style scoped>
	div,
	header,
	span {
		background: #fff;
	}
	
	li {
		list-style: none;
		height: 0.4rem;
		line-height: .4rem;
	}
	
	body,
	html {
		margin: 0;
		padding: 0;
		background: #F0F0F0;
		overflow: auto;
		max-width: 640px;
		margin: 0 auto;
	}
	
	header {
		text-align: center;
		vertical-align: middle;
		background: url(../assets/img/point-back.jpg) no-repeat;
		background-size: 100%;
		height: 180px;
		padding: 16px;
		box-sizing: border-box;
	}
	
	header>.imgs {}
	
	header>span {
		height: 100%;
		vertical-align: middle;
		display: inline-block;
	}
	
	.img {
		line-height: 32px;
		padding-left: 0.21rem;
	}
	
	.num {
		color: #ff6000;
		font-size: 22px;
		margin-right: 7px;
		vertical-align: middle;
	}
	
	.title {
		font-size: 16px;
		margin-bottom: 5px;
	}
	
	.detalis {
		padding: 0.21rem;
	}
	
	.price {
		display: inline-block;
		text-align: left;
		margin-left: -27%;
		margin-top: 11%;
		font-size: 43px;
		color: #FFFFFF;
		background: none;
	}
	
	.details {
		font-weight: bold;
		margin-bottom: 10px;
	}
	
	.jf {
		font-size: 14px;
		line-height: 24px;
	}
	
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		height: 60px;
		width: 100%;
		text-align: center;
		line-height: 60px;
	}
	
	.footer>button {
		width: 90%;
		height: 40px;
		line-height: 40px;
		border-radius: 3px;
		background-color: #ffb000;
		border: 0;
		font-size: 16px
	}
	
	.jf-1 img {
		width: 16px;
		margin-right: 5px;
	}
	
	.dian {
		background: #000;
		border-radius: 50%;
		width: 3px;
		height: 3px;
		display: inline-block;
		/* float: left; */
		vertical-align: middle;
		margin-right: 5px;
	}
	
	@media only screen and (max-width:350px) {
		.price {
			font-size: 38px!important;
		}
	}
</style>

<script>
	import Vue from 'vue';
	import {
		Button
	} from 'mint-ui';

	Vue.component(Button.name, Button)
	export default {
		name: 'page-field',

		methods: {
			text() {
				$("input").focus()
			}

		},
		mounted() {
			console.log(this.$route.query.shopId)

		}
	};
</script>