<template>
	<view>
		商品列表
		<view class="grid col-2 margin-bottom text-center">
			<view v-for="{item,index} in products" :key="item.id" class="bg-white padding">
				<image :src="imgServer+item.image"></image>
				<view>{{item.price}}</view>
				<view>{{item.name}}</view>
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
		onLoad:function(){
			this.init();

		},
		methods: {
			init:function(){//初始化页面
				this.$api.__api__getSkus(this.params)
					.then((res)=>{
						console.log(res);
						this.products=res.list;
					
					});
			}

		}
	}
</script>

<style>
	
</style>
