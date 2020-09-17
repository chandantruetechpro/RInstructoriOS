import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VideopostPageRoutingModule } from './videopost-routing.module';
import { VideopostPage } from './videopost.page';
let VideopostPageModule = class VideopostPageModule {
};
VideopostPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            VideopostPageRoutingModule
        ],
        declarations: [VideopostPage]
    })
], VideopostPageModule);
export { VideopostPageModule };
//# sourceMappingURL=videopost.module.js.map