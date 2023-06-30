import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Finance } from "../screens/Finance"
import { Home } from "../screens/Home"

const Stack = createNativeStackNavigator()

export function AppRoutes(){
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='home'
        component={Home}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen 
        name='finance'
        component={Finance}
        options={{
          headerShown:false
        }}
      />
    </Stack.Navigator>
  )
}