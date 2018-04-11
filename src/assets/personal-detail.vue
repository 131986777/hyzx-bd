<template>
	<div id="content">
		<div class="page-part">
			<div class="wbox-flex">
				<input type="" name="" id="" value="" placeholder="请输入你的名字" v-show="usernames" v-model="username" />
				<input type="" name="" id="" value="" placeholder="请输入你的手机号" v-show="phonenums" v-model="phonenum" />
				<input type="" name="" id="" value="" placeholder="请选择你的性别" v-show="sexs" @click='check()' v-model="sex" />
			</div>

		</div>
		<div class="message">温馨提示:</div>
		<mt-button type="primary" size="large" @click="submit">保存</mt-button>
		<mt-actionsheet :actions="actions" v-model="sheetVisible">
		</mt-actionsheet>
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
	import {
		Field
	} from 'mint-ui';

	import {
		DatetimePicker
	} from 'mint-ui';
	import {
		Actionsheet
	} from 'mint-ui';

	Vue.component(Button.name, Button)
	Vue.component(Actionsheet.name, Actionsheet);

	Vue.component(Field.name, Field);
	Vue.component(DatetimePicker.name, DatetimePicker);
	export default {
		name: 'page-field',
		data() {
			return {
				usernames: false,
				username: '',
				phonenums: false,
				phonenum: '',
				actions: [],
				sexs: false,
				sex: '',
				sheetVisible: false,

			}
		},
		methods: {
			submit() {

				this.$router.push('personal')
			},
			check() {
				console.log('1')
				this.sheetVisible = true
			},
			sexSave() {
				console.log(222)

			}

		},
		mounted() {
			
			switch(this.$route.query.category) {
				case 'username':
					this.usernames = true
					break;
				case 'phonenum':
					this.phonenums = true
					break;
				case 'sex':
					this.sexs = true
					break;
			}
		}
	}
</script>