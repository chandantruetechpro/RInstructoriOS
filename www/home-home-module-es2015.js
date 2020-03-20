(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Home</ion-title>\n        <ion-tab-button (click)=\"openContact()\" class=\"contactBtnHdr\"></ion-tab-button>\n        <ion-buttons (click)=\"showHide()\" class=\"searchIcon\"></ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<app-header></app-header>\n<ion-content>\n\n\n    <!-- <div text-center *ngIf=\"count\">Found {{count}} posts</div> -->\n\n    <!-- <ion-card *ngFor=\"let post of posts\" >\n        <ion-card-header>\n            <ion-title innerHTML=\"post.title.rendered\"></ion-title>\n            <ion-card-subtitle>{{ post.date_gmt | date }}</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n            <img [src]=\"post.media_url\" />\n        </ion-card-content>\n\n    </ion-card> -->\n\n\n    <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n        <ion-refresher-content>\n        </ion-refresher-content>\n    </ion-refresher> -->\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n\n\n    <!-- <ion-list>\n    <ion-item *ngFor=\"let user of users\" tappable (click)=\"updateUser(user.id)\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"user.avatar\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>{{ user.name }} {{ user.id }}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list> -->\n\n\n    <!-- <ul>\n        <li *ngFor=\"let product of products\">\n            <h2>{{product.name}} / ${{product.price}}</h2>\n            <p> {{product.description}} </p>\n        </li>\n        </ul> -->\n\n    <ul class=\"homeListItom\">\n        <!-- <li class=\"albumList\" *ngFor=\"let cat of categories; let i = 1; i++;\" *ngIf=\" cat.category_position == 'i'\" id=\"{{cat.subcategory_id}}\"> -->\n        <li class=\"albumList\" *ngFor=\"let cat of ArrangeCategory; let i = index; let key of keys\" id=\"{{cat.subcategory_id}}\">\n\n            <!-- *ngIf=\"cat.category_position == i\" -->\n\n            <div class=\"homeItems\">\n                <!-- <ion-tab-button tab={{cat.link}}  (click)=\"HomeSubFn(15)\"> -->\n                <!-- <ion-tab-button [routerLink]=\"'/subcategory/' + cat.subcategory_id\" routerDirection=\"forward\"> -->\n                <ion-tab-button tab={{cat.link}} (click)=\"HomeSubFn(cat.subcategory_id)\">\n                    <div class=\"HomeItemImgs\" [style.background-image]=\"'url('+cat.category_image+')'\" style=\"background-image: url(../../assets/images/HomeIcon1.png);\"></div>\n                    <h2>{{cat.name}}</h2>\n                    <p>{{cat.description}}</p>\n\n                </ion-tab-button>\n            </div>\n        </li>\n    </ul>\n\n    <!-- \n    <ul class=\"homeListItom\">\n        <li class=\"albumList\" *ngFor=\"let category of categoriesData\" id=\"{{category.id}}\">\n            <div class=\"homeItems\">\n                <ion-tab-button tab={{category.category_image}}>\n                    <div class=\"HomeItemImgs\" [style.background-image]=\"'url('+category.category_image+')'\"\n                        style=\"background-image: url(../../assets/images/HomeIcon1.png);\"></div>\n                    \n                    <h2>{{category.name}}</h2>\n                    <p>{{category.description}}</p>\n\n                </ion-tab-button>\n            </div>\n        </li>\n    </ul> -->\n\n\n    <!-- <ul class=\"homeListItom\">\n        <li class=\"albumList\" *ngFor=\"let items of HomeItems\" id=\"{{items.id}}\">\n            <div class=\"homeItems\">\n                <ion-tab-button tab={{items.Link}}>\n                    <div class=\"HomeItemImgs\" [style.background-image]=\"'url('+items.ImageName+')'\"\n                        style=\"background-image: url(../../assets/images/HomeIcon1.png);\"></div>\n                    <h2>{{items.HomeItemtitle}}</h2>\n                    <p>{{items.HomeItemText}}</p>\n                </ion-tab-button>\n            </div>\n        </li>\n    </ul> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: PageOneModule, HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOneModule", function() { return PageOneModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_apiservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/apiservice */ "./src/providers/apiservice.ts");
/* harmony import */ var _providers_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/network */ "./src/providers/network.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






// import { CacheService } from "ionic-cache";



let PageOneModule = class PageOneModule {
};
PageOneModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
    })
], PageOneModule);

let HomePage = class HomePage {
    constructor(apiservice, plt, networkService, storage, loadingCtrl, navCtrl) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.categories = [];
        this.SubCategories = [];
        this.users = [];
        this.page = 1;
        this.categoriesData = [];
        this.ArrangeCategory = [];
        this.classApplied = false;
        this.show = true;
        this.buttonName = 'Show';
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            this.homeListing(true);
        });
    }
    homeListing(refresh = false) {
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            this.storage.get('categories').then((val) => {
                this.result = val;
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
            });
        }
        else {
            this.apiservice.homeListing_dataNewSQLite().then((res) => {
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
    openContact() {
        this.navCtrl.navigateForward(['contact/']);
    }
    loadData(refresh = false, refresher) {
        //window.location.reload(true);
        this.apiservice.homeListing_dataNewSQLite(refresh).then((res) => {
            this.result = res;
            if (this.result.code == "200") {
                this.categories = this.result.data;
                this.keys = Object.keys(this.categories);
                var newArray = [];
                let s = 1;
                this.ArrangeCategory = [];
                for (let catsPos of this.categories) {
                    var index = this.categories.findIndex(p => p.category_position == s);
                    this.ArrangeCategory.push(this.categories[index]);
                    s++;
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
    updateUser(id) {
    }
};
HomePage.ctorParameters = () => [
    { type: _providers_apiservice__WEBPACK_IMPORTED_MODULE_3__["Apiservice"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_apiservice__WEBPACK_IMPORTED_MODULE_3__["Apiservice"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
        _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map