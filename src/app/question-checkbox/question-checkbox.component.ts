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
  @Input() questionItem!: Question;
  @Input() answerGroup!: Answer[];
  @Input() questionNumber!: number;
  @Input() disabled!: boolean;
  @Input() radioFormControl!: FormControl;
  @Input() answerTable?: QuestionAnswers[];
  checkboxGroup!: FormGroup;
  values!: string;
  constructor(private fb: FormBuilder) {}

  generateFormControlsArray(): FormControl[] {
    const formControls: FormControl[] = [];
    for (let i = 0; i < this.answerGroup.length; i++) {
      formControls.push(new FormControl('', Validators.required));
    }
    return formControls;
  }
  /* formControlFromIndex(index: number): FormControl {
    return this.checkboxGroup.at(index) as FormControl;
  }
 */
  ngOnInit(): void {
    // this.checkboxGroup = this.fb.array(this.generateFormControlsArray());
  }
}
