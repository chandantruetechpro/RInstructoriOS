import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SharedModule,
            HomePageRoutingModule
        ],
        declarations: [HomePage],
    })
], HomePageModule);
export { HomePageModule };
//# sourceMappingURL=home.module.js.map