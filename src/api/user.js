// import { post } from '../utils/request'
import request from '../utils/request'

// eslint-disable-next-line
export const login = (data = {}) => {
  return request({
    method: 'post',
    url: '/user/login',
    data
  })
}

/*
 * @Author: mcdowell
 * @Date: 2019-01-18 00:41:08
 * @Last Modified by: mcdowell
 * @Last Modified time: 2019-01-18 00:44:09
 */

/**
 * @description 注册接口
 * @param {string} userName 用户名
 * @param {string} passWord 密码
 * @param {string} phone 手机号
 * @param {string} email 邮箱
 */
export const register = (data = {}) =>
  request({
    method: 'post',
    url: '/user/register',
    data
  })

/**
 * @description 用户名检查接口
 * @param {string} userName 用户名
 */
export const testRegister = (data = {}) =>
  request({
    method: 'post',
    url: '/user/testRegister',
    data
  })
