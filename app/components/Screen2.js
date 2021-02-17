import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Header from './Header'
import S from '../lessons/S'
import color from './color'
import PracticeTimes from '../practice/PracticeTimes'
const { width } = Dimensions.get('screen')
const Screen2 = () => {
  return (
    <View style={S.View}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 65, flex: 1, width }}>
          <PracticeTimes />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Screen2
