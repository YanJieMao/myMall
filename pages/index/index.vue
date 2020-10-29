<template>
	<view>
		<!-- 首页商品列表 -->
		<view class="cu-bar search bg-white fixed">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input v-model="params.query" :adjust-position="false" type="text" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-gradual-pink shadow-blur round" @click="search">搜索</button>
			</view>
		</view>
		<!-- 显示商品 -->		
		<view class="grid col-2 margin-bottom text-center">
			<view v-for="(item,index) in products" :key="item.id" class="bg-white padding">
			 <navigator :url="'./detail?id='+item.spuId">
				<image :src="imgServer+item.image"></image>
				<view class="text-price text-red">{{toDecimal2(item.price)}}</view>
				<view class="text-df solid-bottom">{{item.name}}</view>
			</navigator>
			</view>
			
		</view>
		<!-- 返回顶部按钮 -->
		<view>
			<button class="cu-btn round lg icon top topc" @click="top" 
								:style="{'display':(flag===true? 'block':'none')}">
				<text class="cuIcon-top"></text>
			</button>
								
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				params:{
					pageNum:1,
					pageSize:10,
					query:""
				},
				products:[],
				imgServer:this.$global.imgServer,
				flag:false
				
			}
		},
		onReachBottom:function(){//下拉到底部自动加载数据
			this.params.pageNum++;
			this.init();
		},
		onLoad:function(){
			this.init();

		},
		onPageScroll:function(e){
			console.log(e.scrollTop);
			if(e.scrollTop>800){
				this.flag = true;
			}else{
				this.flag = false;
			}
		},
		methods: {
			init:function(){//初始化页面
				this.$api.__api__getSkus(this.params)
					.then((res)=>{
						console.log(res);
						console.log("啦啦啦啦啦");
						console.log(res.list);
					if(res.list.length == 0){
						uni.showToast({
							title:"没有更多商品信息",
							duration: 3000
						})
					}
					else{//有商品信息
						this.products=this.products.concat(res.list);
						}
					
					});
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
			top:function(){
				uni.pageScrollTo({
					duration:350,
					scrollTop:0
				})
			},
			search:function(){
				this.products = [];
				this.params.pageNum = 1;
				this.init();
			}

		}
	}
</script>

<style>
	/* 回到顶部 */
	.top {
		position: relative;
		display: none;
	}
	
	.topc {
		position: fixed;
		right: 0;
		background: #ff5c7c;
		top: 80%;
		height: 50px;
		line-height: 50px;
	}
	
</style>
