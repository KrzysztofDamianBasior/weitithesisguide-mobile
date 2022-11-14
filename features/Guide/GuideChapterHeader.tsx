import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Appbar, useTheme } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";

import { GuideStackParamList } from "../../shared/navigation/GuideStack";

const GuideChapterHeader = ({
  navigation,
  route,
  options,
  back,
}: StackHeaderProps) => {
  const theme = useTheme();

  // @ts-ignore
  const { chapterNumber } = route.params;

  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.surface }}>
      <Appbar.BackAction
        onPress={() => {
          navigation.navigate("TableOfContents");
        }}
      />
      <Appbar.Content title={`Chapter ${chapterNumber}`} />
    </Appbar.Header>
  );
};

export default GuideChapterHeader;

const styles = StyleSheet.create({});
