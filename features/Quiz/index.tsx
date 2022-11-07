import { StyleSheet, Text, View } from "react-native";
import React from "react";
import type { CoreStackParamList } from "../../navigation/CoreStack";
import type { StackScreenProps } from "@react-navigation/stack";

import { Button } from "react-native-paper";

type Props = {};

const Quiz = ({
  navigation,
  route,
}: StackScreenProps<CoreStackParamList, "Quiz">) => {
  return (
    <View>
      <Text>quiz</Text>
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
        onPress={() => navigation.navigate("HomeTabs", { screen: "Home" })}
      >
        home
      </Button>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
