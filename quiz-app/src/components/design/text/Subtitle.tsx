import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { variables } from '@/style/theme'

type Props = {
  text: string
}

const Subtitle = ({text}: Props) => {
  return (
    <View>
      <Text style={styles.subTitle}>{text}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
   subTitle: {
      fontFamily: variables.fonts.light,
      color: variables.colors.text,
      fontSize: variables.fontSizes.small,
      
    },
})