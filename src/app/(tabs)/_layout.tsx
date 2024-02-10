import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { ActivityIndicator } from "react-native";

export default function TabsRoutesLayout() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          padding: 10,
          minHeight: 60,
        },
        tabBarActiveTintColor: "#6b299a",
        tabBarInactiveTintColor: "#8d8686",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="calendar-month" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="newSchedule"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="add" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
