import { StyleSheet, Text, View } from "react-native";
import React from "react";
import type { CoreStackParamList } from "../../navigation/CoreStack";
import type { StackScreenProps } from "@react-navigation/stack";
import { Button } from "react-native-paper";
type Props = {};

const Forum = ({
  navigation,
  route,
}: StackScreenProps<CoreStackParamList, "Forum">) => {
  return (
    <View>
      <Text>Forum</Text>
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
        onPress={() => navigation.navigate("Links")}
      >
        links
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

export default Forum;

const styles = StyleSheet.create({});
