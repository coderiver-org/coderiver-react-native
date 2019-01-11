import { AsyncStorage } from 'react-native'
import { Toast } from 'teaset'

/**
 *
 * @param {string} key 属性名
 * @param {string} value 属性值
 */
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    Toast.fail(error)
  }
}

/**
 *
 * @param {string} key 属性名
 * @returns {string} value 属性值
 */
// eslint-disable-next-line
export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value
    }
  } catch (error) {
    Toast.fail(error)
  }
}
