// components/MessageInput.tsx
import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native'

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    // Handle the send action here
    console.log('Message sent:', message)
    setMessage('') // Clear the input after sending the message
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type a message..."
        placeholderTextColor="#999"
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity onPress={handleSend} style={styles.button}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#E100B0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
})

export default MessageInput
