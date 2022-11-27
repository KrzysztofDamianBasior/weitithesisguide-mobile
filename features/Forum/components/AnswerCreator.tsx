import React, { useState, useContext } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";

import { getCurrentDate } from "../utils/getCurrentDate";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AuthContext } from "../../../shared/context/AuthContext";

type Props = {
  sendAnswer: (answer: string) => void;
};

const AnswerCreator = ({ sendAnswer }: Props) => {
  const authContext = useContext(AuthContext);
  const [answer, setAnswer] = useState<string>("");

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 14,
        backgroundColor: "#fff",
        borderRadius: 4,
        paddingVertical: 10,
      }}
    >
      <TextInput
        defaultValue={answer}
        style={{
          height: 40,
          flex: 1,
          paddingHorizontal: 10,
        }}
        placeholder="Message"
        onChangeText={(text) => setAnswer(text)}
        onSubmitEditing={() => {
          sendAnswer(answer);
          setAnswer("");
        }}
      />
      <TouchableOpacity
        style={{
          paddingHorizontal: 10,
          justifyContent: "center",
        }}
        onPress={() => {
          sendAnswer(answer);
          setAnswer("");
        }}
      >
        <MaterialCommunityIcons name="send-outline" />
      </TouchableOpacity>
    </View>
  );
};

export default AnswerCreator;

const styles = StyleSheet.create({});
