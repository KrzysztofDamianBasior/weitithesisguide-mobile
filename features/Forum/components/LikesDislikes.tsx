import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = { likes: number; dislikes: number };

const LikesDislikes = ({ likes, dislikes }: Props) => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        width: 100,
        height: 100,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 2,
        }}
      >
        <Text
          style={{
            color: "#111",
            fontSize: 16,
          }}
        >
          {likes}
        </Text>
        <MaterialCommunityIcons name="thumb-up" color="#111" size={20} />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 2,
        }}
      >
        <Text
          style={{
            color: "#111",
            fontSize: 16,
          }}
        >
          {dislikes}
        </Text>
        <MaterialCommunityIcons name="thumb-down" color="#111" size={20} />
      </View>
    </View>
  );
};

export default LikesDislikes;
