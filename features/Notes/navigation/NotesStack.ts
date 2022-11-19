import { createStackNavigator } from "@react-navigation/stack";
import type { Note } from "../types";

export type NotesStackParamList = {
  AllNotes: undefined;
  Note: { note: Note };
};

export const NotesStack = createStackNavigator<NotesStackParamList>();
