import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const SmallAvatar = () => {
  return (
    <View>
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          resizeMode: 'contain',
        }}
        source={require('@assets/images/smallAvatar.png')}
      />
    </View>
  )
}

export default SmallAvatar

const styles = StyleSheet.create({})