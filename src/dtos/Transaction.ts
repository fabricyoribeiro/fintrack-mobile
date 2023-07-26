import { TransactionType } from "./TransactionType"

export default interface Transaction{
    id?: string
    description: string
    value: number
    date: string
    type: TransactionType
}