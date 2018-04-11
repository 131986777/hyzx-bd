<template>

	<div class="scorll">
		<div id="">

			<div class="bg">
				<div class="item-row" @click="href({name:'personalDetail', query: { category: 'trueName'}})">

					<div class="item-row-title fl">
						姓名
					</div>

					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>
					<div class="fr tel" v-model="trueName">{{trueName}}</div>
				</div>
			</div>
			<div class="bg">
				<div class="item-row">

					<div class="item-row-title fl">
						手机号
					</div>

					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>
					<div class="fr tel" v-model="tel">{{tel}}</div>
				</div>
			</div>
			<div class="bg" @click="href({name:'personalDetail', query: { category: 'sex'}})">
				<div class="item-row">

					<div class="item-row-title fl">
						性别
					</div>

					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>
					<div class="fr tel" v-model="sex">{{sex}}</div>
				</div>
			</div>

			<div class="bg">
				<div class="item-row" @click="href({name:'personalDetail', query: { category: 'birthday'}})">

					<div class="item-row-title fl">
						生日
					</div>

					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>
					<!--<input id="meeting" type="date" value="2014" class="fr" />-->
					<div class="fr tel" v-model="birthday">{{birthday}}</div>
				</div>
			</div>
			</label>

		</div>
	</div>

</template>
<style>
	/*公共样式*/
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	input {
		background: #ccc;
	}
	
	.ic-r>img {
		width: 100%;
	}
	
	.item-row {
		line-height: 18px;
		box-sizing: border-box;
		padding-top: .3rem;
		padding-bottom: .3rem;
		padding-right: .3rem;
		margin-left: .3rem;
		font-size: 15px;
		height: 46px;
		color: #333;
		border-bottom: 1px solid #F8F8F8;
	}
	
	.ic-r {
		line-height: .34rem;
		height: .34rem;
		width: .12rem;
		float: right;
		margin-left: .2rem;
	}
</style>

<script>
	import Vue from 'vue';
	import {
		Field
	} from 'mint-ui';
	import {
		DatetimePicker
	} from 'mint-ui';
	import {
		Actionsheet
	} from 'mint-ui';
	import http from '../utils/http'
	import api from '../utils/api'
	import cookies from '../utils/common'
	Vue.component(Actionsheet.name, Actionsheet);
	Vue.component(Field.name, Field);
	Vue.component(DatetimePicker.name, DatetimePicker);
	export default {
		name: 'page-field',
		data() {
			return {
				trueName: '',
				sheetVisible: false,
				tel:'',
				sex:'',
				birthday:''

			}
		},
		methods: {
			href(adress) {
				console.log(adress)
				this.$router.push(adress)
			},
			getMemberInfoByUserId: async function() {
				let params = {};
				params.userId='1';
				params.token=cookies.cookie.getCookie('token')
				const res = await http.get(api.getMemberInfoByUserId, params)
				if(res.data.code==0) {
					console.log(res.data.data)
					this.trueName=res.data.data.trueName;
					this.tel=res.data.data.tel;
					if(res.data.data.sex==0){
						this.sex='女'
					}
					if(res.data.data.sex==1){
						this.sex='男'
					}
					
					this.birthday=res.data.data.birthday;
					
				}
			}


		},
		mounted() {
			 this.getMemberInfoByUserId()


		}
	

	};
</script>