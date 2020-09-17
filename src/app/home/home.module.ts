import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import {SharedModule} from '../shared/shared.module';
import { ComponentsModule} from '../components/components.module';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule,
    ComponentsModule
  ],
  declarations: [HomePage],
})




export class HomePageModule {}
