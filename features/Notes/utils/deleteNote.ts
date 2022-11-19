import AsyncStorage from "@react-native-async-storage/async-storage";
import { getNotes } from "./getNotes";

export const deleteNote = async (id: string) => {
  const notes = await getNotes();
  const newNotes = notes.filter((note) => note.id !== id);
  await AsyncStorage.setItem("NOTES", JSON.stringify(newNotes));
};
