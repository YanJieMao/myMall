<template>
	<view>
		用户信息
		<view class="cu-form-group margin-top">
			<view class="title">用户名</view>
			<input v-model="userInfo.username" name="input"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">身份证</view>
			<input v-model="userInfo.identityCardNo" name="input"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">生日</view>
			<input v-model="userInfo.birthDate" name="input"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">会员等级</view>
			<input v-model="userInfo.level"  name="input"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">会员积分</view>
			<input v-model="userInfo.point"  name="input"></input>
		</view>
		
		<view class="cu-form-group">
			<view class="title">手机号码</view>
			<input v-model="userInfo.mobilePhone" name="input"></input>
			<view class="cu-capsule radius">
				<view class='cu-tag bg-blue '>
					+86
				</view>
				<view class="cu-tag line-blue">
					中国大陆
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{}
			}
		},
		onLoad:function(){//发送请求获取用户信息
		let user_id=uni.getStorageSync("user_id");
		this.$api.__api__getUserInfo({
			id:user_id
		}).then((res)=>{
			console.log(res);
			this.userInfo=res;
		})
			
		},
		methods: {
			
			
		}
	}
</script>

<style>

</style>
