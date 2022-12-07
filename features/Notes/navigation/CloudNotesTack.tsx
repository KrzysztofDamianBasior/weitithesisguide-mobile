import React from "react";

import type { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import { NotesStack } from "./NotesStack";

import type { NotesTabsParamList } from "./NotesTabs";

import Note from "../screens/Note";
import CloudNotes from "../screens/CloudNotes";

export const CloudNotesStack = ({
  navigation,
  route,
}: MaterialTopTabScreenProps<NotesTabsParamList>) => {
  return (
    <NotesStack.Navigator initialRouteName="AllNotes">
      <NotesStack.Screen
        name="AllNotes"
        component={CloudNotes}
        options={{ headerShown: false }}
      />
      <NotesStack.Screen name={"Note"} component={Note} />
    </NotesStack.Navigator>
  );
};
