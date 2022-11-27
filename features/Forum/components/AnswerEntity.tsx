import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import React from "react";

type Props = {
  content: string;
  author: string;
  creationDate: string;
};

const AnswerEntity = ({ author, content, creationDate }: Props) => {
  return (
    <TouchableWithoutFeedback>
      <View style={{ marginTop: 6 }}>
        <View
          style={{
            maxWidth: Dimensions.get("screen").width * 0.8,
            backgroundColor: "#86a6f2",
            alignSelf: "flex-end",
            marginHorizontal: 10,
            padding: 10,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
            }}
          >
            {content}
          </Text>
          <Text
            style={{
              color: "#dfe4ea",
              fontSize: 12,
              alignSelf: "flex-end",
            }}
          >
            {author}
          </Text>
          <Text
            style={{
              color: "#dfe4ea",
              fontSize: 12,
              alignSelf: "flex-end",
            }}
          >
            {creationDate}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AnswerEntity;

const styles = StyleSheet.create({});
