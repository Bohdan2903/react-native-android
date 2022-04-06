import React from 'react'
import { Button, Text, View } from 'react-native'
import { globalStyles } from '../styles'

export const Home = ({ navigation }: any) => {
  const navigateToContact = () => {
    navigation.navigate('Contact')
  }
  return (
    <View style={{ backgroundColor: 'red', ...globalStyles.main }}>
      <Text style={globalStyles.text}>home page</Text>
      <Button title="Open Contact Page" onPress={navigateToContact} />
    </View>
  )
}
