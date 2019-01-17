/*
 * @Author: mcdowell 
 * @Date: 2019-01-18 00:40:55 
 * @Last Modified by:   mcdowell 
 * @Last Modified time: 2019-01-18 00:40:55 
 */
import { observable, action } from 'mobx'
import { Toast } from 'teaset'
import { storeData } from '../utils/asyncStorage'
import NavigationService from '../utils/navigationService'
import { user } from '../api'

class RegisterState {
  @observable username = 'king'

  @observable password = 'kingking'

  @action
  changeValue(property, value) {
    this[property] = value
  }

  @action.bound
  async register() {
    const phoneExp = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$/
    const emailExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    const passwordExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,16}$/
    const { username, password } = this
    if (!phoneExp.test(username) && !emailExp.test(username)) {
      Toast.fail('请正确填写用户名')
      return
    }
    if (!passwordExp.test(password)) {
      Toast.fail('请正确填写密码')
      return
    }
    const res = await user.login({ username, password })
    if (res) {
      storeData('userInfo', JSON.stringify(res))
      NavigationService.navigate('BottomTabNavigator')
    }
  }
}

export default RegisterState
