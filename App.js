import React from 'react'
import { Provider } from 'mobx-react/native'
import SplashScreen from 'react-native-splash-screen'

import App from './src/container'
import store from './src/store'

class Index extends React.Component {
  componentDidMount(): void {
    SplashScreen.hide()
  }

  render(): React.ReactNode {
    return (
      <Provider {...store}>
        <App />
      </Provider>
    )
  }
}

export default Index
