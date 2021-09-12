import { QuestionItem } from './question-item';

import { loremIpsum } from 'lorem-ipsum';
// const loremIpsum = require("lorem-ipsum").loremIpsum;

var index = 1;
const questionCount = 5;

export const QUESTIONS: QuestionItem[] = [];

function generateQuestions() {
  while (index <= questionCount) {
    var question: QuestionItem = {
      id: index,
      questionText: loremIpsum(),

      correctAnswerId: 4,
      answerGroup: [
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
    };

    QUESTIONS.push(question);
    index = index + 1;
  }
}

generateQuestions();
