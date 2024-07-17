import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { Button, Pressable } from 'react-native'

const SettingButton = () => {
  return (
    <Pressable onPress={() => alert('Settings button')}>
      <MaterialIcons size={28} name="settings" />
    </Pressable>
  )
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
          headerRight: () => <SettingButton />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="add-circle-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="album" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          href: null,
        }}
      />
    </Tabs>
  )
}
