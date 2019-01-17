/* eslint-disable */

import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation'

import Login from './Login'
import Guide from './Guide'
import Register from './Register'

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => props.navigation.replace('BottomTabNavigator')}
        title="跳转"
      />
      <Button
        onPress={() => props.navigation.navigate('LoginPhone')}
        title="登录"
      />
    </View>
  )
}

function A(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>A</Text>
      <Button onPress={() => props.navigation.replace('Home')} title="跳转" />
      <Button
        onPress={() => props.navigation.navigate('Item')}
        title="跳转Item"
      />
    </View>
  )
}

function B() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>B</Text>
    </View>
  )
}

function C() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>C</Text>
    </View>
  )
}

function D() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>D</Text>
    </View>
  )
}

function E() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>E</Text>
    </View>
  )
}

function Item() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Item</Text>
    </View>
  )
}

const BottomTabNavigator = createBottomTabNavigator({
  A: {
    screen: A
  },
  B: {
    screen: B
  },
  C: {
    screen: C
  },
  D: {
    screen: D
  },
  E: {
    screen: E
  }
})

const UserNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        headerTransparent: true,
        headerTintColor: '#fff'
      })
    },
    Register: {
      screen: Register,
      navigationOptions: () => ({
        headerTransparent: true,
        headerTintColor: '#fff'
      })
    },
    Guide: {
      screen: Guide,
      navigationOptions: ({ navigation }) => ({
        headerTransparent: true,
        headerTruncatedBackTitle: '',
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ marginRight: 25, color: '#fff', fontSize: 16 }}>
              登录
            </Text>
          </TouchableOpacity>
        )
      })
    }
  },
  {
    initialRouteName: 'Guide'
  }
)

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    UserNavigator: {
      screen: UserNavigator,
      navigationOptions: () => ({
        header: null
      })
    },
    BottomTabNavigator: {
      screen: BottomTabNavigator
    },
    Item: {
      screen: Item
    }
  },
  {
    initialRouteName: 'UserNavigator'
  }
)

export default createAppContainer(AppNavigator)
