// 全局 navigation 在 porps 里没有 navigation 属性时可以调用

import { NavigationActions } from 'react-navigation'

let navigator

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}

export default {
  navigate,
  setTopLevelNavigator
}
