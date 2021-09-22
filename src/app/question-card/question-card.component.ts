import { Component, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuestionItem } from '../question-item';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent {
  @Input() questionItem!: QuestionItem;
  @Input() questionNumber!: number;
  @Input() disabledButtons!: boolean;
  @Input() radioFormControl!: FormControl;

  disabled: boolean = false;
  disabledChange!: boolean;

  constructor() {}

  ngOnInit(): void {}

  disableButtons(isClicked: boolean) {
    this.disabledChange = isClicked;
    this.disabled = this.disabledChange;
  }
}
