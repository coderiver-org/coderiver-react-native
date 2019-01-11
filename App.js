import React from 'react'
import { Provider } from 'mobx-react/native'

import App from './src/container'
import store from './src/store'

import NavigationService from './src/utils/navigationService'

function Index() {
  return (
    <Provider {...store}>
      <App
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    </Provider>
  )
}

export default Index
