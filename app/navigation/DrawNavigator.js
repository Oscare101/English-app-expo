import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

function DrawNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  )
}

export default DrawNavigator
