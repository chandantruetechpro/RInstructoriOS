(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-subcategory-subcategory-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/subcategory/subcategory.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/subcategory/subcategory.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n         <ion-buttons class=\"customBack\" (click)=\"goBack(id,type_sent);\">&nbsp;</ion-buttons>\n        <ion-title>\n            {{this.OptionalPageName != '' ? this.OptionalPageName : this.MainPageName}}\n        </ion-title>\n        <ion-buttons (click)=\"showHide()\" class=\"searchIcon\"></ion-buttons>\n\t\t<ion-buttons class=\"customPlay showPlayBtn\" *ngIf=\"show\" (click)=\"playBtn(id,'from_cat');\">&nbsp;</ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ul class=\"homeListItom\" *ngIf=\"this.CategoryImageTrue == true\">\n        <li *ngFor=\"let SubCat of SubCategories\" id=\"{{SubCat.subcategory_id}}\" class=\"albumList {{SubCat.type}}\">\n\n            <div class=\"homeItems\" *ngIf=\"SubCat.type == 'category'\">\n                <ion-tab-button (click)=\"HomeSubInnFn(SubCat.subcategory_id)\">\n\n                    <div *ngIf=\"SubCat.category_image != ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url('+SubCat.category_image+')'\"></div>\n\n                    <div *ngIf=\"SubCat.category_image == ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url(./assets/images/noimage.png)'\"></div>\n\n                    <!-- <div *ngIf=\"SubCat.category_image == ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url(https://images.pexels.com/photos/3496542/pexels-photo-3496542.jpeg)'\"></div> -->\n\n                    <h2 *ngIf=\"SubCat.subcategory_name != ''\">{{SubCat.subcategory_name}}</h2>\n                    <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.subcategory_page_name}}</p>\n                </ion-tab-button>\n            </div>\n\n            <div class=\"homeItems\" *ngIf=\"SubCat.type == 'post'\">\n                <ion-tab-button (click)=\"HomePostDetail(SubCat.post_id)\" id=\"{{SubCat.post_id}}\">\n                    <div *ngIf=\"SubCat.featured_image != ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url('+SubCat.featured_image+')'\"></div>\n                    <div *ngIf=\"SubCat.featured_image == ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url(./assets/images/noimage.png)'\"></div>\n                    <h2 *ngIf=\"SubCat.post_title != ''\">{{SubCat.post_title}}</h2>\n                    <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.subcategory_page_name}}</p>\n                </ion-tab-button>\n            </div>\n        </li>\n    </ul>\n    <ul class=\"homeListItom ListSyle Link\" *ngIf=\"this.CategoryImageTrue == false\">\n        <!-- <li  class=\"albumList\" *ngFor=\"let SubCat of SubCategories\"  id=\"{{SubCat.subcategory_id}}\" *ngIf=\"SubCat.category_image != ''\">\n\t\t  <div class=\"homeItems\" >\n\t\t\t<ion-tab-button (click)=\"HomeSubInnFn(SubCat.subcategory_id)\">\n\t\t\t\t  <div class=\"HomeItemImgs\"  [style.background-image]=\"'url('+SubCat.category_image+')'\"></div>\n\t\t\t\t<h2>{{SubCat.subcategory_name}}</h2> \n\t\t\t\t<p>{{SubCat.subcategory_page_name}}</p> \n\t\t\t</ion-tab-button>\n\t\t\t</div> \n\n\t\t\t*ngIf=\"SubCat.category_image == ''\"\n\t\t  </li> -->\n\n\n        <li *ngFor=\"let SubCat of SubCategories\" id=\"{{SubCat.subcategory_id}}\" class=\"albumList {{SubCat.type}}\">\n            <div class=\"homeItems Category\" *ngIf=\"SubCat.type == 'category'\">\n                <ion-tab-button (click)=\"HomeSubInnFn(SubCat.subcategory_id)\">\n                    <!-- <div class=\"HomeItemImgs\"  *ngIf=\"SubCat.category_image != ''\"  [style.background-image]=\"'url('+SubCat.category_image+')'\"></div> -->\n                    <div class=\"flexBox\">\n                        <div class=\"leftContHor\">\n                            <h2 *ngIf=\"SubCat.subcategory_name != ''\">{{SubCat.subcategory_name}}</h2>\n                            <!--p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.subcategory_page_name}}</p-->\n                        </div>\n                        <div class=\"arrowRight\">\n                            <ion-icon name=\"arrow-forward\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-tab-button>\n            </div>\n            <div class=\"homeItems posts\" *ngIf=\"SubCat.type == 'post'\">\n\n                <ion-tab-button *ngIf=\"SubCat.post_content == ''\" id=\"{{SubCat.post_id}}\" (click)=\"playBtn(SubCat.post_id,'from_post')\">\n                    <div class=\"flexBox PostBox\">\n                        <div class=\"leftContHor\">\n                            <h2 *ngIf=\"SubCat.post_title != ''\">{{SubCat.post_title}}</h2>\n                            <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.wps_subtitle}}</p>\n                        </div>\n                        <div class=\"arrowRight\">\n                            <ion-icon name=\"arrow-forward\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-tab-button>\n\n                <ion-tab-button *ngIf=\"SubCat.post_content != ''\" id=\"{{SubCat.post_id}}\" (click)=\"HomePostDetail(SubCat.post_id)\">\n                    <div class=\"flexBox PostBox\">\n                        <div class=\"leftContHor\">\n                            <h2 *ngIf=\"SubCat.post_title != ''\">{{SubCat.post_title}}</h2>\n                            <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.wps_subtitle}}</p>\n                        </div>\n                        <div class=\"arrowRight\">\n                            <ion-icon name=\"arrow-forward\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-tab-button>\n            </div>\n        </li>\n    </ul>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/subcategory/subcategory-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/subcategory/subcategory-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SubcategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryPageRoutingModule", function() { return SubcategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subcategory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subcategory.page */ "./src/app/pages/subcategory/subcategory.page.ts");




var routes = [
    {
        path: '',
        component: _subcategory_page__WEBPACK_IMPORTED_MODULE_3__["SubcategoryPage"]
    }
];
var SubcategoryPageRoutingModule = /** @class */ (function () {
    function SubcategoryPageRoutingModule() {
    }
    SubcategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SubcategoryPageRoutingModule);
    return SubcategoryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/subcategory/subcategory.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/subcategory/subcategory.module.ts ***!
  \*********************************************************/
/*! exports provided: SubcategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryPageModule", function() { return SubcategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _subcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subcategory-routing.module */ "./src/app/pages/subcategory/subcategory-routing.module.ts");
/* harmony import */ var _subcategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subcategory.page */ "./src/app/pages/subcategory/subcategory.page.ts");







var SubcategoryPageModule = /** @class */ (function () {
    function SubcategoryPageModule() {
    }
    SubcategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _subcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubcategoryPageRoutingModule"]
            ],
            declarations: [_subcategory_page__WEBPACK_IMPORTED_MODULE_6__["SubcategoryPage"]]
        })
    ], SubcategoryPageModule);
    return SubcategoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/subcategory/subcategory.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/subcategory/subcategory.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1YmNhdGVnb3J5L3N1YmNhdGVnb3J5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/subcategory/subcategory.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/subcategory/subcategory.page.ts ***!
  \*******************************************************/
/*! exports provided: SubcategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryPage", function() { return SubcategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_apiservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/apiservice */ "./src/providers/apiservice.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _providers_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/network */ "./src/providers/network.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/offline-manager.service */ "./src/providers/offline-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







// import { CacheService } from "ionic-cache";



var SubcategoryPage = /** @class */ (function () {
    function SubcategoryPage(apiservice, plt, networkService, storage, offlineManager, loadingCtrl, route, navCtrl) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.navCtrl = navCtrl;
        this.categories = [];
        this.description = [];
        this.SubCategories = [];
        this.CategoryData = [];
        this.users = [];
        this.page = 1;
        this.categoriesData = [];
        this.newDataArray = [];
        this.getData = [];
        this.finalVal = [];
        this.catDATA = [];
        this.ArrayData = [];
        this.getSubtCat = [];
        this.ckData = [];
        this.newArrayPost = [];
        this.SubCatData = [];
        this.PostData = [];
        this.CreateCatArray = [];
        this.CreatePostArray = [];
        this.show = false;
        this.CategoryImage = 0;
        this.CategoryImageTrue = false;
    }
    SubcategoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.SubCategories = [];
        var joinArrayCat = { 'subcategory_name': '', 'subcategory_id': '', 'category_id': '', 'description': '', 'category_image': '', 'subcategory_page_name': '', 'type': '' };
        var CatCreateArray = { 'post_id': '', 'post_title': '', 'post_page_name': '', 'upload_image': '', 'featured_image': '', 'subcategory_page_name': '', 'type': '', 'video_url': '' };
        this.type_sent = 'category';
        var n_id = this.plt.getQueryParam("id");
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.HomeSubFn(true, _this.id);
        });
    };
    SubcategoryPage.prototype.HomeSubFn = function (refresh, id) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            this.storage.get('CategoryDataSQLite').then(function (val) {
                _this.result = val;
                for (var _i = 0, _a = _this.result; _i < _a.length; _i++) {
                    var CatData = _a[_i];
                    var dataArray = CatData.data;
                    var z = 0;
                    for (var _b = 0, dataArray_1 = dataArray; _b < dataArray_1.length; _b++) {
                        var newArray = dataArray_1[_b];
                        var catIDNew = newArray.subcategory_id;
                        if (catIDNew == id) {
                            _this.PostData = newArray.posts;
                            _this.description = newArray.description;
                            _this.CategoryData = newArray.category_data;
                            _this.MainPageName = newArray.subcategory_name;
                            _this.OptionalPageName = newArray.subcategory_page_name;
                            var c = 1;
                            for (var _c = 0, _d = newArray.subcats; _c < _d.length; _c++) {
                                var SubCats = _d[_c];
                                if (typeof SubCats.category_image != 'undefined' && SubCats.category_image != '') {
                                    _this.CategoryImage = +c;
                                    _this.CategoryImageTrue = true;
                                }
                                c++;
                            }
                            var joinArrayCat = { 'subcategory_name': '', 'subcategory_id': '', 'category_id': '', 'description': '', 'category_image': '', 'subcategory_page_name': '', 'type': '' };
                            _this.CreateCatArray = [];
                            for (var _e = 0, _f = newArray.subcats; _e < _f.length; _e++) {
                                var mainCatData = _f[_e];
                                var subcategory_name = mainCatData.subcategory_name;
                                var subcategory_id = mainCatData.subcategory_id;
                                var category_id = mainCatData.category_id;
                                var description = mainCatData.description;
                                var category_image = mainCatData.category_image;
                                var subcategory_page_name = mainCatData.subcategory_page_name;
                                var type = mainCatData.type;
                                var joinArrayCat_1 = { 'subcategory_name': subcategory_name, 'subcategory_id': subcategory_id, 'category_id': category_id, 'description': description, 'category_image': category_image, 'subcategory_page_name': subcategory_page_name, 'type': type };
                                _this.CreateCatArray.push(joinArrayCat_1);
                            }
                            var CatCreateArray = { 'post_id': '', 'post_title': '', 'post_page_name': '', 'upload_image': '', 'featured_image': '', 'subcategory_page_name': '', 'type': '', 'video_url': '' };
                            _this.CreatePostArray = [];
                            for (var _g = 0, _h = _this.PostData; _g < _h.length; _g++) {
                                var CatDataPost = _h[_g];
                                var post_id = CatDataPost.post_id;
                                var post_title = CatDataPost.post_title;
                                var post_page_name = CatDataPost.post_page_name;
                                var upload_image = CatDataPost.upload_image;
                                var featured_image = CatDataPost.featured_image;
                                var wps_subtitle = CatDataPost.wps_subtitle;
                                var type = CatDataPost.type;
                                var video_url = CatDataPost.video_url;
                                var CatCreateArray_1 = { 'post_id': post_id, 'post_title': post_title, 'post_page_name': post_page_name, 'upload_image': upload_image, 'featured_image': featured_image, 'wps_subtitle': wps_subtitle, 'type': type, 'video_url': video_url };
                                _this.CreatePostArray.push(CatCreateArray_1);
                            }
                        }
                        z++;
                    }
                    _this.SubCategories = _this.CreateCatArray.concat(_this.CreatePostArray);
                }
            });
        }
        else {
            var definedthis = window.itemsini;
            var ctt = 0;
            for (var _i = 0, definedthis_1 = definedthis; _i < definedthis_1.length; _i++) {
                var itemsingle = definedthis_1[_i];
                if (itemsingle['active'] == 'active') {
                    window.itemsini[ctt]['name'] = 'subcategory/' + id;
                    window.itemsini[ctt]['active'] = 'active';
                }
                ctt++;
            }
            this.apiservice.HomeCategory(id).then(function (res) {
                _this.result = res;
                if (_this.result.code == "200") {
                    _this.SubCategories = _this.result.data;
                    _this.description = _this.result.description;
                    _this.CategoryData = _this.result.category_data;
                    var s = 1;
                    for (var _i = 0, _a = _this.SubCategories; _i < _a.length; _i++) {
                        var SubCats = _a[_i];
                        if (typeof SubCats.category_image != 'undefined' && SubCats.category_image != '') {
                            _this.CategoryImage = +s;
                            _this.CategoryImageTrue = true;
                            // this.type_sent = 'post';
                        }
                        s++;
                    }
                    for (var _b = 0, _c = _this.CategoryData; _b < _c.length; _b++) {
                        var CatData = _c[_b];
                        _this.MainPageName = CatData.category_name;
                        _this.OptionalPageName = CatData.category_page_name;
                        if (typeof CatData.category_video_url != 'undefined' && CatData.category_video_url != '') {
                            _this.show = true;
                            _this.categoryvideourl = CatData.category_video_url;
                        }
                        else {
                            _this.categoryvideourl = '';
                        }
                    }
                    console.log(_this.categoryvideourl);
                }
            }, function (error) {
                console.log('error');
                console.log(error);
                console.log('error');
            });
        }
    };
    /*goBack() {
          
      window.history.back();
    }*/
    SubcategoryPage.prototype.goBack = function (id, type_sent) {
        var _this = this;
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            window.history.back();
        }
        else {
            this.apiservice.getParentPage(id, type_sent).then(function (res) {
                _this.result = res;
                if (_this.result.code == "200") {
                    console.log('getParentPage ' + _this.result.ParentPage_id);
                    if (_this.result.ParentPage_id == 'home') { //Home
                        _this.navCtrl.navigateForward('/home');
                    }
                    else if (_this.result.ParentPage_id == 'video') { //Videos
                        _this.navCtrl.navigateForward('/video');
                    }
                    else if (_this.result.ParentPage_id == 'cheatsheets') { //Cheat Sheet
                        _this.navCtrl.navigateForward('/cheatsheets');
                    }
                    else if (_this.result.ParentPage_id == 'whichtest') { //Which Test
                        _this.navCtrl.navigateForward('/whichtest');
                    }
                    else {
                        _this.navCtrl.navigateForward('subcategory/' + _this.result.ParentPage_id);
                    }
                }
            }, function (error) {
                console.log('error');
                console.log(error);
                console.log('error');
            });
        }
    };
    SubcategoryPage.prototype.HomeSubInnFn = function (idsub) {
        this.navCtrl.navigateForward(['subcategory/' + idsub]);
    };
    SubcategoryPage.prototype.HomePostDetail = function (postId) {
        this.navCtrl.navigateForward(['postdetail/' + postId]);
    };
    SubcategoryPage.prototype.playBtn = function (postId, from) {
        if (from == 'from_post') {
            this.navCtrl.navigateForward(['videopost/' + postId]);
        }
        else {
            this.navCtrl.navigateForward(['videopost/' + postId + '?from_category=yes']);
            // this.navCtrl.navigateForward(['videopost/' + postId]);
        }
    };
    SubcategoryPage.prototype.loadData = function (refresh, refresher) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        this.apiservice.HomeCategory(this.id).then(function (res) {
            _this.result = res;
            if (_this.result.code == "200") {
                _this.SubCategories = _this.result.data;
                _this.description = _this.result.description;
                _this.CategoryData = _this.result.category_data;
                var s = 1;
                for (var _i = 0, _a = _this.SubCategories; _i < _a.length; _i++) {
                    var SubCats = _a[_i];
                    if (typeof SubCats.category_image != 'undefined' && SubCats.category_image != '') {
                        _this.CategoryImage = +s;
                        _this.CategoryImageTrue = true;
                        // this.type_sent = 'post';
                    }
                    s++;
                }
                for (var _b = 0, _c = _this.CategoryData; _b < _c.length; _b++) {
                    var CatData = _c[_b];
                    _this.MainPageName = CatData.category_name;
                    _this.OptionalPageName = CatData.category_page_name;
                    if (typeof CatData.category_video_url != 'undefined' && CatData.category_video_url != '') {
                        _this.show = true;
                        _this.categoryvideourl = CatData.category_video_url;
                    }
                    else {
                        _this.categoryvideourl = '';
                    }
                }
                console.log(_this.categoryvideourl);
                console.log(_this.SubCategories);
            }
            if (refresher) {
                refresher.target.complete();
            }
        }, function (error) {
            console.log('error');
            console.log(error);
            console.log('error');
        });
    };
    SubcategoryPage.ctorParameters = function () { return [
        { type: _providers_apiservice__WEBPACK_IMPORTED_MODULE_2__["Apiservice"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    SubcategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subcategory',
            template: __webpack_require__(/*! raw-loader!./subcategory.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/subcategory/subcategory.page.html"),
            styles: [__webpack_require__(/*! ./subcategory.page.scss */ "./src/app/pages/subcategory/subcategory.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_apiservice__WEBPACK_IMPORTED_MODULE_2__["Apiservice"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], SubcategoryPage);
    return SubcategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-subcategory-subcategory-module-es5.js.map