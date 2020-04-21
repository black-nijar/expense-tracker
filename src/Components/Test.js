import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'

const Test = () => {
  const [add, setAdd] = useState(0)
  useEffect(() => {
    console.log('USE EFFECT',add)
  },)
  return (
    <View>
      <Text></Text>
      <Button title='Add' onPress={() => setAdd(add+1)}/>
    </View>
  )
}

export default Test
