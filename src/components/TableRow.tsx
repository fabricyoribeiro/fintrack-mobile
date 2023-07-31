import { TouchableOpacity, View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Form } from './Form'
import Transaction from '../dtos/Transaction'
import { TransactionType } from '../dtos/TransactionType'

interface TransactionProps extends Transaction{
  reloadList?: () => void 
}

export function TableRow(props: TransactionProps) {
  const [viewMore, setViewMore] = useState(false)

  function showMore() {
    setViewMore(!viewMore)
  }

  return (
    <View>
      {viewMore ? (
        <Form showMore={showMore} {...props} />
      ) : (
        <TouchableOpacity
          className="flex flex-row justify-between  items-center p-4 bg-[#55555c] border-b border-gray-500"
          onPress={() => {
            setViewMore(!viewMore)
          }}
        >
          {props.type === TransactionType.RECEITA ? (
            <Feather name="trending-up" size={28} color="#12D248" />
          ) : (
            <Feather name="trending-down" size={28} color="#aa0000" />
          )}
          <Text className="text-white text-lg font-semibold text-right w-[50%] ">{props.date}</Text>
          <Text className="text-white text-lg font-semibold w-28 text-right ">R${props.value}</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
