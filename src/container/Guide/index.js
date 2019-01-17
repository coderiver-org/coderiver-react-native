import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

import withBg from '../../components/WithUserBackground'
import UserTitle from '../../components/UserTitle'
import RadiusButton from '../../components/RadiusButton'

import icon from '../../assets/img/logo.png'
import gitHub from '../../assets/img/github.png'
import wechat from '../../assets/img/icon-wechat.png'
import weibo from '../../assets/img/icon-weibo.png'

@withBg
class Guide extends React.Component {
  render() {
    const { ...props } = this.props
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={icon} />
        <UserTitle title="欢迎来到CodeRiver" />
        <View style={{ marginTop: 55 }}>
          <RadiusButton onPress={() => {}} contentStyle={styles.btnContent}>
            <Image style={styles.github} source={gitHub} />
            <Text style={[styles.btnText, { color: '#40AEA8' }]}>
              使用Github账号登录
            </Text>
          </RadiusButton>
          <RadiusButton
            title="创建账号"
            onPress={() => {
              props.navigation.navigate('Register')
            }}
            textStyle={styles.btnText}
            contentStyle={[
              styles.btnContent,
              { marginTop: 16, backgroundColor: '', flexDirection: 'column' }
            ]}
          />
        </View>
        <View style={{ marginTop: 26 }}>
          <Text style={{ color: '#fff', fontSize: 16 }}>更多登录方式</Text>
          <View style={{ marginTop: 38, flexDirection: 'row' }}>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Image style={styles.icon} source={weibo} />
              <Text style={styles.text}>新浪微博</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 32 }}>
              <Image style={styles.icon} source={wechat} />
              <Text style={styles.text}>微信</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24
  },
  logo: {
    width: 78,
    height: 50,
    marginTop: 145,
    marginBottom: 55
  },
  github: {
    width: 20,
    height: 20,
    marginTop: 15,
    marginLeft: 30,
    marginRight: 22
  },
  btnContent: {
    backgroundColor: '#fff',
    width: 'auto',
    height: 50,
    flexDirection: 'row',
    borderRadius: 24
  },
  btnText: {
    lineHeight: 50,
    fontSize: 20
  },
  icon: {
    width: 22,
    height: 18,
    marginRight: 10
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
})

export default Guide
