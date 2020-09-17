import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideopostPageRoutingModule } from './videopost-routing.module';

import { VideopostPage } from './videopost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideopostPageRoutingModule
  ],
  declarations: [VideopostPage]
})
export class VideopostPageModule {}
