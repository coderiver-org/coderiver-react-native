/**
 * 通用圆角 button，未来可以传入自定义 style 控制
 * @param {func} onPress 回调函数
 * @param {string} title 按钮文字
 * @param {object} textStyle 按钮文字样式
 * @param {object} contentStyle 按钮样式
 * @param {node} children 按钮里面的组件
 */

import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet, ViewPropTypes } from 'react-native'

const RadiusButton = ({ onPress, title, children, contentStyle, textStyle }) => (
  <TouchableOpacity
    style={[styles.useEmail, contentStyle]}
    onPress={onPress}
  >
    {
      children
      || (
        <Text style={[styles.useEmailText, textStyle]}>
          {title}
        </Text>
        )
    }
  </TouchableOpacity>
)

RadiusButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node,
  contentStyle: ViewPropTypes.style,
  textStyle: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]))
}

const styles = StyleSheet.create({
  useEmail: {
    width: 150,
    height: 37,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 19
  },
  useEmailText: {
    lineHeight: 37,
    fontSize: 14,
    textAlign: 'center',
    color: '#fff'
  }
})

export default RadiusButton
