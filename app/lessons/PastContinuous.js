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
        <Text style={S.headerTitle}>Past Continuous</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <Text style={S.h3}>was/were + present participle</Text>
        <View style={S.h}>
          <Text style={S.ht}>
            The past continuous is used with the following time expression:{' '}
            {'\n'}
            <Text style={S.i}>while, when, as, all morning, etc.</Text>
          </Text>
        </View>

        <Text style={S.h2}>We use the past continuous:</Text>
        <Text style={S.text}>
          &bull; for an action which was in progress at a state time in the
          past. We do not mention when the action started or finished
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            At seven o'clock yesterday evening they{' '}
            <Text style={S.b}>were having</Text> dinner. {'\n'}(we do not know
            when they started or finished their dinner).
          </Text>
        </View>
        <Text style={S.text}>
          &bull; for an action which was in progress when another action
          interrupted it. We use the past continuous for the action in progress
          (longer) and the past simple for the action which interrupred it
          (shorter)
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            He <Text style={S.b}>was walking</Text> down the street when he
            <Text style={S.b}>ran into</Text> an old friend
          </Text>
        </View>
        <Text style={S.text}>
          &bull; for two or more simultaneous past actions
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            She <Text style={S.b}>was talking</Text> on her mobile phone while
            she <Text style={S.b}>was driving</Text> to work.
          </Text>
        </View>
        <Text style={S.text}>
          &bull; to describe the atmosphere, setting, etc. In the introduction
          to a story before we describe the main events
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            The birds <Text style={S.b}>were singing</Text> and the leaves{' '}
            <Text style={S.b}>were rustling</Text> in the breeze ...
          </Text>
        </View>
        <View style={{ padding: 10 }}></View>
      </ScrollView>
    </View>
  )
}

const PastContinuous = () => {
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
          <Text style={S.firstTitle}>Past Continuous</Text>
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

export default PastContinuous
