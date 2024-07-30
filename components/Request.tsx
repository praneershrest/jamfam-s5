import React, { useRef } from 'react'
import { View, Dimensions, StyleSheet, Image, Text, TouchableOpacity, Animated } from 'react-native'
import { Video, ResizeMode } from 'expo-av'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'

const { width, height } = Dimensions.get('window')

interface RequestProps {
  notification: {
    id: number
    title: string
    subtitle: string
    projectName: string
    pills: string[]
    notes: string
    profilePic: any // Change this to ImageSourcePropType if using TypeScript
    profileVid: any
  }
  onClose: () => void
  onConnected: (isAccept: Boolean) => void
}

const Request: React.FC<RequestProps> = ({ notification, onClose, onConnected }) => {
  const translateX = useRef(new Animated.Value(0)).current
  const videoRef = useRef<Video>(null)

  const router = useRouter() // Initialize useRouter

  const handleNameClick = () => {
    videoRef.current?.pauseAsync()
    router.push(`/home/profile/${notification.id}`)
    onClose()
  }

  const handleGestureEvent = Animated.event([{ nativeEvent: { translationX: translateX } }], {
    useNativeDriver: true,
  })

  const handleStateChange = ({ nativeEvent }: any) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationX > 100) {
        Animated.timing(translateX, {
          toValue: width,
          duration: 300,
          useNativeDriver: true,
        }).start(() => onClose())
      } else {
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start()
      }
    }
  }

  return (
    <PanGestureHandler onGestureEvent={handleGestureEvent} onHandlerStateChange={handleStateChange}>
      <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
        <Video
          source={
            notification.profileVid
              ? notification.profileVid
              : { uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }
          }
          style={styles.video}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isLooping
          ref={videoRef}
        />

        <TouchableOpacity style={styles.backButton} onPress={onClose}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <View style={styles.profileSection}>
          <View style={styles.profileContainer}>
            <TouchableOpacity onPress={handleNameClick}>
              <Image source={notification.profilePic} style={styles.profilePicture} />
            </TouchableOpacity>
          </View>

          <View style={styles.subHeaderContainer}>
            <Text style={styles.semiBoldText}>
              Reach out for: <Text style={styles.boldText}>{notification.projectName}</Text>
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.profileName}>{notification.title}</Text>
            <Text style={styles.profileDescription}>{notification.subtitle}</Text>
            <View style={styles.skillsContainer}>
              {notification.pills.map((skill, index) => (
                <View key={index} style={styles.skillPill}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>

            <View style={styles.descriptionBox}>
              <Text style={styles.descriptionText}>{notification.notes}</Text>
            </View>
            <Text style={styles.headerText}>Let's Jam, Fam?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  onConnected(true)
                }}>
                <Text style={styles.buttonText}>Yes 🤝</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  onConnected(false)
                }}>
                <Text style={styles.buttonText}>No 🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: 'black',
  },
  video: {
    width: width,
    height: height / 4.5,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -250,
  },
  subHeaderContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  semiBoldText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  descriptionContainer: {
    padding: 10,
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  profileSection: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
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
