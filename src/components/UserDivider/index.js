/**
 * 分割线
 */

import React from 'react'
import { View, StyleSheet } from 'react-native'

export default () => (
  <View style={styles.oneWidth} />
)

const styles = StyleSheet.create({
  oneWidth: {
    width: 325,
    height: 1,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff'
  }
})
