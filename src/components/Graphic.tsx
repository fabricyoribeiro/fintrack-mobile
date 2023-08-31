import useTransaction from '../hooks/useTransaction'
// import Chart from 'react-google-charts'
// import { X } from 'phosphor-react'
// import { IconChartBar } from '@tabler/icons-react'
import Transaction from '../dtos/Transaction'
import { View, Text, Dimensions } from 'react-native'
import { useEffect, useState } from 'react'

import {BarChart} from 'react-native-chart-kit'

// import { WebView } from 'react-native-webview'

export default function Graphic() {
  const { getAll } = useTransaction()

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    async function getTransactions() {
      const transactions = await getAll()
      setTransactions(transactions)
    }

    getTransactions()
  }, [])

  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  const organizedData = [['mês', 'receita', 'despesa']]
  const months = new Map()

  function getMonthNameFromDateString(dateString: string) {
    const [day, month, year] = dateString.split('/') // Divide a string em dia, mês e ano
    const dateObject = new Date(`${year}-${month}-${day}`) // Cria um objeto de data a partir dos componentes
    const monthIndex = dateObject.getMonth() // Obtém o índice do mês (0-11)
    const monthNames = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ]

    return monthNames[monthIndex]
  }

  transactions.forEach((item: Transaction) => {
    const month = getMonthNameFromDateString(item.date)
    if (!months.has(month)) {
      months.set(month, { receita: 0, despesa: 0 })
    }

    if (item.type === 'despesa') {
      months.get(month).despesa += item.value
    } else if (item.type === 'receita') {
      months.get(month).receita += item.value
    }
  })

  console.log()

  months.forEach((values, month) => {
    organizedData.push([month, values.receita, values.despesa])
  })

  console.log('------------------------------------')
  console.log(organizedData)

  // const options = {
  //   title: 'Receitas x Despesas',
  //   curveType: 'function',
  //   legend: { position: 'bottom' },
  //   hAxis: { format: 'currency' },
  //   animation: { duration: 500, easing: 'linear', startup: true },
  //   colors: ['#00ff00', '#ff0000'],
  //   backgroundColor: '#fff'
  // }

  {
    /* <Chart
    chartType="ColumnChart"
    width="100%"
    height="400px"
    data={organizedData}
    options={options}
    chartLanguage="pt-BR"
  /> */
  }

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };
  return (

    <View>
      <BarChart
        data={data}
        height={220}
        yAxisLabel="$"
        verticalLabelRotation={30}
        width={Dimensions.get("window").width} // from react-native
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2 // optional, defaults to 2dp
        }}
      />
    </View>
  )
}
