import React from 'react'
import { View, Text, Button } from 'react-native'
import S from '../lessons/S'

const Header = () => {
  return (
    <View style={S.screenHeader}>
      <Text style={S.screenTitle}>Easy English</Text>
    </View>
  )
}

export default Header
