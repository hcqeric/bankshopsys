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

export function dateFormat(date, fmt){ //格式化时间   DateFormat('yyyy-MM-dd hh:mm')
  if (date == undefined || date == null) return;
  date = new Date(date);
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  function padLeftZero (str) {
    return ('00' + str).substr(str.length)
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

export function formatDate(date){
  let Str=date.getFullYear() + '-' +
    (date.getMonth() + 1) + '-' +
    date.getDate()
  return Str
}

export function formatTime(date){
  let Str=date.getFullYear() + '-' +
    (date.getMonth() + 1) + '-' +
    date.getDate() + ' ' +
    date.getHours() + ':' +
    date.getMinutes()
    // + ':' + date.getSeconds()
  return Str
}
export function getDaysInYearMonth(year, month){
  month = parseInt(month, 10);
  var date = new Date(year, month, 0);
  return date.getDate();
}

