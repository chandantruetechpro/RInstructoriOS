(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-buttons class=\"customBack\" (click)=\"goBack();\">&nbsp;</ion-buttons>\n    <ion-toolbar>\n        <ion-title>Search</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ul class=\"homeListItom ListSyle Link\"  *ngIf=\"search_result != 'No Posts'\">\n        <li *ngFor=\"let SubCat of search_result\" id=\"{{SubCat.post_id}}\" class=\"albumList {{SubCat.type}}\">\n\n            <div class=\"homeItems posts\">\n\n                <ion-tab-button *ngIf=\"SubCat.post_content == ''\" id=\"{{SubCat.post_id}}\" (click)=\"playBtn(SubCat.post_id)\">\n                    <div class=\"flexBox PostBox\">\n                        <div class=\"leftContHor\">\n                            <h2 *ngIf=\"SubCat.post_title != ''\">{{SubCat.post_title}}</h2>\n                            <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.subcategory_page_name}}</p>\n                        </div>\n                        <div class=\"arrowRight\">\n                            <ion-icon name=\"arrow-forward\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-tab-button>\n\n                <ion-tab-button *ngIf=\"SubCat.post_content != ''\" id=\"{{SubCat.post_id}}\" (click)=\"HomePostDetail(SubCat.post_id)\">\n                    <div class=\"flexBox PostBox\">\n                        <div class=\"leftContHor\">\n                            <h2 *ngIf=\"SubCat.post_title != ''\">{{SubCat.post_title}}</h2>\n                            <p *ngIf=\"SubCat.subcategory_page_name != ''\">{{SubCat.subcategory_page_name}}</p>\n                        </div>\n                        <div class=\"arrowRight\">\n                            <ion-icon name=\"arrow-forward\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-tab-button>\n            </div>\n        </li>\n    </ul>\n\t<div *ngIf=\"search_result == 'No Posts'\">\n\t\t<ul class=\"homeListItom ListSyle Link\">\n\t\t\t<li class=\"albumList {{SubCat.type}}\">\n\t\t\t\t<h2>No posts found. Please change search keyword.</h2>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function() { return SearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");




var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    }
];
var SearchPageRoutingModule = /** @class */ (function () {
    function SearchPageRoutingModule() {
    }
    SearchPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SearchPageRoutingModule);
    return SearchPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");







var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"]
            ],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_apiservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/apiservice */ "./src/providers/apiservice.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SearchPage = /** @class */ (function () {
    function SearchPage(apiservice, plt, route, navCtrl) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.route = route;
        this.navCtrl = navCtrl;
    }
    SearchPage.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('search result page');
        this.sub = this.route.params.subscribe(function (params) {
            _this.search_keyword = params['search_keyword'];
        });
        console.log(this.search_keyword);
        this.apiservice.searching_callback(this.search_keyword).then(function (res) {
            _this.result = res;
            if (_this.result.code == "200") {
                _this.search_result = _this.result.data;
                console.log(_this.search_result);
            }
            else {
                _this.search_result = 'No Posts';
            }
        }, function (error) {
            console.log('error');
            console.log(error);
            console.log('error');
        });
    };
    SearchPage.prototype.HomePostDetail = function (postId) {
        this.navCtrl.navigateForward(['postdetail/' + postId + '?from_search=yes']);
    };
    SearchPage.prototype.playBtn = function (postId) {
        this.navCtrl.navigateForward(['videopost/' + postId + '?from_search=yes']);
    };
    SearchPage.prototype.goBack = function () {
        window.history.back();
    };
    SearchPage.ctorParameters = function () { return [
        { type: _providers_apiservice__WEBPACK_IMPORTED_MODULE_2__["Apiservice"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.page.html"),
            styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_apiservice__WEBPACK_IMPORTED_MODULE_2__["Apiservice"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module-es5.js.map