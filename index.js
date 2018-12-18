import React from 'react'
import { AppRegistry } from 'react-native'
// import { Provider } from 'mobx-react/native'
// import App from './App'
import Screen from './src/view/index'
import { name as appName } from './app.json'

// import State from './src/store/state'

// const store = { State: new State() }

function Index() {
  return (
    // <Provider {...store}>
    //   <App />
    // </Provider>
    <Screen />
  )
}

AppRegistry.registerComponent(appName, () => Index)
