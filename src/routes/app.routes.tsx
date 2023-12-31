import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Finance } from '../screens/Finance'
import { Home } from '../screens/Home'
import { useState } from 'react'
import useTransaction from '../hooks/useTransaction'

const Stack = createNativeStackNavigator()

export function AppRoutes() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="finance"
        component={Finance}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
