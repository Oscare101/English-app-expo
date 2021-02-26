import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import { Drawer } from 'react-native-paper'
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer'
import { MaterialIcons, Entypo, Ionicons, AntDesign } from '@expo/vector-icons'
import color from '../components/color'
import S from '../lessons/S'
export default function DrawerNavigatorContent(props) {
  const [isDark, setIsDark] = useState(false)
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.head}>
          <Text style={S.screenTitle}>Learn English</Text>
        </View>
        <Drawer.Section title="custom">
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <Text>Dark Theme</Text>
            <Switch
              trackColor={{ false: color.headerLessonColor, true: '#fff' }}
              thumbColor={isDark ? color.commentBlock : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsDark(!isDark)}
              value={isDark}
            />
          </View>
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            label="Main"
            icon={() => <AntDesign name="book" size={24} color="black" />}
            onPress={() => {
              props.navigation.navigate('TopNavigation')
            }}
          />
          <DrawerItem
            label="Chat"
            icon={() => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={24}
                color="black"
              />
            )}
            onPress={() => {
              props.navigation.navigate('ScreenChat')
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: color.headerLessonColor,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
