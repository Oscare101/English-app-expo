import React from 'react'
import { StatusBar, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TopNavigation from './TopNavigation'
import ScreenChat from '../components/ScreenChat'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import DrawerNavigatorContent from './DrawerNavigatorContent'
const Drawer = createDrawerNavigator()

function DrawNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerNavigatorContent {...props} />}
      >
        <Drawer.Screen name="TopNavigation" component={TopNavigation} />
        <Drawer.Screen name="ScreenChat" component={ScreenChat} />
      </Drawer.Navigator>
    </NavigationContainer>
    // <TopNavigation />
  )
}

export default DrawNavigator
