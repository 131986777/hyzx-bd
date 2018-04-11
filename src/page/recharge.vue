<template>
	<div class="point-container">

		<div class="my-point">
			<div class="point-logo fl"><img src="../assets/img/money-logo.png" alt="" /></div>
			<div class="point-wrap fl">
				<div class="title">我的余额</div>
				<div class="point"><span>¥</span>{{point}}</div>
			</div>

		</div>
		<div class="list"><span class="list-title">金额</span> <input style="" placeholder="请输入充值金额" /></div>
		<div class="list"><span class="list-title">充值方式</span>
			<div style="margin-left: 52px;">微信</div>
		</div>
		<div style="height: 300px;background: red;">
			
		</div>
		<div class="bths">立即充值</div>

	</div>
	</div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
	/*animation*/
	
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
	.point-container{
		text-align: center;
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
	
	.list {
		height: 0.9rem;
		display: flex;
		align-items: center;
	}
	
	.list-title {
		margin-left: 20px;
		font-size: 14px;
	}
	
	.list>input {
		margin-left: 80px;
		font-size: 14px;
		background: #fff;
	}
	.bths{
		margin-top: 20px;
		height: 1rem;
		background:#FE832C;
		width: 90%;
		display: inline-block;
		border-radius: 3px;
		text-align: center;
		line-height: 1rem;
		font-size: 19px;
		color: #FFFFFF;
	}
</style>

<script>

	import wxpay from "../assets/js/wxpays"
	import http from '../utils/http'
	import api from '../utils/api'
	import cookies from '../utils/common'
	export default {
		data() {
			return {
				point: '79.01'
			}
		},
		methods: {
			wxPayRecharge: async function() {
				let params = {};
				params.userId = '1';
				params.fee = 100;
				params.token = cookies.cookie.getCookie('token')
				const res = await http.post(api.wxPayRecharge, params)
				if(res.data.code == 0) {

				}
			},
		},
		mounted() {
			//			this.wxPayRecharge()
			//				console.log(wxpay)
		}
	}
</script>