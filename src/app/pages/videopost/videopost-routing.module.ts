import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideopostPage } from './videopost.page';

const routes: Routes = [
  {
    path: '',
    component: VideopostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideopostPageRoutingModule {}
