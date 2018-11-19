import wepy from 'wepy';
import url from '@/http/url.js'
import tip from '@/utils/tip'
import {USER_SPECICAL_INFO} from '../utils/constant';
import {getOpenId} from '../utils/utils';

class Request {
  constructor(baseUrl = url.baseUrl){
    this.Domain = baseUrl
  }

  require(options) {
    if (!options.api) throw new Error('api 不能为空');

    //动态路由参数设置
    if (!options.restParam) {
      options.restParam = {}
    }
    else{
      let restArr = options.api.split('/');
      restArr.forEach((item, index)=>{
        if (item.startsWith(':')){
          let key = item.substring(1)
          restArr[index] = options.restParam[key]
        }
      })
      options.api = restArr.join('/')
    }
    if (!options.openId) {
      console.log("不需要openId")
    } else {
      options.api = options.api + '?openId=' + getOpenId()
    }
    //动态路由参数设置
    if (!options.data) { options.data = {} }
    if (!options.methods) { options.methods = 'POST' }; //不传递方法默认为POST
    if (!options.loadingVisble) { options.loadingVisble = false };
    if(options.loadingVisble){
      tip.loading();
    };
    return new Promise((resolve,reject) => {

        return wepy.request({
            method: options.methods,
            url: this.Domain + options.api,
            headers: {
                'Content-Type':'application/json;charset=UTF-8'
            },
            data:options.data
        }).then(response => {
            tip.loaded();
            if(response.data.code === 0){ //请求成功
                return resolve(response.data)
            }else{
                if(response.data.code === 401){ //TOKEN失效
                  wepy.removeStorageSync(USER_SPECICAL_INFO)
                  wepy.redirectTo({
                    url: 'login'
                  })
                  // removeLocalStorage(Constants.TOKEN)
                  // router.push('/login')
                }
                tip.alert(response.data.msg)
                return reject(response.data)
            }
        },error => {
            tip.loaded();
            tip.alert()
            return reject()
        }).catch(error=>{
            tip.loaded();
            tip.alert(error.msg)
        })

    })
  }
}

export default Request;
