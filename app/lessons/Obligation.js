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
          <Text style={S.h2}>Obligation and necessity</Text>
        </View>
        <View>
          <Text style={S.text}>
            &bull; We use <Text style={S.b}>have to</Text> to talk about all
            kinds of obligation. have to can be used in all tenses
          </Text>
          {/* <View style={S.c}>
            <Text style={S.ct}>
              I <Text style={S.b}>have to</Text> work every evening
            </Text>
          </View> */}
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              I <Text style={S.textHint}>have to</Text> work at evening{'\n'}
              <Text style={S.textHint}>Do</Text> you
              <Text style={S.textHint}> have to</Text> leave a tip?{'\n'}
              They <Text style={S.textHint}>had to</Text> wait two hours at the
              airport
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
          <Text style={S.text}>
            &bull; We also use <Text style={S.b}>must</Text> to talk about
            oblogation (must is only used in the present tense)
          </Text>
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              You <Text style={S.textHint}>must</Text> be more careful {'\n'}
              <Text style={S.textHint}>Must</Text> I show ID at the door?{'\n'}
              You <Text style={S.textHint}>must</Text> pay him back as soon as
              possible
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
          <Text style={S.text}>
            &bull; We can use <Text style={S.b}>need to</Text> to talk about
            things that are necessary (need to can be used in all tenses)
          </Text>
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              You <Text style={S.textHint}>need to</Text> buy some food for
              tonight{'\n'}
              <Text style={S.textHint}>Do</Text> we{' '}
              <Text style={S.textHint}>need to</Text> book a table?
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
        </View>
        <View style={S.titleOrange}>
          <Text style={S.h2}>No obligation / no necessity</Text>
        </View>
        <Text style={S.text}>
          &bull; We use <Text style={S.b}>(not) have to</Text> when there is no
          obligation to do something
        </Text>
        <View style={S.blockWithGreen}>
          <Text style={S.text}>
            You <Text style={S.textHint}>don't have to</Text> pay me now
            {/* <Text style={S.textHint}></Text> */}
          </Text>
        </View>
        <Text style={S.text}>
          &bull; We use <Text style={S.b}>(not) need to</Text> when there is not
          necessary
        </Text>
        <View style={S.blockWithGreen}>
          <Text style={S.text}>
            You <Text style={S.textHint}>won't need to</Text> take the car -
            it's walking distance from here
            {/* <Text style={S.textHint}></Text> */}
          </Text>
        </View>
        <Text style={S.text}>
          &bull; We can also use{' '}
          <Text style={S.b}>needn't to + infinitive without to</Text> to say
          that it is not necessary to do something
        </Text>
        <View style={S.blockWithGreen}>
          <Text style={S.text}>
            You <Text style={S.textHint}>needn't</Text> hurry. We have plenty of
            time
            {/* <Text style={S.textHint}></Text> */}
          </Text>
        </View>

        <View style={S.titleOrange}>
          <Text style={S.h2}>Prohibition</Text>
        </View>
        <Text style={S.text}>
          &bull; We use <Text style={S.b}>mustn't</Text> when something is
          prohibited, dangerous or wrong{'\n'}
          &bull;{' '}
          <Text style={S.i}>
            mustn't and dont have to are completely different
          </Text>
        </Text>
        <View style={S.blockWithGreen}>
          <Text style={S.text}>
            You <Text style={S.textHint}>mustn't</Text> drive. You've been
            drinking = Don't drive (It's dangerous) {'\n'}
            You <Text style={S.textHint}>don't have to</Text> drive. We can get
            the bus = It's not necessary ti dtive (There's no obligation or
            necessary)
            {/* <Text style={S.textHint}></Text> */}
          </Text>
        </View>

        <View style={S.titleOrange}>
          <Text style={S.h2}>Advice</Text>
        </View>
        <Text style={S.text}>
          &bull; We use <Text style={S.b}>should/shouldn't</Text> to give
          someone advice, or to say what we think is the right thing for
          ourselves or for someone else to do
        </Text>
        <View style={S.blockWithGreen}>
          <Text style={S.text}>
            You <Text style={S.textHint}>should</Text> try new Vietnamese
            restaurant{'\n'}
            He <Text style={S.textHint}>shouldn't</Text> drink so much coffe
            {/* <Text style={S.textHint}></Text> */}
          </Text>
        </View>

        <Text style={S.text}>
          &bull; We can also use <Text style={S.b}>ought to/oughtn't to</Text>{' '}
          to give someone advice. The meaning is the same as should/shouldn't
        </Text>
        <View style={S.blockWithGreen}>
          <Text style={S.text}>
            You <Text style={S.textHint}>ought to</Text> get a new phone{'\n'}
            She <Text style={S.textHint}>oughtn't to</Text> spend so much on
            clothes
            {/* <Text style={S.textHint}></Text> */}
          </Text>
        </View>

        <Text style={S.text}>
          &bull; We can use <Text style={S.b}>must</Text> and{' '}
          <Text style={S.b}>have to </Text>
          to give strong advice when we think it's very important that someone
          does something
        </Text>
        <View style={S.blockWithGreen}>
          <Text style={S.text}>
            When yiu are in Venice, you{' '}
            <Text style={S.textHint}>must/have to</Text> have a drink at Harry's
            Bar!
            {/* <Text style={S.textHint}></Text> */}
          </Text>
        </View>

        <View style={{ padding: 10 }}></View>
      </ScrollView>
    </View>
  )
}

const Obligation = () => {
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

export default Obligation
