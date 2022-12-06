import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";

import Navigation from "../components/Navigation";
import Question from "../components/Question";
import Answers from "../components/Answers";

import { QuizContext } from "../quizContext";

const Form = ({}) => {
  const [activeAnswer, setActiveAnswer] = useState<{
    rowId: number | null;
    columnId: number | null;
  }>({
    rowId: null,
    columnId: null,
  });
  const { quiz } = useContext(QuizContext);
  let question = quiz.quizContent.filter(
    (question) => question.questionId === quiz.currentQuestionId
  );
  let answers = question[0].answers;

  return (
    <View style={styles.centerContent}>
      <Question />
      <Answers
        activeAnswer={activeAnswer}
        setActiveAnswer={setActiveAnswer}
        answers={answers}
      />
      <Navigation
        activeAnswerRowId={activeAnswer.rowId}
        activeAnswerColumnId={activeAnswer.columnId}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});
