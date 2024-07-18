import { View, Text, Switch } from 'react-native'

const Settings = () => {
  return (
    <View className="flex-1 ">
      <Text>Dark Mode</Text>
      <View className="flex-row items-center justify-between">
        <Text>Automatic (follow device setting)</Text>
        <Switch />
      </View>
      <View className="flex-row items-center justify-between">
        <Text>Dark Mode</Text>
        <Switch />
      </View>
    </View>
  )
}

export default Settings
