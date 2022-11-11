import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GuideStack } from "../../navigation/GuideStack";
import type { GuideStackParamList } from "../../navigation/GuideStack";
import type { CoreStackParamList } from "../../navigation/CoreStack";
import type { StackScreenProps } from "@react-navigation/stack";

import { Button } from "react-native-paper";

import GuideChapterHeader from "./GuideChapterHeader";
import GuideTableOfContentsHeader from "./GuideTableOfContentsHeader";

const Guide = ({
  navigation,
  route,
}: StackScreenProps<CoreStackParamList, "Guide">) => {
  return (
    <GuideStack.Navigator>
      <GuideStack.Screen
        name="TableOfContents"
        component={Guide1}
        // options={{ headerShown: false }}
        options={({ route }) => ({
          header: (props) => <GuideTableOfContentsHeader {...props} />,
        })}
      />
      <GuideStack.Screen
        name="Chapter"
        component={Guide2}
        options={({ route }) => ({
          header: (props) => <GuideChapterHeader {...props} />,
        })}
      />
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
        onPress={() => navigation.navigate("Chapter", { chapterNumber: 1 })}
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
