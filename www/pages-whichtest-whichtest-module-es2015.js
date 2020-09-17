(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-whichtest-whichtest-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/whichtest/whichtest.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/whichtest/whichtest.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n\n        <ion-title>Aim of test?</ion-title>\n        <!-- <ion-buttons (click)=\"showHide()\" class=\"searchIcon\"></ion-buttons> -->\n    </ion-toolbar>\n    <div class=\"SearchSection\" id=\"SearchSection\" *ngIf=\"router.url === '/home' || router.url === '/video' || router.url === '/cheatsheets' || router.url === '/whichtest'\">\n        <div class=\"SearchBox\" *ngIf=\"searchShow\" id=\"SearchBox\">\n            <form id=\"submitForm\" (ngSubmit)=\"submitdata(f.value)\" #f=\"ngForm\">\n                <input type=\"text\" id=\"search_input\" value=\"\" name=\"searchvalue\" [(ngModel)]=\"searchvalue\" placeholder=\"Search...\" />\n            </form>\n        </div>\n        <ion-buttons (click)=\"showHide()\" id=\"SearchComponent\" class=\"searchIcon SearchComponent\"></ion-buttons>\n    </div>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ul class=\"homeListItom\">\n        \n        <li class=\"albumList whichTest\" *ngFor=\"let cat of ArrangeCategory;\" id=\"{{cat.subcategory_id}}\">\n            <div class=\"homeItems\" *ngIf=\"cat.subcategory_id != ''\">\n                <ion-tab-button (click)=\"HomeSubFn(cat.subcategory_id)\">\n                    <div class=\"HomeItemImgs\" [style.background-image]=\"'url('+cat.category_image+')'\" style=\"background-image: url(../../assets/images/HomeIcon1.png);\"></div>\n                    <h2>{{cat.name}}</h2>\n                    <p>{{cat.description}}</p>\n                </ion-tab-button>\n            </div>\n        </li>\n       </ul>\n    <div class=\"CustomLoader\" *ngIf=\"LoaderShow == true\">\n        <div class=\"loaderInner\">\n            <div class=\"lds-spinner\">\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n            </div>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/whichtest/whichtest-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/whichtest/whichtest-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: WhichtestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhichtestPageRoutingModule", function() { return WhichtestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _whichtest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./whichtest.page */ "./src/app/pages/whichtest/whichtest.page.ts");




const routes = [
    {
        path: '',
        component: _whichtest_page__WEBPACK_IMPORTED_MODULE_3__["WhichtestPage"]
    }
];
let WhichtestPageRoutingModule = class WhichtestPageRoutingModule {
};
WhichtestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WhichtestPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/whichtest/whichtest.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/whichtest/whichtest.module.ts ***!
  \*****************************************************/
/*! exports provided: WhichtestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhichtestPageModule", function() { return WhichtestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _whichtest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./whichtest-routing.module */ "./src/app/pages/whichtest/whichtest-routing.module.ts");
/* harmony import */ var _whichtest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./whichtest.page */ "./src/app/pages/whichtest/whichtest.page.ts");







let WhichtestPageModule = class WhichtestPageModule {
};
WhichtestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _whichtest_routing_module__WEBPACK_IMPORTED_MODULE_5__["WhichtestPageRoutingModule"]
        ],
        declarations: [_whichtest_page__WEBPACK_IMPORTED_MODULE_6__["WhichtestPage"]]
    })
], WhichtestPageModule);



/***/ }),

/***/ "./src/app/pages/whichtest/whichtest.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/whichtest/whichtest.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3doaWNodGVzdC93aGljaHRlc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/whichtest/whichtest.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/whichtest/whichtest.page.ts ***!
  \***************************************************/
/*! exports provided: WhichtestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhichtestPage", function() { return WhichtestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_apiservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/apiservice */ "./src/providers/apiservice.ts");
/* harmony import */ var _providers_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/network */ "./src/providers/network.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/offline-manager.service */ "./src/providers/offline-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let WhichtestPage = class WhichtestPage {
    constructor(apiservice, plt, networkService, storage, offlineManager, loadingCtrl, navCtrl, router) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
        this.categories = [];
        this.SubCategories = [];
        this.users = [];
        this.page = 1;
        this.categoriesData = [];
        this.ArrangeCategory = [];
        this.show = true;
        this.buttonName = "Show";
        this.searchShow = false;
        this.LoaderShow = false;
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            this.LoaderShow = true;
            this.WhichTest(true);
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
    WhichTest(refresh = false) {
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            this.LoaderShow = false;
            this.storage.get('WhichTestPageSQLite').then((val) => {
                this.result = val;
                // console.log('whichTestData ==> '+ JSON.stringify(this.result));
                let o = 1;
                for (let CatData of this.result) {
                    this.categories = CatData.data;
                    console.log('Which Test Data ==> ' + JSON.stringify(CatData.data));
                    //  console.log('getWhichTestData' + CatData.data.category_position);
                    var index = CatData.data.findIndex(p => p.category_position == o);
                    this.ArrangeCategory.push(CatData.data[index]);
                    //  console.log('Which Test ==>'+ CatData.data[index]);
                    o++;
                    console.log('which Test ArrangeCategory' + JSON.stringify(this.ArrangeCategory));
                    // for (let getWhichTestData of CatData.data) {
                    // }
                    // console.log('Which Test this.categories'+ JSON.stringify(this.ArrangeCategory));
                    // console.log('this.ArrangeCategory' + this.ArrangeCategory);
                }
                //    console.log('getWhichTestData' + JSON.stringify( this.ArrangeCategory));  
            });
        }
        else {
            this.apiservice.WhichTest().then((res) => {
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
    HomeSubFn(id) {
        this.navCtrl.navigateForward(['subcategory/' + id]);
    }
    goBack() {
        window.history.back();
    }
    loadData(refresh = false, refresher) {
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            if (refresher) {
                refresher.target.complete();
                //this.LoaderShow = false;
            }
        }
        else {
            let self = this;
            this.ArrangeCategory = [];
            this.LoaderShow = false;
            this.WhichTest(true);
            this.apiservice.WhichTest().then((res) => {
                this.ArrangeCategory = [];
                this.result = res;
                if (this.result.code == "200") {
                    this.ArrangeCategory = [];
                    setTimeout(function () {
                        self.categories = '';
                        self.categories = self.result.data;
                        self.keys = Object.keys(self.categories);
                        var newArray = [];
                        let s = 1;
                        self.ArrangeCategory = [];
                        for (let catsPos of self.categories) {
                            var index = self.categories.findIndex(p => p.category_position == s);
                            self.ArrangeCategory.push(self.categories[index]);
                            s++;
                        }
                        console.log(JSON.stringify(self.ArrangeCategory));
                    }, 200);
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
WhichtestPage.ctorParameters = () => [
    { type: _providers_apiservice__WEBPACK_IMPORTED_MODULE_3__["Apiservice"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
WhichtestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-whichtest',
        template: __webpack_require__(/*! raw-loader!./whichtest.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/whichtest/whichtest.page.html"),
        styles: [__webpack_require__(/*! ./whichtest.page.scss */ "./src/app/pages/whichtest/whichtest.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_apiservice__WEBPACK_IMPORTED_MODULE_3__["Apiservice"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
        _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], WhichtestPage);



/***/ })

}]);
//# sourceMappingURL=pages-whichtest-whichtest-module-es2015.js.map