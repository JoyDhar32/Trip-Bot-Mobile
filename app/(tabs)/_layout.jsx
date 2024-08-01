import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Colors } from "@/constants/Colors";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "black" }}
    >
      <Tabs.Screen
        name="discover"
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="globe" size={28} color="black"  />
          ),
        }}
      />

      <Tabs.Screen
        name="mytrip"
        options={{
          tabBarLabel: "My Trip",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="location-city" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={28} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
