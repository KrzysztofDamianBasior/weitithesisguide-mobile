import { StyleSheet, Text, View } from "react-native";
import React from "react";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NotesTab } from "../../shared/navigation/NotesTabs";
import type { NotesTabsParamList } from "../../shared/navigation/NotesTabs";
import type { BottomTabsParamList } from "../../shared/navigation/BottomTabs";
import type { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";
import type { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import type { StackScreenProps } from "@react-navigation/stack";
import { NotesStack } from "./navigation/NotesStack";
import type { NotesStackParamList } from "./navigation/NotesStack";
import { AnimatedFAB } from "react-native-paper";

import Note from "./screens/Note";
import DeviceNotes from "./screens/DeviceNotes";
import CloudNotes from "./screens/CloudNotes";

import { StatusBar } from "expo-status-bar";

const Notes = ({
  route,
  navigation,
}: MaterialBottomTabScreenProps<BottomTabsParamList, "Notes">) => {
  return (
    <>
      <StatusBar hidden={true} />

      <NotesTab.Navigator initialRouteName="DeviceNotes">
        <NotesTab.Screen
          name="DeviceNotes"
          component={DeviceNotesStack}
          options={{
            tabBarAccessibilityLabel: "notes stored in your device",
            tabBarLabel: "Device Notes",
            tabBarIcon: ({ focused, color }) => {
              return focused === true ? (
                <Ionicons name="hardware-chip" color={color} size={26} />
              ) : (
                <Ionicons
                  name="hardware-chip-outline"
                  color={color}
                  size={26}
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
    </>
  );
};

export default Notes;

const CloudNotesStack = ({
  navigation,
  route,
}: MaterialTopTabScreenProps<NotesTabsParamList>) => {
  return (
    <NotesStack.Navigator initialRouteName="AllNotes">
      <NotesStack.Screen
        name="AllNotes"
        component={CloudNotes}
        // options={{ headerShown: false }}
      />
      <NotesStack.Screen
        name={"Note"}
        component={Note}
        // options={{ headerShown: false }}
      />
    </NotesStack.Navigator>
  );
};

const DeviceNotesStack = ({
  navigation,
  route,
}: MaterialTopTabScreenProps<NotesTabsParamList>) => {
  const hideTabBar = () =>
    navigation.setOptions({ tabBarStyle: { display: "flex" } });
  return (
    <NotesStack.Navigator initialRouteName="AllNotes">
      <NotesStack.Screen
        name="AllNotes"
        component={DeviceNotes}
        options={{ headerShown: false }}
      />
      <NotesStack.Screen
        name={"Note"}
        component={Note}
        // options={{ headerShown: false }}
      />
    </NotesStack.Navigator>
  );
};
