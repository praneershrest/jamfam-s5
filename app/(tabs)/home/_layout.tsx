import { Stack, Link } from 'expo-router'
import { Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const HomeLayout: React.FC = () => {
  const TEMPORARY_CONSTANTS = {
    tabBarActiveTintColor: 'blue',
    tabBarIconSize: 28,
  }
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerRight: () => (
            // TODO: Replace with a custom component
            <Link href="/home/notifications" asChild>
              <Pressable>
                <MaterialIcons size={TEMPORARY_CONSTANTS.tabBarIconSize} name="notifications" />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen name="notifications" options={{ title: 'Notifications' }} />
      <Stack.Screen
        name="profile/[id]"
        options={{
          title: '', // This will hide the header for the Profile screen
        }}
      />
    </Stack>
  )
}

export default HomeLayout
