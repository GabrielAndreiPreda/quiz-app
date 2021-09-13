import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  {
    path: 'menu',
    loadChildren: () =>
      import('./main-menu/main-menu.module').then((m) => m.MainMenuModule),
  },

  {
    path: 'question-box',
    loadChildren: () =>
      import('./question-box/question-box.module').then(
        (m) => m.QuestionBoxModule
      ),
  },
  {
    path: 'question-list',
    loadChildren: () =>
      import('./question-list/question-list.module').then(
        (m) => m.QuestionListModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
