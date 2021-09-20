import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
import { BackButtonModule } from '../back-button/back-button.module';
import { QuestionCardModule } from '../question-card/question-card.module';
import { ScoreCardModule } from '../score-card/score-card.module';
import { QuestionBoxRoutingModule } from './question-box-routing.module';
import { QuestionBoxComponent } from './question-box.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [QuestionBoxComponent],
  imports: [
    CommonModule,
    QuestionBoxRoutingModule,
    QuestionCardModule,
    ScoreCardModule,
    BackButtonModule,
    MatButtonModule,
  ],
})
export class QuestionBoxModule {}
