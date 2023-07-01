import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import clsx from 'clsx'

interface Props {
  positive?: boolean
}

export function Balance(props: Props) {
  return (
    <View
      className={clsx('flex flex-row justify-center gap-2 py-3 pr-2 w-64 rounded-xl ', {
        ['bg-green-700']: props.positive,
        ['bg-red-700']: !props.positive
      })}
    >
      <Text className="text-white text-lg self-end">R$</Text>
      <Text className="text-white text-3xl font-bold">120.000,00</Text>
      <Feather name="trending-up" size={32} color="white" />
    </View>
  )
}
