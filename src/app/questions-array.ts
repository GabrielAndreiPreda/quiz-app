import { QuestionItem } from './question-item';

import { loremIpsum } from 'lorem-ipsum';
// const loremIpsum = require("lorem-ipsum").loremIpsum;

var index = 0;
const questionCount = 10;

export const QUESTIONS: QuestionItem[] = [];

function generateQuestions() {
  while (index <= questionCount) {
    index = index + 1;
    var question: QuestionItem = {
      id: index,
      question: {
        parentId: index,
        text: loremIpsum(),
      },
      correctAnswerId: 4,
      answerGroup: {
        parentId: index,
        answers: [
          {
            id: 1,
            text: loremIpsum().slice(0, 5),
          },
          {
            id: 2,
            text: loremIpsum().slice(0, 5),
          },
          {
            id: 3,
            text: loremIpsum().slice(0, 5),
          },
          {
            id: 4,
            text: loremIpsum().slice(0, 5),
          },
        ],
      },
    };

    QUESTIONS.push(question);
  }
}

generateQuestions();