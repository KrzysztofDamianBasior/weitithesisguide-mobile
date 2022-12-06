import React, { useReducer } from "react";
import { View } from "react-native";

import type { CoreStackParamList } from "../../shared/navigation/CoreStack";
import type { StackScreenProps } from "@react-navigation/stack";

import { QuizContext } from "./quizContext";
import { quizReducer, quizInitialState } from "./quizReducer";
import { QuizActionKind } from "./types";

import Farwell from "./screens/Farwell";
import Question from "./screens/Question";
import Welcome from "./screens/Welcome";

// jeśli są dwie to wyświetl je

// [] []

// jeśli są trzy to wyświetl je

// []
// []
// []

// jeśli są cztery to wyświetl je

// [] []
// [] []

// jeśli jest 5 to wyświetl je

// [] [] []
// [] []

// jeśli jest 6 to wyświetl je

// [] []
// [] []
// [] []

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
        {quizState.status === "quiz" && <Question />}
        {quizState.status === "farwell" && <Farwell />}
      </View>
    </QuizContext.Provider>
  );
};

export default Quiz;
