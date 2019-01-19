/*
 * @Author: mcdowell
 * @Date: 2019-01-18 00:40:55
 * @Last Modified by: mcdowell
 * @Last Modified time: 2019-01-19 15:31:58
 */
import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  // Dimensions,
  ScrollView
} from 'react-native'

import RegisterState from '../../store/register'
import withBg from '../../components/WithUserBackground'
import ValidateFormItem from '../../components/ValidateFormItem'
import UserTitle from '../../components/UserTitle'
import RadiusButton from '../../components/RadiusButton'

import next from '../../assets/img/icon-next.png'

// const { width, height } = Dimensions.get('window')
@withBg
@inject('User')
@observer
class Register extends React.Component {
  /*   constructor(props) {
    super(props)
    this.state = { stateValidate: 'error' }
    this.emitValue= this.emitValue.bind(this)
  }
  emitValue(value){
    // console.error('console.error ==> Screen height is:' , value);
    Alert.alert('这事测试：'+value)
    this.props.User.changeValue('username', value)
  }, */
  render() {
    // eslint-disable-next-line react/prop-types
    const { User, navigation } = this.props
    // const { stateValidate } = this.state
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="height" enabled>
          <ScrollView style={[styles.outerContainer]} scrollEnabled>
            <View style={styles.container}>
              <View style={styles.topContainer}>
                <View style={{ marginTop: 145, marginBottom: 34 }}>
                  <UserTitle title="您的昵称？" />
                </View>
                <ValidateFormItem
                  value={User.username}
                  label="昵称"
                  isValidate
                  stateValidate={
                    // eslint-disable-next-line no-nested-ternary
                    User.username === ''
                      ? User.username.length > 10
                        ? 'success'
                        : 'error'
                      : ''
                  }
                  emitValue={value => User.changeValue('username', value)}
                />
              </View>
            </View>
          </ScrollView>
          {/* <View style={[styles.bgBlue, { height: 100 }]} /> */}
        </KeyboardAvoidingView>
        {/* <View style={[styles.bgGreen, { height: 100 }]} /> */}
        <View style={[styles.fooBG, styles.bottomContainer]}>
          <View style={[styles.fooBtns]}>
            <RadiusButton
              title="使用手机号"
              onPress={() => {
                navigation.navigate('Register')
              }}
              textStyle={styles.btnText}
              contentStyle={[
                styles.btnContent,
                {
                  backgroundColor: 'transparent',
                  flexDirection: 'column'
                }
              ]}
            />
            <TouchableOpacity onPress={() => {}}>
              <Image
                style={{
                  width: 50,
                  height: 50
                }}
                source={next}
              />
            </TouchableOpacity>
          </View>
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
  outerContainer: {
    // flex: 1,
    // height
    // paddingTop: 80
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  topContainer: {
    // flex: 4,
    paddingLeft: 24,
    paddingRight: 24
  },
  bottomContainer: {
    paddingBottom: 10
  },
  fooBG: {
    backgroundColor: '#429FC4'
  },
  fooBtns: {
    height: 84,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btnText: {
    // fontSize: 20
  },
  inputContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16
  },
  bgPink: { backgroundColor: 'pink' },
  bgGreen: { backgroundColor: 'green' },
  bgBlue: { backgroundColor: 'blue' },
  bgYellow: { backgroundColor: 'yellow' },
  bgSkyblue: { backgroundColor: 'skyblue' }
})

export default Register
