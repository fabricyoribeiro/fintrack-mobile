import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Balance } from '../components/Balance'
import { TableRow } from '../components/TableRow'
import { Form } from '../components/Form'
import { Feather } from '@expo/vector-icons'

import React, { useState, useEffect } from 'react'
import useTransaction from '../hooks/useTransaction'
import { useIsFocused } from '@react-navigation/native'

export function Finance() {
  const [showForm, setShowForm] = useState(false)
  const [stateTrasactions, setStateTrasactions] = useState()

  const { getAll } = useTransaction()

  // const transactions: any = getAll()

  // setStateTrasactions(transactions)

  const isFocused = useIsFocused()

  useEffect(() => {
    let isActive = true

    async function getReceipes() {
      const result: any = await getAll()
      if (isActive) {
        setStateTrasactions(result)
      }
    }

    if (isActive) {
      getReceipes()
    }

    return () => {
      isActive = false
    }
  }, [isFocused, showForm])

  function handleShowForm() {
    setShowForm(false)
  }

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
        <View>
          <Text className="text-white text-xl mb-4">Saldo</Text>
          <Balance positive />
        </View>

        {showForm ? (
          <View className="rounded-xl overflow-hidden border border-gray-500 mt-8">
            <Form showMore={handleShowForm} />
          </View>
        ) : (
          <View className="rounded-xl overflow-hidden border border-gray-500 mt-8">
            <FlatList
              showsVerticalScrollIndicator={false}
              data={stateTrasactions}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <TableRow {...item} />}
            />
          </View>
        )}

        <TouchableOpacity
          className="absolute top-[76vh] left-[77vw]"
          onPress={() => {
            setShowForm(true)
          }}
        >
          <View className="bg-blue-600 flex-0 self-start p-3 rounded-full">
            <Feather name="plus" size={36} color="white" />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  )
}
