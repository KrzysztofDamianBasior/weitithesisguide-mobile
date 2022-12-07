import React from "react";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

import type { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";

import { NotesTab } from "./navigation/NotesTabs";
import type { BottomTabsParamList } from "../../shared/navigation/BottomTabs";

import { StatusBar } from "expo-status-bar";

import { DeviceNotesStack } from "./navigation/DeviceNotesStack";
import { CloudNotesStack } from "./navigation/CloudNotesTack";
import { NotesStack } from "./navigation/NotesStack";
import AllNotes from "./navigation/AllNotes";
import Note from "./screens/Note";

const Notes = ({
  route,
  navigation,
}: MaterialBottomTabScreenProps<BottomTabsParamList, "Notes">) => {
  return (
    <>
      <StatusBar hidden={true} />
      <NotesStack.Navigator initialRouteName="AllNotes">
        <NotesStack.Screen
          name="AllNotes"
          component={AllNotes}
          options={{ headerShown: false }}
        />
        <NotesStack.Screen name={"Note"} component={Note} />
      </NotesStack.Navigator>

      {/* <NotesTab.Navigator initialRouteName="DeviceNotes">
        <NotesTab.Screen
          name="DeviceNotes"
          component={DeviceNotesStack}
          options={{
            tabBarAccessibilityLabel: "notes stored in your device",
            tabBarLabel: "Device Notes",
            tabBarIcon: ({ focused, color }) => {
              return focused === true ? (
                <Ionicons name="hardware-chip" color={color} size={24} />
              ) : (
                <Ionicons
                  name="hardware-chip-outline"
                  color={color}
                  size={24}
                />
              );
            },
          }}
        />
        <NotesTab.Screen
          name="CloudNotes"
          component={CloudNotesStack}
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
      </NotesTab.Navigator> */}
    </>
  );
};

export default Notes;
