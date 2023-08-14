import {StatusBar } from 'react-native'

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
import { Routes } from './src/routes'
import { useNavigation } from '@react-navigation/native'

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
      <StatusBar barStyle="light-content"  backgroundColor="transparent" translucent />
    </>

  )
}

