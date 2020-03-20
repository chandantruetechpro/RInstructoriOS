import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsPage } from './posts.page';
const routes = [
    {
        path: '',
        component: PostsPage
    }
];
let PostsPageRoutingModule = class PostsPageRoutingModule {
};
PostsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PostsPageRoutingModule);
export { PostsPageRoutingModule };
//# sourceMappingURL=posts-routing.module.js.map