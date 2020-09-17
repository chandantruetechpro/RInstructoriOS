import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WhichtestPage } from './whichtest.page';
const routes = [
    {
        path: '',
        component: WhichtestPage
    }
];
let WhichtestPageRoutingModule = class WhichtestPageRoutingModule {
};
WhichtestPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], WhichtestPageRoutingModule);
export { WhichtestPageRoutingModule };
//# sourceMappingURL=whichtest-routing.module.js.map