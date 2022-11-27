import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import type { PostThumbType } from "../types";

const PostHeader = ({
  author,
  content,
  creationDate,
  dislikes,
  likes,
  tags,
  title,
}: PostThumbType) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        width: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderBottomColor: "#000",
        }}
      >
        <View>
          <Text style={{ color: "#000", fontSize: 15 }}>{title}</Text>
          <Text style={{ color: "#000", fontSize: 15 }}>{content}</Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <Text style={{ color: "#000" }}>{author}</Text>
          <Text style={{ color: "#000" }}>{creationDate}</Text>
          <Text style={{ color: "#000" }}>{tags}</Text>
        </View>
      </View>
      <View style={{ alignSelf: "center", flexDirection: "row" }}>
        <TouchableOpacity
          style={{ flexDirection: "column", marginHorizontal: 15 }}
        >
          <MaterialCommunityIcons name="thumb-up" color="#111" size={20} />
          <Text style={{ color: "#000" }}>{likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "column" }}>
          <MaterialCommunityIcons name="thumb-down" color="#111" size={20} />
          <Text style={{ color: "#000" }}>{dislikes}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({});
