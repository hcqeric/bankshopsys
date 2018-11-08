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

 const uploadUrl = `${url}/app/file/ftpUpload/headImg/0`;

//增加支持动态路由形式
// testUseCoupon: '/app/order/useCoupon/:userId/:orderNum'

export default {
  baseUrl: url,
  serviceUrl: serviceUrl,
  uploadUrl: uploadUrl,
  sendCodeNoType: '/app/sendCodeNoType',
  sendCode: '/app/sendCode',
  doRegister: '/app/user/register',
  doLogin: '/app/wx/oauth2Login',
  codeLogin: '/app/wx/codeLogin',
  saveSuggestion: '/app/suggestions/save',
  getMerchantList: '/app/merchant/list',
  getPartnerList: '/app/user/getUserByParentId',
  isEnablePartner: '/app/account/onOff',
  updateIdCardNo: '/app/account/updateIdCardNo',
  saveMerchant: '/app/merchant/save',
  getSalesmanList: '/app/user/getSalesmanListBy',
  getNoticeList: '/app/notice/listByUserId',
  savePartnerMgr: '/app/partnerUpgrade/save',
  updateCardNo: '/app/account/updateCardNo',
  requestWithdraw: '/app/accountDetail/withdraw',
  getUserInfo: '/app/user/info',
  updateUser: '/app/user/updateUser',
  getOrderListByType: '/app/merchant/getMerchantList',
  getCustomManagerList: '/app/merchant/listByUserId',
  selectByIdOrName: '/app/merchant/selectByIdOrName',
  machineIns: '/app/merchant/install',
  getMerchantInfo: '/app/merchant/info/:id',
  getWithdrawList: '/app/accountDetail/withdrawList',
  getWithdrawDetail: '/app/accountDetail/withdrawDetail',
  getInfoByUserId: '/app/account/getInfoByUserId/:id',
  getEarningListByType: '/app/accountDetail/listByType',
  uploadFile: '/app/file/ftpUpload/headImg/0',
  selBanks: '/app/bank/sele_banks'
}
