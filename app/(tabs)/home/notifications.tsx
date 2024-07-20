import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import Request from '@/components/Request'

const notifications = [
  { id: '1', title: 'Notification 1' },
  { id: '2', title: 'Notification 2' },
  { id: '3', title: 'Notification 3' },
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
