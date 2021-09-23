import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { QuestionRadioComponent } from './question-radio/question-radio.component';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuestionCheckboxComponent } from './question-checkbox/question-checkbox.component';

@NgModule({
  declarations: [QuestionRadioComponent, QuestionCheckboxComponent],
  imports: [CommonModule, MatRadioModule, ReactiveFormsModule, FormsModule],
  exports: [QuestionRadioComponent, QuestionCheckboxComponent],
})
export class AnswerButtonsModule {}
