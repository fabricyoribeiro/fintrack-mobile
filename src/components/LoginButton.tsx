import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

interface  LoginButtonProps extends TouchableOpacityProps{}

export function LoginButton({...props}:LoginButtonProps) {
  return (
    <View className='rounded-lg overflow-hidden'>
      <TouchableOpacity {...props}>
        <LinearGradient
          colors={['#4A4CE1', '#0E8BB6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View className="flex flex-row items-center px-3 rounded-lg ">
            <Text className="text-white text-xl p-2">Começar</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}
