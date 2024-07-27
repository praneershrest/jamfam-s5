import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import Profile from '../../../../components/Profile'

const ProfileScreen = () => {
  const { id } = useLocalSearchParams()
  console.log(id)

  return (
    <View style={styles.container}>
      <Profile id={id} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
})

export default ProfileScreen
