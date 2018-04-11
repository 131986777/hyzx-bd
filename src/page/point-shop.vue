<template>
	<div v-iscroll>

		<div class="page-navbar">
			<header>
				<swiper :options="swiperOption" ref="mySwiper">
					<!-- slides -->

					<swiper-slide><img src="../assets/jf.jpg" /></swiper-slide>

					<!-- Optional controls -->
					<div class="swiper-pagination" slot="pagination"></div>

				</swiper>
				<!-- Slider -->

			</header>
			<section class="floor-elm-top" @click="scrollToTop()">
				<a class="credits" href="javascript:;"> <img src="../assets/img/jf.png" width="18px" /> <span class="note">积分            <span class="number theme-color" id="db-credits-num">0</span> </span>
				</a>
				<a class="records" href="//trade.m.duiba.com.cn/crecord/record?spm=14695.2.1.1&amp;dbnewopen"> <img src="../assets/img/jl.png" width="18px" /> <span class="note">            兑换记录          </span> </a>
			</section>
			<section>
				<div class="title-shop">
					<div class="mark fl"></div>
					<div class="fl name ">
						精品兑换
					</div>
				</div>
				<ul class="page-lazyload-list">
					<li class="page-lazyload-listitem" v-for="item in list">
						<a class="item" db-log-get="true" @click="href(222)">
							<div class="img-wrap"> <img v-lazy="item" class="page-lazyload-image"> </div>

							<div class="theme-color info-wrap">
								<h3 class="item-title">云厨30元抵用券</h3>
								<div class="item-credits"><i class="jf-1"><img src="../assets/img/jf-1.png"/></i><span class="jf-num">2500</span></div>
							</div>

						</a>

					</li>
				</ul>

			</section>
			<div id="" style="height: 57px;">

			</div>
		</div>
	</div>
</template>

<style scoped>
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	.of {
		overflow: hidden;
	}
	
	.page-navbar {
		background: #f7f7f7;
		overflow: hidden;
	}
	
	section {
		background: #FFFFFF;
	}
	
	.swiper-slide>img {
		width: 100%;
		height: 3rem;
		overflow: hidden;
	}
	
	.floor-elm-top {
		display: table;
		height: 0.08rem;
		width: 100%;
		padding: .08rem 0;
		background-color: #fff;
		margin-bottom: .1rem;
	}
	
	.floor-elm-top a.credits {
		border-right: 1px solid #e5e5e5;
	}
	
	.floor-elm-top a {
		display: table-cell;
		padding: .008rem 0;
		text-align: center;
		width: 50%;
		text-decoration: none;
	}
	
	.floor-elm-top a i {
		vertical-align: middle;
	}
	
	.floor-elm-top a .note {
		vertical-align: middle;
		font-size: 15px;
		color: #000000;
	}
	
	.item {
		float: left;
		position: relative;
		background: #fff;
		width: 50%;
		border-right: 1px solid #f5f5f5;
		border-top: 1px solid #f5f5f5;
		overflow: hidden;
		box-sizing: border-box;
	}
	
	.info-wrap {
		padding: .1rem .25rem 0;
	}
	
	.title-shop {
		height: 0.4rem;
		padding: .2rem .2rem;
	}
	
	.mark {
		width: .05rem;
		height: .4rem;
		background: #fe9858;
		margin-right: .3rem;
		display: inline-block;
		line-height: .3rem;
	}
	
	.name {
		display: inline-block;
		height: .4rem;
		line-height: .4rem;
	}
	
	.item-title {
		margin: 0;
		margin-bottom: 0rem;
		font-weight: 400;
		font-size: 16px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	
	.number {
		color: #ff6000;
		font-size: 16px;
	}
	
	.item-credits {
		color: #ff6000;
		text-align: center;
		font-size: 12px;
		height: .3rem;
		line-height: .3rem;
	}
	
	.img-wrap {
		text-align: center;
		padding: .25rem .3rem .12rem .3rem;
		height: 2rem;
		overflow: hidden;
		line-height: 2rem;
	}
	
	img {
		max-width: 100%;
		vertical-align: middle;
		border: 0;
	}
	
	h3 {
		font-size: 13px !important;
		text-align: center;
		color: #696969;
	}
	
	a {
		color: #000000;
		text-decoration: none;
	}
	
	img[lazy=loading] {
		width: 300px;
		height: 1.65rem;
		margin: auto;
		background: url(../assets/img/loading.gif) no-repeat;
		background-size: 100%;
	}
	.jf-1 img{
		width: 14px;
	}
	.jf-num{
		    vertical-align: middle;
	}
</style>

<script>
	require('swiper/dist/css/swiper.css')

	import Vue from 'vue'
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	Vue.use(VueAwesomeSwiper)
	import {
		Lazyload
	} from 'mint-ui';
	Vue.use(Lazyload)
	export default {
		name: 'page-navbar',

		data() {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					paginationClickable: true,
					spaceBetween: 30,
					centeredSlides: true,
					autoplay: 2500,
					autoplayDisableOnInteraction: false
				},
				list: [
					'http://app.bblycyz.com/AndSell/wxshare/hyzx/static/mjq.png',
					'http://app.bblycyz.com/AndSell/wxshare/hyzx/static/tyq.png',
					'http://app.bblycyz.com/AndSell/wxshare/hyzx/static/tyq.png',
					'http://app.bblycyz.com/AndSell/wxshare/hyzx/static/tyq.png',
					'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
					'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
					'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
					'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',

				]
			};
		},
		mounted() {

			var that = this
			setTimeout(function() {
//				that.scrollToTop()
			}, 1000)

		},
		methods: {
			pullUp() {
				console.log('1')

			},
			pullDown() {
				console.log(2)
			},
			href(id) {
				this.$router.push({
					name: 'pointDetails',
					query: {
						shopId: id
					}
				})
			},
			scrollToTop() {
				
				const iscroll = this.$refs.scrollView
				iscroll.scrollTo(0, 0, 100)
				iscroll.refresh()
			}
		}
	};
</script>