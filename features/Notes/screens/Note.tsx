import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  useWindowDimensions,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";

import type { NotesStackParamList } from "../navigation/NotesStack";
import type { StackScreenProps } from "@react-navigation/stack";
import type { NoteType } from "../types";
import { deleteNote, saveNote } from "../utils";

import { FAB } from "react-native-paper";
const Note = ({
  route,
  navigation,
}: StackScreenProps<NotesStackParamList, "Note">) => {
  const [note, setNote] = useState<NoteType>(route.params.note);

  return (
    <View style={styles.container}>
      <TextInput
        value={note.title}
        onChangeText={(text) => {
          setNote((prev) => ({ ...prev, title: text }));
        }}
        style={{ color: "#fff", fontSize: 22 }}
        multiline={true}
        autoFocus
        selectionColor="#fff"
      />
      <TextInput
        value={note.content}
        onChangeText={(text) => {
          setNote((prev) => ({ ...prev, content: text }));
        }}
        style={{ color: "#fff", fontSize: 22 }}
        multiline={true}
        autoFocus
        selectionColor="#fff"
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.bottom}
      >
        <FAB
          icon="plus-circle-outline"
          label="Save"
          style={styles.fab}
          onPress={() => saveNote(note)}
        />
        <FAB
          icon="delete-empty-outline"
          label="Delete"
          style={styles.fab}
          onPress={() => deleteNote(note.id)}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {},
  bottom: {},
  button: {},
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
