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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
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
    return HomePageModule;
}());



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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_apiservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/apiservice */ "./src/providers/apiservice.ts");
/* harmony import */ var _providers_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/network */ "./src/providers/network.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






// import { CacheService } from "ionic-cache";



var PageOneModule = /** @class */ (function () {
    function PageOneModule() {
    }
    PageOneModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
        })
    ], PageOneModule);
    return PageOneModule;
}());

var HomePage = /** @class */ (function () {
    function HomePage(apiservice, plt, networkService, storage, loadingCtrl, navCtrl) {
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
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.plt.ready().then(function () {
            _this.homeListing(true);
        });
    };
    HomePage.prototype.homeListing = function (refresh) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            this.storage.get('categories').then(function (val) {
                _this.result = val;
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
            });
        }
        else {
            this.apiservice.homeListing_dataNewSQLite().then(function (res) {
                var subCatUrl = 'get_posts_and_subcategories?category_id=';
                _this.result = res;
                if (_this.result.code == "200") {
                    _this.categories = _this.result.data;
                    _this.keys = Object.keys(_this.categories);
                    var newArray = [];
                    var s_2 = 1;
                    for (var _i = 0, _a = _this.categories; _i < _a.length; _i++) {
                        var catsPos = _a[_i];
                        var index = _this.categories.findIndex(function (p) { return p.category_position == s_2; });
                        _this.ArrangeCategory.push(_this.categories[index]);
                        s_2++;
                    }
                }
            }, function (error) {
                console.log('error');
                console.log(error);
                console.log('error');
            });
        }
    };
    HomePage.prototype.HomeSubFn = function (id) {
        this.navCtrl.navigateForward(['subcategory/' + id]);
    };
    HomePage.prototype.openContact = function () {
        this.navCtrl.navigateForward(['contact/']);
    };
    HomePage.prototype.loadData = function (refresh, refresher) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        //window.location.reload(true);
        this.apiservice.homeListing_dataNewSQLite(refresh).then(function (res) {
            _this.result = res;
            if (_this.result.code == "200") {
                _this.categories = _this.result.data;
                _this.keys = Object.keys(_this.categories);
                var newArray = [];
                var s_3 = 1;
                _this.ArrangeCategory = [];
                for (var _i = 0, _a = _this.categories; _i < _a.length; _i++) {
                    var catsPos = _a[_i];
                    var index = _this.categories.findIndex(function (p) { return p.category_position == s_3; });
                    _this.ArrangeCategory.push(_this.categories[index]);
                    s_3++;
                }
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
    HomePage.prototype.updateUser = function (id) {
    };
    HomePage.ctorParameters = function () { return [
        { type: _providers_apiservice__WEBPACK_IMPORTED_MODULE_3__["Apiservice"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
        { type: _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
    ]; };
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
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map