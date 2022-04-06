import React from 'react'
import { Button, Text, View } from 'react-native'
import { globalStyles } from '../styles'

export const Contact = ({ navigation }: any) => {
  const navigateBack = () => {
    navigation.goBack()
  }
  return (
    <View style={{ backgroundColor: 'green', ...globalStyles.main }}>
      <Text style={globalStyles.text}>Contact page</Text>
      <Button title="Go to previous page" onPress={navigateBack} />
    </View>
  )
}
