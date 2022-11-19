import type { QuizContentType, QuizStateType, QuizActionType } from "./types";
import { QuizActionKind } from "./types";

export const quizInitialState: QuizStateType = {
  status: "welcome",
  currentQuestionId: 0,
  selectedAnswers: [],
  quizContent: [
    {
      question: "blaewbla",
      questionId: 0,
      answers: [
        [
          { answer: "bablaasfbla", nextQuestionId: 1 },
          { answer: "bablaxvebla", nextQuestionId: 1 },
        ],
      ],
      selectedAnswer: null,
    },
    {
      question: "blablaqw",
      questionId: 1,
      answers: [
        [
          { answer: "werbablabla", nextQuestionId: null },
          { answer: "bablasdfwebla", nextQuestionId: null },
        ],
        [
          { answer: "bablterabla", nextQuestionId: null },
          { answer: "babxcvlabla", nextQuestionId: null },
        ],
      ],
      selectedAnswer: null,
    },
  ],
};

export function quizReducer(
  state: QuizStateType,
  action: QuizActionType
): QuizStateType {
  let newState: QuizStateType = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case QuizActionKind.RESTART:
      for (let i = 0; i < newState.quizContent.length; i++) {
        newState.quizContent[i].selectedAnswer = null;
      }
      newState.selectedAnswers = [];
      newState.currentQuestionId = 0;
      newState.status = "welcome";
      return { ...newState };

    case QuizActionKind.START:
      newState.status = "quiz";
      return { ...newState };

    case QuizActionKind.SELECT_ANSWER:
      for (let i = 0; i < newState.quizContent.length; i++) {
        if (newState.quizContent[i].questionId === newState.currentQuestionId) {
          if (
            typeof action.payload?.answerRowId === "number" &&
            typeof action.payload?.answerColumnId === "number"
          ) {
            const nextQuestionId =
              newState.quizContent[i].answers[action.payload.answerRowId][
                action.payload.answerColumnId
              ].nextQuestionId;

            const answerId =
              newState.quizContent[i].answers
                .slice(0, action.payload.answerRowId)
                .reduce(
                  (previousValue, currentValue) =>
                    previousValue + currentValue.length,
                  0
                ) + action.payload.answerColumnId;

            newState.selectedAnswers.push({
              answerId: answerId,
              questionId: newState.currentQuestionId,
            });

            if (nextQuestionId !== null) {
              newState.currentQuestionId = nextQuestionId;
            } else {
              newState.status = "farwell";
            }
          }
          break;
        }
      }
      return { ...newState };

    case QuizActionKind.GO_BACK:
      if (newState.selectedAnswers.length > 0) {
        newState.currentQuestionId =
          newState.selectedAnswers[
            newState.selectedAnswers.length - 1
          ].questionId;
        newState.selectedAnswers.pop();
      }
      return { ...newState };

    default:
      return { ...newState };
  }
}