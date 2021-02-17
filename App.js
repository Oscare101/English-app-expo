import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './app/navigation/TabNavigator'

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </>
  )
}
