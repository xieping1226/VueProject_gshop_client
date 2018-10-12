import ajax from './ajax'

export const reqAddress=(geohash)=>ajax('/api/position/'+geohash)

export const reqFoodCategorys=()=>ajax('/api/index_category')

export const reqShops=(longitude, latitude)=>ajax('/api/shops', {latitude, longitude})

/**
 * 4. 账号密码登录
 */
export const reqPwdLogin = ({name, pwd, captcha}) => ajax('/api/login_pwd', {
  name,
  pwd,
  captcha
}, 'POST')

/**
 * 获取短信验证码
 */
export const reqSendCode = phone => ajax('/api/sendcode', {phone})

/**
 * 手机号验证码登录
 */
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')

/**
 * 获取用户信息(根据会话)
 */
export const reqUser = () => ajax('/api/userinfo')

export const reqLogout = () => ajax('/api/logout')

