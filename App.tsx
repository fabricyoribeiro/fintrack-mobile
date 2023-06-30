import {View, Text, StatusBar, SafeAreaView } from 'react-native'

import {
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold
} from '@expo-google-fonts/nunito'
import { useFonts } from 'expo-font'
import Loading from './src/components/Loading'
import { Home } from './src/screens/Home'
import { Routes } from './src/routes'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })

  if(!fontsLoaded){
    return (<Loading />)
  }

  return (
    <>
      <Routes />
      <StatusBar barStyle="dark-content"  backgroundColor="transparent" translucent />
    </>

  )
}

