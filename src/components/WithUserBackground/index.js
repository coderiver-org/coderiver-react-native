/**
 * 背景图组件
 * 使用方式
 * 1， withBg(WrappedComponent)
 * 2, 装饰器模式
 */

import React from 'react'
import { ImageBackground } from 'react-native'
import bg from '../../assets/img/user-bg.png'

const withBg = WrappedComponent => props => (
  <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
    <WrappedComponent {...props} />
  </ImageBackground>
)

export default withBg
