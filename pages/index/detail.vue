<template>
	<view>
		<!-- 商品轮播图 -->
		<swiper class="screen-swiper round-dot mySwiper" v-if="product != null" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in product.skus[0].images" :key="index">
				<image :src="imgServer+item.largeImage" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<!-- 购物车栏 -->
		<view class="cu-bar bg-white tabbar border shop foot">
			<button class="action" open-type="contact">
				<view class="cuIcon-service text-green">
					<view class="cu-tag badge"></view>
				</view> 客服
			</button>
			<view class="action">
				<view class="cuIcon-cart">
					<view class="cu-tag badge">99</view>
				</view>
				购物车
			</view>
			<view class="btn-group">
				<button class="cu-btn bg-orange round shadow-blur">加入购物车</button>
				<button class="cu-btn bg-red round shadow-blur">立即订购</button>
			</view>
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				product: null, //商品详情信息
				imgServer: this.$global.imgServer

			}
		},
		onLoad: function(data) {
			console.log(data);
			this.init(data.id);

		},
		methods: {
			init: function(id) {
				this.$api.__api__getSkusDetails({
					id: id
				}).then((res) => {
					console.log(res);
					this.product = res;
				})
			}

		}
	}
</script>

<style>
	.mySwiper {
		height: 700rpx;
	}
</style>
