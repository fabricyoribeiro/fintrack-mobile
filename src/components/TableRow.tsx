import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { RadioButton } from 'react-native-paper'

export function TableRow() {
  const [viewMore, setViewMore] = useState(false)
  const [date, setDate] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false)

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date
    setShowPicker(false)
    setDate(currentDate)
  }

  return (
    <View>
      {viewMore ? (
        <View>
          <View className="p-3 ">
            <Text className="text-white text-lg mb-2">Descrição</Text>
            <TextInput className="placeholder:bg-[#686868ae] text-lg text-gray-100 rounded-lg p-3 mb-3" />
            <Text className="text-white text-lg mb-2">Valor</Text>
            <TextInput className="placeholder:bg-[#686868ae] text-lg text-gray-100 rounded-lg p-3 mb-3" />
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
                <RadioButton value="revenue" />
                <Text className="text-white text-lg">Receita</Text>
                <RadioButton value="expense" />
                <Text className="text-white text-lg">Despesa</Text>
              </View>
            </View>
          </View>
          <View className="flex flex-row items-center gap-3 p-3 pt-1 bg-[#787878d4]">
            <TouchableOpacity className="bg-green-700 flex-0 self-start py-2 px-6 rounded">
              <Text className="text-white text-lg">Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-400 flex-0 self-start py-2 px-6 rounded">
              <Text
                className="text-white text-lg"
                onPress={() => {
                  setViewMore(!viewMore)
                }}
              >
                Voltar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20
  }
})
