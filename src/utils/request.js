// request.js
import Axios from 'axios'
import { Toast } from 'teaset'

const axios = Axios

/**
 * 一、功能：
 * 1. 统一拦截http错误请求码；
 * 2. 统一拦截业务错误代码；
 * 3. 统一设置请求前缀
 * |-- 每个 http 加前缀 baseURL = /api/v1，从配置文件中获取 apiPrefix
 * 4. 配置异步请求过渡状态：显示蓝色加载条表示正在请求中，避免给用户页面假死的不好体验。
 * |-- 使用 NProgress 工具库。
 *
 * 二、引包：
 * |-- axios：http 请求工具库
 */

// 设置全局参数，如响应超市时间，请求前缀等。
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5c2d7e63873e4126e1daa237/api'
axios.defaults.withCredentials = false

// 添加一个请求拦截器，用于设置请求过渡状态
axios.interceptors.request.use(
  config => config,
  error => error
)

// 添加一个返回拦截器
axios.interceptors.response.use(
  response => response,
  error => error
)

export default function request(opt) {
  // 调用 axios api，统一拦截
  return axios(opt)
    .then(response => response.data)
    .catch(error => {
      // >>>>>>>>>>>>>> 请求失败 <<<<<<<<<<<<<<
      // 请求配置发生的错误
      if (!error.response) {
        Toast.fail('请求失败')
        return error
      }

      // 响应时状态码处理
      const { status } = error.response
      const errortext = codeMessage[status] || error.response.statusText

      Toast.fail(`请求错误 ${status}`)
      return { code: status, message: errortext }
    })
}

// 状态码错误信息
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}
