<template>
 <div> 微信测试也</div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
	/*animation*/
	

</style>

<script>
	import wxpay from "../assets/js/wxpays"
	import http from '../utils/http'
	import api from '../utils/api'
	import cookies from '../utils/common'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			wxPayRecharge: async function() {
				let params = {};
				params.userId = '1';
				params.fee   = 100;
				params.token = cookies.cookie.getCookie('token')
				const res = await http.post(api.wxPayRecharge, params)
				if(res.data.code == 0) {
					
				}
			},
		},
		mounted() {
			this.wxPayRecharge()
				console.log(wxpay)
		}
	}
</script>