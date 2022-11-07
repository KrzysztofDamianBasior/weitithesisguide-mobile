import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GuideStack } from "../../navigation/GuideStack";
import type { GuideStackParamList } from "../../navigation/GuideStack";
import type { CoreStackParamList } from "../../navigation/CoreStack";
import type { StackScreenProps } from "@react-navigation/stack";

import { Button } from "react-native-paper";

type Props = {};

const Guide = ({
  navigation,
  route,
}: StackScreenProps<CoreStackParamList, "Guide">) => {
  return (
    <GuideStack.Navigator>
      <GuideStack.Screen name="TableOfContents" component={Guide1} />
      <GuideStack.Screen name="Chapter" component={Guide2} />
    </GuideStack.Navigator>
  );
};

export default Guide;

const styles = StyleSheet.create({});

function Guide1({
  navigation,
  route,
}: StackScreenProps<GuideStackParamList, "TableOfContents">) {
  return (
    <View>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate("Chapter")}
      >
        Chapter
      </Button>
    </View>
  );
}
function Guide2({
  navigation,
  route,
}: StackScreenProps<GuideStackParamList, "Chapter">) {
  return (
    <View>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate("TableOfContents")}
      >
        Table of contents
      </Button>
    </View>
  );
}
