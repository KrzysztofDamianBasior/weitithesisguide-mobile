import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { useWindowDimensions } from "react-native";
import { useTheme } from "react-native-paper";

import { GuideStack } from "../../shared/navigation/GuideStack";
import type { CoreStackParamList } from "../../shared/navigation/CoreStack";
import type { StackScreenProps } from "@react-navigation/stack";

import GuideChapterHeader from "./components/GuideChapterHeader";
import GuideTableOfContentsHeader from "./components/GuideTableOfContentsHeader";

import Chapter from "./screens/Chapter";
import TableOfContents from "./screens/TableOfContents";

import { ThemeContext } from "../../shared/context/ThemeContext";

const Guide = ({
  navigation,
  route,
}: StackScreenProps<CoreStackParamList, "Guide">) => {
  const { isThemeDark } = useContext(ThemeContext);
  const theme = useTheme();
  const { width, height } = useWindowDimensions();

  return (
    <>
      <StatusBar style={isThemeDark ? "light" : "dark"} />

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
    </>
  );
};

export default Guide;
