import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VideoPageRoutingModule } from './video-routing.module';
import { VideoPage } from './video.page';
// import { ComponentsModule } from '../../components/components.module';
let VideoPageModule = class VideoPageModule {
};
VideoPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            VideoPageRoutingModule,
        ],
        declarations: [VideoPage]
    })
], VideoPageModule);
export { VideoPageModule };
//# sourceMappingURL=video.module.js.map