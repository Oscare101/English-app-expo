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
import BigList from '../components/BigList'

const ArticleOutput = (props) => {
  {
    return Object.keys(BigList.articles[props.object]).map((list) => (
      <View key={list}>
        <Text style={S.text}>&bull; {list}</Text>
        <View style={S.blockWithGreen}>
          <Text style={S.text}>{BigList.articles[props.object][list]}</Text>
        </View>
      </View>
    ))
  }
}

const Output = () => {
  return Object.keys(BigList.articles).map((list) => (
    <View key={list}>
      <View style={S.titleOrange}>
        <Text style={S.h2}>{list}</Text>
      </View>
      <ArticleOutput object={list} />
    </View>
  ))
}

const Lesson = () => {
  return (
    <View style={[S.lesson, S.colorBg]}>
      <View style={S.header}>
        <Text style={S.headerTitle}>Articles</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <Output />
        <View style={{ padding: 10 }}></View>
      </ScrollView>
    </View>
  )
}

const Articles = () => {
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
          <Text style={S.firstTitle}>Articles</Text>
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

export default Articles
