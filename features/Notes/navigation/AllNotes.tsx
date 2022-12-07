import { View, Text } from "react-native";
import React from "react";
import { NotesTab } from "./NotesTabs";
import CloudNotes from "../screens/CloudNotes";
import DeviceNotes from "../screens/DeviceNotes";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {};

const AllNotes = (props: Props) => {
  return (
    <NotesTab.Navigator initialRouteName="DeviceNotes">
      <NotesTab.Screen
        name="DeviceNotes"
        component={DeviceNotes}
        options={{
          tabBarAccessibilityLabel: "notes stored in your device",
          tabBarLabel: "Device Notes",
          tabBarIcon: ({ focused, color }) => {
            return focused === true ? (
              <Ionicons name="hardware-chip" color={color} size={24} />
            ) : (
              <Ionicons name="hardware-chip-outline" color={color} size={24} />
            );
          },
        }}
      />
      <NotesTab.Screen
        name="CloudNotes"
        component={CloudNotes}
        options={{
          tabBarAccessibilityLabel: "notes stored in a cloud",
          tabBarLabel: "Cloud Notes",
          tabBarIcon: ({ focused, color }) => {
            return focused === true ? (
              <MaterialCommunityIcons name="cloud" color={color} size={24} />
            ) : (
              <MaterialCommunityIcons
                name="cloud-outline"
                color={color}
                size={24}
              />
            );
          },
        }}
      />
    </NotesTab.Navigator>
  );
};

export default AllNotes;
