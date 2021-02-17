import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Modal,
  ScrollView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import S from '../lessons/S'
const Lesson = () => {
  return (
    <View style={[S.lesson, S.colorBg]}>
      <View style={S.header}>
        <Text style={S.headerTitle}>Sources</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <Text style={S.text}>
          &bull; Grammarway - Jenny Dooley, Virginia Evans {'\n'}
          &bull; Oxford Practice Grammar Advanced - George Yule {'\n'}
          &bull; English File - Christian Latham-Koening
        </Text>
      </ScrollView>
    </View>
  )
}

const Sources = () => {
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
            Sources <Ionicons name="library-outline" size={20} />
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

export default Sources
