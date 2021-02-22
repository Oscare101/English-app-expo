import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Header from './Header'
import S from '../lessons/S'
import color from './color'
import PracticeTimes from '../practice/PracticeTimes'
import Page from './Page'
const { width } = Dimensions.get('screen')
const Screen2 = () => {
  return (
    <View style={S.View}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={S.blockList}>
          <Page title="test" />
          <PracticeTimes />
          <Page title="sentences" />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Screen2
