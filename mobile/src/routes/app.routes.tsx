import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Load } from '@screens/Load'
import { MainScreen } from '@screens/MainScreen'
import { SignUp } from '@screens/SignUp'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="load" component={Load} />

      <Screen name="signup" component={SignUp} />

      <Screen name="mainscreen" component={MainScreen} />
    </Navigator>
  )
}
