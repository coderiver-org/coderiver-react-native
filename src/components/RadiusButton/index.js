/**
 * 通用圆角 button，未来可以传入自定义 style 控制
 */

import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const RadiusButton = ({ onPress, title }) => (
  <TouchableOpacity
    style={styles.useEmail}
    onPress={onPress}
  >
    <Text
      style={styles.useEmailText}
    >
      {title}
    </Text>
  </TouchableOpacity>
)

RadiusButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
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
  },
})

export default RadiusButton
