import { Injectable } from '@angular/core';
import { QuestionProviderService } from './question-provider.service';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  constructor(private questionProviderService: QuestionProviderService) {}

  score: number = 0;
  maxScore: number = this.questionProviderService.questionItems.length;

  addPoint(): void {
    this.score++;
  }
}
