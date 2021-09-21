import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-checkbox',
  templateUrl: './question-checkbox.component.html',
  styleUrls: ['./question-checkbox.component.scss'],
})
export class QuestionCheckboxComponent implements OnInit {
  @Input() questionItem!: QuestionItem;
  @Input() answerGroup!: Answer[];
  @Input() questionNumber!: number;
  @Input() disabled!: boolean;
  @Input() radioFormControl!: FormControl;

  constructor() {}

  ngOnInit(): void {}
}
