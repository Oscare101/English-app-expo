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
        <Text style={S.headerTitle}>Modal verbs</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <View style={S.titleOrange}>
          <Text style={S.h2}>Ability, possibility, permission</Text>
        </View>
        <View>
          <Text style={S.text}>
            &bull; We use <Text style={S.b}>can</Text> to talk about{' '}
            <Text style={S.i}>ability, possibility and permission</Text>.{' '}
            <Text style={S.b}>Can</Text> is a modal verb, and it only has a
            present form (which can be used to talk about the future) and the
            past/conditional form (<Text style={S.b}>could</Text>)
          </Text>
          {/* <View style={S.c}>
            <Text style={S.ct}>
              I <Text style={S.b}>have to</Text> work every evening
            </Text>
          </View> */}
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              You <Text style={S.textHint}>can</Text> use a toothbrush to clean
              jewellery{'\n'}I <Text style={S.textHint}>can</Text> understand
              these instractions{'\n'}
              We <Text style={S.textHint}>can't</Text> park here. It's a
              no-parking zone She <Text style={S.textHint}>could</Text> swim
              when she was three years old {'\n'}
              They <Text style={S.textHint}>couldn't</Text> come to the concert
              last night
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
          <Text style={S.text}>
            &bull; We often use <Text style={S.b}>Can you/I ...?</Text> or{' '}
            <Text style={S.b}>Could you/I ...?</Text> to make requests or ask
            for <Text style={S.i}>permission</Text>.{' '}
            <Text style={S.b}>Could</Text> is more polite
          </Text>

          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              <Text style={S.textHint}>Can</Text> you give me a hand? {'\n'}
              <Text style={S.textHint}>Could</Text> I borrow your car?
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
          <Text style={S.text}>
            &bull; For all other tenses and forms we can use{' '}
            <Text style={S.b}>be able to + infinitive</Text>
          </Text>
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              I <Text style={S.textHint}>have been able to </Text> drive since I
              was 17{'\n'}
              The technician <Text style={S.textHint}>
                will be able to{' '}
              </Text>{' '}
              fix it{'\n'}
              I'd love to <Text style={S.textHint}>be able to</Text> ski {'\n'}I
              like <Text style={S.textHint}>being able to</Text> try clothes on,
              so I never buy things online
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
          <Text style={S.text}>
            &bull; We sometimes use <Text style={S.b}>be able to</Text> in the
            present and past if we want to be more formal
          </Text>
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              Unfortunately, we <Text style={S.textHint}>are not able to </Text>
              supply the missing parts{'\n'}
              I'm very sorry that I{' '}
              <Text style={S.textHint}>wasn't able to</Text> attend the
              interview on Friday
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
          <Text style={S.text}>
            &bull; If we want to talk about ability on{' '}
            <Text style={S.i}>one specific occasion</Text> in the past, we can
            use <Text style={S.b}>couldn't </Text>(but not could). Instead, we
            use <Text style={S.i}>was/were able to</Text>
          </Text>
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              I <Text style={S.textHint}>couldn't </Text>
              find the book I wanted in the shops, but I
              <Text style={S.textHint}> was able to</Text> buy it online {'\n'}
              The mark on the carpet was really bad, but in the end I{' '}
              <Text style={S.textHint}>was able to</Text> get it out
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
        </View>
        <View style={S.titleOrange}>
          <Text style={S.h2}>Deduction</Text>
        </View>
        <View>
          <Text style={S.text}>
            &bull; We use
            <Text style={S.b}> can't</Text> to say we are sure that something is
            <Text style={S.i}> impossible/not true</Text>
          </Text>
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              It <Text style={S.textHint}>can't</Text> be broken! I only bought
              it last week{'\n'}
              They <Text style={S.textHint}>can't</Text> be back yet. They said
              they were coming home on Sunday
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
          <Text style={S.text}>
            &bull; In this sense, the opposite of
            <Text style={S.b}> can't</Text> is
            <Text style={S.b}> must</Text>. Compare:
          </Text>
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              She <Text style={S.textHint}>can't</Text> be at work yet. It's
              onlu 7.30 a.m (= I'm sure it's not true ){'\n'}
              She <Text style={S.textHint}>must</Text> be at work now. It's 9.30
              a.m (= I'm sure it's true)
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
        </View>

        <View style={{ padding: 10 }}></View>
      </ScrollView>
    </View>
  )
}

const Possibility = () => {
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
          <Text style={S.firstTitle}>Modal verbs</Text>
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

export default Possibility
