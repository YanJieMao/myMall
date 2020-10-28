<template>
	<view>
		个人中心
		<view class="cu-list grid col-3">
			<view class="cu-item" >
				<navigator url="./userInfo" open-type="navigate">
				<view class="cuIcon-people text-red"></view>
				<text>个人信息</text>
				</navigator>
			</view>
			<view class="cu-item" >
				<view class="cuIcon-people text-red"></view>
				<text>个人信息</text>			
			</view>
			<view class="cu-item" >
				<view class="cuIcon-people text-red"></view>
				<text>个人信息</text>			
			</view>
			<view class="cu-item" >
				<view class="cuIcon-people text-red"></view>
				<text>个人信息</text>			
			</view>
			<view class="cu-item" >
				<view class="cuIcon-people text-red"></view>
				<text>个人信息</text>			
			</view>
			<view class="cu-item" >
				<view class="cuIcon-exit text-red" @click="logout()"></view>
				<text>退出</text>			
			</view>
		</view>

		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			logout:function(){
				uni.showModal({
					title:'系统提示',
					content:'是否退出？',
					success:function(res){
						if(res.confirm)
						{
							uni.clearStorageSync();
							console.log("清楚完毕")
							uni.redirectTo({
								url:'../login/login'
							})
						}
						
					}
				})
			}
			
		}
	}
</script>

<style>

</style>
