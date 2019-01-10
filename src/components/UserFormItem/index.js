import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import UserDivider from '../UserDivider'

const UserFormItem =  ({ value, emitValue, label, secureTextEntry }) => (
  <View>
    <Text style={[styles.phone, styles.textColor]}>{label}</Text>
    <View style={styles.inputContent}>
      <TextInput
        style={[styles.input, styles.textColor]}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={text => emitValue(text)}
      />
    </View>
    <UserDivider />
  </View>
)

UserFormItem.defaultProps = {
  value: '',
  secureTextEntry: false
}

UserFormItem.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  emitValue: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool
}

const styles = StyleSheet.create({
  textColor: {
    color: '#fff'
  },
  inputContent: {
    flexDirection: 'row',
    marginTop: 16
  },
  input: {
    width: '80%',
    fontSize: 20,
  }
})

export default UserFormItem
