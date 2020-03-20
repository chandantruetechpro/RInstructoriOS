import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheatsheetsPageRoutingModule } from './cheatsheets-routing.module';

import { CheatsheetsPage } from './cheatsheets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheatsheetsPageRoutingModule
  ],
  declarations: [CheatsheetsPage]
})
export class CheatsheetsPageModule {}
