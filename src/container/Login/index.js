import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import UserState from '../../store/user'
import withBg from '../../components/WithUserBackground'
import UserFormItem from '../../components/UserFormItem'
import UserTitle from '../../components/UserTitle'
import next from '../../assets/img/icon-next.png'

@withBg
@inject('User')
@observer
class Login extends React.Component {

  render() {
    const { User } = this.props
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 145, marginBottom: 24 }}>
          <UserTitle title="登录" />
        </View>
        <View style={{ height: 56 }} />
        <UserFormItem
          value={User.username}
          label="用户名"
          emitValue={value => User.changeValue('username', value)}
        />
        <View style={{ height: 15 }} />
        <UserFormItem
          value={User.password}
          label="输入密码"
          secureTextEntry
          emitValue={value => User.changeValue('password', value)}
        />
        <View style={styles.inputContent}>
          <View />
          <TouchableOpacity
            onPress={User.login}
          >
            <Image
              style={{ width: 50, height: 50, marginRight: 25, marginTop: -7 }}
              source={next}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

// Login.defaultProps = {
//   User: {
//     username: '',
//     password: ''
//   }
// }

Login.propTypes = {
  User: PropTypes.instanceOf(UserState)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 24
  },
  inputContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16
  }
})

export default Login
