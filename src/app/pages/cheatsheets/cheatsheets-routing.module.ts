import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheatsheetsPage } from './cheatsheets.page';

const routes: Routes = [
  {
    path: '',
    component: CheatsheetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheatsheetsPageRoutingModule {}
