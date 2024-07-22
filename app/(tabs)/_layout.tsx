import { MaterialIcons } from '@expo/vector-icons'
import { Tabs, useRouter, Link } from 'expo-router'
import { Pressable } from 'react-native'

/**
 * TODO
 * Create components with styling for Bottom Tabs
 * Styling constants should be set up through a theme configuration
 */
const TEMPORARY_CONSTANTS = {
  tabBarActiveTintColor: 'blue',
  tabBarIconSize: 28,
}

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: TEMPORARY_CONSTANTS.tabBarActiveTintColor }}>
      <Tabs.Screen name="home" options={{ title: 'Home', headerShown: false }} />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={TEMPORARY_CONSTANTS.tabBarIconSize}
              name="add-circle-outline"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={TEMPORARY_CONSTANTS.tabBarIconSize} name="album" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabLayout
