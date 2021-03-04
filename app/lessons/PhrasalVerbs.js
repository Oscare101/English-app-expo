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
import color from '../components/color'
import BigList from '../components/BigList'

const OutputList = (props) => {
  return Object.keys(BigList.phrasalVerbList[props.title]).map((list) => (
    <View
      key={BigList.phrasalVerbList[props.title][list]}
      style={styles.titleBlock}
    >
      <Text
        style={[
          S.h3,
          S.textHint,
          { textShadowColor: '#E8F8FF', marginBottom: 0 },
        ]}
      >
        {list}
      </Text>
      <Text style={S.text}>{BigList.phrasalVerbList[props.title][list]}</Text>
    </View>
  ))
}

const Output = () => {
  return Object.keys(BigList.phrasalVerbList).map((list) => (
    <View key={list}>
      <View style={S.titleOrange}>
        <Text style={S.h2}>{list}</Text>
      </View>
      <View style={[S.blockWithGreen, styles.blocks]}>
        <OutputList title={list} />
      </View>
    </View>
  ))
}

const Lesson = () => {
  return (
    <View style={[S.lesson, S.colorBg]}>
      <View style={S.header}>
        <Text style={S.headerTitle}>Phrasal Verbs</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <Output />
        <View style={{ padding: 10 }}></View>
      </ScrollView>
    </View>
  )
}

const PhrasalVerbs = () => {
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
          <Text style={S.firstTitle}>Phrasal Verbs</Text>
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
  blocks: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#E8F8FF',
    padding: 2,
  },
  titleBlock: {
    paddingTop: 0,
    width: '48%',
    borderRadius: 10,
    elevation: 10,
    backgroundColor: color.hintBlock,
    padding: 5,
    marginVertical: 3,
  },
})

export default PhrasalVerbs
