// components/MessageInput.tsx
import React, { useState } from 'react'
import { View, Dimensions, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Video } from 'expo-av'
import tmp from '../assets/images/josh.png'

const { width, height } = Dimensions.get('window')

interface RequestProps {
  notification: {
    id: string
    title: string
  }
  onClose: () => void
}

const Request: React.FC<RequestProps> = ({ notification, onClose }) => {
  const skills = ['JavaScript', 'React Native', 'Node.js']

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
        isLooping
      />

      <View style={styles.profileSection}>
        <View style={styles.profileContainer}>
          <Image source={tmp} style={styles.profilePicture} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.profileName}>PengusJams</Text>
          <Text style={styles.profileDescription}>Singer songwriter </Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <View key={index} style={styles.skillPill}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionText}>
              {'\u2022'} Experienced using DAWs like FL Studio, Ableton Live, and Logic Pro X{'\n'}
              {'\u2022'} I like the post mixing/mastering process{'\n'}
              {'\u2022'} Can sing too
            </Text>
          </View>
          <Text style={styles.headerText}>Let's Jam, Fam?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Yes 🤝</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>No 🗑️</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  video: {
    width: width,
    height: height / 2.5,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
  },
  descriptionContainer: {
    padding: 20,
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  profileSection: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  skillPill: {
    backgroundColor: '#3498db',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
  },
  skillText: {
    color: 'white',
    fontSize: 14,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  descriptionBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
  },
})

export default Request
