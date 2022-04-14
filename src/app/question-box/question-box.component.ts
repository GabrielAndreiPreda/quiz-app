import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Question } from '../../interfaces/question.interface';
import { QuestionAnswerProviderService } from '../../backend-mockup/providers/question-answer-provider.service';
import { Observable } from 'rxjs';
import { QuestionAnswers } from 'src/interfaces/question-answers.interface';
import { ApiService } from 'src/backend-mockup/api/api.service';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class QuestionBoxComponent {
  answerFormArray!: FormArray;
  questionItem$: Observable<Question>;
  isSubmitted: boolean = false;
  questionCounter: number = 0;

  questionsLength$!: Observable<number>;

  currentFormControl!: FormControl;

  answerTable$: Observable<QuestionAnswers[]>;

  constructor(
    private questionProviderService: QuestionAnswerProviderService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    public apiService: ApiService
  ) {
    this.questionItem$ = this.apiService.getQuestion(0);
    this.questionItem$.subscribe();
    this.questionsLength$ = this.apiService.getQuestionsLength();
    this.questionsLength$.subscribe((length) => {
      this.answerFormArray = this.generateFormArray(length);
    });
    this.answerTable$ = this.apiService.getAnswerTable();
    this.answerTable$.subscribe();
  }

  private setCurrentFormControl() {
    this.currentFormControl = this.answerFormArray.at(
      this.questionCounter
    ) as FormControl;
  }

  addForm(formControl: FormControl): void {
    this.answerFormArray.push(formControl);
    console.log(this.answerFormArray);
  }
  formControlFromIndex(index: number): FormControl {
    return this.answerFormArray.at(index) as FormControl;
  }

  generateFormArray(length: number): FormArray {
    const formControls = this.fb.array([]);
    for (let i = 0; i < length; i++) {
      formControls.push(new FormControl('', Validators.required));
    }
    return formControls;
  }

  nextQuestion() {
    this.questionCounter++;
    this.questionItem$ = this.apiService.getQuestion(this.questionCounter);
    this.setCurrentFormControl();
  }
  previousQuestion() {
    this.questionCounter--;
    this.questionItem$ = this.apiService.getQuestion(this.questionCounter);
    this.setCurrentFormControl();
  }
  submitAnswers() {
    this.isSubmitted = true;
    var answers: number[] = this.answerFormArray.value;
    console.log(answers);
  }
  makeFormControlAndAddToArray() {}
}
