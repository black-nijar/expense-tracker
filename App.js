import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AddTransaction from './src/Components/AddTransaction'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <AddTransaction/>
    </View>
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
