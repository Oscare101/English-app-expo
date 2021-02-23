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

const noArticle = {
  'names and titles': 'James, Chris Graham, President Obama, Mr Jones',
  'continents and most countries':
    'Europe, Africa, Asia, Japan, Argentina, Slovenia',
  'cities, roads, squares, parks':
    'Vancouver, Princes Street, Times Square, Hyde Park',
  'mountains and lakes': 'Mount Everest, Mount Kilimanjaro, Lake Victoria',
  'named buildings and institutions': 'Central Station, Yale University',
  'named shops and companies': 'Walmart, Harrods, Siemens, Toyota',
  'materials, liquids, gases': 'made of silk, fry in oil, breathe pure oxygen',
  meal: 'Have you had breakfast? See you at lunch',
  sports: 'She plays both tennis and aquash very well',
  illnesses: 'He has got lung cancer. She has had German measles',
  'language and school subjects':
    'He speaks Swahili. I am studying physics and biology',
  magazines: 'Cosmopolitan, Vogue, Newsweek',
  'noun + number': 'The train goes from platform 10. See page 45',
}
const definiteArticle = {
  'some countries':
    'the United States (and other plurals), the Republic of China',
  'geographical names/physical ebvironment':
    'the West, the Pyrenees, the Pacific Ocean, the Black Sea, the Rhone, the Thames, the city, the country',
  'time, data, periods':
    'during the day, in the morning (BUT at night), the tenth of May, the tenth century, the Enlightenment',
  'the media (the from of art/entertainment)':
    "Let's go to the theatre at the weekend. We tend to listen to the radio for news",
  measurements: 'You can buy saffron by the gram',
  newspaper: 'the Times, the Helard Tribune, the Daily Morror',
  'in some grammatical constructions and superlatives':
    'the more the merrier, all the better, the most dangerous profession, the last time, the only one',
  'noun + of': 'the University of California, the Gulf of Mexico',
}
const indefiniteArticle = {
  'jobs, nationalities and beliefs':
    'I am a strustural engineer. Fabio Capello is an Italian',
  'large numbers and fractions':
    'a hundred thousand, a million, a fifth, a hundredth',
  'pieces, speed, ferguency':
    'two dollars a (per) kilo, 20 km an hour, once a day',
}

const NoArticle = (props) => {
  {
    return Object.keys(props.object).map((list) => (
      <View key={list}>
        <Text style={S.text}>&bull; {list}</Text>
        <View style={S.blockWithGreen}>
          <Text style={S.text}>{props.object[list]}</Text>
        </View>
      </View>
    ))
  }
}

const Lesson = () => {
  return (
    <View style={[S.lesson, S.colorBg]}>
      <View style={S.header}>
        <Text style={S.headerTitle}>Articles</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <View style={S.titleOrange}>
          <Text style={S.h2}>No article</Text>
        </View>
        <NoArticle object={noArticle} />

        <View style={S.titleOrange}>
          <Text style={S.h2}>Definite article</Text>
        </View>
        <NoArticle object={definiteArticle} />

        <View style={S.titleOrange}>
          <Text style={S.h2}>Indefinite article</Text>
        </View>
        <NoArticle object={indefiniteArticle} />

        <View style={{ padding: 10 }}></View>
      </ScrollView>
    </View>
  )
}

const Articles = () => {
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
          <Text style={S.firstTitle}>Articles</Text>
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

export default Articles
