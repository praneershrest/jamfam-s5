import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Request from '@/components/Request'
import josh from '../../../assets/images/josh.png'
import joyang from '../../../assets/images/joyang.png'
import praneer from '../../../assets/images/praneer.png'
import joyangVideo from '../../../assets/videos/joyang.mp4'
import idol from '../../../assets/videos/idol.mp4'
import rapbeat from '../../../assets/videos/rapbeat.mp4'

const notifications = [
  {
    id: '1',
    profilePic: josh,
    profileVid: rapbeat,
    title: 'PengusJams',
    subtitle: 'Producer SongWriter',
    projectName: 'Banana Name',
    pills: ['Guitar', 'Fl studio', 'Mixing'],
    notes: ['Likes R&B music', 'Likes long walks on the beach', 'Fan of Dean, KayTranda'],
  },
  {
    id: '2',
    profilePic: joyang,
    profileVid: joyangVideo,
    title: 'Joyang',
    subtitle: 'Singer Producer',
    projectName: 'Banana Name',
    pills: ['Guitar', 'Piano', 'Logic'],
    notes: ['Plays Tennis', 'Loves jazz and jamming', 'Based in San Francisco'],
  },
  {
    id: '3',
    profilePic: praneer,
    profileVid: idol,
    title: 'Lil Boat',
    subtitle: 'Rapper',
    projectName: 'Broken Dreams',
    pills: ['DJ', 'Producing', 'Rapper'],
    notes: ['Likes R&B music', 'Likes long walks on the beach', 'Fan of Dean, KayTranda'],
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

  return (
    <View style={styles.container}>
      {selectedNotification ? (
        <Request notification={selectedNotification} onClose={closeRequest} />
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
