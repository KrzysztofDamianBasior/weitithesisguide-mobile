import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import type { CoreStackParamList } from "../../shared/navigation/CoreStack";
import type { StackScreenProps } from "@react-navigation/stack";

import type { CompositeScreenProps } from "@react-navigation/native";
import type { CompositeNavigationProp } from "@react-navigation/native";

import type { BottomTabsParamList } from "../../shared/navigation/BottomTabs";
import type { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";

import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { Button } from "react-native-paper";

import BackgroundDark from "../../assets/background-dark.jpg";
// import BackgroundLight from "./assets/background-light.jpg";

const Home = ({
  navigation,
  route,
}: CompositeScreenProps<
  MaterialBottomTabScreenProps<BottomTabsParamList, "Home">,
  StackScreenProps<CoreStackParamList>
>) => {
  const paperTheme = useTheme();
  return (
    <View>
      <Text>home</Text>
      <Button
        icon="camera"
        mode="outlined"
        onPress={() => navigation.navigate("Forum")}
        color={paperTheme.colors.text}
        // type="outlined"
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
