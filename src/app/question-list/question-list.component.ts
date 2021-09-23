import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from 'src/backend-mockup/api/api.service';
import { QuestionAnswerProviderService } from '../../backend-mockup/providers/question-answer-provider.service';
import { Question } from '../../interfaces/question.interface';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent {
  answerFormArray: FormArray | undefined;
  questionItems$: Observable<Question[]>;
  isSubmitted: boolean = false;
  // answerTable: QuestionAnswers[];

  constructor(
    private questionProviderService: QuestionAnswerProviderService,
    public apiService: ApiService,
    private fb: FormBuilder
  ) {
    this.questionItems$ = this.apiService.getQuestions();

    this.questionItems$.subscribe((x) => {
      this.answerFormArray = this.fb.array(this.generateFormControlsArray(x));
    });

    // console.log(this.questionItems);

    // this.answerTable = this.generateAnswerTable();
  }

  // generateAnswerTable() {
  //   var auxTable: QuestionAnswers[] = [];
  //   this.questionItems.forEach((item) => {
  //     var answerTableItem: QuestionAnswers = {
  //       questionId: item.id,
  //       answerIds: '0',
  //     };
  //     auxTable.push(answerTableItem);
  //   });
  //   return auxTable;
  // }

  // addForm(formControl: FormControl): void {
  //   this.answerFormArray.push(formControl);
  // }

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
