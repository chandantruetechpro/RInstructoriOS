import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhichtestPage } from './whichtest.page';

const routes: Routes = [
  {
    path: '',
    component: WhichtestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhichtestPageRoutingModule {}
