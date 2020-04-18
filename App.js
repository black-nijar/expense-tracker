import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AddTransaction from './src/Components/AddTransaction'
import { AppProvider } from './src/context/AppState'
import {TransactionList} from './src/Components/TransactionList'
import Balance from './src/Components/Balance'
import IncomeExpense from './src/Components/IncomeExpense'
import NavigateScreen from './src/Navigate/NavigateScreen'

const App = () => {
  return (
    <AppProvider>
      <View style={styles.container}>
        <NavigateScreen/>
      </View>
    </AppProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
  },
})
