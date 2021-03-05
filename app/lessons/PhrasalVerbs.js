import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  ToastAndroid,
  Alert,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import S from './S'
import color from '../components/color'
import BigList from '../components/BigList'

const ShowExample = (text) => {
  ToastAndroid.showWithGravity(text, ToastAndroid.LONG, ToastAndroid.CENTER)
  // return (
  //   <View key={text[1]}>
  //     <Text>{text[0]}</Text>
  //   </View>
  // )
}

const OutputList = (props) => {
  const [visibleExample, setVisibleExample] = useState(false)
  return Object.keys(BigList.phrasalVerbList[props.title]).map((list) => (
    <View
      key={BigList.phrasalVerbList[props.title][list]}
      style={styles.titleBlock}
    >
      {/* <Modal
        key={BigList.phrasalVerbList[props.title][list][1]}
        animationType="slide"
        transparent={true}
        visible={visibleExample}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {BigList.phrasalVerbList[props.title][list][1]}
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setVisibleExample(!visibleExample)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
      <TouchableOpacity
        onPress={() => {
          ShowExample(BigList.phrasalVerbList[props.title][list][1])
          // setVisibleExample(!visibleExample)
        }}
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
        <Text style={S.text}>
          {BigList.phrasalVerbList[props.title][list][0]}
        </Text>
      </TouchableOpacity>
    </View>
  ))
}

const Output = () => {
  return Object.keys(BigList.phrasalVerbList).map((list) => (
    <View key={list}>
      <View style={S.titleOrange}>
        <Text style={S.h2}>{list}</Text>
      </View>
      <View style={[styles.blocks]}>
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
    paddingBottom: 10,
  },
  titleBlock: {
    paddingTop: 0,
    width: '49%',
    borderRadius: 5,
    elevation: 5,
    backgroundColor: color.hintBlock,
    padding: 5,
    marginVertical: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default PhrasalVerbs
