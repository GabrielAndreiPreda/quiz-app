import { Injectable } from '@angular/core';
import { QuestionItem } from './question-item';
import { QUESTIONS } from './questions-array';
import { QuestionData } from './questionData';

@Injectable({
  providedIn: 'root',
})
export class QuestionProviderService {
  private questionData: QuestionData[] = QUESTIONS;
  questionItems: QuestionItem[] = this.questionData;

  constructor() {}

  getItems() {
    return this.questionItems;
  }
  getQuestionItem(index: number) {
    return this.questionItems[index];
  }
}
