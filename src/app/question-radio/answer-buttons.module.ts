import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { QuestionRadioComponent } from './question-radio.component';

@NgModule({
  declarations: [QuestionRadioComponent],
  imports: [CommonModule, MatRadioModule],
  exports: [QuestionRadioComponent],
})
export class AnswerButtonsModule {}
