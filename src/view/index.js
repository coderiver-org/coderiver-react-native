import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  )
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
}, {
  initialRouteName: 'Home',
})

export default createAppContainer(AppNavigator)
