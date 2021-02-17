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
        <Text style={S.headerTitle}>Present Perfect Continuous</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <Text style={S.h3}>have/has + been + present participle</Text>
        <View style={S.h}>
          <Text style={S.ht}>
            The present perfect continuous is used with the following time
            expression: {'\n'}
            <Text style={S.i}>
              for, since, already,yet, always, just, ever, never, so far, today,
              this week, how long, lately, recently, still (in negations).
            </Text>
          </Text>
        </View>
        <Text style={S.h2}>We use the present perfect continuous:</Text>
        <Text style={S.text}>
          &bull; to put emphasis on the duration of an action which started in
          the past and continues up to the present
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            Sam <Text style={S.b}>has been talking</Text> the phone{' '}
            <Text style={S.b}>for</Text> half an hour.{'\n'}(He began talking o
            the phone half an hour ago and he is still talking).
          </Text>
        </View>
        <Text style={S.text}>
          &bull; for an action which started in the past and lastest for some
          time. The action may have finished or may still be going on. The
          result of the action is visible in the present.
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            Her feet hurt. She <Text style={S.b}>has been walking</Text> all
            morning. {'\n'}(The result of the action is visible in the present -
            her feet hurt).
          </Text>
        </View>
        <Text style={S.text}>
          &bull; to express anger, irritation or annoyance
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            Somebody <Text style={S.b}>has been giving away</Text> our plans.{' '}
            {'\n'}(The speaker is irritated).
          </Text>
        </View>
        <Text style={S.text}>
          <Text style={S.b}>Note:</Text> {'\n'}With the verb{' '}
          <Text style={S.i}>
            live, work, teach, feel (=have a particular emotion) we can use the
            present perfect or present perfecr continuous with no difference in
            meaning
          </Text>
        </Text>
        <View style={S.a}>
          <Text style={S.at}>
            We <Text style={S.b}>have lived/have been living</Text> here for
            ywenty years
          </Text>
        </View>
        <View style={{ padding: 10 }}></View>
      </ScrollView>
    </View>
  )
}

const PresentPerfectContinuous = () => {
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
          <Text style={S.firstTitle}>Present Perfect Continuous</Text>
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

export default PresentPerfectContinuous
