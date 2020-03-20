import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SubcategoryPageRoutingModule } from './subcategory-routing.module';
import { SubcategoryPage } from './subcategory.page';
let SubcategoryPageModule = class SubcategoryPageModule {
};
SubcategoryPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SubcategoryPageRoutingModule
        ],
        declarations: [SubcategoryPage]
    })
], SubcategoryPageModule);
export { SubcategoryPageModule };
//# sourceMappingURL=subcategory.module.js.map