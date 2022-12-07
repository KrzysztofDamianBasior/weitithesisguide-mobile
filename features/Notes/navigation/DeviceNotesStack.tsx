import React from "react";

import type { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import { NotesStack } from "./NotesStack";
import type { NotesTabsParamList } from "./NotesTabs";

import Note from "../screens/Note";
import DeviceNotes from "../screens/DeviceNotes";

export const DeviceNotesStack = ({
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
      <NotesStack.Screen name={"Note"} component={Note} />
    </NotesStack.Navigator>
  );
};
