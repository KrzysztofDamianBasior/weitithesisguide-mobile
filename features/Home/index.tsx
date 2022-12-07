import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  useWindowDimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import type { CoreStackParamList } from "../../shared/navigation/CoreStack";
import type { StackScreenProps } from "@react-navigation/stack";

import type { CompositeScreenProps } from "@react-navigation/native";

import type { BottomTabsParamList } from "../../shared/navigation/BottomTabs";
import type { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";

import { useTheme } from "react-native-paper";
import * as Animatable from "react-native-animatable";

import BackgroundLink from "../../shared/assets/links.jpg";
import BackgroundForum from "../../shared/assets/forum.jpg";
import BackgroundGuide from "../../shared/assets/guide.jpg";
import BackgroundQuiz from "../../shared/assets/quiz.jpg";

const Home = ({
  navigation,
  route,
}: CompositeScreenProps<
  MaterialBottomTabScreenProps<BottomTabsParamList, "Home">,
  StackScreenProps<CoreStackParamList>
>) => {
  const paperTheme = useTheme();
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} barStyle="light-content" />
      <Animatable.View
        animation="slideInDown"
        direction="alternate"
        easing="ease-out"
        iterationCount="infinite"
        style={styles.bigCircle}
        duration={8000}
      ></Animatable.View>
      <Animatable.View
        animation="slideInUp"
        direction="alternate"
        easing="ease-out"
        iterationCount="infinite"
        style={styles.smallCircle}
        duration={3500}
      ></Animatable.View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animatable.Text
          style={styles.titleText}
          animation="fadeInUp"
          delay={1200}
        >
          Weiti Thesis Guide
        </Animatable.Text>
      </View>
      <View
        style={{
          flex: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Forum")}
            style={{ borderRadius: 20 }}
          >
            <View
              style={{
                width: 150,
                height: 150,
                margin: 10,
                borderRadius: 20,
                backgroundColor: "#000",
              }}
            >
              <ImageBackground
                source={BackgroundForum}
                resizeMode="cover"
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
                imageStyle={{ borderRadius: 20, opacity: 0.2 }}
              >
                <Text
                  style={{
                    color: paperTheme.colors.text,
                    fontSize: 25,
                    alignSelf: "center",
                    opacity: 1,
                  }}
                >
                  Forum
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Links")}
            style={{ borderRadius: 20 }}
          >
            <View
              style={{
                width: 150,
                height: 150,
                margin: 10,
                borderRadius: 20,
                backgroundColor: "#000",
              }}
            >
              <ImageBackground
                source={BackgroundLink}
                resizeMode="cover"
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
                imageStyle={{ borderRadius: 20, opacity: 0.2 }}
              >
                <Text
                  style={{
                    color: paperTheme.colors.text,
                    fontSize: 25,
                    alignSelf: "center",
                  }}
                >
                  Links
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Guide")}
            style={{ borderRadius: 20 }}
          >
            <View
              style={{
                width: 150,
                height: 150,
                margin: 10,
                borderRadius: 20,
                backgroundColor: "#000",
              }}
            >
              <ImageBackground
                source={BackgroundGuide}
                resizeMode="cover"
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
                imageStyle={{ borderRadius: 20, opacity: 0.2 }}
              >
                <Text
                  style={{
                    color: paperTheme.colors.text,
                    fontSize: 25,
                    alignSelf: "center",
                  }}
                >
                  Guide
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Quiz")}
            style={{ borderRadius: 20 }}
          >
            <View
              style={{
                width: 150,
                height: 150,
                margin: 10,
                borderRadius: 20,
                backgroundColor: "#000",
              }}
            >
              <ImageBackground
                source={BackgroundQuiz}
                resizeMode="cover"
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
                imageStyle={{ borderRadius: 20, opacity: 0.2 }}
              >
                <Text
                  style={{
                    color: paperTheme.colors.text,
                    fontSize: 25,
                    alignSelf: "center",
                  }}
                >
                  Quiz
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  bigCircle: {
    width: Dimensions.get("window").height * 0.7,
    height: Dimensions.get("window").height * 0.7,
    backgroundColor: "#164c5a",
    opacity: 0.3,
    borderRadius: 1000,
    position: "absolute",
    right: Dimensions.get("window").width * 0.5,
    top: Dimensions.get("window").height * 0.2,
  },
  smallCircle: {
    width: Dimensions.get("window").height * 0.5,
    height: Dimensions.get("window").height * 0.5,
    backgroundColor: "#0d192e",
    borderRadius: 1000,
    position: "absolute",
    top: Dimensions.get("window").width * -0.2,
    right: Dimensions.get("window").width * -0.4,
    opacity: 0.5,
  },
  container: {
    flex: 1,
  },
  titleText: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 40,
    marginTop: 60,
  },
});
