import React, { useReducer } from "react";
import { View } from "react-native";

import type { CoreStackParamList } from "../../shared/navigation/CoreStack";
import type { StackScreenProps } from "@react-navigation/stack";

import { QuizContext } from "./quizContext";
import { quizReducer, quizInitialState } from "./quizReducer";
import { QuizActionKind } from "./types";

import Farwell from "./screens/Farwell";
import Form from "./screens/Form";
import Welcome from "./screens/Welcome";

const Quiz = ({
  navigation,
  route,
}: StackScreenProps<CoreStackParamList, "Quiz">) => {
  const [quizState, dispatchQuizState] = useReducer(
    quizReducer,
    quizInitialState
  );
  const goBack = () => {
    dispatchQuizState({ type: QuizActionKind.GO_BACK });
  };
  const restart = () => {
    dispatchQuizState({ type: QuizActionKind.RESTART });
  };
  const start = () => {
    dispatchQuizState({ type: QuizActionKind.START });
  };
  const answerQuestion = ({
    answerRowId,
    answerColumnId,
  }: {
    answerRowId: number;
    answerColumnId: number;
  }) => {
    dispatchQuizState({
      type: QuizActionKind.SELECT_ANSWER,
      payload: { answerRowId, answerColumnId },
    });
  };

  return (
    <QuizContext.Provider
      value={{ quiz: quizState, goBack, restart, start, answerQuestion }}
    >
      <View style={{ height: "100%" }}>
        {quizState.status === "welcome" && <Welcome />}
        {quizState.status === "quiz" && <Form />}
        {quizState.status === "farwell" && <Farwell />}
      </View>
    </QuizContext.Provider>
  );
};

export default Quiz;
