import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { LoginButton } from '../components/LoginButton'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'


export function Home() {
  const navigation: any = useNavigation()
  return (
    <SafeAreaView className="flex-1">
      <LinearGradient
        colors={['#16161866', '#000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1"
      >
        <View
          className={`
        flex justify-center items-center flex-1 gap-4 
      `}
        >
          <Text className="font-extrabold text-5xl text-white mb-6">
            Fin<Text className="font-light text-gray-300">Track</Text>
          </Text>
          <Text className="text-5xl text-white font-regular w-[80vw] text-center leading-[50px] ">
            Tenha mais controle sobre seu{' '}
            <Text>
              dinheiro
              <Image source="../../assets/retangle.png" />
            </Text>
          </Text>
          <Text className=" text-xl text-center leading-6 text-[#ffffff94] w-[80vw]">
            Organize seu dinheiro de forma inteligente!
          </Text>
          <View>
            <LoginButton onPress={() => navigation.navigate('finance')} />
            {/* <LoginButton onPress={teste} /> */}
            {/* <LoginButton onPress={saveteste} /> */}
            {/* <LoginButton onPress={clear} /> */}
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}
