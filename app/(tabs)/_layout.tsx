import { MaterialIcons } from '@expo/vector-icons'
import { Tabs, useRouter } from 'expo-router'
import { Pressable } from 'react-native'

export default function TabLayout() {
  const router = useRouter()
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
          headerRight: () => (
            <>
              <Pressable onPress={() => router.push('settings')}>
                <MaterialIcons size={28} name="settings" />
              </Pressable>
            </>
          ),
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
    </Tabs>
  )
}
