import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnswerButtonsModule } from '../question-radio/answer-buttons.module';
import { QuestionCardComponent } from './question-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [QuestionCardComponent],
  imports: [CommonModule, AnswerButtonsModule, MatCardModule],
  exports: [QuestionCardComponent],
})
export class QuestionCardModule {}
