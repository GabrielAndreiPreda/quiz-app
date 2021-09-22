import { QuestionItem } from './question-item';

import { loremIpsum } from 'lorem-ipsum';
import { QuestionData } from './questionData';

// const loremIpsum = require("lorem-ipsum").loremIpsum;

var index = 1;
const questionCount = 5;

export const QUESTIONS: QuestionData[] = [];

function generateQuestions() {
  while (index <= questionCount) {
    var question: QuestionData = {
      id: index,
      questionText: loremIpsum(),
      multipleChoice: randomBool(),

      correctAnswerId: 4,
      answerGroup: [
        {
          id: 0,
          text: loremIpsum().slice(0, 5),
          isChecked: false,
        },
        {
          id: 1,
          text: loremIpsum().slice(0, 5),
          isChecked: false,
        },
        {
          id: 2,
          text: loremIpsum().slice(0, 5),
          isChecked: false,
        },
        {
          id: 3,
          text: loremIpsum().slice(0, 5),
          isChecked: false,
        },
        {
          id: 4,
          text: loremIpsum().slice(0, 5),
          isChecked: false,
        },
      ],
    };

    QUESTIONS.push(question);
    index = index + 1;
  }
}

function randomBool() {
  var bool = Math.floor(Math.random() * 2) >= 1 ? true : false;
  console.log(bool);
  return bool;
}

generateQuestions();
