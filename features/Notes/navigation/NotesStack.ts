import { createStackNavigator } from "@react-navigation/stack";
import type { NoteType } from "../types";

export type NotesStackParamList = {
  AllNotes: undefined;
  Note: { note: NoteType };
};

export const NotesStack = createStackNavigator<NotesStackParamList>();
