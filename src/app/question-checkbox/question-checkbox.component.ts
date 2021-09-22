import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Answer } from '../answer';
import { QuestionItem } from '../question-item';

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
  checkboxGroup!: FormArray;

  constructor(private fb: FormBuilder) {}

  get values() {
    return this.answerGroup
      .filter((answer) => answer.isChecked)
      .map((answer) => answer.id);
  }

  generateFormControlsArray(): FormControl[] {
    const formControls: FormControl[] = [];
    for (let i = 0; i < this.answerGroup.length; i++) {
      formControls.push(new FormControl('', Validators.required));
    }
    return formControls;
  }
  formControlFromIndex(index: number): FormControl {
    return this.checkboxGroup.at(index) as FormControl;
  }

  ngOnInit(): void {
    this.checkboxGroup = this.fb.array(this.generateFormControlsArray());
  }
}
