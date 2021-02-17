import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Sheet,
  Modal,
  ScrollView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import S from './S'
import color from '../components/color'

const Lesson = () => {
  return (
    <View style={[S.lesson, S.colorBg]}>
      <View style={S.header}>
        <Text style={S.headerTitle}>Dependent Prepositions</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <View style={S.paddingBottomLesson}>
          <View style={S.titleOrange}>
            <Text style={S.h2}>Dependence</Text>
          </View>
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              I <Text style={S.textHint}>agree with</Text> my boss{' '}
              <Text style={S.textHint}>about</Text> the problem {'\n'}
              Then don't <Text style={S.textHint}>argue with</Text> me{' '}
              <Text style={S.textHint}>about</Text> this {'\n'}
              She's <Text style={S.textHint}>angry with</Text> her boss{' '}
              <Text style={S.textHint}>about</Text> her salary{'\n'}
              We <Text style={S.textHint}>arrive at</Text> the airport (place)
              at 6 am {'\n'}
              We <Text style={S.textHint}>arrive in</Text> Paris (city/country)
              ain the evening{'\n'}I know you{' '}
              <Text style={S.textHint}>dream of</Text> leaving (dream, imagine)
              {'\n'}I still <Text style={S.textHint}>dream about</Text> that
              picture book (dreams during sleep)
            </Text>
          </View>
          <View style={S.titleOrange}>
            <Text style={S.h2}>To</Text>
          </View>
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              That bag <Text style={S.textHint}>belong to </Text>
              me
              {'\n'}I am <Text style={S.textHint}>looking forward to </Text>
              my holliday {'\n'}I <Text style={S.textHint}>prefer </Text> taking
              the train <Text style={S.textHint}>to</Text> flying {'\n'}
              Don't be <Text style={S.textHint}>rude to</Text> him {'\n'}
              They were very <Text style={S.textHint}>kind to</Text> me
              {'\n'}
              Very <Text style={S.textHint}>close to</Text> where we passed
              {'\n'}
              You're <Text style={S.textHint}>married to</Text> someone?
              {'\n'}
              That must <Text style={S.textHint}>refer to</Text> the creatures
              we saw{'\n'}
              Computer should <Text style={S.textHint}>respond to</Text>{' '}
              keyboard input{'\n'}
              They can't actually <Text style={S.textHint}>expect to</Text> win
              {'\n'}I shall <Text style={S.textHint}>attend to</Text> the
              matter, sir{'\n'}
              Our situation is <Text style={S.textHint}>similar to</Text> theirs
              {'\n'}
              They were therefore <Text style={S.textHint}>opposed to</Text> the
              proposal{'\n'}
              And <Text style={S.textHint}>according to</Text> this report filed
              two days ago...{'\n'}
              You know, my <Text style={S.textHint}>attitude to</Text> money
              is...
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
          <View style={S.titleOrange}>
            <Text style={S.h2}>For</Text>
          </View>
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              He <Text style={S.textHint}>appologized for</Text> being late
              {'\n'}
              I'll <Text style={S.textHint}>pay for</Text> it{'\n'}
              We all <Text style={S.textHint}>posed for</Text> a photograph{' '}
              {'\n'}
              Are you <Text style={S.textHint}>waiting for</Text> someone?{' '}
              {'\n'}
              Oxford is <Text style={S.textHint}>famous for</Text> its
              university{'\n'}
              Vegetables are <Text style={S.textHint}>good for</Text> you
              (someone) {'\n'}
              I'm <Text style={S.textHint}>ready for</Text> a holiday{'\n'}
              He is <Text style={S.textHint}>responsible for</Text> the sales
              team{'\n'}I <Text style={S.textHint}>sorry for</Text> what I spoke
              {'\n'}
              The <Text style={S.textHint}>demand for</Text> electricity is
              never ending{'\n'}
              It was the <Text style={S.textHint}>reason for</Text> the
              polygraph{'\n'}I was unaware you had{' '}
              <Text style={S.textHint}>taste for</Text> such exotic treats
              {'\n'}
              The process should <Text style={S.textHint}>allow for</Text>{' '}
              consultations with them{'\n'}
              There's a bench warrant out for your{' '}
              <Text style={S.textHint}>arrest for</Text> kiting checks
              {'\n'}
              And this isn't an <Text style={S.textHint}>excuse for</Text> my
              behavior{'\n'}
              We have every <Text style={S.textHint}>hope for</Text> your
              success{'\n'}I helped Simon{' '}
              <Text style={S.textHint}>prepare for</Text> his journey{'\n'}
              Anyway hurry and <Text style={S.textHint}>search for</Text> her
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
          <View style={S.titleOrange}>
            <Text style={S.h2}>In</Text>
          </View>
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              They <Text style={S.textHint}>succeeded in</Text> climbing the
              mountain{'\n'}I don't <Text style={S.textHint}>believe in </Text>
              ghosts{'\n'}
              She is <Text style={S.textHint}>interested in</Text> French
              literature{'\n'}
              The <Text style={S.textHint}>delay in</Text> reporting averaged
              six to nine months{'\n'}
              Table II. shows the <Text style={S.textHint}>
                decrease in
              </Text>{' '}
              first-time approvals{'\n'}
              He noted a small <Text style={S.textHint}>increase in</Text>{' '}
              technical cooperation expenditure
              {'\n'}
              There’s been a <Text style={S.textHint}>fall in</Text> the value
              of the euro and the pound{'\n'}
              They can <Text style={S.textHint}>participate in</Text> the local
              interpretation of international standards{'\n'}
              This may <Text style={S.textHint}>result in</Text> commercial
              competition going to Mars
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
          <View style={S.titleOrange}>
            <Text style={S.h2}>At</Text>
          </View>
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              They <Text style={S.textHint}>laughed at</Text> me when I fell
              overflow{'\n'}
              She <Text style={S.textHint}>smiled at</Text> me{'\n'}
              He is <Text style={S.textHint}>good/bad at</Text> remembering
              names{'\n'}I was <Text style={S.textHint}>astonished at</Text> the
              extent of his reputation{'\n'}I guess we shouldn't{' '}
              <Text style={S.textHint}>laugh at</Text> him{'\n'}
              You can <Text style={S.textHint}>stare at</Text> the ocean a
              little longer
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
          <View style={S.titleOrange}>
            <Text style={S.h2}>With</Text>
          </View>
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              She <Text style={S.textHint}>shared</Text> her sweets{' '}
              <Text style={S.textHint}>with</Text> my son{'\n'}
              I'm really <Text style={S.textHint}>desappointed with</Text> these
              photos{'\n'}
              I'm <Text style={S.textHint}>fed up with</Text> waiting. Let's go
              {'\n'}
              I'm <Text style={S.textHint}>pleased with</Text> my progress
              {'\n'}
              Ben was pretty <Text style={S.textHint}>popular with</Text> his
              class{'\n'}I was <Text style={S.textHint}>satisfied with</Text>{' '}
              the results {'\n'}
              We've had a lot of <Text style={S.textHint}>
                trouble with
              </Text>{' '}
              headmaster{'\n'}
              It can't <Text style={S.textHint}>compare with</Text> your
              grandmother's cassoulet{'\n'}
              Everyone must <Text style={S.textHint}>comply with</Text> their
              accountability and punishment obligations{'\n'}
              How you <Text style={S.textHint}>deal with</Text> this will define
              your career
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
          <View style={S.titleOrange}>
            <Text style={S.h2}>About</Text>
          </View>
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              I <Text style={S.textHint}>dreamt about</Text> my grandfather last
              night{'\n'}
              Din't <Text style={S.textHint}>worry about</Text> it, it's not a
              problem{'\n'}
              She's <Text style={S.textHint}>excited about</Text> her new job
              {'\n'}
              We're <Text style={S.textHint}>sorry about</Text> what happened
              {'\n'}
              Surely he'll be <Text style={S.textHint}>anxious about</Text> you
              {'\n'}I think he's <Text style={S.textHint}>crazy about</Text> you
              {'\n'}
              At least you know she's{' '}
              <Text style={S.textHint}>serious about</Text> you{'\n'}
              We need to be <Text style={S.textHint}>vigilant about</Text> these
              activities{'\n'}
              General <Text style={S.textHint}>information about</Text> system
              and compendium user's guide{'\n'}
              It is not an achievement that we can{' '}
              <Text style={S.textHint}>boast about</Text>
              {'\n'}I hate to <Text style={S.textHint}>complain about</Text> the
              heat, but the air conditioner's on fire
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
          <View style={S.titleOrange}>
            <Text style={S.h2}>Of</Text>
          </View>
          <View style={S.blockWithGreen}>
            <Text style={S.text}>
              He <Text style={S.textHint}>reminds</Text> me{' '}
              <Text style={S.textHint}>of</Text> an old school friend{'\n'}
              He's <Text style={S.textHint}>fond of</Text> his teacher
              {'\n'}
              I'm <Text style={S.textHint}>
                frightened/afraid/scared of
              </Text>{' '}
              snakes{'\n'}
              I'm <Text style={S.textHint}>proud of</Text> my children
              {'\n'}
              They're <Text style={S.textHint}>tired of</Text> working every day
              {'\n'}I wasn't <Text style={S.textHint}>aware of</Text> any
              conflict{'\n'}
              But I am fully <Text style={S.textHint}>capable of</Text>{' '}
              multitasking{'\n'}
              I'm <Text style={S.textHint}>envious of</Text> the bond you had
              {'\n'}
              We're both <Text style={S.textHint}>guilty of</Text> keeping
              secrets{'\n'}
              I'm <Text style={S.textHint}>sick of</Text> lying to everyone
              {'\n'}
              The main problem remained the{' '}
              <Text style={S.textHint}>lack of</Text> information
              {/* <Text style={S.textHint}></Text> */}
            </Text>
          </View>
        </View>

        <View style={{ padding: 10 }}></View>
      </ScrollView>
    </View>
  )
}

const Prepositions = () => {
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
          <Text style={S.firstTitle}>Dependent Prepositions</Text>
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

export default Prepositions
