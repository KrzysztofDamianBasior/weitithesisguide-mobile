import React, { useContext } from "react";
import { Appbar, useTheme } from "react-native-paper";

import { StackHeaderProps } from "@react-navigation/stack";
import { GuideStackParamList } from "../../../shared/navigation/GuideStack";

import { ThemeContext } from "../../../shared/context/ThemeContext";

const GuideChapterHeader = ({
  navigation,
  route,
  options,
  back,
}: StackHeaderProps) => {
  const theme = useTheme();
  const { isThemeDark, toggleTheme } = useContext(ThemeContext);

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
      <Appbar.Action
        icon="theme-light-dark"
        onPress={() => {
          toggleTheme();
        }}
      />
    </Appbar.Header>
  );
};

export default GuideChapterHeader;
