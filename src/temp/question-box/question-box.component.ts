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

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class QuestionBoxComponent {
  answerFormArray: FormArray;
  questionItems: Question[];
  isSubmitted: boolean = false;
  questionCounter: number = 0;
  currentQuestionItem: Question;
  currentFormControl: FormControl;

  constructor(
    private questionProviderService: QuestionAnswerProviderService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
    this.questionItems = []; //this.questionProviderService.getItems();
    this.currentQuestionItem = this.questionItems[this.questionCounter];
    this.answerFormArray = this.fb.array(this.generateFormControlsArray());
    this.currentFormControl = this.answerFormArray.at(
      this.questionCounter
    ) as FormControl;
  }

  private setCurrentFormControl() {
    this.currentFormControl = this.answerFormArray.at(
      this.questionCounter
    ) as FormControl;
  }

  private setCurrentQuestion() {
    this.currentQuestionItem = this.questionItems[this.questionCounter];
    this.setCurrentFormControl();
  }

  addForm(formControl: FormControl): void {
    this.answerFormArray.push(formControl);
    console.log(this.answerFormArray);
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

  nextQuestion() {
    if (this.questionCounter < this.questionItems.length - 1) {
      this.questionCounter++;
      this.setCurrentQuestion();
    }
  }
  previousQuestion() {
    if (this.questionCounter > 0) {
      this.questionCounter--;
      this.setCurrentQuestion();
    }
  }
  submitAnswers() {
    this.isSubmitted = true;
    var answers: number[] = this.answerFormArray.value;
    console.log(answers);
  }
}
