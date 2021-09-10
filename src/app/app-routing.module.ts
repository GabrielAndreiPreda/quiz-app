import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionBoxComponent } from './question-box/question-box.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'question-list', component: QuestionListComponent },
  { path: 'question-box', component: QuestionBoxComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
