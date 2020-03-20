import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostdetailPageRoutingModule } from './postdetail-routing.module';
import { PostdetailPage } from './postdetail.page';
let PostdetailPageModule = class PostdetailPageModule {
};
PostdetailPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PostdetailPageRoutingModule
        ],
        declarations: [PostdetailPage]
    })
], PostdetailPageModule);
export { PostdetailPageModule };
//# sourceMappingURL=postdetail.module.js.map