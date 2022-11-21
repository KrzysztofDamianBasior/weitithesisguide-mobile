import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { useTheme } from "react-native-paper";

import { QuizContext } from "../quizContext";
import { ThemeContext } from "../../../shared/context/ThemeContext";
import { fontStyles } from "../../../shared/utils/normalizeFontSize";

const Header = () => {
  const { quiz } = useContext(QuizContext);
  const { isThemeDark } = useContext(ThemeContext);
  const theme = useTheme();
  let question = quiz.quizContent.filter(
    (question) => question.questionId === quiz.currentQuestionId
  );

  return (
    <View
      style={[
        styles.headerContainer,
        {
          backgroundColor: isThemeDark
            ? "rgba(1, 1, 1, 0.4)"
            : "rgba(255, 255, 255, 0.4)",
        },
      ]}
    >
      <Text
        style={[
          {
            color: theme.colors.accent,
            fontSize: fontStyles.medium,
          },
        ]}
      >
        {question[0].question}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 5,
    width: "90%",
    height: "12%",
  },
});
