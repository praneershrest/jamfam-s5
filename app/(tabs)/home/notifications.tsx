import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import Request from '@/components/Request'
import josh from '../../../assets/images/josh.png'
import joyang from '../../../assets/images/joyang.png'
import praneer from '../../../assets/images/praneer.png'
import joyangVideo from '../../../assets/videos/joyang.mp4'
import idol from '../../../assets/videos/idol.mp4'
import rapbeat from '../../../assets/videos/rapbeat.mp4'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const notifications = [
  {
    id: '1',
    profilePic: josh,
    profileVid: rapbeat,
    title: 'PengusJams',
    subtitle: 'Producer SongWriter',
    projectName: 'Banana Name',
    pills: ['Guitar', 'Fl studio', 'Mixing'],
    notes:
      "Hi there! I thought your project has a lot of potential to be great, I would love to connect! Let's make some Jams?",
  },
  {
    id: '2',
    profilePic: joyang,
    profileVid: joyangVideo,
    title: 'Joyang',
    subtitle: 'Singer Producer',
    projectName: 'Banana Name',
    pills: ['Guitar', 'Piano', 'Logic'],
    notes:
      "Hi there! I thought your project has a lot of potential to be great, I would love to connect! Let's make some Jams!",
  },
  {
    id: '3',
    profilePic: praneer,
    profileVid: idol,
    title: 'Lil Boat',
    subtitle: 'Rapper',
    projectName: 'Broken Dreams',
    pills: ['DJ', 'Producing', 'Rapper'],
    notes:
      "Hi there! I thought your project has a lot of potential to be great, I would love to connect! Let's make some Jams!",
  },
]

const NotificationsScreen: React.FC = () => {
  const [selectedNotification, setSelectedNotification] = useState<any>(null)

  const openRequest = (notification: any) => {
    setSelectedNotification(notification)
  }

  const closeRequest = () => {
    setSelectedNotification(null)
  }

  const onConnected = () => {
    Alert.alert('Success', 'You successfully connected with PengusJams', [{ text: 'OK' }])
    // delete the first element off the stack
    notifications.shift()
    closeRequest()
  }

  return (
    <View style={styles.container}>
      {selectedNotification ? (
        <GestureHandlerRootView>
          <Request
            notification={selectedNotification}
            onClose={closeRequest}
            onConnected={onConnected}
          />
        </GestureHandlerRootView>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => openRequest(item)}>
              <Image source={item.profilePic} style={styles.profilePic} />
              <Text style={styles.message}>
                <Text style={styles.boldMessage}>{item.title}</Text> wants to collab on{' '}
                {item.projectName}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  message: {
    fontSize: 16,
  },
  boldMessage: {
    fontWeight: 'bold',
  },
})

export default NotificationsScreen
