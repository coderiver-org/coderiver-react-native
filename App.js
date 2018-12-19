import React from 'react'
import { Provider } from 'mobx-react/native'

import App from './src/container'
import store from './src/store'

function Index() {
  return (
    <Provider {...store}>
      <App />
    </Provider>
  )
}

export default Index
