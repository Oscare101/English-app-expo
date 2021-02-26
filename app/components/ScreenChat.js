import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './Header'

export default function ScreenChat() {
  return (
    <View>
      <Header />
      <Text>chat</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
