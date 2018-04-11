<template>
	<div>
		<div class="login-content">
			<div class="logo">
				<img src="../assets/img/logo.png" />
			</div>
			<div class="message">
				<div class="input-content">
					<div class="ic-username ic"> <img src="../assets/img/username.png" /></div>
					<input type="" name="" id="" value="" placeholder="请输入你的账号" />
					<div class="border"></div>
				</div>
				<div class="input-content">
					<div class="ic-username ic"> <img src="../assets/img/username.png" /></div>
					<input type="" name="" id="" value="" placeholder="请输入你的账号" />
					<div class="border"></div>
				</div>
				<div class="input-content">
					<div class="ic-username ic"> <img src="../assets/img/username.png" /></div>
					<input type="" name="" id="" value="" placeholder="请输入你的账号" />
					<div class="border"></div>
				</div>
				<div class="input-content">
					<div class="ic-username ic"> <img src="../assets/img/username.png" /></div>
					<input type="" name="" id="" value="" placeholder="请输入你的密码" />
					<div class="border"></div>
					<div class="yz">
						获取验证码
					</div>
				</div>
				<!--<div class="input-content">
					<div class="ic-username ic"> <img src="../assets/img/username.png" /></div>
					<input type="" name="" id="" value="" placeholder="请输入你的密码" />
					<div class="border"></div>
				</div>-->

			</div>
			<div class="submit">
				登录
			</div>

		</div>
	</div>

</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
	/*animation*/
	
	body {
		font-family: "微软雅黑";
	}
	
	.login-content {
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
		margin: 20px;
		text-align: center;
		line-height: .9rem;
		border-radius: 20px;
		border: 1px solid #FFFFFF;
		color: #FFFFFF;
	}
</style>

<script>
</script>