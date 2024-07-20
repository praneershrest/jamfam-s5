/** @format */

import { StyleSheet, Text, View } from 'react-native'
import Request from '@/components/Request'

export default function ExploreScreen() {
  return (
    <View>
      <Text>This is the feed Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
})
