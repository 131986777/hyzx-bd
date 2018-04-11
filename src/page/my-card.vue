<style scoped>
	/*公共样式*/
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	.of {
		overflow: hidden;
	}
	
	.black {
		color: #000000 !important;
	}
	
	.cy {
		color: #fcc45e !important;
		border-color: #fcc45e !important;
	}
	
	.csy {
		color: #c2c2c2 !important;
		border-color: #c2c2c2 !important;
	}
	
	.csy-back {
		background: #c2c2c2 !important;
	}
	
	.img {
		display: block !important;
	}
	
	.addw {
		-webkit-transition: all 0.5s ease-in-out;
		-moz-transition: all 0.5s ease-in-out;
		transition: all 0.5s ease-in-out;
	}
	
	.rotate {
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		transform: rotate(180deg);
	}
	
	.height {
		height: 48px !important;
	}
	/*积分bannner*/
	/*选项卡*/
	
	.mint-tab-container {
		height: 94.5%;
		overflow: auto;
	}
	
	.mint-navbar .mint-tab-item {
		padding: 12px 0;
	}
	
	.is-selected {
		color: #fd825c !important;
	}
	
	.mint-navbar .mint-tab-item.is-selected {
		border-bottom: 3px solid #fd825c !important;
	}
	
	.mint-navbar {
		position: relative;
		height: 5.5%;
		z-index: 2;
	}
	
	.point-container {
		height: 100%;
	}
	
	.mint-tab-container-item li {
		padding: 0;
	}
</style>

<template>
	<div class="bodys">
		<div class="point-container">

			<mt-navbar v-model="selected">
				<mt-tab-item id="1">未使用(</span><span>{{list.length}}</span>)</mt-tab-item>
				<mt-tab-item id="2">使用记录(</span><span>{{list2.length}}</span>)</mt-tab-item>
				<mt-tab-item id="3">已过期(</span><span>{{list3.length}}</span>)</mt-tab-item>
			</mt-navbar>
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<ul>
						<cardList v-for="item in list" :msg="item"></cardList>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<ul>
						<cardList2 v-for="item in list2" :msg="item"></cardList2>

					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<ul>
						<cardList3 v-for="item in list3" :msg="item"></cardList3>
					</ul>
				</mt-tab-container-item>
			</mt-tab-container>
			<div class="empty"></div>
		</div>
	</div>

</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<script>
	import cardList from '../components/card-list.vue'
	import cardList2 from '../components/card-list2.vue'
	import cardList3 from '../components/card-list3.vue'
	import http from '../utils/http'
	import api from '../utils/api'
	import cookies from '../utils/common'
	import Vue from 'vue';

	import {
		Tabbar,
		Navbar,
		TabItem
	} from 'mint-ui';
	import {
		Cell
	} from 'mint-ui';
	import {
		TabContainer,
		TabContainerItem
	} from 'mint-ui';
	Vue.component(Cell.name

		, Cell);
	Vue.component(Tabbar.name

		, Tabbar);

	Vue.component(TabContainer.name, TabContainer);
	Vue.component(TabContainerItem.name, TabContainerItem);

	Vue.component(Navbar.name, Navbar);
	Vue.component(TabItem.name, TabItem);

	export default {
		data() {
			return {
				selected: "1",
				//status mjWsy: false,zkWsy: false,	mjList: false,zkList: false,	mjYsy: false,zkYsy: false,
				cardMsg: [{
						'status': '1',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					},
					{
						'status': '2',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					},
					{
						'status': '3',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					},
					{
						'status': '4',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					},
					{
						'status': '5',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					},
					{
						'status': '6',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					}, {
						'status': '1',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					},
					{
						'status': '2',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					},
					{
						'status': '3',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					},
					{
						'status': '4',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					},
					{
						'status': '5',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					},
					{
						'status': '6',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					}, {
						'status': '1',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					},
					{
						'status': '2',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					},
					{
						'status': '3',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					},
					{
						'status': '4',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					},
					{
						'status': '5',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					},
					{
						'status': '6',
						'price': '50',
						'condition': '满20元可用',
						'type': '满减卷',
						'available': '全类品',
						'datatime': '2012/01/02-2017/03/04',
						'message': '限品类：购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注购买时请注'
					}

				],
				list: [],
				list2: [],
				list3: [],

			}
		},
		components: {
			cardList,
			cardList2,
			cardList3
		},
		methods: {
			href(adress) {
				this.$router.push(adress)
			},
			getCoupons: async function() {
				let params = {};
				params["userId"] ='11'
				params.token = cookies.cookie.getCookie('token');
				console.log(params);
				const res = await http.post(api.getCoupons, params);
				if(res.data.code == 0) {
					console.log(res.data)
					this.list=res.data.list1
					this.list2=res.data.list2
					this.list3=res.data.list3
					console.log(this.list)
					//					this.trueName=res.data.data.trueName;
					//					this.tel=res.data.data.tel;
					//					this.sex=res.data.data.sex;
					//					this.birthday=res.data.data.birthday;

				}
			}

		},
		watch: {
			selected: function(val) { //					alert(this.selected);
			}
		},
		mounted() {

			console.log(this.getCoupons())
//			for(var i = 0; i < this.cardMsg.length; i++) {
//
//				if(this.cardMsg[i].status == 5 || this.cardMsg[i].status == 6) {
//
//					this.list3.push(this.cardMsg[i])
//				}
//				if(this.cardMsg[i].status == 3 || this.cardMsg[i].status == 4) {
//
//					this.list2.push(this.cardMsg[i])
//				}
//				if(this.cardMsg[i].status == 1 || this.cardMsg[i].status == 2) {
//
//					this.list.push(this.cardMsg[i])
//				}
//
//			}
//			this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
		}

	}
</script>