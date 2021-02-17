import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import Contact from '../settings/Contact'
import Sources from '../settings/Sources'
import S from '../lessons/S'
import Header from './Header'
import color from './color'
const { width } = Dimensions.get('screen')
const Screen3 = () => {
  return (
    <View style={styles.View}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 65, flex: 1, width }}>
          <Contact />
          <Sources />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.backgroundColor,
    flexDirection: 'column',
  },
})

export default Screen3
