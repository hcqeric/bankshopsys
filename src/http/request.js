import wepy from 'wepy';
import url from '@/http/url.js'


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
    //动态路由参数设置
    if (!options.data) { options.data = {} }
    if (!options.methods) { options.methods = 'POST' }; //不传递方法默认为POST

    return new Promise((resolve,reject) => {
        return wepy.request({
            method: options.methods,
            url: this.Domain + options.api,
            headers: {
                'Content-Type':'application/json;charset=UTF-8'
            },
            data:options.data
        }).then(response => {
            if(response.data.code === 0){ //请求成功
                return resolve(response.data)
            }else{
                if(response.data.code === 401){ //TOKEN失效
                  // removeLocalStorage(Constants.TOKEN)
                  // router.push('/login')
                }
                return resolve(response.data)
            }
        },error => {

            return reject()
        }).catch(error=>{

        })

    })
  }
}

export default Request;
