import { Component, OnInit, Output } from '@angular/core';
import { QuestionItem } from '../question-item';
import { QuestionProviderService } from '../question-provider.service';
import { MatListModule } from '@angular/material/list';
import { ScoreService } from '../score.service';
import { Validators } from '@angular/forms';
import {
  FormArray,
  FormBuilder,
  FormControl,
  NumberValueAccessor,
} from '@angular/forms';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent {
  answerFormArray: FormArray;
  questionItems: QuestionItem[];
  isSubmitted: boolean = false;

  constructor(
    private questionProviderService: QuestionProviderService,
    public scoreService: ScoreService,
    private fb: FormBuilder
  ) {
    this.questionItems = this.questionProviderService.getItems();

    this.answerFormArray = this.fb.array(this.generateFormControlsArray());
    console.log(this.questionItems);
  }

  addForm(formControl: FormControl): void {
    this.answerFormArray.push(formControl);
  }

  formControlFromIndex(index: number): FormControl {
    return this.answerFormArray.at(index) as FormControl;
  }

  generateFormControlsArray(): FormControl[] {
    const formControls: FormControl[] = [];
    for (let i = 0; i < this.questionItems.length; i++) {
      formControls.push(new FormControl('', Validators.required));
    }
    return formControls;
  }

  submitAnswers() {}
}
