import React from "react";
import { StyleSheet, Text, View } from "react-native";
import type { CoreStackParamList } from "../../navigation/CoreStack";
import type { StackScreenProps } from "@react-navigation/stack";

import { Button } from "react-native-paper";

type Props = {};

const Home = ({
  navigation,
  route,
}: StackScreenProps<CoreStackParamList, "HomeTabs">) => {
  return (
    <View>
      <Text>home</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate("Forum")}
      >
        Forum
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
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
