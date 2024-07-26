// components/Profile.tsx
import React, { useEffect, useState, useRef } from 'react'
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
  Linking,
} from 'react-native'
import { Video, ResizeMode } from 'expo-av'
import josh from '../assets/images/josh.png'
import joyang from '../assets/images/joyang.png'
import praneer from '../assets/images/praneer.png'
import joyangVideo from '../assets/videos/joyang.mp4'
import idol from '../assets/videos/idol.mp4'
import rapbeat from '../assets/videos/rapbeat.mp4'
import vinly from '../assets/images/vinyl.png'
import vinly2 from '../assets/images/vinly2.png'
import vinly3 from '../assets/images/vinly3.png'
import wolf from '../assets/images/wolf.png'
import me_img from '../assets/images/me_img.png'
import eleven_cover from '../assets/images/eleven_cover.png'

const { width, height } = Dimensions.get('window')

const profileInfo = {
  '1': {
    name: 'PengusJams',
    profilePic: josh,
    title: 'Producer SongWriter',
    profileVid: rapbeat,
    skills: ['Guitar', 'Fl studio', 'Mixing', 'Choreographing', 'Video Editing', 'Songwriting'],
    bio: "Hello 👋 I'm PengusJams, an emerging artist from Vancouver, Canada. I'm currently learning Logic Pro X for music production and enjoy creating R&B tracks. I'm always eager to learn new techniques and explore various genres. If you have any R&B projects, I'd love to assist with production or songwriting. Let's connect!",
    projects: [
      {
        id: '1',
        title: 'Snippet #1',
        snippet: idol,
        projectImg: vinly,
        projectImgBig: eleven_cover,
      },
      {
        id: '2',
        title: 'Snippet #2',
        snippet: joyangVideo,
        projectImg: vinly2,
        projectImgBig: wolf,
      },
      {
        id: '3',
        title: 'Snippet #3',
        snippet: joyangVideo,
        projectImg: vinly3,
        projectImgBig: me_img,
      },
    ],
    favoriteGenres: ['Pop', 'Soul', 'Classical'],
    personality: ['Likes to be at home', 'Introverted', 'Gaming', 'Watching anime', 'Cooking'],
    socials: {
      instagram: 'https://www.instagram.com/pengusjams/',
      spotify: 'https://open.spotify.com/artist/pengusjams',
    },
  },
  '2': {
    name: 'Joyang',
    profilePic: joyang,
    title: 'Singer Producer',
    profileVid: joyangVideo,
    profileImg: vinly2,
    skills: ['Piano', 'Vocals', 'Logic Pro'],
    favoriteGenres: ['Pop', 'Soul', 'Classical'],
    bio: 'Joyang is a talented singer and producer who blends soulful melodies with innovative production techniques.',
  },
  '3': {
    name: 'Lil Boat',
    profilePic: praneer,
    title: 'Rapper',
    profileVid: rapbeat,
    profileImg: vinly3,
    skills: ['Rapping', 'Songwriting', 'Performance'],
    favoriteGenres: ['Pop', 'Soul', 'Classical'],
    bio: 'Lil Boat is a dynamic rapper known for his energetic performances and thought-provoking lyrics.',
  },
}

interface ProfileProps {
  id: string
}

const Profile: React.FC<ProfileProps> = ({ id }) => {
  const [selectedProfile, setSelectedProfile] = useState<any>(null)
  const [isModalVisible, setModalVisible] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const videoRef = useRef<Video>(null)
  const feedVideoRef = useRef<Video>(null)

  useEffect(() => {
    if (id in profileInfo) {
      setSelectedProfile(profileInfo[id])
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.pauseAsync()
        feedVideoRef.current.pauseAsync()
      }
    }
  }, [id])

  const openModal = (video) => {
    setSelectedVideo(video)
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
    setSelectedVideo(null)
  }

  return (
    <ScrollView style={styles.container}>
      {selectedProfile && (
        <>
          <Video
            source={
              selectedProfile.profileVid
                ? selectedProfile.profileVid
                : { uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }
            }
            style={styles.video}
            resizeMode={ResizeMode.COVER}
            shouldPlay
            isLooping
            ref={videoRef}
          />
          <View style={styles.profileContainer}>
            <Image source={selectedProfile.profilePic} style={styles.profilePicture} />
            <View style={styles.descriptionContainer}>
              <Text style={styles.profileName}>{selectedProfile.name}</Text>
              <Text style={styles.profileTitle}>{selectedProfile.title}</Text>
            </View>
          </View>
          <View style={styles.bioContainer}>
            <Text style={styles.bioTitle}>About Me:</Text>
            <Text style={styles.bioText}>{selectedProfile.bio}</Text>
          </View>
          <Text style={styles.headerText}>Skills</Text>
          <View style={styles.skillsContainer}>
            {selectedProfile.skills.map((skill: string, index: number) => (
              <View key={index} style={styles.skillPill}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.headerText}>Project Snippets</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {selectedProfile.projects.map((project: any) => (
              <TouchableOpacity onPress={() => openModal(project.snippet)}>
                <Image source={project.projectImg} style={styles.projectVideo} resizeMode="cover" />
                <Text style={styles.projectTitle}>{project.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={styles.headerText}>Completed Projects</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {selectedProfile.projects.map((project: any) => (
              <TouchableOpacity onPress={() => openModal(project.snippet)}>
                <Image
                  source={project.projectImgBig}
                  style={styles.projectSnippetVideo}
                  resizeMode="cover"
                />
                <Text style={styles.projectTitle}>{project.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.headerText}>Favorite Music Genres</Text>
          <View style={styles.skillsContainer}>
            {selectedProfile.favoriteGenres.map((genre: string, index: number) => (
              <View key={index} style={styles.skillPill}>
                <Text style={styles.genreText}>{genre}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.headerText}>Personality/Hobbies</Text>
          <View style={styles.skillsContainer}>
            {selectedProfile.personality.map((skill: string, index: number) => (
              <View key={index} style={styles.skillPill}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.headerText}>Socials</Text>
          <View style={styles.socialsContainer}>
            <TouchableOpacity onPress={() => Linking.openURL(selectedProfile.socials.instagram)}>
              <Text style={styles.socialLink}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(selectedProfile.socials.spotify)}>
              <Text style={styles.socialLink}>Spotify</Text>
            </TouchableOpacity>
          </View>

          <Modal visible={isModalVisible} transparent={true} onRequestClose={closeModal}>
            <View style={styles.modalContainer}>
              <Video
                source={selectedVideo}
                style={styles.modalVideo}
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay
                useNativeControls
              />
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  video: {
    width: width,
    height: height / 2.5,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  descriptionContainer: {
    padding: 20,
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileTitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  bioContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 20,
    textAlign: 'left',
  },
  bioTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bioText: {
    fontSize: 16,
    color: '#333',
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
    marginLeft: 15,
  },
  projectContainer: {
    alignItems: 'center',
    marginLeft: 15,
  },
  projectVideo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  projectTitle: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  favoriteGenresContainer: {
    padding: 20,
  },
  genrePill: {
    backgroundColor: '#8e44ad',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
  },
  genreText: {
    color: 'white',
    fontSize: 14,
  },
  projectSnippetsContainer: {
    padding: 20,
  },
  snippetVideo: {
    width: width / 3,
    height: height / 6,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalVideo: {
    width: width - 40,
    height: height / 2,
    alignSelf: 'center',
  },
  closeButton: {
    backgroundColor: '#3498db',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  projectSnippet: {
    marginRight: 10,
  },
  projectSnippetVideo: {
    width: width / 3 - 10,
    height: width / 3 - 10,
  },
  completedProjectsContainer: {
    padding: 10,
  },
  socialsContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 20,
    textAlign: 'left',
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
  },
  socialLink: {
    color: '#3498db',
    fontSize: 18,
    marginHorizontal: 10,
  },
})

export default Profile
