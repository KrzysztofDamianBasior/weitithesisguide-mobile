import type { QuizContentType } from "../types";

export const quizContent: QuizContentType = [
  {
    question: "blaewbla",
    questionId: 0,
    answers: [
      [{ answer: "bablaasfbla", nextQuestionId: 1 }],
      [{ answer: "bablaxvebla", nextQuestionId: 1 }],
    ],
    selectedAnswer: null,
  },
  {
    question: "blablaqw",
    questionId: 1,
    answers: [
      [
        { answer: "werbablabla", nextQuestionId: 2 },
        { answer: "bablasdfwebla", nextQuestionId: null },
      ],
      [
        { answer: "bablterabla", nextQuestionId: 4 },
        { answer: "babxcvlabla", nextQuestionId: 4 },
      ],
    ],
    selectedAnswer: null,
  },
  {
    question: "blablaqw",
    questionId: 2,
    answers: [
      [
        { answer: "werbablabla", nextQuestionId: null },
        { answer: "bablasdfwebla", nextQuestionId: null },
        { answer: "bablterabla", nextQuestionId: null },
      ],
    ],
    selectedAnswer: null,
  },
  {
    question: "blablaqw",
    questionId: 4,
    answers: [
      [
        { answer: "werbablabla", nextQuestionId: null },
        { answer: "bablasdfwebla", nextQuestionId: null },
      ],
      [
        { answer: "bablterabla", nextQuestionId: null },
        { answer: "babxcvlabla", nextQuestionId: null },
      ],
      [
        { answer: "bablterabla", nextQuestionId: null },
        { answer: "babxcvlabla", nextQuestionId: null },
      ],
    ],
    selectedAnswer: null,
  },
];
