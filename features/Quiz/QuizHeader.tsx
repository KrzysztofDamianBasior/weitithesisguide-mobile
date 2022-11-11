import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Appbar, useTheme } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";

const QuizHeader = ({ navigation, route, options, back }: StackHeaderProps) => {
  const theme = useTheme();
  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.surface }}>
      <Appbar.BackAction
        onPress={() => {
          navigation.navigate("HomeTabs");
        }}
      />
      <Appbar.Content title="Quiz" />
    </Appbar.Header>
  );
};

export default QuizHeader;

const styles = StyleSheet.create({});
