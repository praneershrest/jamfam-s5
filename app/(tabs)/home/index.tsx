import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

const HomeScreen: React.FC = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>This is the home screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  infoText: {
    fontSize: 18,
    color: '#333',
  },
})

export default HomeScreen
