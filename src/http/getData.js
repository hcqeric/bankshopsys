import Request from '@/http/request';
import url from '@/http/url.js'

//  示例  {api  访问路径   methods 访问方式 param 传递参数 data 提交数据}
// export const example = (params) => new Request().require({api: '/api/member/Login',param:params,data:datas});

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

export const saveMerchant = (datas) => new Request().require({api: url.saveMerchant, data: datas, openId: true, loadingVisble: true}); //商家快速推荐

export const getSalesmanList = () => new Request().require({api: url.getSalesmanList, methods: "GET", openId: true, loadingVisble: true}); //获取客户经理列表

export const savePartnerMgr = (datas) => new Request().require({api: url.savePartnerMgr, data: datas, openId: true}); //合伙人管理员申请

export const updateCardNo = (datas) => new Request().require({api: url.updateCardNo, data: datas, openId: true}); //更换银行卡

export const requestWithdraw = (datas) => new Request().require({api: url.requestWithdraw, data: datas, openId: true}); //申请提现

export const getWithdrawList = (datas) => new Request().require({api: url.getWithdrawList, data: datas, openId: true}); //提现记录

export const getWithdrawDetail = (datas) => new Request().require({api: url.getWithdrawDetail, data: datas, openId: true}); //提现详情

export const isEnablePartner = (datas) => new Request().require({api: url.isEnablePartner, data: datas, openId: true}); //是否禁用合伙人

export const getNoticeList = (datas) => new Request().require({api: url.getNoticeList, data: datas, openId: true, loadingVisble: true}); //获取消息通知列表

export const getUserInfo = () => new Request().require({api: url.getUserInfo, methods: "GET", openId: true}); //获取用户信息

export const updateUser = (datas) => new Request().require({api: url.updateUser, data: datas, openId: true}); //更新用户信息

export const getCustomManagerList = (datas) => new Request().require({api: url.getCustomManagerList, data: datas, openId: true, loadingVisble: true}); //获取装机列表信息

export const selectByIdOrName = (datas) => new Request().require({api: url.selectByIdOrName, data: datas, openId: true, loadingVisble: true}); //搜索商户名称或单号

export const machineIns = (datas) => new Request().require({api: url.machineIns, data: datas, openId: true}); //确认装机

export const getMerchantInfo = (restParam) => new Request().require({api: url.getMerchantInfo, methods: "GET", restParam: restParam, openId: true}); //获取商户详情

export const getInfoByUserId = (restParam) => new Request().require({api: url.getInfoByUserId, methods: "GET", restParam: restParam, openId: true}); //获取合伙人详情

export const getQrCode = () => new Request().require({api: url.getQrCode, methods: "GET",  openId: true}); //获取推荐二维码

export const uploadPic = (datas) => new Request().require({api: url.uploadPic, data: datas,  openId: true}); //自助入网上传图片

export const getAccountInfo = () => new Request().require({api: url.getAccountInfo, methods: "GET",  openId: true}); //获取我要提现信息

export const getProfit = () => new Request().require({api: url.getProfit, methods: "GET",  openId: true}); //收益首页接口

export const getFileAndAll = () => new Request().require({api: url.getFileAndAll, methods: "GET",  openId: true}); //获取首页图和其他信息接口

export const addMerchantAndPic = (datas) => new Request().require({api: url.addMerchantAndPic, data: datas,  openId: true, loadingVisble: true}); //商户自助入网全

export const getOrderListByType = (datas) => new Request().require({api: url.getOrderListByType, data: datas, openId: true, loadingVisble: true}); //获取订单列表

export const getEarningListByType = (datas) => new Request().require({api: url.getEarningListByType, data: datas, openId: true, loadingVisble: true}); //获取不同类型的收益

export const getTotalProfitList = (datas) => new Request().require({api: url.getTotalProfitList, data: datas, openId: true, loadingVisble: true}); //当前合伙人历史总收益详情列表

export const getGradeList = () => new Request().require({api: url.getGradeList, methods: "GET", openId: true, loadingVisble: true}); //获取等级列表接口

export const uploadFile = (datas) => new Request().require({api: url.uploadFile, data: datas}); //上传图片





