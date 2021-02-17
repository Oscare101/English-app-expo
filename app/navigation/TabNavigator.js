import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen1 from '../components/Screen1'
import Screen2 from '../components/Screen2'
import Screen3 from '../components/Screen3'
import TabBar from '../components/TabBar'
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Theory"
        component={Screen1}
        initialParams={{ icon: 'book-outline' }}
      />
      <Tab.Screen
        name="Practice"
        component={Screen2}
        initialParams={{ icon: 'school-outline' }}
      />
      <Tab.Screen
        name="More"
        component={Screen3}
        initialParams={{ icon: 'settings-outline' }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
