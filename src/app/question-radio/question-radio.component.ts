import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Answer } from '../../interfaces/answer.interface';
import { QuestionAnswers } from '../../interfaces/question-answers.interface';
import { Question } from '../../interfaces/question.interface';

@Component({
  selector: 'app-question-radio',
  templateUrl: './question-radio.component.html',
  styleUrls: ['./question-radio.component.scss'],
})
export class QuestionRadioComponent implements OnInit {
  @Input() question!: Question;
  @Input() questionNumber!: number;
  @Input() disabled!: boolean;
  @Input() radioFormControl!: FormControl;
  @Input() answerTable!: QuestionAnswers[];

  constructor() {}

  ngOnInit() {}
}
