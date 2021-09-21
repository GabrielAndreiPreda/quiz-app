import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BackButtonModule } from '../back-button/back-button.module';
import { QuestionCardModule } from '../question-card/question-card.module';
import { ScoreCardModule } from '../score-card/score-card.module';
import { QuestionListRoutingModule } from './question-list-routing.module';
import { QuestionListComponent } from './question-list.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [QuestionListComponent],
  imports: [
    CommonModule,
    QuestionListRoutingModule,
    QuestionCardModule,
    ScoreCardModule,
    BackButtonModule,
    MatTooltipModule,
    MatButtonModule,
  ],
})
export class QuestionListModule {}
