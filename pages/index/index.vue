<template>
	<view>
		商品列表
		<view class="grid col-2 margin-bottom text-center">
			<view v-for="(item,index) in products" :key="item.id" class="bg-white padding">
				<image :src="imgServer+item.image"></image>
				<view class="text-price text-red">{{toDecimal2(item.price)}}</view>
				<view class="text-df solid-bottom">{{item.name}}</view>
			</view>
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
				imgServer:this.$global.imgServer
				
			}
		},
		onReachBottom:function(){//下拉是触发刷新
			this.params.pageNum++;
			this.init();
		},
		onLoad:function(){
			this.init();

		},
		methods: {
			init:function(){//初始化页面
				this.$api.__api__getSkus(this.params)
					.then((res)=>{
						console.log(res);
						console.log("啦啦啦啦啦");
						console.log(res.list);
						this.products=this.products.concat(res.list);
					
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
			}

		}
	}
</script>

<style>
	
</style>
