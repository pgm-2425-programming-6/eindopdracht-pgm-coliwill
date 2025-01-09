import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Button } from 'react-native'
import { useRouter } from 'expo-router'

const index = () => {
  const router = useRouter()
  return (
    <View>
      <Button title="Go to login" onPress={() => router.push("/auth/login")} />
      <Button title="Go to register" onPress={() => router.push("/auth/register")} />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})