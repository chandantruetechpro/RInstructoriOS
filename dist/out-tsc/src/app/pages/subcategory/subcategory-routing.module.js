import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubcategoryPage } from './subcategory.page';
const routes = [
    {
        path: '',
        component: SubcategoryPage
    }
];
let SubcategoryPageRoutingModule = class SubcategoryPageRoutingModule {
};
SubcategoryPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SubcategoryPageRoutingModule);
export { SubcategoryPageRoutingModule };
//# sourceMappingURL=subcategory-routing.module.js.map