import React, { useContext } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  useTheme,
  Paragraph,
  Text,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { QuizContext } from "../quizContext";
import { findQuizResult } from "../utils/findQuizResult";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { CoreStackParamList } from "../../../shared/navigation/CoreStack";
import useOrientation from "../../../shared/hooks/useOrientation";
import { fontStyles } from "../../../shared/utils/normalizeFontSize";

const Farwell = () => {
  const theme = useTheme();
  const { quiz, restart } = useContext(QuizContext);
  const { title, subtitle, content, cover } = findQuizResult(
    quiz.selectedAnswers
  );
  const { height, width } = useWindowDimensions();
  const navigation =
    useNavigation<StackNavigationProp<CoreStackParamList, "Quiz">>();
  const orientation = useOrientation();

  return (
    <SafeAreaView style={styles.farwellContainer}>
      <View style={styles.farwellContent}>
        <Card style={styles.card}>
          <Card.Title
            title={title}
            subtitle={subtitle}
            left={() => <Avatar.Icon icon="ship-wheel" />}
          />
          {orientation === "PORTRAIT" && (
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          )}
          <Card.Content>
            <Paragraph>{content}</Paragraph>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.farwellFooter}>
        <Button
          mode="contained"
          icon="step-backward"
          onPress={() => {
            restart();
          }}
          style={
            orientation === "PORTRAIT"
              ? styles.buttonPortrait
              : styles.buttonLandscape
          }
        >
          repeat
        </Button>
        <Button
          mode="contained"
          icon="home-import-outline"
          onPress={() => {
            navigation.navigate("HomeTabs", { screen: "Home" });
          }}
          style={
            orientation === "PORTRAIT"
              ? styles.buttonPortrait
              : styles.buttonLandscape
          }
        >
          homescreen
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Farwell;

const styles = StyleSheet.create({
  farwellContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  farwellContent: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "70%",
  },
  farwellFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    height: "30%",
  },
  card: {
    width: "90%",
    height: "100%",
  },
  buttonPortrait: {
    width: "40%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLandscape: {
    width: "40%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});
