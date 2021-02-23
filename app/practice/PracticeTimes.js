import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  TextInput,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import S from '../lessons/S'
import color from '../components/color'
import Test from './Test'

const testList = [
  {
    title: "Oh no! We're late! The film _______",
    a: 'start',
    b: 'has already started',
    c: 'was started',
    d: 'is starting',
    A: 'has already started',
    hint: 'We use present perfect when the action has recently started',
  },
  {
    title: 'It ______ (to get) colder. Do you really want to go out?',
    a: 'get',
    b: 'is getting',
    c: 'is geting ',
    d: 'gets',
    A: 'is getting',
    hint: 'We use present continuous to talk about temporary situation',
  },
]
const TestBlock = () => {
  return testList.map((key) => (
    <Test
      key={key.title}
      title={key.title}
      a={key.a}
      b={key.b}
      c={key.c}
      d={key.d}
      A={key.A}
      hint={key.hint}
    />
  ))
}

const Lesson = () => {
  return (
    <View style={[S.lesson, S.colorBg]}>
      <View style={S.header}>
        <Text style={S.headerTitle}>Practice Times</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <View style={{ padding: 10 }}>
          <TestBlock />
        </View>
      </ScrollView>
    </View>
  )
}
const PracticeTimes = () => {
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
          <Text style={S.firstTitle}>Practice Times</Text>
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
  input: {
    borderWidth: 2,
    borderColor: color.headerLessonColor,
    borderRadius: 5,
    width: 80,
    padding: 5,
    margin: 5,
  },
  inputBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  out: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    margin: 5,
    borderRadius: 5,
  },
})

export default PracticeTimes
