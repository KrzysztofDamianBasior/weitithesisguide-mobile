import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import {
  Surface,
  Paragraph,
  Headline,
  Button,
  useTheme,
} from "react-native-paper";
import React, { useContext } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { QuizContext } from "../quizContext";

const Welcome = () => {
  const { height, width } = useWindowDimensions();
  const theme = useTheme();
  const { start } = useContext(QuizContext);

  return (
    <SafeAreaView style={styles.welcomeContainer}>
      <Surface
        style={[
          styles.surface,
          { width: (width * 80) / 100, height: (height * 50) / 100 },
        ]}
      >
        <Headline>welcome to our quiz</Headline>
        <Paragraph>
          this quiz will help you find a promoter and the topic of your diploma
          thesis
        </Paragraph>
      </Surface>
      <Button
        mode="contained"
        style={[
          styles.button,
          { width: (width * 50) / 100, height: (height * 10) / 100 },
        ]}
        onPress={() => {
          start();
        }}
        contentStyle={{
          justifyContent: "center",
          alignItems: "center",
          width: (width * 50) / 100,
          height: (height * 10) / 100,
        }}
      >
        quiz
      </Button>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    alignItems: "center",
  },
  button: { justifyContent: "center", alignItems: "center", margin: 10 },
  surface: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
});
