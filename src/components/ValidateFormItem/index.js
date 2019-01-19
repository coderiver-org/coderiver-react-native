/*
 * @Author: mcdowell
 * @Date: 2019-01-18 12:32:46
 * @Last Modified by: mcdowell
 * @Last Modified time: 2019-01-19 15:24:38
 */
import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, TextInput, StyleSheet } from 'react-native'

import UserDivider from '../UserDivider'

import tick from '../../assets/img/icon-tick.png'
import error from '../../assets/img/icon-error.png'

const ValidateFormItem = ({
  value,
  emitValue,
  label,
  secureTextEntry,
  isValidate,
  stateValidate
}) => (
  <View>
    <Text style={styles.textColor}>{label}</Text>
    <View style={styles.formItem}>
      <View style={styles.inputContent}>
        <TextInput
          style={[styles.inputValidate, styles.textColor]}
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={text => emitValue(text)}
        />
      </View>
      {isValidate && (
        <View style={styles.iconValidate}>
          {stateValidate === 'success' && (
            <Image style={{ width: 24, height: 17 }} source={tick} />
          )}
          {stateValidate === 'error' && (
            <Image style={{ width: 24, height: 17 }} source={error} />
          )}
        </View>
      )}
    </View>
    <UserDivider
      style={{
        marginTop: 15
      }}
    />
  </View>
)

ValidateFormItem.defaultProps = {
  value: '',
  secureTextEntry: false, // 是否隐藏
  isValidate: false, // 是显示校验图标
  stateValidate: '' // 'success' 'error' ''
}

ValidateFormItem.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  emitValue: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool,
  isValidate: PropTypes.bool,
  stateValidate: PropTypes.string
}

const styles = StyleSheet.create({
  formItem: { flexDirection: 'row' },
  textColor: {
    color: '#fff'
  },
  inputContent: {
    flexDirection: 'row',
    marginTop: 16,
    flex: 7
  },
  inputValidate: {
    width: '100%',
    alignItems: 'stretch',
    fontSize: 20
  },
  iconValidate: {
    width: 24,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
})

export default ValidateFormItem
