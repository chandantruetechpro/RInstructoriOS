import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideopostPage } from './videopost.page';
const routes = [
    {
        path: '',
        component: VideopostPage
    }
];
let VideopostPageRoutingModule = class VideopostPageRoutingModule {
};
VideopostPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], VideopostPageRoutingModule);
export { VideopostPageRoutingModule };
//# sourceMappingURL=videopost-routing.module.js.map