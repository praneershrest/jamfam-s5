import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import Request from '@/components/Request'
import josh from '../../../assets/images/josh.png'
import joyang from '../../../assets/images/joyang.png'
import praneer from '../../../assets/images/praneer.png'

const notifications = [
  {
    id: '1',
    profilePic: josh,
    title: 'PengusJams',
    subtitle: 'Producer SongWriter',
    pills: ['Guitar', 'Fl studio', 'Mixing'],
    notes: ['Likes R&B music', 'Likes long walks on the beach', 'Fan of Dean, KayTranda'],
  },
  {
    id: '2',
    profilePic: joyang,
    title: 'Joyang',
    subtitle: 'Singer Producer',
    pills: ['Guitar', 'Piano', 'Logic'],
    notes: ['Plays Tennis', 'Loves jazz and jamming', 'Based in San Francisco'],
  },
  {
    id: '3',
    profilePic: praneer,
    title: 'Lil Boat',
    subtitle: 'Rapper',
    pills: ['DJ', 'Producing', 'Rapper'],
    notes: ['Likes R&B music', 'Likes long walks on the beach', 'Fan of Dean, KayTranda'],
  },
]

const NotificationsScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedNotification, setSelectedNotification] = useState<any>(null)

  const openModal = (notification: any) => {
    setSelectedNotification(notification)
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
    setSelectedNotification(null)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => openModal(item)}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}>
        {selectedNotification && (
          <Request notification={selectedNotification} onClose={closeModal} />
        )}
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
})

export default NotificationsScreen
