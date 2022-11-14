import { StyleSheet, Text, View } from "react-native";
import React from "react";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NotesTab } from "../../shared/navigation/NotesTabs";
import type { BottomTabsParamList } from "../../shared/navigation/BottomTabs";
import type { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";

type Props = {};

const Notes = ({
  route,
  navigation,
}: MaterialBottomTabScreenProps<BottomTabsParamList, "Notes">) => {
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
              <Ionicons name="hardware-chip" color={color} size={26} />
            ) : (
              <Ionicons name="hardware-chip-outline" color={color} size={26} />
            );
          },
        }}
      />
      <NotesTab.Screen
        name="CloudNotes"
        component={CloudNotes}
        options={{
          tabBarAccessibilityLabel: "notes stored in cloud",
          tabBarLabel: "Cloud Notes",
          tabBarIcon: ({ focused, color }) => {
            return focused === true ? (
              <MaterialCommunityIcons name="cloud" color={color} size={26} />
            ) : (
              <MaterialCommunityIcons
                name="cloud-outline"
                color={color}
                size={26}
              />
            );
          },
        }}
      />
    </NotesTab.Navigator>
  );
};

export default Notes;

const styles = StyleSheet.create({});

const CloudNotes = () => {
  return (
    <View>
      <Text>Cloud Notes</Text>
    </View>
  );
};

const DeviceNotes = () => {
  return (
    <View>
      <Text>Device Notes</Text>
    </View>
  );
};
