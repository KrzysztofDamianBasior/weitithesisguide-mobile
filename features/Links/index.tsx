import { StyleSheet, Text, View } from "react-native";
import React from "react";
import type { CoreStackParamList } from "../../shared/navigation/CoreStack";
import type { StackScreenProps } from "@react-navigation/stack";

import { Button } from "react-native-paper";

type Props = {};

const Links = ({
  navigation,
  route,
}: StackScreenProps<CoreStackParamList, "Links">) => {
  return (
    <View>
      <Text>links</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate("Forum")}
      >
        forum
      </Button>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate("HomeTabs", { screen: "Home" })}
      >
        Home
      </Button>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate("Guide")}
      >
        guide
      </Button>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate("Quiz")}
      >
        quiz
      </Button>
    </View>
  );
};

export default Links;

const styles = StyleSheet.create({});
