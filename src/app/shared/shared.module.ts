import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavController } from '@ionic/angular';
import {HeaderComponent} from '../header/header.component';



@NgModule({
  // imports: [HeaderComponent)],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  
}) export class SharedModule {}