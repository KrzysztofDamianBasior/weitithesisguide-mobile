import React, { useContext } from "react";
import { ScrollView, useWindowDimensions } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Markdown from "react-native-markdown-display";

import { StackScreenProps } from "@react-navigation/stack";
import { GuideStackParamList } from "../../../shared/navigation/GuideStack";

import { fontStyles } from "../../../shared/utils/normalizeFontSize";
import { ThemeContext } from "../../../shared/context/ThemeContext";

import data from "../data";

const Chapter = ({
  navigation,
  route,
}: StackScreenProps<GuideStackParamList, "Chapter">) => {
  const theme = useTheme();
  const { isThemeDark } = useContext(ThemeContext);
  const { width, height } = useWindowDimensions();
  const content = data[route.params.chapterNumber];

  return (
    <SafeAreaView style={{ padding: 10 }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          height: "100%",
          padding: 5,
          backgroundColor: isThemeDark
            ? "rgba(1, 1, 1, 0.4)"
            : "rgba(255, 255, 255, 0.4)",
        }}
      >
        {/* 
        // @ts-ignore */}
        <Markdown
          style={{
            body: {
              color: theme.colors.text,
              fontSize: fontStyles.small,
              textAlign: "justify",
            },
            heading1: {
              color: theme.colors.accent,
              fontSize: fontStyles.large,
            },
          }}
        >
          {content}
        </Markdown>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chapter;
