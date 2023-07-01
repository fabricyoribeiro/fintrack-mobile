import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

export function NewButton() {
  return (
    <TouchableOpacity>
      <View className="bg-blue-600 flex-0 self-start p-3 rounded-full">
        <Feather name="plus" size={36} color="white" />
      </View>
    </TouchableOpacity>
  )
}

// const styles = StyleSheet.create({
//   fit:{
//     width: 'fit-content'
//   }
// })
