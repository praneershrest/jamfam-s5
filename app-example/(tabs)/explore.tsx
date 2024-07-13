/** @format */

import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, Image, Platform } from "react-native";
import VideoFeed from "@/components/VideoFeed";

export default function TabTwoScreen() {
  return (
    <View>
      <VideoFeed></VideoFeed>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
})
