/* eslint-disable */

import React from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation'

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button onPress={() => props.navigation.replace('BottomTabNavigator')} title="跳转" />
    </View>
  )
}

function A(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>A</Text>
      <Button onPress={() => props.navigation.replace('Home')} title="跳转" />
      <Button onPress={() => props.navigation.navigate('Item')} title="跳转Item" />
    </View>
  )
}

function B() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>B</Text>
    </View>
  )
}

function C() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>C</Text>
    </View>
  )
}

function D() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>D</Text>
    </View>
  )
}

function E() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>E</Text>
    </View>
  )
}

function Item() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  BottomTabNavigator: {
    screen: BottomTabNavigator
  },
  Item: {
    screen: Item
  }
}, {
  initialRouteName: 'BottomTabNavigator',
})

export default createAppContainer(AppNavigator)
