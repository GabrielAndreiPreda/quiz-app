import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionBoxComponent } from './question-box/question-box.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { QuestionButtonComponent } from './question-button/question-button.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BackButtonComponent } from './back-button/back-button.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionBoxComponent,
    QuestionListComponent,
    QuestionCardComponent,
    QuestionButtonComponent,
    ScoreCardComponent,
    MainMenuComponent,
    PageNotFoundComponent,
    BackButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
