import { createStackNavigator, createAppContainer } from 'react-navigation'
import { WHITE, RED, DEFAULT_FONT_SIZE, DEFAULT_FONT_FAMILY_BOLD } from '../configs/styles'
import SplashScreen from '../components/SplashScreen'

const AppNavigator = createStackNavigator({
  SplashScreen: { screen: SplashScreen },
}, {
  initialRouteName: 'SplashScreen',
    defaultNavigationOptions: {
      headerTintColor: WHITE,
      headerStyle: {
        backgroundColor: RED,
        height: 70,
      },
      headerBackTitle: null,
      headerTitleStyle: {
        fontFamily: DEFAULT_FONT_FAMILY_BOLD,
        fontSize: DEFAULT_FONT_SIZE,
      },
    },
    headerLayoutPreset: 'center'
})

export default AppContainer = createAppContainer(AppNavigator)
