import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
const { IndexScreen } = require('./src/screens/IndexScreen')

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defautlNavigationOptions: {
      title: 'Blogs',
    },
  },
)

const App = createAppContainer(navigator)

export default () => {
  return <App />
}
