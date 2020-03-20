import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhichtestPageRoutingModule } from './whichtest-routing.module';

import { WhichtestPage } from './whichtest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhichtestPageRoutingModule
  ],
  declarations: [WhichtestPage]
})
export class WhichtestPageModule {}
