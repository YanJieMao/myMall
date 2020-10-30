import{http} from '../util/http.js'

export default{
	// 登录
	__api__login:function(params){
		return new http({
			url:'login',  //请求地址
			method:'post', //请求方式
			data:params    //请求参数
		})
	},
	// 获取用户信息
	__api__getUserInfo:function(params){
		return new http({
			url:'customer/'+params.id,
		});
	},
	
	// 获取sku
	__api__getSkus:function(params){
		return new http({
			url:'skus',
			data:params
		});
	},
	//获取商品详细信息
	__api__getSkusDetails:function(params){
		return new http({
			url:'spudetails/'+params.id
		});
	},
	//获取商品分类
	__api__getCategories:function(){
		return new http({
			url:'categories'
		})
	}
}