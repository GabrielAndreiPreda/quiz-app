import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from '../back-button/back-button.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { QuestionButtonComponent } from '../question-button/question-button.component';
import { QuestionCardComponent } from '../question-card/question-card.component';
import { QuestionListComponent } from '../question-list/question-list.component';
import { ScoreCardComponent } from '../score-card/score-card.component';

@NgModule({
  declarations: [
    QuestionListComponent,
    QuestionCardComponent,
    QuestionButtonComponent,
    ScoreCardComponent,
    MainMenuComponent,
    PageNotFoundComponent,
    BackButtonComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    RouterModule,
  ],
  exports: [
    QuestionListComponent,
    QuestionCardComponent,
    QuestionButtonComponent,
    ScoreCardComponent,
    MainMenuComponent,
    PageNotFoundComponent,
    BackButtonComponent,
  ],
})
export class SharedModule {}
