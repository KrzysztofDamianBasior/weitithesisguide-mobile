import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

import { GuideStack } from "../../shared/navigation/GuideStack";
import type { GuideStackParamList } from "../../shared/navigation/GuideStack";
import type { CoreStackParamList } from "../../shared/navigation/CoreStack";
import type { StackScreenProps } from "@react-navigation/stack";

import GuideChapterHeader from "./components/GuideChapterHeader";
import GuideTableOfContentsHeader from "./components/GuideTableOfContentsHeader";

import Chapter from "./screens/Chapter";
import TableOfContents from "./screens/TableOfContents";

const Guide = ({
  navigation,
  route,
}: StackScreenProps<CoreStackParamList, "Guide">) => {
  return (
    <GuideStack.Navigator>
      <GuideStack.Screen
        name="TableOfContents"
        component={TableOfContents}
        options={({ route }) => ({
          header: (props) => <GuideTableOfContentsHeader {...props} />,
        })}
      />
      <GuideStack.Screen
        name="Chapter"
        component={Chapter}
        options={({ route }) => ({
          header: (props) => <GuideChapterHeader {...props} />,
        })}
      />
    </GuideStack.Navigator>
  );
};

export default Guide;
