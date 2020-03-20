import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostsPageRoutingModule } from './posts-routing.module';
import { PostsPage } from './posts.page';
let PostsPageModule = class PostsPageModule {
};
PostsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PostsPageRoutingModule
        ],
        declarations: [PostsPage]
    })
], PostsPageModule);
export { PostsPageModule };
//# sourceMappingURL=posts.module.js.map