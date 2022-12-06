export type QuizContentType = {
  question: string;
  questionId: number;
  answers: { answer: string; nextQuestionId: number | null }[][];
  selectedAnswer: number[] | null;
}[];

export type QuizStateType = {
  status: "welcome" | "quiz" | "farwell";
  currentQuestionId: number;
  quizContent: QuizContentType;
  selectedAnswers: { questionId: number; answerId: number }[];
};

export enum QuizActionKind {
  START = "start",
  RESTART = "restart",
  SELECT_ANSWER = "select-answer",
  GO_BACK = "go-back",
}

export type QuizOperationType =
  | StartAction
  | RestartAction
  | SelectAnswerAction
  | GoBackAction;

export type StartAction = {
  type: QuizActionKind.START;
};

export type RestartAction = {
  type: QuizActionKind.RESTART;
};

export type SelectAnswerAction = {
  type: QuizActionKind.SELECT_ANSWER;
  payload: {
    answerRowId: number;
    answerColumnId: number;
  };
};

export type GoBackAction = {
  type: QuizActionKind.GO_BACK;
};

export type QuizResultsTableType = { questionId: number; answerId: number }[][];
