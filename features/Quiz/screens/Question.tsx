import { StyleSheet, View, useWindowDimensions } from "react-native";
import React, { useState, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Surface, Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
import Navigation from "../components/Navigation";
import { QuizContext } from "../quizContext";
import { SafeAreaView } from "react-native-safe-area-context";

const Question = ({}) => {
  const [activeQuestion, setActiveQuestion] = useState<{
    activeAnswerRowId: number | null;
    activeAnswerColumnId: number | null;
  }>({
    activeAnswerRowId: null,
    activeAnswerColumnId: null,
  });
  const { quiz } = useContext(QuizContext);
  const theme = useTheme();
  const { height, width } = useWindowDimensions();

  let question = quiz.quizContent.filter(
    (question) => question.questionId === quiz.currentQuestionId
  );
  let answers = question[0].answers;

  return (
    <SafeAreaView style={styles.questionContainer}>
      <View
        style={[
          styles.headerContainer,
          { width: (width * 90) / 100, height: (height * 10) / 100 },
        ]}
      >
        <Text>{question[0].question}</Text>
      </View>
      <View style={styles.contentContainer}>
        {answers.map((answerRow, rowId) => (
          <View
            style={[
              styles.contentRow,
              { width: (width * 80) / 100, height: (height * 30) / 100 },
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
                <Surface
                  style={[
                    styles.surface,
                    { width: (width * 20) / 100, height: (height * 20) / 100 },
                    {
                      shadowColor: "#24d3ff",
                      shadowOffset: {
                        width: 0,
                        height: 9,
                      },
                      shadowOpacity: 0.5,
                      shadowRadius: 12.35,

                      elevation: 19,
                    },
                  ]}
                >
                  <Text>{answer.answer}</Text>
                </Surface>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      <View
        style={[
          styles.footerContainer,
          { width: (width * 90) / 100, height: (height * 10) / 100 },
        ]}
      >
        <Navigation
          activeAnswerRowId={activeQuestion.activeAnswerRowId}
          activeAnswerColumnId={activeQuestion.activeAnswerColumnId}
        />
      </View>
    </SafeAreaView>
  );
};

export default Question;

const styles = StyleSheet.create({
  questionContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  contentRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  footerContainer: { justifyContent: "center", alignItems: "center" },
  surface: {
    alignItems: "center",
    justifyContent: "center",
    margin: 14,
  },
});
