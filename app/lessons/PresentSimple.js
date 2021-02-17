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
        <Text style={S.headerTitle}>Present Simple</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <Text style={S.h3}>Present form</Text>
        <View style={S.h}>
          <Text style={S.ht}>
            The present simple is used with the following time expression:
            <Text style={S.i}>
              usually, often, always, every day, in this morning, at night, at
              the weekend, on monday etc.
            </Text>
          </Text>
        </View>

        <Text style={S.h2}>We use the present Simple:</Text>
        <Text style={S.text}>
          &bull; for permanent states, repeated actions and daily routines
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            He <Text style={S.b}>works</Text> in a bank He{' '}
            <Text style={S.b}>takes</Text> the train to work every morning
          </Text>
        </View>
        <Text style={S.text}>&bull; for general truths and laws of nature</Text>
        <View style={S.c}>
          <Text style={S.ct}>
            The sun <Text style={S.b}>sets</Text> in the west
          </Text>
        </View>
        <Text style={S.text}>&bull; for timetable and programmes</Text>
        <View style={S.c}>
          <Text style={S.ct}>
            The plane from Brussels <Text style={S.b}>arrives</Text> at 8:30
          </Text>
        </View>
        <Text style={S.text}>
          &bull; for sports commentaries, reviews and narration
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            Peterson <Text style={S.b}>overtakes</Text> Williams and
            <Text style={S.b}> wins</Text> the race (sport commentary){'\n'}Mike
            Dalton <Text style={S.b}>plays</Text>plays the part of Macbeth
            (review){'\n'}
            Then the prince <Text style={S.b}>gets</Text> on his horse and
            quickly <Text style={S.b}>rides</Text> away (narration)
          </Text>
        </View>
        <View style={{ padding: 10 }}></View>
      </ScrollView>
    </View>
  )
}

const PresentSimple = () => {
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
          <Text style={S.firstTitle}>Present Simple</Text>
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

export default PresentSimple
