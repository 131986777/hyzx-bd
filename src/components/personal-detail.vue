<template>
	<div id="content">
		<div class="page-part">
			<div class="wbox-flex">
				<input type="" name="" id="" value="" placeholder="请输入信息" />
			</div>

		</div>
		<div class="message">温馨提示:</div>
		<mt-button type="primary" size="large" @click="submit">保存</mt-button>
	</div>

	</div>

</template>
<style scoped>
	/*公共样式*/
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	#content {
		background: #F8F8F8;
	}
	
	.page-part {
		height: .93rem;
		line-height: .93rem;
		box-sizing: content-box;
		padding: 0 .3rem;
		margin-top: .3rem;
	}
	
	.wbox-flex {
		width: 100%;
		height: .93rem;
		background: red;
		background: #FFFFFF;
	}
	
	.wbox-flex>input {
		padding-left: 10px;
		width: 100%;
		background: transparent;
	}
	
	.message {
		padding: 0 .3rem;
		color: #999;
		font-size: 12px;
	}
	
	.mint-button--primary {
		background: #eda200;
		margin: 4%;
		width: 92%;
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
			submit() {

				this.$router.push('personal')
			}

		},
		mounted() {

		}
	};
</script>