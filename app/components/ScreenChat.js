import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Header from './Header'
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function App() {
  const [textInput, setTextInput] = useState('')
  const [value, setValue] = useState('')
  const saveValue = () => {
    if (textInput) {
      AsyncStorage.setItem('111', textInput)
      setTextInput('')
      alert('data saved')
    } else {
      alert('not saved')
    }
  }
  const getValue = () => {
    AsyncStorage.getItem('111').then((value) => {
      setValue(value)
    })
  }
  return (
    <View>
      <Header />
      <TextInput
        placeholder="text"
        value={textInput}
        onChangeText={(data) => setTextInput(data)}
      />
      <Button title="enter" onPress={saveValue} />
      <Button title="output" onPress={getValue} />
      <Text>----- {value} -----</Text>
    </View>
  )
}
