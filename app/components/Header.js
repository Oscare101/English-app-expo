import React from 'react'
import { View, Text } from 'react-native'
import S from '../lessons/S'
const Header = () => {
  return (
    <View style={S.screenHeader}>
      <Text style={S.screenTitle}>
        Easy <Text>English</Text>
      </Text>
    </View>
  )
}

export default Header
