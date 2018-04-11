<template>
	<div>
		<div class="login-content">
			<div class="logo">
				<img src="../assets/img/logo.png" />
			</div>
			<div class="message">
				<div class="input-content">
					<div class="ic-username ic"> <img src="../assets/img/username.png" /></div>
					<input type="text" name="" id="" value="" placeholder="请输入你的账号"v-model="mobile"/>

					<div class="border"></div>
				</div>
				<div class="input-content">
					<div class="ic-username ic"> <img src="../assets/img/username.png" /></div>
					<input type="password" name="" id="" value="" placeholder="请输入你的密码" v-model="password"/>
					<div class="border"></div>
					<div class="yz">
						验证码登录
					</div>
				</div>

			</div>
			<div class="submit" @click="login()">
				登录
			</div>

		</div>
	</div>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
	/*animation*/
	
	body {
		font-family: "微软雅黑";
	}
	
	.login-content {
		text-align: center;
		
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: -webkit-linear-gradient(50deg, rgba(73, 149, 227, 1), rgba(120, 161, 223, 1), rgba(158, 172, 221, 1), rgba(197, 181, 210, .8));
		/* Safari 5.1 - 6.0 */
	}
	
	.logo {
		height: 4rem;
		width: 100%;
		line-height: 4rem;
		text-align: center;
	}
	
	.message {
		padding: 20px;

	}
	
	.message input {
		box-sizing: border-box;
		height: 1rem;
		border: 0;
		width: 100%;
		background: transparent;
		line-height: 1rem;
		padding-left: 45px;
		padding-right: 75px;
		color: rgba(255, 255, 255, .9);
		font-size: .32rem;
	}
	
	.input-content {
		position: relative;
	}
	
	.border {
		width: 100%;
		height: 1px;
		background: #FFFFFF;
		opacity: .6;
	}
	
	input::-webkit-input-placeholder {
		line-height: 1em;
		color: rgba(255, 255, 255, .3);
		font-size: .32rem;
	}
	
	.ic {
		width: .64rem;
		position: absolute;
		height: 1rem;
		line-height: 1rem;
		left: 0;
		right: 0;
	}
	
	.yz {
		position: absolute;
		height: 1rem;
		line-height: 1rem;
		right: 0;
		top: 0;
		color: #FFFFFF;
	}
	
	.ic img {
		width: 100%;
	}
	
	.submit {
		width: 6.7rem;
		height: .9rem;
		margin-top: 20px;
		text-align: center;
		line-height: .9rem;
		border-radius: 20px;
		border: 1px solid #FFFFFF;
		color: #FFFFFF;
		display: inline-block;
	}
</style>

<script>
	import http from '../utils/http'
	import api from '../utils/api'
	import cookies from '../utils/common'
	import Vue from 'vue'
	export default {
		data() {
			return {
				mobile: "",
				password: ""
			}
		},
		methods: {

			login() {
				console.log(this.mobile)
				console.log(this.password)
				this.logins()
				
			},
			logins: async function() {
					let params = {}
					params.mobile=this.mobile
					params.password=this.password

					const res = await http.get(api.login, params)
					
					if(res.data.msg=="success") {
						cookies.cookie.setCookie('token',res.data.token)

						this.$router.push('index')
					}
				}

		},
		mounted() {

			//			 this.fetchData()
			//				this.$refs.scrollView.refresh()

		}
	}
</script>