const MALL_BASE_URL="http://123.57.7.108:2048/emall/";
//使用Promise写一个通用的网络请求方式，包括错误的处理和结果的返回。
export function http(params){
	return new Promise((resolve,reject)=>{
		console.log("发送网络请求参数："+JSON.stringify(params));
		//弹加载对话框
		uni.showLoading({
			title:"加载中...",
			mask:true
		});
		//获取user_token
		let user_token;
		//请求头，如果没有token就不必携带Authorization的请求头，因为如果携带了登录时也会验证
		let header={};
		try{
			user_token=uni.getStorageSync("user_token");
			if(user_token){
				header={'Authorization':'Bearer '+user_token};
			}
		}catch(e){
			console.log("获取user_token失败～～～");
		}		
		//发送网络请求
		uni.request({
		    url: MALL_BASE_URL+params.url,
			method:params.method || 'GET',
		    data: params.data || {},
		    header: header,
		    success: (res) => {
		        //console.log("发送网络请求成功结果："+JSON.stringify(res.data));
		        if(res.data.code==200||res.data.code==201){
					console.log("请求成功");
					resolve(res.data.data);
				}else{
					uni.showToast({
						title:res.data.message,
						duration:2000
					})
				}
		    },
			fail:(err)=>{
				console.log("调用接口失败：",err);
				uni.showToast({
					title:'接口调用失败！！！'+err,					
					duration:5000
				})
			},
			complete: () => {
				uni.hideLoading();
			}
		});
	});
}
