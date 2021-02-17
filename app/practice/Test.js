import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Modal,
  ScrollView,
  TextInput,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import S from '../lessons/S'
import color from '../components/color'

const Test = (props) => {
  const [disableTest, setDisableTest] = useState(false)
  const [test, setTest] = useState(false)

  let colorIcon
  let answer = props.A
  let choice

  const Choise = () => {
    setDisableTest(true)
    if (choice === answer) {
      setTest(true)
    } else {
      setTest(false)
    }
  }

  let colorTest

  if (disableTest) {
    colorTest = 'grey'
  } else {
    colorTest = color.headerLessonColor
  }

  if (test) {
    colorIcon = 'green'
  } else {
    colorIcon = 'red'
  }

  const Hint = () => {
    if (test) {
      return (
        <View style={S.c}>
          <Text style={S.ct}>
            We use present perfect when the action has recently started..
          </Text>
        </View>
      )
    } else {
      return (
        <View style={S.w}>
          <Text style={S.wt}>
            We use present perfect when the action has recently started..
          </Text>
        </View>
      )
    }
  }

  const Return = () => {
    if (disableTest) {
      return <Hint />
    } else {
      return <Text style={S.ct}>choose one answer</Text>
    }
  }

  return (
    <View>
      <Text>{props.title}</Text>
      <TouchableOpacity
        onPress={() => {
          choice = props.a
          Choise(choice)
        }}
        style={[
          styles.input,
          {
            borderColor: colorTest,
          },
        ]}
        disabled={disableTest}
      >
        <Text>{props.a}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disableTest}
        onPress={() => {
          choice = props.b
          Choise(choice)
        }}
        style={[
          styles.input,
          {
            borderColor: colorTest,
          },
        ]}
      >
        <Text>{props.b}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disableTest}
        onPress={() => {
          choice = props.c
          Choise(choice)
        }}
        style={[
          styles.input,
          {
            borderColor: colorTest,
          },
        ]}
      >
        <Text>{props.c}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disableTest}
        onPress={() => {
          choice = props.d
          Choise(choice)
        }}
        style={[
          styles.input,
          {
            borderColor: colorTest,
          },
        ]}
      >
        <Text>{props.d}</Text>
      </TouchableOpacity>
      <Return />
      <TouchableOpacity
        onPress={() => {
          setDisableTest(false)
        }}
        style={styles.input}
      >
        <Text>repeat</Text>
      </TouchableOpacity>
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
  input: {
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
  inputBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  out: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    margin: 5,
    borderRadius: 5,
  },
})

export default Test
