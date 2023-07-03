import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Form } from './Form'


export function TableRow() {
  const [viewMore, setViewMore] = useState(false)

  function showMore(){
    setViewMore(!viewMore)
  }

  return (
    <View>
      {viewMore ? (
       <Form showMore={showMore} />
      ) : (
        <TouchableOpacity
          className="flex flex-row justify-between items-center p-4 bg-[#55555c] border-b border-gray-500"
          onPress={() => {
            setViewMore(!viewMore)
          }}
        >
          <Feather name="trending-up" size={28} color="#12D248" />
          <Text className="text-white text-lg font-semibold">11/10/2023</Text>
          <Text className="text-white text-lg font-semibold">R$300,00</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
