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

export type QuizActionType = {
  type: QuizActionKind;
  payload?: {
    answerRowId?: number;
    answerColumnId?: number;
  };
};
