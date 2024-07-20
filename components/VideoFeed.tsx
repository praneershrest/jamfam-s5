/** @format */

// components/VideoFeed.tsx
import { View, FlatList, Dimensions, StyleSheet } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import Svg, { Path } from 'react-native-svg';

const { height } = Dimensions.get("window");

interface VideoItem {
  id: string;
  uri: string;
}

const videos: VideoItem[] = [
  { id: "1", uri: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "2", uri: "https://www.w3schools.com/html/movie.mp4" },
];

const JaggedEdge: React.FC = () => (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
    <Path d="M0,0 L100,0 L100,100 L0,100 Z M0,0 Q10,50 0,100 M100,0 Q90,50 100,100 M0,100 Q50,90 100,100 M0,0 Q50,10 100,0" fill="none" stroke="white" strokeWidth="2"/>
  </Svg>
  );
  

const VideoFeed: React.FC = () => {
  const renderItem = ({ item }: { item: VideoItem }) => (
    <View style={styles.videoContainer}>
      <Video
        source={{ uri: item.uri }}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted
      />
      <JaggedEdge />
    </View>
  );

  return (
    <FlatList
      data={videos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      snapToAlignment="start"
      snapToInterval={height}
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

export default VideoFeed;
