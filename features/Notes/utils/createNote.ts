import type { NoteType } from "../types";
import { saveNote } from "./saveNote";

export const createNote = async (): Promise<NoteType> => {
  const currentDate = new Date().toLocaleString();

  const note: NoteType = {
    id: currentDate,
    content: "",
    modificationDate: currentDate,
    title: "",
  };

  await saveNote(note);

  return note;
};
