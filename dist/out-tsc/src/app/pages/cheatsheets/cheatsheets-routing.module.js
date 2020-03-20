import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheatsheetsPage } from './cheatsheets.page';
const routes = [
    {
        path: '',
        component: CheatsheetsPage
    }
];
let CheatsheetsPageRoutingModule = class CheatsheetsPageRoutingModule {
};
CheatsheetsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CheatsheetsPageRoutingModule);
export { CheatsheetsPageRoutingModule };
//# sourceMappingURL=cheatsheets-routing.module.js.map