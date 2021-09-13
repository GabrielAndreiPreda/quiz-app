import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BackButtonModule } from '../back-button/back-button.module';
import { MainMenuRoutingModule } from './main-menu-routing.module';
import { MainMenuComponent } from './main-menu.component';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    MatCardModule,
    BackButtonModule,
    MainMenuRoutingModule,
  ],
  exports: [MainMenuComponent],
})
export class MainMenuModule {}
