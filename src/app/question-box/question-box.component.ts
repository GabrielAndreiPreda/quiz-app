import { Component, DoCheck, OnInit } from '@angular/core';
import { QuestionProviderService } from '../question-provider.service';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.scss'],
})
export class QuestionBoxComponent implements DoCheck {
  constructor(
    private questionProviderService: QuestionProviderService,
    public scoreService: ScoreService
  ) {}

  questionCounter = this.scoreService.getQuestionCount();
  currentQuestionItem = this.questionProviderService.getQuestionItem(
    this.questionCounter
  );

  ngDoCheck(): void {
    if (this.questionCounter != this.scoreService.getQuestionCount()) {
      this.questionCounter = this.scoreService.getQuestionCount();
      this.setCurrentQuestion();
    }
  }

  setCurrentQuestion(): void {
    this.currentQuestionItem = this.questionProviderService.getQuestionItem(
      this.questionCounter
    );
  }
}
