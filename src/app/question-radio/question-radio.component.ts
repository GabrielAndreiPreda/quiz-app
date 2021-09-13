import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

import { Answer } from '../answer';
import { QuestionItem } from '../question-item';

@Component({
  selector: 'app-question-radio',
  templateUrl: './question-radio.component.html',
  styleUrls: ['./question-radio.component.scss'],
})
export class QuestionRadioComponent {
  @Input() questionItem!: QuestionItem;
  @Input() answerGroup!: Answer[];

  constructor() {}
}
