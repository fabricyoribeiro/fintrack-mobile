import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

export function Finance() {
  return (
    <SafeAreaView className="pt-12">
      <View
        className={`
        flex flex-row justify-between items-center
        px-3 pt-6 pb-14 bg-black 
      `}
      >
        <View>
          <Text className="text-white text-xl">Olá,</Text>
          <Text className="text-white text-3xl font-bold">Fabricyo</Text>
        </View>
        <TouchableOpacity className="bg-[#494949] p-1 rounded-full">
          <FontAwesome5 name="user-circle" size={32} color="white" />
        </TouchableOpacity>
      </View>

      <LinearGradient
        colors={['#494949', '#000000ef']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="h-full p-4 -mt-8 rounded-t-[36px]"
      >
        <Text>f</Text>
      </LinearGradient>
    </SafeAreaView>
  )
}
