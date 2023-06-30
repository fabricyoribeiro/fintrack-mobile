import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface  LoginButtonProps extends TouchableOpacityProps{}

export function LoginButton({...rest}:LoginButtonProps) {
  return (
    <View className='rounded-lg overflow-hidden'>
      <TouchableOpacity {...rest}>
        <LinearGradient
          colors={['#4A4CE1', '#0E8BB6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View className="flex flex-row items-center px-3 rounded-lg ">
            <MaterialCommunityIcons name="google" size={24} color="white" />
            <Text className="text-white text-xl p-2">Login</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}
