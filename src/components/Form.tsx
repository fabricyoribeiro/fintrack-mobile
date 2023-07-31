import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { RadioButton } from 'react-native-paper'
import { useState } from 'react'
import useTransaction from '../hooks/useTransaction'
import { TransactionType } from '../dtos/TransactionType'
import Id from '../utils/Id'

interface Props {
  showMore?: () => void
  reloadList?: () => void
  id?: string
  description?: string
  value?: number
  date?: string
  type?: TransactionType
}

export function Form(props: Props) {
  const { save, update } = useTransaction()
  const [showPicker, setShowPicker] = useState(false)

  const [checked, setChecked] = useState(props.type || 'first')
  const [date, setDate] = useState(new Date())
  const [description, setDescription] = useState(props.description || '')
  const [value, setValue] = useState(props.value || '')

  function saveTransaction() {
    save({
      id: Id.New(),
      description,
      value: Number(value),
      date: format(date, 'dd/MM/yyyy'),
      type:
        checked === 'first' ? TransactionType.RECEITA : TransactionType.DESPESA
    })
  }

  function updateTransaction() {
    update({
      id: props.id,
      description,
      value: Number(value),
      date: format(date, 'dd/MM/yyyy'),
      type:
        checked === 'first' ? TransactionType.RECEITA : TransactionType.DESPESA
    })
  }

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date
    setShowPicker(false)
    setDate(currentDate)
  }

  return (
    <View>
      <View className="p-3 ">
        <Text className="text-white text-lg mb-2">Descrição</Text>
        <TextInput
          className="placeholder:bg-[#686868ae] text-lg text-gray-100 rounded-lg p-3 mb-3"
          onChangeText={setDescription}
          value={description}
        />
        <Text className="text-white text-lg mb-2">Valor</Text>
        <TextInput
          className="placeholder:bg-[#686868ae] text-lg text-gray-100 rounded-lg p-3 mb-3"
          onChangeText={setValue}
          value={value.toString()}
        />
        <View className="flex flex-row mb-4">
          <View>
            <Text className="text-white text-lg mb-2">Data</Text>
            {showPicker && (
              <DateTimePicker
                mode="date"
                display="calendar"
                value={date}
                onChange={onChange}
                style={{
                  backgroundColor: '#686868ae'
                }}
              />
            )}
            <TextInput
              onFocus={() => {
                setShowPicker(true)
              }}
              value={format(date, 'dd/MM/yyyy', { locale: ptBR })}
              className="placeholder:bg-[#686868ae] text-lg text-gray-100 rounded-lg p-3 mb-3 w-36"
            />
          </View>
          <View className="flex flex-row items-center self-end pb-3">
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text className="text-white text-lg">Receita</Text>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
            <Text className="text-white text-lg">Despesa</Text>
          </View>
        </View>
      </View>
      <View className="flex flex-row items-center gap-3 p-3 pt-1 bg-[#787878d4]">
        {props.id ? (
          <TouchableOpacity
            className="bg-green-700 flex-0 self-start py-2 px-6 rounded"
            onPress={updateTransaction}
          >
            <Text className="text-white text-lg">Salvar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="bg-green-700 flex-0 self-start py-2 px-6 rounded"
            onPress={saveTransaction}
          >
            <Text className="text-white text-lg">Salvar</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity className="bg-gray-400 flex-0 self-start py-2 px-6 rounded">
          <Text
            className="text-white text-lg"
            onPress={() => {
              props.showMore?.()
              props.reloadList?.()
            }}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
