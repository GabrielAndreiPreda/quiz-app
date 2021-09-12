import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionBoxRoutingModule } from './question-box-routing.module';
import { QuestionBoxComponent } from './question-box.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [QuestionBoxComponent],
  imports: [CommonModule, QuestionBoxRoutingModule, SharedModule],
})
export class QuestionBoxModule {}
