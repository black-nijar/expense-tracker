import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppProvider } from './src/context/AppState'


import NavigateScreen from './src/Navigate/NavigateScreen'
import Test from './src/Components/Test'

const App = () => {
  return (
    <AppProvider>
      <View style={styles.container}>
      <Test/>
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
