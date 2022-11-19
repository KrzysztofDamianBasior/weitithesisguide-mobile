import AsyncStorage from "@react-native-async-storage/async-storage";
import type { NotesType } from "../types";

export const getNotes = async (): Promise<NotesType> => {
  try {
    const notes = await AsyncStorage.getItem("NOTES");

    if (notes !== null) {
      return JSON.parse(notes);
    } else {
      return [];
    }
  } catch (err) {
    return [];
  }
};
