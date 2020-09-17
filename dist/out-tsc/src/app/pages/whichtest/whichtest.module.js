import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WhichtestPageRoutingModule } from './whichtest-routing.module';
import { WhichtestPage } from './whichtest.page';
let WhichtestPageModule = class WhichtestPageModule {
};
WhichtestPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            WhichtestPageRoutingModule
        ],
        declarations: [WhichtestPage]
    })
], WhichtestPageModule);
export { WhichtestPageModule };
//# sourceMappingURL=whichtest.module.js.map