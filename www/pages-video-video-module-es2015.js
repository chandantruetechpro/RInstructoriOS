(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-video-video-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/video/video.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/video/video.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Video</ion-title>\n        <ion-buttons (click)=\"showHide()\" class=\"searchIcon\"></ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ul class=\"homeListItom\">\n        <!-- <li class=\"albumList\" *ngFor=\"let cat of categories; let i = 1; i++;\" *ngIf=\" cat.category_position == 'i'\" id=\"{{cat.subcategory_id}}\"> -->\n        <li class=\"albumList\" *ngFor=\"let cat of ArrangeCategory; let i = index; let key of keys\" id=\"{{cat.subcategory_id}}\">\n            <div class=\"homeItems\">\n                <!-- <ion-tab-button tab={{cat.link}}  (click)=\"HomeSubFn(15)\"> -->\n                <!-- <ion-tab-button [routerLink]=\"'/subcategory/' + cat.subcategory_id\" routerDirection=\"forward\"> -->\n                <ion-tab-button tab={{cat.link}} (click)=\"HomeSubFn(cat.subcategory_id)\">\n                    <div class=\"HomeItemImgs\" [style.background-image]=\"'url('+cat.category_image+')'\" style=\"background-image: url(../../assets/images/HomeIcon1.png);\"></div>\n                    <h2>{{cat.name}}</h2>\n                    <p>{{cat.description}}</p>\n\n                </ion-tab-button>\n            </div>\n        </li>\n    </ul>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/video/video-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/video/video-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: VideoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageRoutingModule", function() { return VideoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video.page */ "./src/app/pages/video/video.page.ts");




const routes = [
    {
        path: '',
        component: _video_page__WEBPACK_IMPORTED_MODULE_3__["VideoPage"]
    }
];
let VideoPageRoutingModule = class VideoPageRoutingModule {
};
VideoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VideoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/video/video.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/video/video.module.ts ***!
  \*********************************************/
/*! exports provided: VideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-routing.module */ "./src/app/pages/video/video-routing.module.ts");
/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video.page */ "./src/app/pages/video/video.page.ts");







let VideoPageModule = class VideoPageModule {
};
VideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _video_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoPageRoutingModule"]
        ],
        declarations: [_video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]]
    })
], VideoPageModule);



/***/ }),

/***/ "./src/app/pages/video/video.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/video/video.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZGVvL3ZpZGVvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/video/video.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/video/video.page.ts ***!
  \*******************************************/
/*! exports provided: VideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPage", function() { return VideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_apiservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/apiservice */ "./src/providers/apiservice.ts");
/* harmony import */ var _providers_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/network */ "./src/providers/network.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/offline-manager.service */ "./src/providers/offline-manager.service.ts");









let VideoPage = class VideoPage {
    constructor(apiservice, plt, networkService, storage, offlineManager, loadingCtrl, navCtrl) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.categories = [];
        this.SubCategories = [];
        this.users = [];
        this.page = 1;
        this.categoriesData = [];
        this.ArrangeCategory = [];
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            this.homeListing(true);
        });
    }
    homeListing(refresh = false) {
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            this.storage.get('VideoPageSQLite').then((val) => {
                this.result = val;
                for (let CatData of this.result) {
                    this.categories = CatData.data;
                    let o = 1;
                    for (let getVideoData of CatData.data) {
                        var index = CatData.data.findIndex(p => p.category_position == o);
                        this.ArrangeCategory.push(CatData.data[index]);
                        o++;
                    }
                }
            });
        }
        else {
            this.apiservice.VideoData().then((res) => {
                let subCatUrl = 'get_posts_and_subcategories?category_id=';
                this.result = res;
                if (this.result.code == "200") {
                    this.categories = this.result.data;
                    this.keys = Object.keys(this.categories);
                    var newArray = [];
                    let s = 1;
                    for (let catsPos of this.categories) {
                        var index = this.categories.findIndex(p => p.category_position == s);
                        this.ArrangeCategory.push(this.categories[index]);
                        s++;
                    }
                }
            }, (error) => {
                console.log('error');
                console.log(error);
                console.log('error');
            });
        }
    }
    HomeSubFn(id) {
        this.navCtrl.navigateForward(['subcategory/' + id]);
    }
    loadData(refresh = false, refresher) {
        this.homeListing(true);
        this.apiservice.VideoData().then((res) => {
            this.result = res;
            this.categories = this.result;
            if (refresher) {
                refresher.target.complete();
            }
        }, (error) => {
            console.log('error');
            console.log(error);
            console.log('error');
        });
    }
};
VideoPage.ctorParameters = () => [
    { type: _providers_apiservice__WEBPACK_IMPORTED_MODULE_3__["Apiservice"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
VideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-video',
        template: __webpack_require__(/*! raw-loader!./video.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/video/video.page.html"),
        styles: [__webpack_require__(/*! ./video.page.scss */ "./src/app/pages/video/video.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_apiservice__WEBPACK_IMPORTED_MODULE_3__["Apiservice"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
        _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
], VideoPage);



/***/ })

}]);
//# sourceMappingURL=pages-video-video-module-es2015.js.map