import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BackButtonComponent],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [BackButtonComponent],
})
export class BackButtonModule {}
