import { Injectable } from '@angular/core';
import { QuestionProviderService } from './question-provider.service';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  constructor(private questionProviderService: QuestionProviderService) {}

  score: number = 0;
  maxScore: number = this.questionProviderService.questionItems.length;
  questionCounter: number = 0;

  addPoint(): void {
    this.score++;
  }
  incrementCounter(): void {
    this.questionCounter++;
  }
  getQuestionCount() {
    return this.questionCounter;
  }
  getScore() {
    return this.score;
  }
}
