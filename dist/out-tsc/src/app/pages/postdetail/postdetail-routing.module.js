import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostdetailPage } from './postdetail.page';
const routes = [
    {
        path: '',
        component: PostdetailPage
    }
];
let PostdetailPageRoutingModule = class PostdetailPageRoutingModule {
};
PostdetailPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PostdetailPageRoutingModule);
export { PostdetailPageRoutingModule };
//# sourceMappingURL=postdetail-routing.module.js.map