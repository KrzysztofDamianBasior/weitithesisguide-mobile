import React, { useContext } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  useTheme,
  Paragraph,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { QuizContext } from "../quizContext";
import { findQuizResult } from "../utils/findQuizResult";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { CoreStackParamList } from "../../../shared/navigation/CoreStack";

const Farwell = () => {
  const theme = useTheme();
  const { quiz, restart } = useContext(QuizContext);
  const { title, subtitle, content, cover } = findQuizResult(
    quiz.selectedAnswers
  );
  const { height, width } = useWindowDimensions();
  const navigation =
    useNavigation<StackNavigationProp<CoreStackParamList, "Quiz">>();

  return (
    <SafeAreaView style={styles.farwellContainer}>
      <View style={styles.farwellContent}>
        <Card>
          <Card.Title
            title={title}
            subtitle={subtitle}
            left={() => <Avatar.Icon icon="ship-wheel" />}
          />
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
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
        >
          repeat the quiz
        </Button>
        <Button
          mode="contained"
          icon="home-import-outline"
          onPress={() => {
            navigation.navigate("HomeTabs", { screen: "Home" });
          }}
        >
          return to homescreen
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Farwell;

const styles = StyleSheet.create({
  farwellContainer: {
    // justifyContent: "center",
    // alignItems: "center",
  },
  farwellContent: {
    // justifyContent: "center",
    // alignItems: "center",
  },
  farwellFooter: {
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
