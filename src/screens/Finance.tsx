import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Balance } from '../components/Balance'
import { NewButton } from '../components/NewButton'

export function Finance() {
  return (
    <SafeAreaView className="">
      <View
        className={`
        flex flex-row justify-between items-center
        px-3 pt-16 pb-16 bg-black 
      `}
      >
        <View>
          <Text className="text-white text-xl">Olá,</Text>
          <Text className="text-white text-3xl font-bold">Fabricyo</Text>
        </View>
        <TouchableOpacity className="bg-[#3b3b3f] p-1 rounded-full">
          <FontAwesome5 name="user-circle" size={32} color="white" />
        </TouchableOpacity>
      </View>

      <LinearGradient
        colors={['#3b3b3f', '#232323']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="h-full p-4 -mt-8 rounded-t-[36px]"
      >
        <View className="">
          <Text className="text-white text-xl mb-4">Saldo</Text>
          <Balance positive />
        </View>
        <View className='absolute top-[76vh] left-[77vw]'>
          <NewButton />
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}
