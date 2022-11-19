import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { List } from "react-native-paper";

import type { NotesStackParamList } from "../navigation/NotesStack";
import type { StackScreenProps } from "@react-navigation/stack";
import { AnimatedFAB } from "react-native-paper";

import type { NotesType, NoteType } from "../types";
import { getNotes } from "../utils";
import { createNote } from "../utils/createNote";

export default function DeviceNotes({
  route,
  navigation,
}: StackScreenProps<NotesStackParamList, "AllNotes">) {
  const [notes, setNotes] = useState<NotesType>([]);
  const [isExtended, setIsExtended] = useState<boolean>(false);

  useFocusEffect(
    React.useCallback(() => {
      fetchNotes();
    }, [])
  );

  const fetchNotes = async () => {
    const notes = await getNotes();
    setNotes(notes);
  };

  const renderNoteThumb = (note: NoteType) => (
    <List.Item
      key={note.id}
      title={note.title}
      description={`last modified on ${note.modificationDate}`}
      left={() => <List.Icon icon="note-text" />}
      onPress={() => navigation.navigate("Note", { note })}
      // color={MD3Colors.tertiary70}
    />
  );

  const addNewNote = async () => {
    const newNote = await createNote();
    navigation.navigate("Note", { note: newNote });
  };

  return (
    <View style={{ backgroundColor: "#222B45", flex: 1 }}>
      <List.Section>
        <List.Subheader>Your notes</List.Subheader>
        {notes.map((note) => renderNoteThumb(note))}
      </List.Section>
      <AnimatedFAB
        icon={"plus"}
        label={"Create note"}
        extended={isExtended}
        onPress={() => {
          if (isExtended) {
            setIsExtended(false);
            addNewNote();
          } else {
            setIsExtended(true);
          }
        }}
        animateFrom={"right"}
        iconMode={"static"}
        style={[styles.fabStyle]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: "absolute",
  },
});
