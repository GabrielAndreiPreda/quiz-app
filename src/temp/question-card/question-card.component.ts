import { Component, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuestionAnswers } from '../../interfaces/question-answers.interface';
import { Question } from '../../interfaces/question.interface';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent {
  @Input() questionItem!: Question;
  @Input() questionNumber!: number;
  @Input() disabledButtons!: boolean;
  @Input() radioFormControl!: FormControl;
  @Input() answerTable!: QuestionAnswers[];

  disabled: boolean = false;
  disabledChange!: boolean;

  constructor() {}

  ngOnInit(): void {}

  disableButtons(isClicked: boolean) {
    this.disabledChange = isClicked;
    this.disabled = this.disabledChange;
  }
}
