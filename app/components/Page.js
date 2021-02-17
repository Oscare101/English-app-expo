import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Page = (props) => {
  return (
    <View style={styles.pageBlock}>
      <View style={styles.pageLine}></View>
      <Text style={styles.pageTitle}>{props.title}</Text>
      <View style={styles.pageLine}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  pageBlock: {
    flexDirection: 'row',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    marginHorizontal: 'auto',
    overflow: 'hidden',
  },
  pageTitle: {
    fontSize: 24,
    textTransform: 'uppercase',
    letterSpacing: 3,
    padding: 5,
  },
  pageLine: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
  },
})

export default Page
