import {
  View,
  Text,
  Pressable,
  Animated,
  StyleSheet,
  Image,
  ImageSourcePropType,
  useWindowDimensions,
  Dimensions,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av'
import LottieView from 'lottie-react-native'

import fistbump from '@/assets/lottie/fistbump.json'
import { MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

export type Project = {
  project: {
    id: string
    video: string
    pills: string[]
    title: string
    description: string
    creator: {
      name: string
      profilepic: ImageSourcePropType
    }
  }
  activeProjectId: string
}

const ProjectPost = ({ project, activeProjectId }: Project) => {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false)
  const [playbackStatus, setPlaybackStatus] = useState<AVPlaybackStatus>()
  const videoRef = useRef<Video>(null)
  const animationTranslateY = useRef(new Animated.Value(0)).current

  const windowHeight = Dimensions.get('window').height
  const tabHeight = useBottomTabBarHeight()

  const isPlaying = playbackStatus?.isLoaded && playbackStatus.isPlaying

  useEffect(() => {
    if (activeProjectId !== project.id) {
      videoRef?.current?.pauseAsync()
    }
    if (activeProjectId === project.id) {
      videoRef?.current?.playAsync()
    }
  }, [activeProjectId, project.id])

  const handleOnPress = () => {
    if (!videoRef.current) {
      return
    }
    if (isPlaying) {
      videoRef.current.pauseAsync()
    } else {
      videoRef.current.playAsync()
    }
  }

  const handlePressIn = () => {
    setIsAnimationVisible(true)
    Animated.timing(animationTranslateY, {
      toValue: -200, // Adjust this value to set how high the animation slides up
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  const handlePressOut = () => {
    Animated.timing(animationTranslateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsAnimationVisible(false)
    })
  }

  return (
    <View className="flex-1" style={{ height: windowHeight - tabHeight }}>
      <View className="h-2/3 justify-center items-center">
        <Pressable onPress={handleOnPress}>
          <View className="flex-1 items-center">
            <Video
              ref={videoRef}
              className="h-full w-screen"
              source={project.video}
              resizeMode={ResizeMode.COVER}
              onPlaybackStatusUpdate={setPlaybackStatus}
              isLooping
              shouldPlay
            />
            {!isPlaying && (
              <View className="absolute top-1/2">
                <MaterialIcons name="play-arrow" size={64} color="rgba(255,255,255,0.9)" />
              </View>
            )}
          </View>
        </Pressable>
        <View className="absolute bottom-0 flex-row justify-center items-center">
          {project.pills.map((pill, index) => (
            <View key={index} className="px-6 py-2 rounded-full m-2 bg-blue-500">
              <Text className="text-white">{pill}</Text>
            </View>
          ))}
        </View>
      </View>
      <View className="flex-row-reverse items-top justify-between">
        <View className="h-36 mx-4" style={[styles.descriptionBox, { flex: 4 }]}>
          <Text className="text-lg">{project.title}</Text>
          <Text>{project.description}</Text>
        </View>
        <Image source={project.creator.profilepic} style={styles.profilePicture} />
      </View>
      <Pressable className="mt-2" onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <View className="h-20 w-20 justify-center self-center rounded-full bg-blue-500">
          <Text className="text-center text-white">lets jam, fam?</Text>
        </View>
      </Pressable>
      {isAnimationVisible && (
        <Animated.View
          style={[styles.animationContainer, { transform: [{ translateY: animationTranslateY }] }]}>
          <LottieView
            source={fistbump}
            autoPlay
            loop
            speed={1.5}
            style={{ width: 400, height: 400 }}
          />
        </Animated.View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  animationContainer: {
    position: 'absolute',
    top: '95%',
    left: '25%',
    width: 200,
    height: 200,
    transform: [{ translateX: -100 }, { translateY: 0 }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    flex: 1,
    width: 60,
    height: 65,
    borderRadius: 30,
    marginLeft: 10,
    marginTop: 20,
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
})

export default ProjectPost
