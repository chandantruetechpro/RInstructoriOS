import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CheatsheetsPageRoutingModule } from './cheatsheets-routing.module';
import { CheatsheetsPage } from './cheatsheets.page';
let CheatsheetsPageModule = class CheatsheetsPageModule {
};
CheatsheetsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CheatsheetsPageRoutingModule
        ],
        declarations: [CheatsheetsPage]
    })
], CheatsheetsPageModule);
export { CheatsheetsPageModule };
//# sourceMappingURL=cheatsheets.module.js.map