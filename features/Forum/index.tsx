import React from "react";
import { StyleSheet } from "react-native";
import type { CoreStackParamList } from "../../shared/navigation/CoreStack";
import type { StackScreenProps } from "@react-navigation/stack";
import { ForumStack } from "./navigation";
import Post from "./screens/Post";
import PostsList from "./screens/PostsList";

const Forum = ({
  navigation,
  route,
}: StackScreenProps<CoreStackParamList, "Forum">) => {
  return (
    <ForumStack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "transparent" },
      }}
    >
      <ForumStack.Screen name="PostsList" component={PostsList} />
      <ForumStack.Screen name="Post" component={Post} />
    </ForumStack.Navigator>
  );
};

export default Forum;
