import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionBoxComponent } from './question-box.component';

const routes: Routes = [{ path: '', component: QuestionBoxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionBoxRoutingModule {}
