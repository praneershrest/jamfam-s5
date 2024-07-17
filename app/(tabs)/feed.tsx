import { View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function FeedTab() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 justify-center items-center dark:bg-black">
        <Text>Feed</Text>
      </View>
    </SafeAreaProvider>
  )
}
