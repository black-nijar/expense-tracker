import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AddTransaction from './src/Components/AddTransaction'
import { AppProvider } from './src/context/AppState'
import {TransactionList} from './src/Components/TransactionList'
import Balance from './src/Components/Balance'
import IncomeExpense from './src/Components/IncomeExpense'

const App = () => {
  return (
    <AppProvider>
      <View style={styles.container}>
        <Text style={styles.welcome}>Expense Tracker</Text>
        <Balance/>
        <IncomeExpense/>
        <AddTransaction/>
        <TransactionList/>
      </View>
    </AppProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 50,
  },
})
