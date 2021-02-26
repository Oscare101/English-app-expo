import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Screen1 from '../components/Screen1'
import Screen2 from '../components/Screen2'
import Screen3 from '../components/Screen3'
import Header from '../components/Header'
import color from '../components/color'
const Tab = createMaterialTopTabNavigator()

export default function TopNavigation() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar
          barStyle="default"
          backgroundColor={color.headerLessonColor}
        />
        <Header />

        <Tab.Navigator
          indicatorStyle={{
            color: 'red',
          }}
          tabBarOptions={{
            activeTintColor: '#fff',
            indicatorStyle: {
              backgroundColor: '#fff',
            },

            labelStyle: {
              fontSize: 16,
              color: '#fff',
              textShadowColor: 'black',
              textShadowRadius: 5,
              textShadowOffset: { width: 1, height: 1 },
            },
            style: { backgroundColor: color.headerLessonColor },
          }}
        >
          <Tab.Screen name="Theory" component={Screen1} />
          <Tab.Screen name="Practice" component={Screen2} />
          <Tab.Screen name="More" component={Screen3} />
        </Tab.Navigator>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
