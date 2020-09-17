(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cheatsheets-cheatsheets-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cheatsheets/cheatsheets.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cheatsheets/cheatsheets.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n\n        <ion-title>\n            {{this.OptionalPageName != '' ? this.OptionalPageName : this.MainPageName}}\n        </ion-title>\n        <!-- <ion-buttons (click)=\"showHide()\" class=\"searchIcon\"></ion-buttons> -->\n    </ion-toolbar>\n    <div class=\"SearchSection\" id=\"SearchSection\" *ngIf=\"router.url === '/home' || router.url === '/video' || router.url === '/cheatsheets' || router.url === '/whichtest'\">\n        <div class=\"SearchBox\" *ngIf=\"searchShow\" id=\"SearchBox\">\n            <form id=\"submitForm\" (ngSubmit)=\"submitdata(f.value)\" #f=\"ngForm\">\n                <input type=\"text\" id=\"search_input\" value=\"\" name=\"searchvalue\" [(ngModel)]=\"searchvalue\" placeholder=\"Search...\" />\n            </form>\n        </div>\n        <ion-buttons (click)=\"showHide()\" id=\"SearchComponent\" class=\"searchIcon SearchComponent\"></ion-buttons>\n    </div>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ul class=\"homeListItom\" *ngIf=\"this.CategoryImageTrue == true\">\n        <li *ngFor=\"let SubCat of SubCategories\" id=\"{{SubCat.subcategory_id}}\" class=\"albumList {{SubCat.type}}\">\n            <div class=\"homeItems\" *ngIf=\"SubCat.type == 'category'\">\n                <ion-tab-button (click)=\"HomeSubInnFn(SubCat.subcategory_id)\">\n\n                    <div *ngIf=\"SubCat.category_image != ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url('+SubCat.category_image+')'\"></div>\n\n                    <div *ngIf=\"SubCat.category_image == ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url(./assets/images/noimage.png)'\"></div>\n\n                    <!-- <div *ngIf=\"SubCat.category_image == ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url(https://images.pexels.com/photos/3496542/pexels-photo-3496542.jpeg)'\"></div> -->\n\n                    <h2 *ngIf=\"SubCat.subcategory_name != ''\">{{SubCat.subcategory_name}}</h2>\n                    <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.subcategory_page_name}}</p>\n                </ion-tab-button>\n            </div>\n\n            <div class=\"homeItems\" *ngIf=\"SubCat.type == 'post'\">\n                <ion-tab-button (click)=\"HomePostDetail(SubCat.post_id)\">\n                    <div *ngIf=\"SubCat.featured_image != ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url('+SubCat.featured_image+')'\"></div>\n                    <div *ngIf=\"SubCat.featured_image == ''\" class=\"HomeItemImgs\" [style.background-image]=\"'url(./assets/images/noimage.png)'\"></div>\n                    <h2 *ngIf=\"SubCat.post_title != ''\">{{SubCat.post_title}}</h2>\n                    <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.subcategory_page_name}}</p>\n                </ion-tab-button>\n            </div>\n        </li>\n    </ul>\n    <ul class=\"homeListItom ListSyle Link\" *ngIf=\"this.CategoryImageTrue == false\">\n        <!-- <li  class=\"albumList\" *ngFor=\"let SubCat of SubCategories\"  id=\"{{SubCat.subcategory_id}}\" *ngIf=\"SubCat.category_image != ''\">\n\t\t  <div class=\"homeItems\" >\n\t\t\t<ion-tab-button (click)=\"HomeSubInnFn(SubCat.subcategory_id)\">\n\t\t\t\t  <div class=\"HomeItemImgs\"  [style.background-image]=\"'url('+SubCat.category_image+')'\"></div>\n\t\t\t\t<h2>{{SubCat.subcategory_name}}</h2> \n\t\t\t\t<p>{{SubCat.subcategory_page_name}}</p> \n\t\t\t</ion-tab-button>\n\t\t\t</div> \n\n\t\t\t*ngIf=\"SubCat.category_image == ''\"\n\t\t  </li> -->\n\n\n        <li *ngFor=\"let SubCat of SubCategories\" id=\"{{SubCat.subcategory_id}}\" class=\"albumList {{SubCat.type}}\">\n            <div class=\"homeItems Category\" *ngIf=\"SubCat.type == 'category'\">\n                <ion-tab-button (click)=\"HomeSubInnFn(SubCat.subcategory_id)\">\n                    <!-- <div class=\"HomeItemImgs\"  *ngIf=\"SubCat.category_image != ''\"  [style.background-image]=\"'url('+SubCat.category_image+')'\"></div> -->\n                    <div class=\"flexBox\">\n                        <div class=\"leftContHor\">\n                            <h2 *ngIf=\"SubCat.subcategory_name != ''\">{{SubCat.subcategory_name}}</h2>\n                            <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.subcategory_page_name}}</p>\n                        </div>\n                        <div class=\"arrowRight\">\n                            <ion-icon name=\"arrow-forward\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-tab-button>\n            </div>\n            <div class=\"homeItems posts\" *ngIf=\"SubCat.type == 'post'\">\n\n                <ion-tab-button *ngIf=\"SubCat.post_content == ''\" (click)=\"playBtn(SubCat.post_id)\">\n                    <div class=\"flexBox PostBox\">\n                        <div class=\"leftContHor\">\n                            <h2 *ngIf=\"SubCat.post_title != ''\">{{SubCat.post_title}}</h2>\n                            <p *ngIf=\"SubCat.wps_subtitle != ''\">{{SubCat.wps_subtitle}}</p>\n                        </div>\n                        <div class=\"arrowRight\">\n                            <ion-icon name=\"arrow-forward\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-tab-button>\n\n                <ion-tab-button class=\"helloC\" *ngIf=\"SubCat.post_content != ''\" (click)=\"HomePostDetail(SubCat.post_id)\">\n                    <div class=\"flexBox PostBox\">\n                        <div class=\"leftContHor\">\n                            <h2 *ngIf=\"SubCat.post_title != ''\">{{SubCat.post_title}}</h2>\n                            <p *ngIf=\"SubCat.wps_subtitle != ''\">{{SubCat.wps_subtitle}}</p>\n                        </div>\n                        <div class=\"arrowRight\">\n                            <ion-icon name=\"arrow-forward\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-tab-button>\n            </div>\n        </li>\n    </ul>\n    <div class=\"CustomLoader\" *ngIf=\"LoaderShow == true\">\n        <div class=\"loaderInner\">\n            <div class=\"lds-spinner\">\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n            </div>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cheatsheets/cheatsheets-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/cheatsheets/cheatsheets-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CheatsheetsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheatsheetsPageRoutingModule", function() { return CheatsheetsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cheatsheets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cheatsheets.page */ "./src/app/pages/cheatsheets/cheatsheets.page.ts");




const routes = [
    {
        path: '',
        component: _cheatsheets_page__WEBPACK_IMPORTED_MODULE_3__["CheatsheetsPage"]
    }
];
let CheatsheetsPageRoutingModule = class CheatsheetsPageRoutingModule {
};
CheatsheetsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheatsheetsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cheatsheets/cheatsheets.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/cheatsheets/cheatsheets.module.ts ***!
  \*********************************************************/
/*! exports provided: CheatsheetsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheatsheetsPageModule", function() { return CheatsheetsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _cheatsheets_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cheatsheets-routing.module */ "./src/app/pages/cheatsheets/cheatsheets-routing.module.ts");
/* harmony import */ var _cheatsheets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cheatsheets.page */ "./src/app/pages/cheatsheets/cheatsheets.page.ts");







let CheatsheetsPageModule = class CheatsheetsPageModule {
};
CheatsheetsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cheatsheets_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheatsheetsPageRoutingModule"]
        ],
        declarations: [_cheatsheets_page__WEBPACK_IMPORTED_MODULE_6__["CheatsheetsPage"]]
    })
], CheatsheetsPageModule);



/***/ }),

/***/ "./src/app/pages/cheatsheets/cheatsheets.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/cheatsheets/cheatsheets.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWF0c2hlZXRzL2NoZWF0c2hlZXRzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/cheatsheets/cheatsheets.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/cheatsheets/cheatsheets.page.ts ***!
  \*******************************************************/
/*! exports provided: CheatsheetsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheatsheetsPage", function() { return CheatsheetsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_apiservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/apiservice */ "./src/providers/apiservice.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/network */ "./src/providers/network.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/offline-manager.service */ "./src/providers/offline-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







// import { CacheService } from "ionic-cache";




let CheatsheetsPage = class CheatsheetsPage {
    constructor(apiservice, plt, networkService, storage, offlineManager, 
    // private cache: CacheService,
    loadingCtrl, route, navCtrl, router) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.navCtrl = navCtrl;
        this.router = router;
        this.categories = [];
        this.description = [];
        this.SubCategories = [];
        this.CategoryData = [];
        this.users = [];
        this.page = 1;
        this.categoriesData = [];
        this.ArrangeCategory = [];
        this.LoaderShow = false;
        this.show = true;
        this.buttonName = "Show";
        this.searchShow = false;
        this.CategoryImage = 0;
        this.CategoryImageTrue = false;
    }
    ngOnInit() {
        this.LoaderShow = true;
        let n_id = this.plt.getQueryParam("id");
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.HomeSubFn(true, 79);
        });
        let self = this;
        window.addEventListener('mouseup', function (event) {
            var pol = document.getElementById('SearchSection');
            if (event.target != pol) {
                var inputText = document.getElementById('search_input');
                if (event.target != inputText) {
                    var buttonTxt = document.getElementById('SearchComponent');
                    if (event.target != buttonTxt) {
                        self.searchShow = false;
                    }
                }
            }
        });
    }
    showHide() {
        this.searchShow = !this.searchShow;
        if (this.searchShow)
            this.buttonName = 'Hide';
        else
            this.buttonName = 'Show';
    }
    OnInput(event) {
        let self = this;
        this.navCtrl.navigateForward(['search/' + event.target.value]);
        self.show = false;
    }
    submitdata(formValue) {
        console.log("Form Value", formValue);
        this.navCtrl.navigateForward(['search/' + formValue.searchvalue]);
    }
    //HomeSubFn(id) {
    HomeSubFn(refresh = false, id) {
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            this.storage.get('CheatSheetPageSQLite').then((val) => {
                this.LoaderShow = false;
                this.result = val;
                // for (let CatData of this.CategoryData) {
                //   this.MainPageName = CatData.category_name;
                //   this.OptionalPageName = CatData.category_page_name;
                //   console.log('this.MainPageName'+CatData.MainPageName)
                // }
                for (let subCatLoop of this.result) {
                    this.SubCategories = subCatLoop.data;
                    // console.log('cheatSheet Page Data Offline ==> ' + JSON.stringify(this.SubCategories));
                    let o = 1;
                    // for (let getWhichTestData of CatData.data) {
                    //   var index = CatData.data.findIndex(p => p.category_position == o);
                    //   this.ArrangeCategory.push(CatData.data[index]);
                    //   console.log('this.categories ==> '+JSON.stringify(getWhichTestData));
                    //   o++;
                    // }
                    // this.CategoryData = this.SubCategories.category_data;
                    this.CategoryData = subCatLoop.category_data;
                    // console.log('this.CategoryData 1'+ JSON.stringify(this.CategoryData));
                    for (let CatData of this.CategoryData) {
                        this.MainPageName = CatData.category_name;
                        this.OptionalPageName = CatData.category_page_name;
                        // console.log('this.MainPageName ofline'+ this.MainPageName);
                    }
                    // console.log('this.MainPageName = CatData.category_name;'+this.CategoryData.category_name);
                    for (let SubCats of this.SubCategories) {
                        if (typeof SubCats.category_image != 'undefined' && SubCats.category_image != '') {
                            this.CategoryImage = +o;
                            this.CategoryImageTrue = true;
                        }
                        o++;
                        //  console.log('SubCats CheatSheet Offline Loop 2 ==> '+ JSON.stringify(SubCats));
                        // console.log('SubCats CheatSheet Offline Loop 2 ==> '+ SubCats.name);
                    }
                    // for (let CatData of this.SubCategories) {
                    //   this.MainPageName = CatData.category_name;
                    //   this.OptionalPageName = CatData.category_page_name;
                    //  // console.log('this.MainPageName ofline'+ this.MainPageName);
                    // }
                }
            });
        }
        else {
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
                        }
                        s++;
                    }
                    for (let CatData of this.CategoryData) {
                        this.MainPageName = CatData.category_name;
                        this.OptionalPageName = CatData.category_page_name;
                    }
                    this.LoaderShow = false;
                }
            }, (error) => {
                console.log('error');
                console.log(error);
                console.log('error');
                this.LoaderShow = false;
            });
        }
    }
    goBack() {
        window.history.back();
    }
    HomeSubInnFn(idsub) {
        this.navCtrl.navigateForward(['subcategory/' + idsub]);
    }
    HomePostDetail(postId) {
        this.navCtrl.navigateForward(['postdetail/' + postId]);
    }
    playBtn(postId) {
        this.navCtrl.navigateForward(['videopost/' + postId]);
    }
    loadData(refresh = false, refresher) {
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            if (refresher) {
                refresher.target.complete();
                //this.LoaderShow = false;
            }
        }
        else {
            this.LoaderShow = false;
            //this.apiservice.HomeCategory(this.id).then((res) => {
            this.apiservice.HomeCategory(79).then((res) => {
                console.log('this.id' + this.id);
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
                        }
                        s++;
                    }
                    for (let CatData of this.CategoryData) {
                        this.MainPageName = CatData.category_name;
                        this.OptionalPageName = CatData.category_page_name;
                    }
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
    }
};
CheatsheetsPage.ctorParameters = () => [
    { type: _providers_apiservice__WEBPACK_IMPORTED_MODULE_2__["Apiservice"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
CheatsheetsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cheatsheets',
        template: __webpack_require__(/*! raw-loader!./cheatsheets.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cheatsheets/cheatsheets.page.html"),
        styles: [__webpack_require__(/*! ./cheatsheets.page.scss */ "./src/app/pages/cheatsheets/cheatsheets.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_apiservice__WEBPACK_IMPORTED_MODULE_2__["Apiservice"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], CheatsheetsPage);



/***/ })

}]);
//# sourceMappingURL=pages-cheatsheets-cheatsheets-module-es2015.js.map