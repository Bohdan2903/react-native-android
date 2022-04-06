import React from 'react'
import MainStackNavigation from './src/navigate'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  )
}

export default App
