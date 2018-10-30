// 开发地址
 const url = 'https://gapi4.halopay.cn';

//线上地址
// const url = 'http://120.79.16.221:9091/';

//鑫哥本地IP
// const url = 'http://192.168.0.136:8080';

//强哥本地IP
// const url = 'http://192.168.0.127:8080';

//嘉龙本地IP
 const serviceUrl = 'http://192.168.0.99:8081';

//增加支持动态路由形式
// testUseCoupon: '/app/order/useCoupon/:userId/:orderNum'

export default {
  baseUrl: url,
  serviceUrl: serviceUrl,
  sendCode: '/app/sendCode',
  doRegister: '/app/user/register',
  doLogin: '/app/wx/oauth2Login',
  codeLogin: '/app/wx/codeLogin',
  saveSuggestion: '/app/suggestions/save',
  getMerchantList: '/app/merchant/list',
  getPartnerList: '/app/user/getUserByParentId',
  selBanks: '/v1/bank/sele_banks'
}
