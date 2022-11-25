import { View, Image, Text } from "react-native";
import LikesDislikes from "./LikesDislikes";
import type { PostThumbType } from "../types";

const PostThumb = ({
  title,
  id,
  content,
  likes,
  dislikes,
  author,
  tags,
  creationDate,
}: PostThumbType) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginTop: 10,
        paddingVertical: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, paddingHorizontal: 8 }}>
          <LikesDislikes dislikes={dislikes} likes={likes} />
        </View>
        <View style={{ flex: 3 }}>
          <View>
            <Text style={{ fontSize: 22 }}>{title}</Text>
            <Text style={{ fontSize: 15 }}>author: {author}</Text>
            <Text style={{ fontSize: 15 }}>created at: {creationDate}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 17 }}>{content}</Text>
      </View>
      <View
        style={{
          paddingVertical: 5,
          paddingHorizontal: 5,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {tags.map((tag) => (
          <Text
            style={{
              marginTop: 5,
              marginBottom: 5,
              marginLeft: 5,
              marginRight: 5,
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: "#e0f8f8",
              paddingHorizontal: 5,
              paddingVertical: 5,
              borderRadius: 10,
            }}
          >
            {tag}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default PostThumb;
