import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { QuestionRadioComponent } from './question-radio.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuestionRadioComponent],
  imports: [CommonModule, MatRadioModule, ReactiveFormsModule],
  exports: [QuestionRadioComponent],
})
export class AnswerButtonsModule {}
