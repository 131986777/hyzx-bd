<template>

	<div >
		<div id="">

			<div class="bg">
				<div class="item-row" @click="href('personalDetail')">

					<div class="item-row-title fl">
						姓名
					</div>

					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>
					<div class="fr tel" v-text="username"></div>
				</div>
			</div>
			<div class="bg">
				<div class="item-row" @click="href('personalDetail')">

					<div class="item-row-title fl">
						手机号
					</div>

					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>
					<div class="fr tel">400-400-9185</div>
				</div>
			</div>
			<div class="bg" @click="sex()">
				<div class="item-row">

					<div class="item-row-title fl">
						性别
					</div>

					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>
					<div class="fr tel">男</div>
				</div>
			</div>
			<div class="bg">
				<div class="item-row">

					<div class="item-row-title fl">
						生日
					</div>

					<div class="ic-r fr"> <img src="../assets/img/ic1.png" alt="" /></div>
					<input id="meeting" type="date" value="" class="fr" />
				</div>
			</div>
			<mt-actionsheet :actions="actions" v-model="sheetVisible">
			</mt-actionsheet>
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

	Vue.component(Actionsheet.name, Actionsheet);
	Vue.component(Field.name, Field);
	Vue.component(DatetimePicker.name, DatetimePicker);
	export default {
		name: 'page-field',
		data() {
			return {
				username:'周毅',
				sheetVisible: false,
				actions: [{
					name: '男',
					method: this.showToast
				}, {
					name: '女',
					method: this.showMsgbox
				}]
			}
		},
		methods: {
			href(adress) {

				console.log(adress)
				this.$router.push(adress)
			},
			sex() {
				this.sheetVisible = true
			}

		}
		

	};
</script>