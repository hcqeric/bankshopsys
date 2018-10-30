import wepy from 'wepy'
import {USER_SPECICAL_INFO} from './constant';

export function getOpenId() {
  let userSpecInfo = wepy.getStorageSync(USER_SPECICAL_INFO)
  if (userSpecInfo.openId){
    return userSpecInfo.openId
  } else {
    return ''
  }
}
