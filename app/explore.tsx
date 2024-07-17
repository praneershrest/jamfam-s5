/** @format */

import { StyleSheet, View } from 'react-native'
import Request from '@/components/Request'

export default function TabTwoScreen() {
  return (
    <View>
      <Request />
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
