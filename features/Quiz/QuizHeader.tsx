import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import { Appbar, useTheme } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";

import { ThemeContext } from "../../shared/context/ThemeContext";

const QuizHeader = ({ navigation, route, options, back }: StackHeaderProps) => {
  const theme = useTheme();
  const { isThemeDark, toggleTheme } = useContext(ThemeContext);

  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.surface }}>
      <Appbar.BackAction
        onPress={() => {
          navigation.navigate("HomeTabs");
        }}
      />
      <Appbar.Content title="Quiz" />
      <Appbar.Action
        icon="theme-light-dark"
        onPress={() => {
          toggleTheme();
        }}
      />
    </Appbar.Header>
  );
};

export default QuizHeader;

const styles = StyleSheet.create({});
