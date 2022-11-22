import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
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

import * as Animatable from "react-native-animatable";

const Home = ({
  navigation,
  route,
}: CompositeScreenProps<
  MaterialBottomTabScreenProps<BottomTabsParamList, "Home">,
  StackScreenProps<CoreStackParamList>
>) => {
  const paperTheme = useTheme();
  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.titleText}
        animation="fadeInUp"
        delay={1200}
      >
        Weiti Thesis Gudie
      </Animatable.Text>
      <View
        style={{
          alignSelf: "center",
        }}
      >
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
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  titleText: {
    position: "absolute",
    top: Dimensions.get("screen").height * 0.05,
    alignSelf: "center",
    color: "#fff",
    fontFamily: "SourceSansProBold",
    fontSize: 60,
  },
});
