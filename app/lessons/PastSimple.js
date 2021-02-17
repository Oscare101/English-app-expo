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
        <Text style={S.headerTitle}>Past Simple</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <Text style={S.h3}>past form</Text>
        <View style={S.h}>
          <Text style={S.ht}>
            The past simple is used with the following time expression: {'\n'}
            <Text style={S.i}>
              yesterday, then, when, How lohg ago ...?, last week, three days
              ago, in 1997, etc.
            </Text>
          </Text>
        </View>

        <Text style={S.h2}>We use the past simple:</Text>
        <Text style={S.text}>
          &bull; for an action which happened at a definite time in the past.
          The time is stated, already known or implied.
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            They <Text style={S.b}>were</Text> camping by the lake last month.{' '}
            {'\n'}(When did the go camping? Last month. The time is stated).
          </Text>
        </View>
        <Text style={S.text}>
          &bull; for an action which happened immediately one after the other in
          the past
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            First she <Text style={S.b}>paid</Text> the driver, then she{' '}
            <Text style={S.b}>got out</Text> of the taxi
          </Text>
        </View>
        <Text style={S.text}>
          &bull; for past habbits os states which are now finished. In such
          cases we can also use the expression <Text style={S.b}>used to</Text>
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            Kitchen <Text style={S.b}>were/used to be</Text> very different a
            hundred years ago.
          </Text>
        </View>
        <View style={{ padding: 10 }}></View>
      </ScrollView>
    </View>
  )
}

const PastSimple = () => {
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
          <Text style={S.firstTitle}>Past Simple</Text>
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

export default PastSimple
