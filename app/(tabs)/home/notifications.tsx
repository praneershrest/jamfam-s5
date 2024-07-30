import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Modal,
} from 'react-native'
import Request from '@/components/Request'
import josh from '../../../assets/images/josh.png'
import joyang from '../../../assets/images/joyang.png'
import praneer from '../../../assets/images/praneer.png'
import joyangVideo from '../../../assets/videos/joyang.mp4'
import idol from '../../../assets/videos/idol.mp4'
import rapbeat from '../../../assets/videos/rapbeat.mp4'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const notifications = {
  1: {
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
  2: {
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
  3: {
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
}

const NotificationsScreen = () => {
  const [selectedNotification, setSelectedNotification] = useState<any>(null)
  const [notificationsState, setNotificationsState] = useState<any>(notifications)

  const openRequest = (notificationId: string) => {
    setSelectedNotification(notificationsState[notificationId])
  }

  const closeRequest = () => {
    setSelectedNotification(null)
  }

  const onConnected = (isAccept: Boolean) => {
    if (!isAccept) {
      Alert.alert('Fail', 'The person is no bueno', [{ text: 'OK' }])
    } else {
      Alert.alert('Success', 'You successfully connected with PengusJams', [{ text: 'OK' }])
    }

    const updatedNotifications = { ...notificationsState }
    delete updatedNotifications[selectedNotification.id]
    setNotificationsState(updatedNotifications)
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
          data={Object.keys(notificationsState).map((key) => ({
            id: key,
            ...notificationsState[key],
          }))}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => openRequest(item.id)}>
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
