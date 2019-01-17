import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { View, StyleSheet } from 'react-native'

import RegisterState from '../../store/register'
import withBg from '../../components/WithUserBackground'
import UserFormItem from '../../components/UserFormItem'
import UserTitle from '../../components/UserTitle'
// import next from '../../assets/img/icon-next.png'

@withBg
@inject('User')
@observer
class Register extends React.Component {
  render() {
    const { User } = this.props
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 145, marginBottom: 24 }}>
          <UserTitle title="您的昵称？" />
        </View>
        <View style={{ height: 56 }} />
        <UserFormItem
          value={User.username}
          label="昵称"
          emitValue={value => User.changeValue('username', value)}
        />

        <View style={styles.inputContent}>
          <View />
          {/* <TouchableOpacity onPress={User.Register}>
            <Image
              style={{ width: 50, height: 50, marginRight: 25, marginTop: -7 }}
              source={next}
            />
          </TouchableOpacity> */}
        </View>
      </View>
    )
  }
}

// Register.defaultProps = {
//   User: {
//     username: '',
//     password: ''
//   }
// }

Register.propTypes = {
  User: PropTypes.instanceOf(RegisterState)
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

export default Register
