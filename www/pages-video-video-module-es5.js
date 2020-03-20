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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video.page */ "./src/app/pages/video/video.page.ts");




var routes = [
    {
        path: '',
        component: _video_page__WEBPACK_IMPORTED_MODULE_3__["VideoPage"]
    }
];
var VideoPageRoutingModule = /** @class */ (function () {
    function VideoPageRoutingModule() {
    }
    VideoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], VideoPageRoutingModule);
    return VideoPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-routing.module */ "./src/app/pages/video/video-routing.module.ts");
/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video.page */ "./src/app/pages/video/video.page.ts");







var VideoPageModule = /** @class */ (function () {
    function VideoPageModule() {
    }
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
    return VideoPageModule;
}());



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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_apiservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/apiservice */ "./src/providers/apiservice.ts");
/* harmony import */ var _providers_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/network */ "./src/providers/network.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/offline-manager.service */ "./src/providers/offline-manager.service.ts");









var VideoPage = /** @class */ (function () {
    function VideoPage(apiservice, plt, networkService, storage, offlineManager, loadingCtrl, navCtrl) {
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
    VideoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.plt.ready().then(function () {
            _this.homeListing(true);
        });
    };
    VideoPage.prototype.homeListing = function (refresh) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            this.storage.get('VideoPageSQLite').then(function (val) {
                _this.result = val;
                var _loop_1 = function (CatData) {
                    _this.categories = CatData.data;
                    var o = 1;
                    for (var _i = 0, _a = CatData.data; _i < _a.length; _i++) {
                        var getVideoData = _a[_i];
                        index = CatData.data.findIndex(function (p) { return p.category_position == o; });
                        _this.ArrangeCategory.push(CatData.data[index]);
                        o++;
                    }
                };
                var index;
                for (var _i = 0, _a = _this.result; _i < _a.length; _i++) {
                    var CatData = _a[_i];
                    _loop_1(CatData);
                }
            });
        }
        else {
            this.apiservice.VideoData().then(function (res) {
                var subCatUrl = 'get_posts_and_subcategories?category_id=';
                _this.result = res;
                if (_this.result.code == "200") {
                    _this.categories = _this.result.data;
                    _this.keys = Object.keys(_this.categories);
                    var newArray = [];
                    var s_1 = 1;
                    for (var _i = 0, _a = _this.categories; _i < _a.length; _i++) {
                        var catsPos = _a[_i];
                        var index = _this.categories.findIndex(function (p) { return p.category_position == s_1; });
                        _this.ArrangeCategory.push(_this.categories[index]);
                        s_1++;
                    }
                }
            }, function (error) {
                console.log('error');
                console.log(error);
                console.log('error');
            });
        }
    };
    VideoPage.prototype.HomeSubFn = function (id) {
        this.navCtrl.navigateForward(['subcategory/' + id]);
    };
    VideoPage.prototype.loadData = function (refresh, refresher) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        this.homeListing(true);
        this.apiservice.VideoData().then(function (res) {
            _this.result = res;
            _this.categories = _this.result;
            if (refresher) {
                refresher.target.complete();
            }
        }, function (error) {
            console.log('error');
            console.log(error);
            console.log('error');
        });
    };
    VideoPage.ctorParameters = function () { return [
        { type: _providers_apiservice__WEBPACK_IMPORTED_MODULE_3__["Apiservice"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
        { type: _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
    ]; };
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
    return VideoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-video-video-module-es5.js.map