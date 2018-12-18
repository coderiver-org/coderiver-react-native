import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'mobx-react/native'
import App from './App'
import { name as appName } from './app.json'

import State from './src/store/state'

const store = { State: new State() }

function Index() {
  return (
    <Provider {...store}>
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => Index)
