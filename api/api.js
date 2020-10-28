import{http} from '../util/http.js'

export default{
	
	__api__login:function(params){
		return new http({
			url:'login',  //请求地址
			method:'post', //请求方式
			data:params    //请求参数
		})
	},
	
	__api__getUserInfo:function(params){
		return new http({
			url:'customer/'+params.id,
		});
	},
	
	__api__getSkus:function(params){
		return new http({
			url:'skus',
			data:params
		});
	}
}