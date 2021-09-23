import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
import { QuestionCardModule } from '../question-card/question-card.module';
import { QuestionBoxRoutingModule } from './question-box-routing.module';
import { QuestionBoxComponent } from './question-box.component';
import { MatButtonModule } from '@angular/material/button';
import { ScoreCardModule } from 'src/app/score-card/score-card.module';
import { BackButtonModule } from 'src/app/back-button/back-button.module';

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
