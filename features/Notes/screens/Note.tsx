import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  useWindowDimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";

import type { NotesStackParamList } from "../navigation/NotesStack";
import type { StackScreenProps } from "@react-navigation/stack";
import type { NoteType } from "../types";
import { deleteNote, saveNote } from "../utils";

import { FAB } from "react-native-paper";

import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Note = ({
  route,
  navigation,
}: StackScreenProps<NotesStackParamList, "Note">) => {
  const [note, setNote] = useState<NoteType>(route.params.note);

  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerRight: () => (
        <View
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            width: 150,
            height: 40,
          }}
        >
          <TouchableOpacity onPress={() => saveNote(note)}>
            <MaterialCommunityIcons
              name="content-save"
              color="#fff"
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteNote(note.id)}>
            <MaterialCommunityIcons name="delete" color="#fff" size={40} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [note]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          value={note.title}
          onChangeText={(text) => {
            setNote((prev) => ({ ...prev, title: text }));
          }}
          style={{ color: "#fff", fontSize: 22 }}
          multiline={true}
          numberOfLines={1}
          placeholder={"title"}
          selectionColor="#fff"
        />
        <TextInput
          value={note.content}
          onChangeText={(text) => {
            setNote((prev) => ({ ...prev, content: text }));
          }}
          style={{ color: "#fff", fontSize: 22 }}
          multiline={true}
          placeholder={"content"}
          selectionColor="#fff"
          numberOfLines={100}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  bottom: {
    width: "100%",
    height: "20%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {},
  fab: {},
});
