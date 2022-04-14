import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Answer } from '../../interfaces/answer.interface';
import { QuestionAnswers } from '../../interfaces/question-answers.interface';
import { Question } from '../../interfaces/question.interface';

@Component({
  selector: 'app-question-checkbox',
  templateUrl: './question-checkbox.component.html',
  styleUrls: ['./question-checkbox.component.scss'],
})
export class QuestionCheckboxComponent implements OnInit {
  @Input() question!: Question;
  @Input() questionNumber!: number;
  @Input() disabled!: boolean;
  @Input() radioFormControl!: FormControl;
  @Input() answerTable!: QuestionAnswers[]; // TODO after submit the array might be different, put an ngclass on the template to paint the input in red if the answer is not in the array of ids
  checkboxArray!: FormArray;
  currentTableItem!: number;

  constructor(private fb: FormBuilder) {}

  generateFormControlsArray(): FormArray {
    const formArray = this.fb.array([]);
    const len = this.question.availableAnswers.length;
    for (let i = 0; i < len; i++) {
      formArray.push(new FormControl(false));
    }
    return formArray;
  }
  formControlFromIndex(index: number): FormControl {
    return this.checkboxArray.at(index) as FormControl;
  }
  ngOnInit(): void {
    this.checkboxArray = this.generateFormControlsArray();
    this.currentTableItem = this.answerTable.findIndex(
      (item) => item.questionId == this.question.id
    );
  }

  syncTable(answerId: number) {
    this.answerTable;
  }
}
