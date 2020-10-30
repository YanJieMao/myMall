<template>
	<view>
		<!-- 商品轮播图 -->
		<swiper class="screen-swiper round-dot mySwiper" v-if="product != null" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in product.skus[0].images" :key="index">
				<image :src="imgServer+item.largeImage" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<!-- 选项卡 -->
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" 
				v-for="(item,index) in labels" :key="index" @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
		</scroll-view>
		<!-- 商品名字和价格 -->
		<view calss="solids-bottom padding-xs flex bg-white">
			<view class="flex-sub">
				<view class="solid-bottom text-xxl padding">
					<text class="text-price text-red">{{toDecimal2(product.skus[0].price)}}</text>
				</view>
				<view class="padding">{{product.skus[0].name}}</view>
			</view>
		</view>
		<!-- 图文详情 -->
		<view v-if="TabCur == 0">
			<image class="myImg" v-for="(item,index) in product.images" :key="index" :src="imgServer+item"  mode="widthFix"></image>
		</view>
		<!-- 商品详情 -->
		<view v-if="TabCur == 1" class="grid col-2 my-label">
			<view v-for="(item,index) in product.skus[0].attrs" :key="index" :src="imgServer+item" class="solid padding-sm">
				{{item.name}}:{{item.value}}
			</view>
		</view>
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
				imgServer: this.$global.imgServer,
				TabCur: 0,//当前选项卡
				scrollLeft: 0,//偏移量
				labels:["图文详情","商品介绍","规格详情","商品评价"]

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
			},
			toDecimal2:function(x){
				var f = Math.round(x) / 100;
				var s = f.toString();
				var rs = s.indexOf('.');
				if (rs < 0) {
					rs = s.length;
					s += '.';
				}
				while (s.length <= rs + 2) {
					s += '0';
				}
				return s;
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}

		}
	}
</script>

<style>
	.mySwiper{
		height: 700rpx;
	}
	.myImg{
		height: 750rpx;
		width: 750rpx;	
	}
	.my-label{
		padding-bottom: 100rpx;
	}
</style>
