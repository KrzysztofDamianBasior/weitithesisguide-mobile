import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Dimensions,
} from "react-native";

import PostHeader from "../components/PostHeader";
import AnswerCreator from "../components/AnswerCreator";
import AnswerEntity from "../components/AnswerEntity";

import { ForumStackParamList } from "../navigation";
import { StackScreenProps } from "@react-navigation/stack";

import type { PostThumbType, AnswerType } from "../types";

import { ThemeContext } from "../../../shared/context/ThemeContext";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AuthContext } from "../../../shared/context/AuthContext";

import { getCurrentDate } from "../utils/getCurrentDate";

const Post = ({
  route,
  navigation,
}: StackScreenProps<ForumStackParamList, "Post">) => {
  const post = route.params.postThumbData;
  const { isThemeDark, toggleTheme } = useContext(ThemeContext);
  const authContext = useContext(AuthContext);
  const [answers, setAnswers] = useState<AnswerType[]>([
    {
      id: "1",
      author: "Nathaniel Bowers",
      content: "asdf",
      creationDate: "Fri, 25 Nov 2022 12:47:54 GMT",
    },
    {
      id: "2",
      author: "Laura Atkinson",
      content: "😊",
      creationDate: "Fri, 25 Nov 2022 12:47:54 GMT",
    },
    {
      id: "3",
      author: "Cindy Bush",
      content: "dfghdfg",
      creationDate: "Fri, 25 Nov 2022 12:47:54 GMT",
    },
    {
      id: "4",
      author: "Eric Lopez",
      content: "asdfqwer",
      creationDate: "Fri, 25 Nov 2022 12:47:54 GMT",
    },
    {
      id: "5",
      author: "David Heath",
      content: "zxcvasd",
      creationDate: "Fri, 25 Nov 2022 12:47:54 GMT",
    },
    {
      id: "6",
      author: "Christine Johnson",
      content: "rytufghj",
      creationDate: "Fri, 25 Nov 2022 12:47:54 GMT",
    },
    {
      id: "7",
      author: "Zachary Robbins",
      content: "xcbsdfgwer",
      creationDate: "Fri, 25 Nov 2022 12:48:23 GMT",
    },
  ]);

  const sendAnswer = (answer: string) => {
    if (answer !== "") {
      const creationDate = getCurrentDate();

      setAnswers((prevAnswers) => [
        ...prevAnswers,
        {
          author: authContext.authState.user.name
            ? "active user"
            : "no active user",
          content: answer,
          creationDate,
          id: creationDate,
        },
      ]);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerLeft: () => (
        <View
          style={{
            paddingVertical: 4,
            paddingHorizontal: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ paddingRight: 10 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialCommunityIcons name="arrow-left" color="#fff" size={20} />
          </TouchableOpacity>
          <Image
            style={{ height: "100%", aspectRatio: 1, borderRadius: 100 }}
            source={{ uri: "https://picsum.photos/250" }}
          />
          <View
            style={{
              paddingLeft: 10,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 18 }}>
              {"user.name"}
            </Text>
            <Text style={{ color: "#1e7613", fontSize: 10 }}>active user</Text>
          </View>
        </View>
      ),
      headerRight: () => (
        <MaterialCommunityIcons
          name="theme-light-dark"
          onPress={() => toggleTheme()}
          style={{ paddingRight: 10 }}
          color="#fff"
        />
      ),
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, backgroundColor: "#f2f2ff" }}>
        <PostHeader {...post} />
        <FlatList
          style={{ backgroundColor: "#f2f2ff" }}
          inverted={true}
          data={JSON.parse(JSON.stringify(answers)).reverse()}
          renderItem={({ item }) => (
            <AnswerEntity
              author={item.author}
              content={item.content}
              creationDate={item.creationDate}
            />
          )}
        />
        <AnswerCreator sendAnswer={sendAnswer} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Post;
