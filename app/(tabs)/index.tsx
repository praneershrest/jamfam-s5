import { View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Tab() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 justify-center items-center border-red-600 border-2 dark:bg-black">
        <Text>Home</Text>
      </View>
    </SafeAreaProvider>
  )
}
