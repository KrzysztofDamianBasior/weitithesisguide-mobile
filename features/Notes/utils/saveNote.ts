import AsyncStorage from "@react-native-async-storage/async-storage";
import type { NoteType } from "../types";
import { getNotes } from "./getNotes";

export const saveNote = async (newNote: NoteType) => {
  const notes = await getNotes();
  const newNotes = notes.filter((note) => note.id !== newNote.id);
  newNotes.push(newNote);
  await AsyncStorage.setItem("NOTES", JSON.stringify(newNotes));
};
