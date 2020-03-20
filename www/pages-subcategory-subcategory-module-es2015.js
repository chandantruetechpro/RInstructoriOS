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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _subcategory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subcategory.page */ "./src/app/pages/subcategory/subcategory.page.ts");




const routes = [
    {
        path: '',
        component: _subcategory_page__WEBPACK_IMPORTED_MODULE_3__["SubcategoryPage"]
    }
];
let SubcategoryPageRoutingModule = class SubcategoryPageRoutingModule {
};
SubcategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubcategoryPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _subcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subcategory-routing.module */ "./src/app/pages/subcategory/subcategory-routing.module.ts");
/* harmony import */ var _subcategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subcategory.page */ "./src/app/pages/subcategory/subcategory.page.ts");







let SubcategoryPageModule = class SubcategoryPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_apiservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/apiservice */ "./src/providers/apiservice.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/network */ "./src/providers/network.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/offline-manager.service */ "./src/providers/offline-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







// import { CacheService } from "ionic-cache";



let SubcategoryPage = class SubcategoryPage {
    constructor(apiservice, plt, networkService, storage, offlineManager, loadingCtrl, route, navCtrl) {
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
    ngOnInit() {
        this.SubCategories = [];
        let joinArrayCat = { 'subcategory_name': '', 'subcategory_id': '', 'category_id': '', 'description': '', 'category_image': '', 'subcategory_page_name': '', 'type': '' };
        let CatCreateArray = { 'post_id': '', 'post_title': '', 'post_page_name': '', 'upload_image': '', 'featured_image': '', 'subcategory_page_name': '', 'type': '', 'video_url': '' };
        this.type_sent = 'category';
        let n_id = this.plt.getQueryParam("id");
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.HomeSubFn(true, this.id);
        });
    }
    HomeSubFn(refresh = false, id) {
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            this.storage.get('CategoryDataSQLite').then((val) => {
                this.result = val;
                for (let CatData of this.result) {
                    let dataArray = CatData.data;
                    let z = 0;
                    for (let newArray of dataArray) {
                        let catIDNew = newArray.subcategory_id;
                        if (catIDNew == id) {
                            this.PostData = newArray.posts;
                            this.description = newArray.description;
                            this.CategoryData = newArray.category_data;
                            this.MainPageName = newArray.subcategory_name;
                            this.OptionalPageName = newArray.subcategory_page_name;
                            let c = 1;
                            for (let SubCats of newArray.subcats) {
                                if (typeof SubCats.category_image != 'undefined' && SubCats.category_image != '') {
                                    this.CategoryImage = +c;
                                    this.CategoryImageTrue = true;
                                }
                                c++;
                            }
                            let joinArrayCat = { 'subcategory_name': '', 'subcategory_id': '', 'category_id': '', 'description': '', 'category_image': '', 'subcategory_page_name': '', 'type': '' };
                            this.CreateCatArray = [];
                            for (let mainCatData of newArray.subcats) {
                                let subcategory_name = mainCatData.subcategory_name;
                                let subcategory_id = mainCatData.subcategory_id;
                                let category_id = mainCatData.category_id;
                                let description = mainCatData.description;
                                let category_image = mainCatData.category_image;
                                let subcategory_page_name = mainCatData.subcategory_page_name;
                                let type = mainCatData.type;
                                let joinArrayCat = { 'subcategory_name': subcategory_name, 'subcategory_id': subcategory_id, 'category_id': category_id, 'description': description, 'category_image': category_image, 'subcategory_page_name': subcategory_page_name, 'type': type };
                                this.CreateCatArray.push(joinArrayCat);
                            }
                            let CatCreateArray = { 'post_id': '', 'post_title': '', 'post_page_name': '', 'upload_image': '', 'featured_image': '', 'subcategory_page_name': '', 'type': '', 'video_url': '' };
                            this.CreatePostArray = [];
                            for (let CatDataPost of this.PostData) {
                                let post_id = CatDataPost.post_id;
                                let post_title = CatDataPost.post_title;
                                let post_page_name = CatDataPost.post_page_name;
                                let upload_image = CatDataPost.upload_image;
                                let featured_image = CatDataPost.featured_image;
                                let wps_subtitle = CatDataPost.wps_subtitle;
                                let type = CatDataPost.type;
                                let video_url = CatDataPost.video_url;
                                let CatCreateArray = { 'post_id': post_id, 'post_title': post_title, 'post_page_name': post_page_name, 'upload_image': upload_image, 'featured_image': featured_image, 'wps_subtitle': wps_subtitle, 'type': type, 'video_url': video_url };
                                this.CreatePostArray.push(CatCreateArray);
                            }
                        }
                        z++;
                    }
                    this.SubCategories = this.CreateCatArray.concat(this.CreatePostArray);
                }
            });
        }
        else {
            let definedthis = window.itemsini;
            let ctt = 0;
            for (let itemsingle of definedthis) {
                if (itemsingle['active'] == 'active') {
                    window.itemsini[ctt]['name'] = 'subcategory/' + id;
                    window.itemsini[ctt]['active'] = 'active';
                }
                ctt++;
            }
            this.apiservice.HomeCategory(id).then((res) => {
                this.result = res;
                if (this.result.code == "200") {
                    this.SubCategories = this.result.data;
                    this.description = this.result.description;
                    this.CategoryData = this.result.category_data;
                    let s = 1;
                    for (let SubCats of this.SubCategories) {
                        if (typeof SubCats.category_image != 'undefined' && SubCats.category_image != '') {
                            this.CategoryImage = +s;
                            this.CategoryImageTrue = true;
                            // this.type_sent = 'post';
                        }
                        s++;
                    }
                    for (let CatData of this.CategoryData) {
                        this.MainPageName = CatData.category_name;
                        this.OptionalPageName = CatData.category_page_name;
                        if (typeof CatData.category_video_url != 'undefined' && CatData.category_video_url != '') {
                            this.show = true;
                            this.categoryvideourl = CatData.category_video_url;
                        }
                        else {
                            this.categoryvideourl = '';
                        }
                    }
                    console.log(this.categoryvideourl);
                }
            }, (error) => {
                console.log('error');
                console.log(error);
                console.log('error');
            });
        }
    }
    /*goBack() {
          
      window.history.back();
    }*/
    goBack(id, type_sent) {
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            window.history.back();
        }
        else {
            this.apiservice.getParentPage(id, type_sent).then((res) => {
                this.result = res;
                if (this.result.code == "200") {
                    console.log('getParentPage ' + this.result.ParentPage_id);
                    if (this.result.ParentPage_id == 'home') { //Home
                        this.navCtrl.navigateForward('/home');
                    }
                    else if (this.result.ParentPage_id == 'video') { //Videos
                        this.navCtrl.navigateForward('/video');
                    }
                    else if (this.result.ParentPage_id == 'cheatsheets') { //Cheat Sheet
                        this.navCtrl.navigateForward('/cheatsheets');
                    }
                    else if (this.result.ParentPage_id == 'whichtest') { //Which Test
                        this.navCtrl.navigateForward('/whichtest');
                    }
                    else {
                        this.navCtrl.navigateForward('subcategory/' + this.result.ParentPage_id);
                    }
                }
            }, (error) => {
                console.log('error');
                console.log(error);
                console.log('error');
            });
        }
    }
    HomeSubInnFn(idsub) {
        this.navCtrl.navigateForward(['subcategory/' + idsub]);
    }
    HomePostDetail(postId) {
        this.navCtrl.navigateForward(['postdetail/' + postId]);
    }
    playBtn(postId, from) {
        if (from == 'from_post') {
            this.navCtrl.navigateForward(['videopost/' + postId]);
        }
        else {
            this.navCtrl.navigateForward(['videopost/' + postId + '?from_category=yes']);
            // this.navCtrl.navigateForward(['videopost/' + postId]);
        }
    }
    loadData(refresh = false, refresher) {
        this.apiservice.HomeCategory(this.id).then((res) => {
            this.result = res;
            if (this.result.code == "200") {
                this.SubCategories = this.result.data;
                this.description = this.result.description;
                this.CategoryData = this.result.category_data;
                let s = 1;
                for (let SubCats of this.SubCategories) {
                    if (typeof SubCats.category_image != 'undefined' && SubCats.category_image != '') {
                        this.CategoryImage = +s;
                        this.CategoryImageTrue = true;
                        // this.type_sent = 'post';
                    }
                    s++;
                }
                for (let CatData of this.CategoryData) {
                    this.MainPageName = CatData.category_name;
                    this.OptionalPageName = CatData.category_page_name;
                    if (typeof CatData.category_video_url != 'undefined' && CatData.category_video_url != '') {
                        this.show = true;
                        this.categoryvideourl = CatData.category_video_url;
                    }
                    else {
                        this.categoryvideourl = '';
                    }
                }
                console.log(this.categoryvideourl);
                console.log(this.SubCategories);
            }
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
SubcategoryPage.ctorParameters = () => [
    { type: _providers_apiservice__WEBPACK_IMPORTED_MODULE_2__["Apiservice"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-subcategory-subcategory-module-es2015.js.map