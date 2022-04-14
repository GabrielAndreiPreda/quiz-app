import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from 'src/backend-mockup/api/api.service';
import { QuestionAnswers } from 'src/interfaces/question-answers.interface';
import { QuestionAnswerProviderService } from '../../backend-mockup/providers/question-answer-provider.service';
import { Question } from '../../interfaces/question.interface';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent {
  answerFormArray!: FormArray;
  questionItems$: Observable<Question[]>;
  isSubmitted: boolean = false;
  answerTable$!: Observable<QuestionAnswers[]>;

  constructor(
    private questionProviderService: QuestionAnswerProviderService,
    public apiService: ApiService,
    private fb: FormBuilder
  ) {
    this.questionItems$ = this.apiService.getQuestions();

    this.questionItems$.subscribe((x) => {
      this.answerFormArray = this.fb.array(this.generateFormControlsArray(x));
      this.answerTable$ = this.apiService.getAnswerTable();
    });

    // console.log(this.questionItems);

    //
  }

  formControlFromIndex(index: number): FormControl {
    return this.answerFormArray?.at(index) as FormControl;
  }

  generateFormControlsArray(questionItems: Question[]): FormControl[] {
    const formControls: FormControl[] = [];
    for (let i = 0; i < questionItems.length; i++) {
      formControls.push(new FormControl('', Validators.required));
    }
    return formControls;
  }

  submitAnswers() {}
}
