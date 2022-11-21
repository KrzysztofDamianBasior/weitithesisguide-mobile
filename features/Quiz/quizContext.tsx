import React from "react";
import type { QuizContentType, QuizStateType, QuizActionType } from "./types";
import { quizInitialState } from "./quizReducer";

export const QuizContext = React.createContext<{
  answerQuestion: ({
    answerRowId,
    answerColumnId,
  }: {
    answerRowId: number;
    answerColumnId: number;
  }) => void;
  goBack: () => void;
  restart: () => void;
  start: () => void;
  quiz: QuizStateType;
}>({
  answerQuestion: () => {},
  goBack: () => {},
  restart: () => {},
  start: () => {},
  quiz: quizInitialState,
});
