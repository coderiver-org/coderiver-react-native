/**
 * 分割线
 */

import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

const UserDivider = ({ style }) => (
  <View style={[styles.oneWidth, { ...style }]} />
)
const styles = StyleSheet.create({
  oneWidth: {
    width: '100%',
    height: 1,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff'
  }
})
UserDivider.propTypes = {
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
}
export default UserDivider
