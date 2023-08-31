import { View, Text, ScrollView } from 'react-native'
import { Feather, Entypo, AntDesign, Fontisto } from '@expo/vector-icons'
import useTransaction from '../hooks/useTransaction'
import { TransactionType } from '../dtos/TransactionType'
import Transaction from '../dtos/Transaction'
import { useEffect, useState } from 'react'
import Money from '../utils/Money'
import Graphic from './Graphic'

interface Props {
  month: number
  count: number
}

export function Balance({ month, count }: Props) {
  const { getByMonth } = useTransaction()
  const [transactions, setTransaction] = useState([])

  useEffect(() => {
    async function getTransactions() {
      const transactionsByMonth: any = await getByMonth(String(month + 1))
      setTransaction(transactionsByMonth)
    }

    getTransactions()
  }, [month, count])

  const expenses = () => {
    let total: number = 0
    transactions.forEach((transaction: Transaction) => {
      total +=
        transaction.type === TransactionType.DESPESA ? transaction.value : 0
    })
    return total
  }

  const revenues = () => {
    let total: number = 0
    transactions.forEach((transaction: Transaction) => {
      total +=
        transaction.type === TransactionType.RECEITA ? transaction.value : 0
    })
    return total
  }

  return (
    <ScrollView horizontal className="flex flex-row ">
      {/* <Graphic /> */}
      <View className="flex flex-col justify-center flex-0 self-start gap-2 p-2 rounded-xl border border-gray-500 bg-black  m-1">
        <Text className="text-white -mb-1">Saldo</Text>
        <View className="flex flex-row items-center">
          <Text className="text-white text-2xl font-semibold mr-2">
            {Money.format(revenues() - expenses())}
          </Text>
          <Fontisto name="arrow-swap" size={32} color="#00f" />

        </View>
      </View>
      <View className="flex flex-col justify-center flex-0 self-start gap-2 p-2 rounded-xl border border-gray-500 bg-black  m-1">
        <Text className="text-white -mb-1">Despesas</Text>
        <View className="flex flex-row items-center">
          <Text className="text-white text-2xl font-semibold mr-2">
            {Money.format(expenses())}
          </Text>
          <AntDesign name="creditcard" size={32} color="#f00" />
        </View>
      </View>
      <View className="flex flex-col justify-center flex-0 self-start gap-2 p-2 rounded-xl border border-gray-500 bg-black  m-1">
        <Text className="text-white -mb-1">Receita</Text>
        <View className="flex flex-row items-center">
          <Text className="text-white text-2xl font-semibold mr-2">
            {Money.format(revenues())}
          </Text>
          <Entypo name="wallet" size={32} color="#0f0" />

        </View>
      </View>
    </ScrollView>
  )
}
