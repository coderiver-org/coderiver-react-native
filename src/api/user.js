
// import { post } from '../utils/request'
import request from '../utils/request'

// eslint-disable-next-line
export const login = (data= {}) => {
  return request({
    method: 'post',
    url: '/user/login',
    data
  })
}
