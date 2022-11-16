import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { GuideStackParamList } from "../../../shared/navigation/GuideStack";
import Markdown from "react-native-markdown-display";

import alignResearchInterests from "../data/alignResearchInterests";
import data from "../data";

const Chapter = ({
  navigation,
  route,
}: StackScreenProps<GuideStackParamList, "Chapter">) => {
  const content = data[route.params.chapterNumber];

  return (
    <SafeAreaView style={style.chapterContainer}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ height: "100%" }}
      >
        {/* 
        // @ts-ignore */}
        <Markdown
          style={{
            body: { color: "black", fontSize: 20, textAlign: "justify" },
            heading1: { color: "purple" },
          }}
        >
          {content}
        </Markdown>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chapter;

const style = StyleSheet.create({
  chapterContainer: {
    padding: 15,
  },
});
