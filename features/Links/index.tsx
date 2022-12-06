import { StyleSheet, Text, View } from "react-native";
import React from "react";
import type { CoreStackParamList } from "../../shared/navigation/CoreStack";
import type { StackScreenProps } from "@react-navigation/stack";

const Links = ({
  navigation,
  route,
}: StackScreenProps<CoreStackParamList, "Links">) => {
  return (
    <View>
      <Text>links</Text>
    </View>
  );
};

export default Links;

const styles = StyleSheet.create({});
