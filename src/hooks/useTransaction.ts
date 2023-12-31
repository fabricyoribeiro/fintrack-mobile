import Transaction from "../dtos/Transaction";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useTransaction(){

  async function save(transaction: Transaction){
    const transactions: Transaction[]  = await getAll()
    transactions.push(transaction)
    await AsyncStorage.setItem('@transactions', JSON.stringify(transactions))

    return true
  }

  async function update(transaction: Transaction){
    const transactions: Transaction[]  = await getAll()
    const newArray = transactions.map(item => {
      if(item.id === transaction.id){
        return transaction
      }else{
        return item
      }
    })

    await AsyncStorage.setItem('@transactions', JSON.stringify(newArray))
  }

  async function getAll(): Promise<[]>{
    const transactions:any  = await AsyncStorage.getItem('@transactions')
    console.log(transactions)
    const transactionsParsed = JSON.parse(transactions)
    return transactionsParsed || []
  }

  async function getByMonth(month: string){
    const transactions = await getAll()

    console.log('transactions')
    console.log(transactions)

    const filteredTransactions = transactions.filter((transaction:Transaction) => {
      const [, _month] = transaction.date.split("/"); // Divide a data em substrings e ignora o dia
      const formattedMonth = month.padStart(2, "0")
      console.log(transaction.date)
      console.log(_month, formattedMonth)
      if(_month === formattedMonth){
        console.log('true')
        return transaction
      }
    });

    console.log('filteredTransactions');
    console.log(filteredTransactions);

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
    update,
    getAll,
    getByMonth,
    removeById
  }
}