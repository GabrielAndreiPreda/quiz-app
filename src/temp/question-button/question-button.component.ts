import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Answer } from '../../interfaces/answer.interface';
import { Question } from '../../interfaces/question.interface';

@Component({
  selector: 'app-question-button',
  templateUrl: './question-button.component.html',
  styleUrls: ['./question-button.component.scss'],
})
export class QuestionButtonComponent {
  @Input() questionItem!: Question;
  @Input() answer!: Answer;
  @Input() disabled!: boolean;
  @Input() disableAfterClick!: boolean;
  @Output() disabledChange = new EventEmitter<boolean>();

  correct: boolean = false;
  incorrect: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  buttonClicked() {
    // if (this.disableAfterClick) {
    //   this.disabledChange.emit(true);
    // }
    // this.checkAnswer();
    // if (this.correct) {
    //   this.scoreService.addPoint();
    // }
    // this.scoreService.incrementCounter();
  }

  checkAnswer(): void {
    // if (this.answer.id == this.questionItem.correctAnswerId) {
    //   this.correct = true;
    // } else {
    //   this.incorrect = true;
    // }
  }

  disableButton() {
    this.disabled = true;
  }
}
