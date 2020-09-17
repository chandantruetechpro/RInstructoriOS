(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-subcategory-subcategory-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/subcategory/subcategory.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/subcategory/subcategory.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n\n        <!-- <ion-buttons slot=\"start\">\n            <ion-back-button (click)=\"goBack(id,type_sent);\" ></ion-back-button>\n        </ion-buttons> -->\n        <ion-buttons class=\"customBack\" (click)=\"goBack(id,type_sent);\">&nbsp;</ion-buttons>\n        <ion-title>\n            {{this.OptionalPageName != '' ? this.OptionalPageName : this.MainPageName}}\n        </ion-title>\n        <!-- <ion-buttons (click)=\"showHide()\" class=\"searchIcon\"></ion-buttons> -->\n        <ion-buttons class=\"customPlay showPlayBtn\" *ngIf=\"show\" (click)=\"playBtn(id,'from_cat');\">&nbsp;</ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher> -->\n\n    <!-- <ul class=\"homeListItom\" *ngIf=\"this.CategoryImageTrue == true\">\n        <li *ngFor=\"let SubCat of ArrangeCategory\" id=\"{{SubCat.subcategory_id}}\" class=\"albumList {{SubCat.type}}\">\n\n            <div class=\"homeItems\" *ngIf=\"SubCat.type == 'category'\">\n                <ion-tab-button (click)=\"HomeSubInnFn(SubCat.subcategory_id)\">\n\n                    <div *ngIf=\"SubCat.category_image != ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url('+SubCat.category_image+')'\"></div>\n\n                    <div *ngIf=\"SubCat.category_image == ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url(./assets/images/noimage.png)'\"></div>\n\n\n                    <h2 *ngIf=\"SubCat.subcategory_name != ''\">{{SubCat.subcategory_name}}</h2>\n                    <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.subcategory_page_name}}</p>\n                </ion-tab-button>\n            </div>\n\n            <div class=\"homeItems\" *ngIf=\"SubCat.type == 'post'\">\n                <ion-tab-button (click)=\"HomePostDetail(SubCat.post_id)\" id=\"{{SubCat.post_id}}\">\n                    <div *ngIf=\"SubCat.featured_image != ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url('+SubCat.featured_image+')'\"></div>\n                    <div *ngIf=\"SubCat.featured_image == ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url(./assets/images/noimage.png)'\"></div>\n                    <h2 *ngIf=\"SubCat.post_title != ''\">{{SubCat.post_title}}</h2>\n                    <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.subcategory_page_name}}</p>\n                </ion-tab-button>\n            </div>\n        </li>\n    </ul> -->\n    <ul class=\"homeListItom SubCategoryPage Image\" *ngIf=\"this.CategoryImageTrue == true\">\n        <li *ngFor=\"let SubCat of ArrangeCategory; let i = index; let key of keys\" [attr.index]='SubCat.category_position' id=\"{{SubCat.subcategory_id}}\" class=\"albumList {{SubCat.type}}\">\n\n            <div class=\"homeItems\" *ngIf=\"SubCat.type == 'category'\">\n                <ion-tab-button (click)=\"HomeSubInnFn(SubCat.subcategory_id)\">\n\n                    <div *ngIf=\"SubCat.category_image != ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url('+SubCat.category_image+')'\"></div>\n\n                    <div *ngIf=\"SubCat.category_image == ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url(./assets/images/noimage.png)'\"></div>\n\n                    <!-- <div *ngIf=\"SubCat.category_image == ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url(https://images.pexels.com/photos/3496542/pexels-photo-3496542.jpeg)'\"></div> -->\n\n                    <h2 *ngIf=\"SubCat.subcategory_name != ''\">{{SubCat.subcategory_name}}</h2>\n                    <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.subcategory_page_name}}</p>\n                    \n                </ion-tab-button>\n            </div>\n\n            <div class=\"homeItems\" *ngIf=\"SubCat.type == 'post'\">\n                <ion-tab-button *ngIf=\"SubCat.post_content != ''\" (click)=\"HomePostDetail(SubCat.post_id)\" id=\"{{SubCat.post_id}}\">\n                    <div *ngIf=\"SubCat.featured_image != ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url('+SubCat.featured_image+')'\"></div>\n                    <div *ngIf=\"SubCat.featured_image == ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url(./assets/images/noimage.png)'\"></div>\n                    <h2 *ngIf=\"SubCat.post_title != ''\">{{SubCat.post_title}}</h2>\n                    <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.subcategory_page_name}}</p>\n                </ion-tab-button>\n\n                <ion-tab-button *ngIf=\"SubCat.post_content == '' && SubCat.pdf_image_for_subcategory != ''\" (click)=\"pdfClickOption(SubCat.post_id)\" id=\"{{SubCat.post_id}}\">\n                    <div *ngIf=\"SubCat.featured_image != ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url('+SubCat.featured_image+')'\"></div>\n                    <div *ngIf=\"SubCat.featured_image == ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url(./assets/images/noimage.png)'\"></div>\n                    <h2 *ngIf=\"SubCat.post_title != ''\">{{SubCat.post_title}}</h2>\n                    <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.subcategory_page_name}}</p>\n                </ion-tab-button>\n\t\t\t\t<ion-tab-button *ngIf=\"SubCat.post_content == '' && SubCat.external_url != ''\" (click)=\"open_out_url(SubCat.external_url)\" id=\"{{SubCat.post_id}}\">\n                    <div *ngIf=\"SubCat.featured_image != ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url('+SubCat.featured_image+')'\"></div>\n                    <div *ngIf=\"SubCat.featured_image == ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url(./assets/images/noimage.png)'\"></div>\n                    <h2 *ngIf=\"SubCat.post_title != ''\">{{SubCat.post_title}}</h2>\n                    <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.subcategory_page_name}}</p>\n                </ion-tab-button>\n            </div>\n        </li>\n    </ul>\n    <ul class=\"homeListItom ListSyle Link\" *ngIf=\"this.CategoryImageTrue == false\">\n        <!-- <li  class=\"albumList\" *ngFor=\"let SubCat of ArrangeCategory\"  id=\"{{SubCat.subcategory_id}}\" *ngIf=\"SubCat.category_image != ''\">\n\t\t  <div class=\"homeItems\" >\n\t\t\t<ion-tab-button (click)=\"HomeSubInnFn(SubCat.subcategory_id)\">\n\t\t\t\t  <div class=\"HomeItemImgs\"  [style.background-image]=\"'url('+SubCat.category_image+')'\"></div>\n\t\t\t\t<h2>{{SubCat.subcategory_name}}</h2> \n\t\t\t\t<p>{{SubCat.subcategory_page_name}}</p> \n\t\t\t</ion-tab-button>\n\t\t\t</div> \n\n\t\t\t*ngIf=\"SubCat.category_image == ''\"\n\t\t  </li> -->\n\n\n        <li *ngFor=\"let SubCat of ArrangeCategory; let i = index; let key of keys\" [attr.index]='SubCat.category_position' id=\"{{SubCat.subcategory_id}}\" class=\"albumList {{SubCat.type}}\">\n            <div class=\"homeItems homeItemCategory Category\" *ngIf=\"SubCat.type == 'category'\">\n                <ion-tab-button (click)=\"HomeSubInnFn(SubCat.subcategory_id)\">\n                    <!-- <div class=\"HomeItemImgs\"  *ngIf=\"SubCat.category_image != ''\"  [style.background-image]=\"'url('+SubCat.category_image+')'\"></div> -->\n                    <div class=\"flexBox\">\n                        <div class=\"leftContHor\">\n                            <h2 *ngIf=\"SubCat.subcategory_name != ''\">{{SubCat.subcategory_name}}</h2>\n                            <p *ngIf=\"SubCat.subcategory_name != ''\">{{SubCat.description}}</p>\n                            <!--p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.subcategory_page_name}}</p-->\n                        </div>\n                        <div class=\"arrowRight\">\n                            <ion-icon name=\"arrow-forward\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-tab-button>\n            </div>\n            <div class=\"homeItems homeItemPost posts\" *ngIf=\"SubCat.type == 'post'\">\n\n                <ion-tab-button class=\"PDFOpenNot1\" *ngIf=\"SubCat.post_content == '' && SubCat.pdf_image_for_subcategory == ''\" id=\"{{SubCat.post_id}}\" (click)=\"playBtn(SubCat.post_id,'from_post')\">\n                    <div class=\"flexBox PostBox\">\n                        <div class=\"leftContHor\">\n                            <h2 *ngIf=\"SubCat.post_title != ''\">{{SubCat.post_title}}</h2>\n                            <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.wps_subtitle}}</p>\n                            <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.description}}</p>\n                        </div>\n                        <div class=\"arrowRight\">\n                            <ion-icon name=\"arrow-forward\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-tab-button>\n\n                <ion-tab-button class=\"PDFOpenNot2\" *ngIf=\"SubCat.post_content != '' && SubCat.pdf_image_for_subcategory == ''\" id=\"{{SubCat.post_id}}\" (click)=\"HomePostDetail(SubCat.post_id)\">\n                    <div class=\"flexBox PostBox\">\n                        <div class=\"leftContHor\">\n                            <h2 *ngIf=\"SubCat.post_title != ''\">{{SubCat.post_title}}</h2>\n                            <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.wps_subtitle}}</p>\n                            <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.description}}</p>\n                        </div>\n                        <div class=\"arrowRight\">\n                            <ion-icon name=\"arrow-forward\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-tab-button>\n\n\n                <ion-tab-button *ngIf=\"SubCat.post_content != '' && SubCat.pdf_image_for_subcategory != ''\" id=\"{{SubCat.post_id}}\" (click)=\"HomePostDetail(SubCat.post_id)\">\n                    <div class=\"flexBox PostBox\">\n                        <div class=\"leftContHor\">\n                            <h2 *ngIf=\"SubCat.post_title != ''\">{{SubCat.post_title}}</h2>\n                            <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.wps_subtitle}}</p>\n                            <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.description}}</p>\n                        </div>\n                        <div class=\"arrowRight\">\n                            <ion-icon name=\"arrow-forward\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-tab-button>\n\n\n                <ion-tab-button class=\"PDFOpen\" *ngIf=\"SubCat.post_content == '' && SubCat.pdf_image_for_subcategory != ''\" id=\"{{SubCat.post_id}}\" (click)=\"pdfClickOption(SubCat.post_id)\">\n                    <div class=\"flexBox PostBox\">\n                        <div class=\"leftContHor\">\n                            <h2 *ngIf=\"SubCat.post_title != ''\">{{SubCat.post_title}}</h2>\n                            <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.wps_subtitle}}</p>\n                            <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.description}}</p>\n                        </div>\n                        <div class=\"arrowRight\">\n                            <ion-icon name=\"arrow-forward\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-tab-button>\n\n            </div>\n        </li>\n    </ul>\n</ion-content>"

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
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");







// import { CacheService } from "ionic-cache";









var SubcategoryPage = /** @class */ (function () {
    function SubcategoryPage(apiservice, plt, networkService, storage, offlineManager, loadingCtrl, route, navCtrl, document, fileOpener, file, ft, iab) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.navCtrl = navCtrl;
        this.document = document;
        this.fileOpener = fileOpener;
        this.file = file;
        this.ft = ft;
        this.iab = iab;
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
        this.ArrangeCategory = [];
        this.ArangeTrue = false;
        this.option = {
            location: "no",
            hidden: "no",
            zoom: "no",
            hideurlbar: "yes",
            closebuttoncaption: 'Back!',
            closebuttoncolor: '#ffffff',
            clearcache: 'yes',
            hardwareback: 'yes',
            hidenavigationbuttons: 'yes',
            footer: 'yes',
            toolbar: 'yes',
            disallowoverscroll: 'no',
            toolbarposition: 'bottom',
        };
        this.CategoryImage = 0;
        this.CategoryImageTrue = false;
        var options = {
            title: "pdf_image"
        };
    }
    SubcategoryPage.prototype.ngOnInit = function () {
        this.SubCategories = [];
        var joinArrayCat = {
            subcategory_name: "",
            subcategory_id: "",
            category_id: "",
            description: "",
            category_image: "",
            subcategory_page_name: "",
            type: ""
        };
        var CatCreateArray = {
            post_id: "",
            post_title: "",
            post_page_name: "",
            upload_image: "",
            featured_image: "",
            subcategory_page_name: "",
            type: "",
            video_url: ""
        };
        this.type_sent = "category";
        this.plt.ready().then(function () {
            // let n_id = this.plt.getQueryParam("id");
            // this.sub = this.route.params.subscribe(params => {
            //   this.id = params["id"];
            //   this.HomeSubFn(true, this.id);
            // });
        });
    };
    SubcategoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var n_id = this.plt.getQueryParam("id");
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params["id"];
            _this.HomeSubFn(true, _this.id);
        });
        this.hideImgGrid();
    };
    SubcategoryPage.prototype.ionViewDidLoad = function () {
        // setTimeout(function(){ 
        //   this.EqualHeight();
        // },1500);
    };
    SubcategoryPage.prototype.open_out_url = function (urlthis) {
        console.log('External URL urlthis Post Chandan ==> ' + urlthis);
        var URL = urlthis;
        // let target = "_blank";
        // const browser = this.iab.create(URL, target);
        // browser.on("loadstop").subscribe(event => {
        //   // browser.insertCSS({ code: "body{color: red;" });
        // });
        // return false;
        var target = "_blank";
        var browser = this.iab.create(URL, target, this.option);
        browser.on("loadstop").subscribe(function (event) {
            // browser.insertCSS({ code: "body{color: red;" });
        });
        return false;
    };
    SubcategoryPage.prototype.HomeSubFn = function (refresh, id) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        var self = this;
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            this.storage.get("CategoryDataSQLite").then(function (val) {
                _this.result = val;
                // console.log('this.result all Sub categories data => '+JSON.stringify(this.result));
                for (var _i = 0, _a = _this.result; _i < _a.length; _i++) {
                    var CatData = _a[_i];
                    var dataArray = CatData.data;
                    var z = 0;
                    var o = 0;
                    console.log('offline id => ' + id);
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
                                console.log('SubCats.category_image ==> ' + SubCats.category_image);
                                if (typeof SubCats.category_image != "undefined" &&
                                    SubCats.category_image != "") {
                                    _this.CategoryImage = +c;
                                    _this.CategoryImageTrue = true;
                                }
                                if (typeof SubCats.featured_image != "undefined" &&
                                    SubCats.featured_image != "") {
                                    _this.CategoryImage = +o;
                                    _this.CategoryImageTrue = true;
                                    // this.type_sent = 'post';
                                }
                                o++;
                                c++;
                            }
                            var joinArrayCat = {
                                subcategory_name: "",
                                subcategory_id: "",
                                category_id: "",
                                description: "",
                                category_image: "",
                                subcategory_page_name: "",
                                type: ""
                            };
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
                                //   if (category_image != "undefined" &&  category_image != "") {
                                //     this.CategoryImageTrue = true;
                                //  }
                                var joinArrayCat_1 = {
                                    subcategory_name: subcategory_name,
                                    subcategory_id: subcategory_id,
                                    category_id: category_id,
                                    description: description,
                                    category_image: category_image,
                                    subcategory_page_name: subcategory_page_name,
                                    type: type
                                };
                                _this.CreateCatArray.push(joinArrayCat_1);
                            }
                            var CatCreateArray = {
                                post_id: "",
                                post_title: "",
                                post_page_name: "",
                                upload_image: "",
                                featured_image: "",
                                subcategory_page_name: "",
                                type: "",
                                video_url: ""
                            };
                            _this.CreatePostArray = [];
                            for (var _g = 0, _h = _this.PostData; _g < _h.length; _g++) {
                                var CatDataPost = _h[_g];
                                var post_id = CatDataPost.post_id;
                                var post_content = CatDataPost.post_content;
                                var post_title = CatDataPost.post_title;
                                var post_page_name = CatDataPost.post_page_name;
                                var upload_image = CatDataPost.upload_image;
                                var featured_image = CatDataPost.featured_image;
                                // if (upload_image != "undefined" &&  upload_image != "") {
                                //    this.CategoryImageTrue = true;
                                // }
                                if (featured_image != "undefined" && featured_image != "") {
                                    _this.CategoryImageTrue = true;
                                }
                                var wps_subtitle = CatDataPost.wps_subtitle;
                                var type = CatDataPost.type;
                                var video_url = CatDataPost.video_url;
                                var pdf_image_for_subcategory = CatDataPost.pdf_image_for_subcategory;
                                var CatCreateArray_1 = {
                                    post_id: post_id,
                                    post_content: post_content,
                                    post_title: post_title,
                                    post_page_name: post_page_name,
                                    upload_image: upload_image,
                                    featured_image: featured_image,
                                    wps_subtitle: wps_subtitle,
                                    pdf_image_for_subcategory: pdf_image_for_subcategory,
                                    type: type,
                                    video_url: video_url
                                };
                                _this.CreatePostArray.push(CatCreateArray_1);
                            }
                        }
                        z++;
                    }
                    _this.SubCategories = _this.CreateCatArray.concat(_this.CreatePostArray);
                }
                _this.ArrangeCategory = _this.SubCategories;
                console.log('ArrangeCategory Offline' + JSON.stringify(_this.ArrangeCategory));
                // debugger;
                setTimeout(function () {
                    self.EqualHeight();
                }, 100);
            });
        }
        else {
            var definedthis = window.itemsini;
            var ctt = 0;
            for (var _i = 0, definedthis_1 = definedthis; _i < definedthis_1.length; _i++) {
                var itemsingle = definedthis_1[_i];
                if (itemsingle["active"] == "active") {
                    window.itemsini[ctt]["name"] = "subcategory/" + id;
                    window.itemsini[ctt]["active"] = "active";
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
                    var c = 1;
                    var p = 1;
                    var indexall = 0;
                    _this.ArrangeCategory = [];
                    for (var _i = 0, _a = _this.SubCategories; _i < _a.length; _i++) {
                        var SubCats = _a[_i];
                        // console.log('this.SubCategories.category_position => ' + SubCats.category_position)
                        //console.log('SubCats.category_position'+ SubCats.category_position);
                        // this.ArrangeCategory = this.SubCategories;
                        _this.ArrangeCategory = _this.SubCategories;
                        console.log('SubCats category_position => ' + SubCats.category_position);
                        /*  if (SubCats.category_position != '' && SubCats.category_position != 0) {
                            if (this.ArangeTrue == false) {
                              var index = this.SubCategories.findIndex(
                              p => p.category_position == c
                            );
            
            
                            
            
                              //console.log('index ==> ' + index);
            
                              let softVal = SubCats.category_position;
                              // this.ArrangeCategory.push(softVal)
                              // console.log('softVal ==> ' + softVal);
                              // let sortedArray: number[] = softVal.sort((n1, n2) => n1 - n2);
                              // const sorted = this.ArrangeCategory.slice().sort((sa, b) => a - b) // Make a copy with .slice()
                              //console.log('sortedArray ==> ' + sortedArray) // Array(5) [ 1.25, 2.33, 4.55, 13.44, 16.37 ]
                              
                              this.ArrangeCategory.push(this.SubCategories[index]);
                              //sort
                              c++;
            
                                 
                             //this.ArangeTrue = true;
                              //console.log('Arrange Ture');
                            }
                          } else {
                            //console.log('Arrange false');
                           // this.ArrangeCategory = [];
                           
                            this.ArrangeCategory = this.SubCategories;
                          //  console.log('else cond Cat');
                          }*/
                        //console.log('SubCategories' +this.SubCategories);
                        //this.ArrangeCategory = this.SubCategories;
                        console.log('SubCats.category_image ==> ' + SubCats.category_image);
                        console.log('SubCats.category_image ==> ' + SubCats.type);
                        console.log('SubCats.featured_image ==> ' + SubCats.featured_image);
                        console.log('SubCats.featured_image ==> ' + SubCats.featured_image);
                        console.log('SubCats.featured_image ==> ' + SubCats.type);
                        if (typeof SubCats.category_image != "undefined" &&
                            SubCats.category_image != "") {
                            console.log('here');
                            _this.CategoryImage = +s;
                            _this.CategoryImageTrue = true;
                            // this.type_sent = 'post';
                        }
                        if (typeof SubCats.featured_image != "undefined" &&
                            SubCats.featured_image != "") {
                            console.log('there');
                            _this.CategoryImage = +p;
                            _this.CategoryImageTrue = true;
                            // this.type_sent = 'post';
                        }
                        p++;
                        s++;
                        //s++;
                    }
                    console.log('this.ArrangeCategory Type of Data ==> ' + _this.ArrangeCategory);
                    for (var _b = 0, _c = _this.CategoryData; _b < _c.length; _b++) {
                        var CatData = _c[_b];
                        _this.MainPageName = CatData.category_name;
                        _this.OptionalPageName = CatData.category_page_name;
                        if (typeof CatData.category_video_url != "undefined" &&
                            CatData.category_video_url != "") {
                            _this.show = true;
                            _this.categoryvideourl = CatData.category_video_url;
                        }
                        else {
                            _this.categoryvideourl = "";
                        }
                    }
                    console.log(_this.categoryvideourl);
                    setTimeout(function () {
                        self.EqualHeight();
                    }, 100);
                }
            }, function (error) {
                console.log("error");
                console.log(error);
                console.log("error");
            });
        }
    };
    SubcategoryPage.prototype.pdfClickOption = function (post_id) {
        var _this = this;
        //  console.log('Sub Category Event Fire==>' + post_id);
        console.log(JSON.stringify(post_id));
        this.storage.get('pdf_local_url_' + post_id).then(function (data) {
            //console.log('dataCAt = > ' + JSON.stringify(data))
            if (data) {
                if (_this.plt.is("ios")) {
                    //this.document.viewDocument(data, "application/pdf", {});
                    // let PDFURL =  'http://www.africau.edu/images/default/sample.pdf'
                    var PDFURL = data;
                    console.log('External URL urlthis Post Chandan ==> ' + PDFURL);
                    var target = "_blank";
                    var browser = _this.iab.create(PDFURL, '_blank', 'location=no, zoom=no, toolbar=no, closebuttoncaption=Close, close.setText("Close")');
                    browser.on("loadstop").subscribe(function (event) {
                        // browser.insertCSS({ code: "body{color: red;" });
                    });
                    return false;
                }
                else {
                    _this.fileOpener
                        .open(data, "application/pdf")
                        .then(function () { return console.log("File is opened"); })
                        .catch(function (e) { return console.log("Error opening file", e); });
                    console.log("PDF AndroidS");
                }
            }
            else {
            }
        });
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
                    // console.log("getParentPage " + this.result.ParentPage_id);
                    if (_this.result.ParentPage_id == "home") {
                        //Home
                        _this.navCtrl.navigateBack("/home");
                    }
                    else if (_this.result.ParentPage_id == "video") {
                        //Videos
                        _this.navCtrl.navigateBack("/video");
                    }
                    else if (_this.result.ParentPage_id == "cheatsheets") {
                        //Cheat Sheet
                        _this.navCtrl.navigateBack("/cheatsheets");
                    }
                    else if (_this.result.ParentPage_id == "whichtest") {
                        //Which Test
                        _this.navCtrl.navigateBack("/whichtest");
                    }
                    else {
                        _this.navCtrl.navigateBack("subcategory/" + _this.result.ParentPage_id);
                    }
                }
            }, function (error) {
                console.log("error");
                console.log(error);
                console.log("error");
            });
        }
    };
    SubcategoryPage.prototype.HomeSubInnFn = function (idsub) {
        this.navCtrl.navigateForward(["subcategory/" + idsub]);
    };
    SubcategoryPage.prototype.HomePostDetail = function (postId) {
        this.navCtrl.navigateForward(["postdetail/" + postId]);
    };
    SubcategoryPage.prototype.playBtn = function (postId, from) {
        if (from == "from_post") {
            this.navCtrl.navigateForward(["videopost/" + postId]);
        }
        else {
            this.navCtrl.navigateForward([
                "videopost/" + postId + "?from_category=yes"
            ]);
            // this.navCtrl.navigateForward(['videopost/' + postId]);
        }
    };
    SubcategoryPage.prototype.EqualHeight1 = function () {
        //  this.winResizeFn();
        var resizeTimer;
        jquery__WEBPACK_IMPORTED_MODULE_9__(window).on('resize', function (e) {
            ///  this.resizeHeight();
            console.log('resize Start Function');
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                console.log('resize COmplete fn');
                // Run code here, resizing has "stopped"
            }, 250);
        });
    };
    SubcategoryPage.prototype.EqualHeight = function () {
        // console.log('EqualHeightFn')
        //   let elementHeight =  $('.homeListItom').find('li').length;
        //  console.log('elementHeight', elementHeight);
        // let maxHeight = Math.max.apply(null, $(".homeListItom li").map(function ()
        // {
        //     return $(this).height();
        // }).get());
        var heights = jquery__WEBPACK_IMPORTED_MODULE_9__(".homeListItom.SubCategoryPage.Image li").map(function () {
            return jquery__WEBPACK_IMPORTED_MODULE_9__(this).outerHeight();
        }).get();
        var maxHeight = Math.max.apply(null, heights);
        console.log('maxHeight' + maxHeight);
        jquery__WEBPACK_IMPORTED_MODULE_9__(".homeListItom.SubCategoryPage.Image li").each(function () {
            if (maxHeight > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_9__(this).css('height', maxHeight + 'px');
                setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_9__(".homeListItom.SubCategoryPage.Image li").each(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_9__(this).css('visibility', 'visible');
                    });
                }, 300);
            }
            else {
                setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_9__(".homeListItom.SubCategoryPage.Image li").each(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_9__(this).css('visibility', 'visible');
                    });
                }, 300);
            }
        });
        var resizeTimer;
        jquery__WEBPACK_IMPORTED_MODULE_9__(window).on('resize', function (e) {
            jquery__WEBPACK_IMPORTED_MODULE_9__(".homeListItom.SubCategoryPage.Image li").each(function () {
                jquery__WEBPACK_IMPORTED_MODULE_9__(this).css('height', 'auto');
            });
            console.log('resize Start Function');
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                console.log('resize COmplete fn');
                var heights = jquery__WEBPACK_IMPORTED_MODULE_9__(".homeListItom.SubCategoryPage.Image li").map(function () {
                    return jquery__WEBPACK_IMPORTED_MODULE_9__(this).outerHeight();
                }).get();
                var maxHeight = Math.max.apply(null, heights);
                console.log('maxHeight' + maxHeight);
                jquery__WEBPACK_IMPORTED_MODULE_9__(".homeListItom.SubCategoryPage.Image li").each(function () {
                    if (maxHeight > 0) {
                        jquery__WEBPACK_IMPORTED_MODULE_9__(this).css('height', maxHeight + 'px');
                        setTimeout(function () {
                            jquery__WEBPACK_IMPORTED_MODULE_9__(".homeListItom.SubCategoryPage.Image li").each(function () {
                                jquery__WEBPACK_IMPORTED_MODULE_9__(this).css('visibility', 'visible');
                            });
                        }, 300);
                    }
                    else {
                        setTimeout(function () {
                            jquery__WEBPACK_IMPORTED_MODULE_9__(".homeListItom.SubCategoryPage.Image li").each(function () {
                                jquery__WEBPACK_IMPORTED_MODULE_9__(this).css('visibility', 'visible');
                            });
                        }, 300);
                    }
                });
            }, 250);
        });
    };
    SubcategoryPage.prototype.hideImgGrid = function () {
        jquery__WEBPACK_IMPORTED_MODULE_9__(".homeListItom.SubCategoryPage.Image li").each(function () {
            jquery__WEBPACK_IMPORTED_MODULE_9__(this).css('visibility', 'hidden');
            jquery__WEBPACK_IMPORTED_MODULE_9__(this).css('height', 'auto');
        });
    };
    SubcategoryPage.prototype.resizeHeight = function () {
        jquery__WEBPACK_IMPORTED_MODULE_9__(".homeListItom.SubCategoryPage.Image li").each(function () {
            jquery__WEBPACK_IMPORTED_MODULE_9__(this).css('height', 'auto');
        });
    };
    SubcategoryPage.prototype.loadData = function (refresh, refresher) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            if (refresher) {
                refresher.target.complete();
                //this.LoaderShow = false;
            }
        }
        else {
            this.apiservice.HomeCategory(this.id).then(function (res) {
                _this.result = res;
                if (_this.result.code == "200") {
                    _this.SubCategories = _this.result.data;
                    _this.description = _this.result.description;
                    _this.CategoryData = _this.result.category_data;
                    var s = 1;
                    for (var _i = 0, _a = _this.SubCategories; _i < _a.length; _i++) {
                        var SubCats = _a[_i];
                        if (typeof SubCats.category_image != "undefined" &&
                            SubCats.category_image != "") {
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
                        if (typeof CatData.category_video_url != "undefined" &&
                            CatData.category_video_url != "") {
                            _this.show = true;
                            _this.categoryvideourl = CatData.category_video_url;
                        }
                        else {
                            _this.categoryvideourl = "";
                        }
                    }
                    console.log(_this.categoryvideourl);
                    console.log(_this.SubCategories);
                }
                if (refresher) {
                    refresher.target.complete();
                }
            }, function (error) {
                console.log("error");
                console.log(error);
                console.log("error");
            });
        }
    };
    SubcategoryPage.ctorParameters = function () { return [
        { type: _providers_apiservice__WEBPACK_IMPORTED_MODULE_2__["Apiservice"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["DocumentViewer"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__["FileOpener"] },
        { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_12__["File"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] }
    ]; };
    SubcategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-subcategory",
            template: __webpack_require__(/*! raw-loader!./subcategory.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/subcategory/subcategory.page.html"),
            styles: [__webpack_require__(/*! ./subcategory.page.scss */ "./src/app/pages/subcategory/subcategory.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_apiservice__WEBPACK_IMPORTED_MODULE_2__["Apiservice"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["DocumentViewer"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__["FileOpener"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_12__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]])
    ], SubcategoryPage);
    return SubcategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-subcategory-subcategory-module-es5.js.map