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
const Lesson = () => {
  return (
    <View style={[S.lesson, S.colorBg]}>
      <View style={S.header}>
        <Text style={S.headerTitle}>Present Continuous</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <Text style={S.h3}>am/is/are + present participle</Text>
        <View style={S.h}>
          <Text style={S.ht}>
            The present continuous is used with the following time expression:{' '}
            {'\n'}
            <Text style={S.i}>
              {' '}
              now, at the moment, at present, these days, still, nowadays,
              today, tonight, etc.
            </Text>
          </Text>
        </View>

        <Text style={S.h2}>We use the present continuous:</Text>
        <Text style={S.text}>
          &bull; for actions taking place now, at the moment of speaking
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            He <Text style={S.b}>is giving</Text> the baby beth at the moment
          </Text>
        </View>
        <Text style={S.text}>
          &bull; for temporary action; that is actions that are going on around
          now, but not at theactual moment of speaking
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            I <Text style={S.b}>am looking for</Text> a new job these days.{' '}
            {'\n'}(He is not looking for a job at the moment of speaking)
          </Text>
        </View>
        <Text style={S.text}>
          &bull; with adverbs such as: always, constantly, continually, etc. fro
          actions which happen very often, usually to axpress annoyance,
          irritation or anger
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            I <Text style={S.b}>am always meeting</Text> Sara when I go to
            shopping. {'\n'}(action which happens very often) You{' '}
            <Text style={S.b}>are constantly interrupting</Text> me when I am
            talking. {'\n'}(expressing annoyance/irritation)
          </Text>
        </View>
        <Text style={S.text}>
          &bull; fo an action that we have already arranged to do in the near
          future, especially when h=the time and place have been decided
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            They <Text style={S.b}>are moving</Text> into their new house newt
            week {'\n'}(The time has been decided)
          </Text>
        </View>
        <Text style={S.text}>&bull; for changing or developing situation.</Text>
        <View style={S.c}>
          <Text style={S.ct}>
            More and more specoes <Text style={S.b}>are becoming</Text> extinct.
          </Text>
        </View>
        <View style={{ padding: 10 }}></View>
      </ScrollView>
    </View>
  )
}

const PresentContinuous = () => {
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
          <Text style={S.firstTitle}>Present Continuous</Text>
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

export default PresentContinuous
