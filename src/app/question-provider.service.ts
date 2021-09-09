import { Injectable } from '@angular/core';
import { QuestionItem } from './question-item';
import { QUESTIONS } from './questions-array';

@Injectable({
  providedIn: 'root',
})
export class QuestionProviderService {
  constructor() {}

  questionItems: QuestionItem[] = QUESTIONS;

  score: number = 0;
  maxScore: number = QUESTIONS.length;

  getItems() {
    return this.questionItems;
  }
  addPoint() {
    this.score++;
  }
}
