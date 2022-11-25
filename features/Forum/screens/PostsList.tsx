import React, { useEffect, useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { ForumStackParamList } from "../navigation";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { List } from "react-native-paper";
import type { PostsListType } from "../types";
import PostThumb from "../components/PostThumb";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const AllPosts = ({
  route,
  navigation,
}: StackScreenProps<ForumStackParamList, "PostsList">) => {
  const [allPosts, setAllPosts] = useState<PostsListType>([
    {
      id: "id0",
      creationDate: "11/25/2022",
      author: "Jaxson Bowman",
      title: "post title",
      content: "post content",
      likes: 5,
      dislikes: 4,
      tags: ["first tag", "second tag", "third tag"],
    },
    {
      id: "id1",
      creationDate: "11/25/2022",
      author: "Branden Corona",
      title: "another title",
      content: "another content",
      likes: 10,
      dislikes: 1,
      tags: ["1 tag", "2 tag", "3 tag"],
    },
    {
      id: "id2",
      creationDate: "11/25/2022",
      author: "Patrycja Lawrence",
      title: "different title",
      content: "different content",
      likes: 2,
      dislikes: 0,
      tags: ["1", "2", "3", "4", "5"],
    },
  ]);

  navigation.setOptions({
    title: "Forum",
    headerTitleStyle: { fontSize: 18 },
    headerStyle: { backgroundColor: "#483c03" },
    headerRight: () => (
      <TouchableOpacity style={{ marginHorizontal: 20 }}>
        <List.Icon
          icon="frequently-asked-questions"
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    ),
  });

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 10,
          backgroundColor: "#fafafa",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRightColor: "#dfe4ea",
            borderRightWidth: 1,
          }}
        >
          <MaterialCommunityIcons name="sort" size={20} color="#000" />
          <Text
            style={{
              marginHorizontal: 10,
              fontSize: 20,
            }}
          >
            Sort
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <MaterialCommunityIcons name="filter" size={20} color="#000" />
          </View>
          <Text
            style={{
              marginHorizontal: 10,
              fontSize: 20,
            }}
          >
            Filter
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {allPosts.map((post) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Post")}
            key={post.title}
          >
            <PostThumb {...post} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default AllPosts;
