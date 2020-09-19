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

export default createAppContainer(navigator)
