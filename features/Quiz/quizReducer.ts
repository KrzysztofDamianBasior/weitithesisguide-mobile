import type { QuizStateType, QuizOperationType } from "./types";
import { QuizActionKind } from "./types";
import { quizContent } from "./data/quizContent";

export const quizInitialState: QuizStateType = {
  status: "welcome",
  currentQuestionId: 0,
  selectedAnswers: [],
  quizContent,
};

export function quizReducer(
  state: QuizStateType,
  action: QuizOperationType
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
          const nextQuestionId =
            newState.quizContent[i].answers[action.payload.answerRowId][
              action.payload.answerColumnId
            ].nextQuestionId;

          newState.quizContent[i].selectedAnswer = [
            action.payload.answerRowId,
            action.payload.answerColumnId,
          ];

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
