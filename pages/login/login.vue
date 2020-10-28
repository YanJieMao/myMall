''<template>
	<view>
		<view class="cu-form-group margin-top">
			<view class="title" >账号</view>
			<input name="input" v-model="username"></input>
		</view>
		<view class="cu-form-group">
			<view class="title" >密码</view>
			<input type="password" name="input" v-model="password"></input>
		</view>
		<view class="cu-form-group">
			<button @click="login">登录</button>
			<button >注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:"",
				password:""
				
			}
		},
		onLoad:function(){//当页面加载的时候调用这个生命周期函数
		console.log("onload....");
		try {
		    const token = uni.getStorageSync('user_token');
			console.log(token);
		    if (token) {
				uni.switchTab({
					url:"../index/index"
				})
				
		    }
		} catch (e) {
		    // error
			console.log("onload-失败")
		}
		},
		methods: {
		login:function(){
			this.$api.__api__login({
				username:this.username,
				password:this.password
			}).then((res)=>{
				console.log(res)
				try{
					uni.setStorageSync('user_id',res.user.id);
					uni.setStorageSync('user_name',res.user.username);
					uni.setStorageSync('user_token',res.token);
					uni.showToast({
						title:"登录成功",
						duration:3000
						})
						setTimeout(function(){
						uni.switchTab({
							url:"../index/index"
							})
												
						},3000);
											
					}
				catch (e){
					console.log("登录-存储数据出错")
						}
			})
		}
			
		}
	}
</script>

<style>

</style>
