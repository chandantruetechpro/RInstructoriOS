import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideoPage } from './video.page';
const routes = [
    {
        path: '',
        component: VideoPage
    }
];
let VideoPageRoutingModule = class VideoPageRoutingModule {
};
VideoPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], VideoPageRoutingModule);
export { VideoPageRoutingModule };
//# sourceMappingURL=video-routing.module.js.map