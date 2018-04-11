<template>
	<div id="content">
		<div class="page-part">
			<div class="wbox-flex">
				<input type="" name="" id="" value="" placeholder="请输入你的名字" v-show="usernames" v-model="trueName" />
<!--				<input type="" name="" id="" value="" placeholder="请输入你的手机号" v-show="phonenums" v-model="phonenum" />-->
				<input type="" name="" id="" value="" placeholder="请选择你的性别" v-show="sexs" @click='check()' v-model="sexName" />
				<input id="meeting" type="date" value="2014" class="fr data" v-show="datas" v-model="birthday" />

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
	
	.data {
		margin-top: 0.3rem;
	}
</style>
<script>
	import http from '../utils/http'
	import api from '../utils/api'
	import cookies from '../utils/common'
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
				trueName: '',
				phonenums: false,
				phonenum: '',
				actions: [],
				sexs: false,
				sex: '',
				sexName:'',
				datas: false,
				sheetVisible: false,
				birthday: '',
				

			}
		},
		methods: {
			saveBoy() {
				this.sexName = '男',
				this.sex=1
			},

			saveGirl() {
				this.sexName = '女'
				this.sex=0
			},

			submit() {
				
				this.modifyMemberInfo()
				
		

			},
			check() {

				this.sheetVisible = true
			},
			modifyMemberInfo: async function() {
				let params = {};
				params[this.$route.query.category]=this[this.$route.query.category];
				params.token=cookies.cookie.getCookie('token');
				console.log(params);
				const res = await http.post(api.modifyMemberInfos, params);
				if(res.data.code==0) {
									this.$router.push('personal')
//					this.trueName=res.data.data.trueName;
//					this.tel=res.data.data.tel;
//					this.sex=res.data.data.sex;
//					this.birthday=res.data.data.birthday;
					
				}
			}

		},
		mounted() {
			this.actions = [{
				name: '男',
				method: this.saveBoy
			}, {
				name: '女',
				method: this.saveGirl
			}];
			switch(this.$route.query.category) {
				case 'trueName':
					this.usernames = true
					break;
//				case 'phonenum':
//					this.phonenums = true
//					break;
				case 'sex':
					this.sexs = true
					break;
				case 'birthday':
					this.datas = true
					break;
			}
		},
		
	}
</script>