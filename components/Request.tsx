// components/MessageInput.tsx
import React, { useState } from 'react'
import { View, Dimensions, StyleSheet, Image } from 'react-native'
import { Video } from 'expo-av'
import tmp from '../assets/images/josh.png'

const { width, height } = Dimensions.get('window')

const Request: React.FC = () => {
  const [message, setMessage] = useState('')

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
        isLooping
      />
      <View style={styles.profileContainer}>
        <Image source={tmp} style={styles.profilePicture} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  video: {
    width: width,
    height: height / 2.5,
  },
  profileContainer: {
    position: 'absolute',
    top: height / 2 - 100, // Adjust this value to center the profiles
    left: 0,
    right: 0,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 25,
    margin: 10,
  },
})

export default Request
