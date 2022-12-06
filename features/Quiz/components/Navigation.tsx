import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FAB, useTheme } from "react-native-paper";
import { QuizContext } from "../quizContext";
import useOrientation from "../../../shared/hooks/useOrientation";

type Props = {
  activeAnswerRowId: number | null;
  activeAnswerColumnId: number | null;
};

const Navigation = ({ activeAnswerColumnId, activeAnswerRowId }: Props) => {
  const { quiz, answerQuestion, goBack } = useContext(QuizContext);
  const orientation = useOrientation();
  const theme = useTheme();

  const firstQuestion = quiz.selectedAnswers.length === 0;
  let question = quiz.quizContent.filter(
    (question) => question.questionId === quiz.currentQuestionId
  );
  const lastQuestion =
    activeAnswerRowId === null || activeAnswerColumnId === null
      ? false
      : question[0].answers[activeAnswerRowId][activeAnswerColumnId]
          .nextQuestionId === null;
  const isAnswerNull =
    activeAnswerRowId !== null && activeAnswerColumnId !== null;

  return (
    <View
      style={[
        styles.centerContent,
        { position: "absolute" },
        orientation === "PORTRAIT"
          ? { bottom: 10, width: "100%" }
          : { left: 0, width: "20%" },
      ]}
    >
      <View style={styles.navigationOption}>
        {!firstQuestion && (
          <TouchableOpacity
            onPress={() => {
              if (isAnswerNull) {
                goBack();
              }
            }}
          >
            <FAB
              icon="menu-left"
              // label="previous question"
              style={styles.fab}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.navigationOption}>
        {isAnswerNull && lastQuestion ? (
          <TouchableOpacity
            onPress={() => {
              if (isAnswerNull) {
                answerQuestion({
                  answerColumnId: activeAnswerColumnId,
                  answerRowId: activeAnswerRowId,
                });
              }
            }}
          >
            <FAB
              icon="send-check"
              // label="see results"
              style={styles.fab}
              onPress={() =>
                answerQuestion({
                  answerColumnId: activeAnswerColumnId,
                  answerRowId: activeAnswerRowId,
                })
              }
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              if (isAnswerNull) {
                answerQuestion({
                  answerColumnId: activeAnswerColumnId,
                  answerRowId: activeAnswerRowId,
                });
              }
            }}
          >
            <FAB
              icon="menu-right"
              // label="next question"
              style={styles.fab}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  centerContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "20%",
  },

  navigationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navigationOption: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    margin: 5,
  },
});
