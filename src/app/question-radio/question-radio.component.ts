import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';

import { Answer } from '../answer';
import { QuestionItem } from '../question-item';

@Component({
  selector: 'app-question-radio',
  templateUrl: './question-radio.component.html',
  styleUrls: ['./question-radio.component.scss'],
})
export class QuestionRadioComponent implements OnInit {
  @Input() questionItem!: QuestionItem;
  @Input() answerGroup!: Answer[];
  @Input() questionNumber!: number;
  @Input() disabled!: boolean;
  @Input() radioFormControl!: FormControl;

  constructor() {}
  // addFormToArray() {
  //   this.questionFormsArrayProvider.addForm(this.radioAnswers);
  // }
  ngOnInit() {
    // this.addFormToArray();
  }
}
