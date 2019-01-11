/**
 * 登录注册的标题组件
 * @prop {string} title 标题名
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet } from 'react-native'

const UserTitle = ({ title }) => (
  <Text
    style={styles.title}
  >
    {title}
  </Text>
)

UserTitle.propTypes = {
  title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: '#fff'
  }
})

export default UserTitle
