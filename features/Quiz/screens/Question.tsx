import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { Text, useTheme } from "react-native-paper";

import Navigation from "../components/QuestionNavigation";
import Header from "../components/QuestionHeader";

import { QuizContext } from "../quizContext";
import { ThemeContext } from "../../../shared/context/ThemeContext";

import { fontStyles } from "../../../shared/utils/normalizeFontSize";

import useOrientation from "../../../shared/hooks/useOrientation";

const Question = ({}) => {
  const [activeQuestion, setActiveQuestion] = useState<{
    activeAnswerRowId: number | null;
    activeAnswerColumnId: number | null;
  }>({
    activeAnswerRowId: null,
    activeAnswerColumnId: null,
  });
  const { quiz } = useContext(QuizContext);
  const { isThemeDark } = useContext(ThemeContext);
  const theme = useTheme();
  const { height, width } = useWindowDimensions();
  const orientation = useOrientation();

  let question = quiz.quizContent.filter(
    (question) => question.questionId === quiz.currentQuestionId
  );
  let answers = question[0].answers;

  return (
    <View style={[styles.centerContent, { height: "100%", width: "100%" }]}>
      <Header />
      <View
        style={[
          styles.contentContainer,
          orientation === "PORTRAIT"
            ? {
                position: "absolute",
                top: "20%",
                bottom: "15%",
                left: 0,
                right: 0,
              }
            : {
                position: "absolute",
                top: "20%",
                bottom: 0,
                left: "20%",
                right: 0,
              },
        ]}
      >
        {answers.map((answerRow, rowId) => (
          <View
            style={[
              styles.contentRow,
              {
                width: "100%",
                height: (height / answers.length) * 0.65,
              },
            ]}
            key={rowId}
          >
            {answerRow.map((answer, columnId) => (
              <TouchableOpacity
                onPress={() => {
                  setActiveQuestion({
                    activeAnswerRowId: rowId,
                    activeAnswerColumnId: columnId,
                  });
                }}
                key={answer.answer}
              >
                <View
                  style={[
                    orientation === "PORTRAIT"
                      ? {
                          width: (width / answerRow.length) * 0.95,
                          height: "80%",
                        }
                      : {
                          width: (width / answerRow.length) * 0.7,
                          height: "80%",
                        },

                    {
                      margin: 10,
                      backgroundColor: isThemeDark
                        ? "rgba(1, 1, 1, 0.4)"
                        : "rgba(255, 255, 255, 0.4)",

                      alignItems: "center",
                      justifyContent: "center",
                    },
                    activeQuestion.activeAnswerColumnId === columnId &&
                    activeQuestion.activeAnswerRowId === rowId
                      ? {
                          shadowColor: "#24d3ff",
                          shadowOffset: {
                            width: 1,
                            height: 1,
                          },
                          shadowOpacity: 0.5,
                          shadowRadius: 12.35,
                          elevation: 5,
                        }
                      : {},
                  ]}
                >
                  <Text>{answer.answer}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      <Navigation
        activeAnswerRowId={activeQuestion.activeAnswerRowId}
        activeAnswerColumnId={activeQuestion.activeAnswerColumnId}
      />
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  contentRow: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});
