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
        <Text style={S.headerTitle}>Present Perfect</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <Text style={S.h3}>have/has + past participle</Text>
        <View style={S.h}>
          <Text style={S.ht}>
            The present perfect is used with the following time expression:{' '}
            {'\n'}
            <Text style={S.i}>
              for, since, already,yet, always, just, ever, never, so far, today,
              this week, how long, lately, recently, still (in negations).
            </Text>
          </Text>
        </View>

        <Text style={S.h2}>We use the present perfect:</Text>
        <Text style={S.text}>
          &bull; for an action which started in the past and continues to the
          present
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            Rachel <Text style={S.b}>has had</Text> the dog{' '}
            <Text style={S.b}>for</Text> three years. {'\n'}(She got the dog
            three years ago and she still has it).
          </Text>
        </View>
        <Text style={S.text}>
          &bull; for an action which has recently finished and whose result is
          visible in the present
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            She <Text style={S.b}>has just washed</Text> her hair. {'\n'}(She
            has now wrapped her hair in a towel, so the action has finished).
          </Text>
        </View>
        <Text style={S.text}>
          &bull; for an action which happened at an unstated time in the past
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            The Taylors <Text style={S.b}>have bought</Text> a sailing boat.{' '}
            {'\n'}(The exact time is unknown or unimportant. What is important
            is the fact that they now own a sailing boat).
          </Text>
        </View>
        <Text style={S.text}>
          &bull; for an action which happened within a specific time period
          which is not over at the moment of speaking
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            She <Text style={S.b}>has taken</Text> fifteen pictures today.{' '}
            {'\n'}(The time period - today - is not over yet. She may take more
            pictures).
          </Text>
        </View>
        <View style={S.w}>
          <Text style={S.wt}>
            But: {'\n'}She <Text style={S.b}>took</Text> twenty pictures
            yesterday. {'\n'}
            (The time period - yesterday - is over.)
          </Text>
        </View>
        <Text style={S.text}>
          <Text style={S.b}>Note:</Text> {'\n'}We use present perfect to
          announce a piece of news and the past simple os past continuous to
          gove more details about it.
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            The pollice <Text style={S.b}>have</Text> finally{' '}
            <Text style={S.b}>arrected</Text> Peter. He{' '}
            <Text style={S.b}>was trying</Text> to leave the country when they{' '}
            <Text style={S.b}>caught</Text> him.
          </Text>
        </View>
        <View style={{ padding: 10 }}></View>
      </ScrollView>
    </View>
  )
}

const PresentPerfect = () => {
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
          <Text style={S.firstTitle}>Present Perfect</Text>
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

export default PresentPerfect
