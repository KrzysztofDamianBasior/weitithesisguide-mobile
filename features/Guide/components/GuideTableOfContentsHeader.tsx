import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Appbar, useTheme } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";

const GuideTableOfContentsHeader = ({
  navigation,
  route,
  options,
  back,
}: StackHeaderProps) => {
  const theme = useTheme();
  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.surface }}>
      <Appbar.BackAction
        onPress={() => {
          navigation.navigate("HomeTabs");
        }}
      />
      <Appbar.Content title="Table of contents" />
    </Appbar.Header>
  );
};

export default GuideTableOfContentsHeader;

const styles = StyleSheet.create({});
