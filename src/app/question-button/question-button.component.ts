import { Component, Input, Output } from '@angular/core';

import { Answer } from '../answer';
import { QuestionItem } from '../question-item';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-question-button',
  templateUrl: './question-button.component.html',
  styleUrls: ['./question-button.component.scss'],
})
export class QuestionButtonComponent {
  @Input() questionItem!: QuestionItem;
  @Input() answer!: Answer;
  disabled: boolean = false;

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {}

  checkAnswer(): boolean {
    if (this.answer.id == this.questionItem.correctAnswerId) {
      return true;
    }
    return false;
  }
  changeColor(color: number) {}
  disableButton() {
    this.disabled = true;
  }
}
