import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import clsx from 'clsx'
import useTransaction from '../hooks/useTransaction'
import { TransactionType } from '../dtos/TransactionType'
import Transaction from '../dtos/Transaction'
import { useEffect, useState } from 'react'
import Money from '../utils/Money'

interface Props {
  month: number
  count: number
}

export function Balance({month, count}: Props) {
  const {getByMonth} = useTransaction()
  const [transactions, setTransaction] = useState([])

  useEffect(()=> {

    async function getTransactions(){
      const transactionsByMonth:any = await getByMonth(String(month+1))
      setTransaction(transactionsByMonth)
    }

    getTransactions()
  },[month, count])

  const expenses =  () => {
    let total: number = 0
    transactions.forEach((transaction:Transaction) => {
      total += transaction.type === TransactionType.DESPESA ? transaction.value : 0
    })
    return total
  }

  const revenues = () => {
    let total: number = 0
    transactions.forEach((transaction:Transaction) => {
      total += transaction.type === TransactionType.RECEITA ? transaction.value : 0
    })
    return total
  }

  return (
    <View
      className={clsx('flex flex-row justify-center flex-0 self-start gap-2 py-3 px-2 rounded-xl ', {
        ['bg-green-700']: revenues() > expenses(),
        ['bg-red-700']: revenues() < expenses()
      })}
    >
      <Text className="text-white text-lg self-end">R$</Text>
      <Text className="text-white text-3xl font-bold">{Money.format(revenues() - expenses())}</Text>
      <Feather name="trending-up" size={32} color="white" />
    </View>
  )
}
