import{http} from '../util/http.js'

export default{
	
	apiLogin:function(params){
		return new http({
			url:'login',  //请求地址
			method:'post', //请求方式
			data:params    //请求参数
		})
	}
}