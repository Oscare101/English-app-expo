import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import S from './S'

const listAdj = {
  good: 'superb',
  bad: 'harrowing',
  rude: 'vulgar',
  boring: 'dull, redious',
  short: 'brief',
  big: 'huge, enormous',
  cold: 'freezing',
  hot: 'scalding (liquids), scorching (heat)',
  angry: 'furious',
  funny: 'hilarious',
  hungry: 'ravenous, starving',
  slow: 'sluggish',
  fast: 'rapid',
  tired: 'exhausted',
  poor: 'destitute',
  rich: 'wealthy',
  happy: 'jubilant, delighted, thrilled',
  worried: 'anxious',
  thirsty: 'parched',
  dirty: 'squalid',
  clean: 'spotless',
  scary: 'intimidating',
}

const VeryList = () => {
  {
    return Object.keys(listAdj).map((list) => (
      <Text key={list} style={[S.ct, { fontSize: 22 }]}>
        {list} &rarr; {listAdj[list]}
      </Text>
    ))
  }
}

const Lesson = () => {
  return (
    <View style={[S.lesson, S.colorBg]}>
      <View style={S.header}>
        <Text style={S.headerTitle}>Strong adjectives</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <View style={S.h}>
          <Text style={S.ht}>
            In English, adjectives are divided into{' '}
            <Text style={S.i}>base adjectives</Text> and{' '}
            <Text style={S.i}>strong </Text>
            (extreme) adjectives. The first ones are neutral words, the second
            ones have a strong emotional connotation.
          </Text>
        </View>
        <View style={S.c}>
          <VeryList />
        </View>

        {/* <View
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <Text style={S.text}>Good</Text>
          <Text style={S.text}>&rarr;</Text>
          <Text style={S.text}>Superb</Text>
        </View> */}
        <View style={{ padding: 10 }}></View>
      </ScrollView>
    </View>
  )
}

const Very = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [like, setLike] = useState(false)
  const [repeat, setRepeat] = useState(false)

  let logoLike, colorRepeat
  if (like) {
    logoLike = 'heart'
  } else {
    logoLike = 'heart-outline'
  }
  if (repeat) {
    colorRepeat = 'red'
  } else {
    colorRepeat = 'black'
  }
  return (
    <View>
      <Modal visible={modalVisible} animationType="slide">
        <Lesson />
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={S.close}
        >
          <Ionicons name="close-outline" size={40} color={'white'} />
        </TouchableOpacity>
      </Modal>
      <View style={S.block}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={S.blockLesson}
        >
          <Text style={S.firstTitle}>Strong adjectives</Text>
        </TouchableOpacity>
        <View style={S.like}>
          <TouchableOpacity onPress={() => setLike(!like)}>
            <Ionicons name={logoLike} size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRepeat(!repeat)}>
            <Ionicons name="repeat-outline" size={30} color={colorRepeat} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 10,
    borderBottomWidth: 2,
    padding: 20,
  },
})

export default Very
