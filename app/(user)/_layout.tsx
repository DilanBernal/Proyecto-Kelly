import { Stack } from "expo-router"

export default function UserLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" />
      <Stack.Screen name="create-report" />
      <Stack.Screen name="reports" />
      <Stack.Screen name="report/[id]" />
      <Stack.Screen name="map" />
      <Stack.Screen name="profile" />
    </Stack>
  )
}
