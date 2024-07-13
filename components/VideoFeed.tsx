/** @format */

// components/VideoFeed.tsx
import { View, FlatList, Dimensions, StyleSheet } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import randomVideo from "/Users/jp/Documents/Documents/GitHub/jamfam/app/videos/IMG_7042.mp4";
import Svg, { Path } from "react-native-svg";

const { height } = Dimensions.get("window");

interface VideoItem {
  id: string;
  uri: string;
}

const videos: VideoItem[] = [
  { id: "1", uri: randomVideo },
  { id: "2", uri: "https://www.w3schools.com/html/movie.mp4" },
  // Add more video URLs here
];

const VideoFeed: React.FC = () => {
  const renderItem = ({ item }: { item: VideoItem }) => (
    <View style={styles.videoContainer}>
      <Video
        source={{ uri: item.uri }}
        style={styles.video}
        resizeMode={"cover"}
        repeat
        muted
        isLooping={true}
      />
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
