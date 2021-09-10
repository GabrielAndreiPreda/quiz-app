import { Injectable } from '@angular/core';
import { QuestionItem } from './question-item';
import { QUESTIONS } from './questions-array';

@Injectable({
  providedIn: 'root',
})
export class QuestionProviderService {
  constructor() {}

  questionItems: QuestionItem[] = QUESTIONS;

  getItems() {
    return this.questionItems;
  }
  getQuestionItem(index: number) {
    return this.questionItems[index];
  }
}
