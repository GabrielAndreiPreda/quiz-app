import { Injectable } from '@angular/core';
import { Question } from '../../interfaces/question.interface';

import { loremIpsum } from 'lorem-ipsum';
import { QuestionAnswers } from 'src/interfaces/question-answers.interface';

@Injectable({
  providedIn: 'root',
})
export class QuestionAnswerProviderService {
  generate(count = 500): [Question[], QuestionAnswers[]] {
    const generateAvailableAnswer = (id: number) => {
      return {
        id,
        text: loremIpsum().slice(0, 5),
      };
    };
    const generateAvailableAnswers = (times: number) => {
      const arr = [];
      for (let i = 0; i < times; i++) {
        arr.push(generateAvailableAnswer(i));
      }
      return arr;
    };

    const generateRandomIds = (max: number) => {
      const set: Set<number> = new Set();
      const rand = this.getRandom(1, max);
      for (let i = 0; i < rand; i++) {
        set.add(this.getRandom(1, max));
      }
      return Array.from(set);
    };

    const questions: Question[] = [];
    const questionAnswers: QuestionAnswers[] = [];

    for (let i = 0; i < count; i++) {
      const answersNumber = this.getRandom(2, 10);
      const answer = {
        questionId: i,
        answerIds: generateRandomIds(answersNumber),
      };
      questionAnswers.push(answer);

      questions.push({
        id: i,
        text: loremIpsum(),
        isMultipleChoice: answer.answerIds.length > 1,
        availableAnswers: generateAvailableAnswers(answersNumber),
      });
    }
    return [questions, questionAnswers];
  }

  getRandom(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  randomBool() {
    var bool = Math.floor(Math.random() * 2) >= 1 ? true : false;
    console.log(bool);
    return bool;
  }
}
