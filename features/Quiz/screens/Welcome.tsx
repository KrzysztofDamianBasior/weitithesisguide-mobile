import { StyleSheet, useWindowDimensions } from "react-native";
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

import { fontStyles } from "../../../shared/utils/normalizeFontSize";

const Welcome = () => {
  const { height, width } = useWindowDimensions();
  const theme = useTheme();
  const { start } = useContext(QuizContext);

  return (
    <SafeAreaView style={styles.welcomeContainer}>
      <Surface
        style={[
          styles.surface,
          // { width: (width * 80) / 100, height: (height * 50) / 100 },
        ]}
      >
        <Headline
          style={[
            {
              padding: 10,
              fontSize: fontStyles.large,
              textAlign: "center",
              textTransform: "capitalize",
              margin: 50,
              color: theme.colors.accent,
            },
          ]}
        >
          Eiti Thesis Quiz
        </Headline>
        <Paragraph style={[{ padding: 5, fontSize: fontStyles.small }]}>
          The quiz will help you find a thesis supervisor and the topic of your
          diploma thesis
        </Paragraph>

        <Paragraph style={[{ padding: 5, fontSize: fontStyles.small }]}>
          Find out which institute suits you best and in what thesis topic you
          will find fulfillment
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
        Start the quiz
      </Button>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcomeContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: { justifyContent: "center", alignItems: "center", margin: 10 },
  surface: {
    display: "flex",
    alignItems: "center",
    elevation: 4,
    width: "80%",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
