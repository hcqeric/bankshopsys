import Request from '@/http/request';
import url from '@/http/url.js'

//  示例  {api  访问路径   methods 访问方式 param 传递参数 data 提交数据}
// export const example = (params) => new Request().require({api: '/api/member/Login',param:params,data:datas});

export const getGoodsList = (datas, isShowLoading) => new Request().require({api: url.goodsList,data:datas, loadingVisble: isShowLoading}); //获取商品列表

export const getGoodsDetail = (id) => new Request().require({api: url.goodsDetail + id, methods: 'GET', loadingVisble: true}); //获取商品详情

export const createOrder = (params, datas) => new Request().require({api: url.createOrder, param:params, data:datas, loadingVisble: true}); //获取订单详情

export const orderPay = (params, datas) => new Request().require({api: url.orderPay, param:params, data:datas, loadingVisble: true, loadingText: '正在支付...'}); //订单支付

export const getDiscountList = (params, datas, isShowLoading) => new Request().require({api: url.discountList, param:params, data:datas, loadingVisble: isShowLoading}); //获取优惠券列表

export const useCoupon = (userId, orderNum, params) => new Request().require({api: url.useCoupon + userId + '/' + orderNum, param: params, methods: 'GET'}); //使用优惠券

// 增加支持多站点接口，通过构造函数传入非主站点接口的baseUrl
export const getExchangeDetail = () => new Request("https://www.baidu.com").require({api: "/app/order/info/109"}); //获取兑换详情

// 增加支持动态路由，通过restParam传入动态数据，json格式
// export const testUseCoupon = (restParam, params) => new Request().require({api: url.testUseCoupon,restParam: restParam, param: params, methods: 'GET'}); //使用优惠券

export const getShopList = (params) => new Request('').require({api: url.merchantList, param: params,  methods: 'GET'}); //商家服务-门店列表

export const createShop = (datas) => new Request('').require({api: url.createShop, data: datas}); //商家服务-门店创建

export const getClerkList = (restParam, params) => new Request('').require({api: url.clerkList, restParam: restParam, param: params,  methods: 'GET'}); //商家服务-店员列表

export const createClerk = (datas) => new Request('').require({api: url.createClerk, data: datas}); //商家服务-店员创建

export const getAddressPicker = (restParam) => new Request('').require({api: url.addressPicker, restParam: restParam, methods: 'GET'}); //省市区地址选择

export const selBanks = (datas) => new Request().require({api: url.selBanks, data: datas}); //银行选择器

export const getVeriCode = (datas) => new Request().require({api: url.sendCode, data: datas}); //获取验证码

export const getVeriCodeNoType = (datas) => new Request().require({api: url.sendCodeNoType, data: datas}); //获取验证码,不传type

export const doRegister = (datas) => new Request().require({api: url.doRegister, data: datas}); //用户注册

export const doLogin = (datas) => new Request().require({api: url.doLogin, data: datas}); //用户登录

export const codeLogin = (datas) => new Request().require({api: url.codeLogin, data: datas}); //根据code登录

export const saveSuggestion = (datas) => new Request().require({api: url.saveSuggestion, data: datas, openId: true}); //保存建议

export const getMerchantList = (datas) => new Request().require({api: url.getMerchantList, data: datas, openId: true, showLoading: true}); //获取商户列表

export const getPartnerList = (datas) => new Request().require({api: url.getPartnerList, data: datas, openId: true}); //获取合伙人列表

export const updateIdCardNo = (datas) => new Request().require({api: url.updateIdCardNo, data: datas, openId: true}); //身份认证

export const saveMerchant = (datas) => new Request().require({api: url.saveMerchant, data: datas, openId: true}); //商家快速推荐

export const getSalesmanList = () => new Request().require({api: url.getSalesmanList, methods: "GET", openId: true}); //获取客户经理列表

export const savePartnerMgr = (datas) => new Request().require({api: url.savePartnerMgr, data: datas, openId: true}); //合伙人管理员申请

export const updateCardNo = (datas) => new Request().require({api: url.updateCardNo, data: datas, openId: true}); //更换银行卡

export const requestWithdraw = (datas) => new Request().require({api: url.requestWithdraw, data: datas, openId: true}); //申请提现

export const isEnablePartner = (datas) => new Request().require({api: url.isEnablePartner, data: datas, openId: true}); //是否禁用合伙人

export const getNoticeList = (datas) => new Request().require({api: url.getNoticeList, data: datas, openId: true}); //获取消息通知列表

export const getUserInfo = () => new Request().require({api: url.getUserInfo, methods: "GET", openId: true}); //获取用户信息

export const updateUser = (datas) => new Request().require({api: url.updateUser, data: datas, openId: true}); //更新用户信息

export const uploadFile = (datas) => new Request().require({api: url.uploadFile, data: datas}); //上传图片





