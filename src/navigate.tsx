import React from 'react'
import { Home } from './components/Pages/home'
import { Contact } from './components/Pages/contact'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
const MainStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen name="Contact" component={Contact} options={{ title: 'Contact' }} />
    </Stack.Navigator>
  )
}
export default MainStackNavigation
