import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Modal,
  ScrollView,
  Share,
} from 'react-native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'

import S from '../lessons/S'

const onShare = async () => {
  try {
    const result = await Share.share({
      message: 'Easy English | it will be link :)',
    })
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message)
  }
}

const Lesson = () => {
  return (
    <View style={[S.lesson, S.colorBg]}>
      <View style={S.header}>
        <Text style={S.headerTitle}>Contact me</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <Text style={S.text}>
          Hi, I am Kyryll, the developer of this application. {'\n'}I'm still a
          student and I wrote this app for practice, but I hope it helps you.
          {'\n'}You can write to me if you see mistakes or if you want to
          suggest something new. {'\n'}Thanks for using it :)
        </Text>
        <View style={styles.link}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('mailto:kirillfedortsev2000@gmail.com')
            }
          >
            <Ionicons name="mail-outline" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.instagram.com/invites/contact/?i=9brm44l27rzc&utm_content=1indt8q'
              )
            }
          >
            <Ionicons name="logo-instagram" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://github.com/Oscare101')}
          >
            <Ionicons name="logo-github" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://t.me/funny_like_panda')}
          >
            <FontAwesome5 name="telegram-plane" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://discord.gg/zFHg8BGn')}
          >
            <FontAwesome5 name="discord" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={S.text}>
            If you like this app you can propose it to your friends:)
          </Text>
          <TouchableOpacity onPress={onShare} style={S.share}>
            <Text style={S.shareText}>Share</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const Contact = () => {
  const [modalVisible, setModalVisible] = useState(false)

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
      <View style={[S.block, S.settings]}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Text style={S.firstTitle}>
            Contact <Ionicons name="call-outline" size={20} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  link: {
    paddingVertical: 20,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
})

export default Contact
