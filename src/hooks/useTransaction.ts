//salvar
//atualizar
//excluir
//buscar por mes
//buscar por id

import { useState } from "react";
import Transaction from "../dtos/Transaction";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TransactionType } from "../dtos/TransactionType";

export default function useTransaction(){

  const [teste, setTransactions] = useState<Transaction[]>([
    {
      id: 'string',
      description: 'string',
      value: 1,
      date: '22/22/2020',
      type: TransactionType.DESPESA
    },
    {
      id: 'dggtgt',
      description: 'string',
      value: 1,
      date: '22/21/2020',
      type: TransactionType.DESPESA
    }
  ])

  async function save(transaction: Transaction){
    const transactions: Transaction[]  = await getAll()
    // if(transactions.length === 0) {
    //   transactions.push(transaction)
      
    //   await AsyncStorage.setItem('@transations', JSON.stringify(transactions))
    // }
    
    transactions.push(transaction)
    await AsyncStorage.setItem('@transactions', JSON.stringify(transactions))

    return true

  }

  async function getAll(): Promise<[]>{
    const transations  = await AsyncStorage.getItem('@transactions')
    return transations ? JSON.parse(transations) : [] 
  }

  async function getdByMonth(month: string){
    const transactions = await getAll()
    if(transactions.length === 0) return null

    const filteredTransactions = transactions.filter((transaction:Transaction) => {
      const [, _month] = transaction.date.split("/"); // Divide a data em substrings e ignora o dia
      const formattedMonth = _month.padStart(2, "0")
      return month === formattedMonth ?? transaction 
    });

    return filteredTransactions

  }

  async function removeById(id:string){
    const transactions = await getAll()
    const newArray = transactions.filter((transaction: Transaction) => transaction.id !== id)
    await AsyncStorage.setItem('@transactions', JSON.stringify(newArray))
    return true
  }

  return {
    save,
    getAll,
    getdByMonth,
    removeById
  }


}