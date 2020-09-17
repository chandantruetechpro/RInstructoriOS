(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-video-video-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/video/video.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/video/video.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Video</ion-title>\n        <!-- <ion-buttons (click)=\"showHide()\" class=\"searchIcon\"></ion-buttons> -->\n\n    </ion-toolbar>\n    <div class=\"SearchSection\" id=\"SearchSection\" *ngIf=\"router.url === '/home' || router.url === '/video' || router.url === '/cheatsheets' || router.url === '/whichtest'\">\n        <div class=\"SearchBox\" *ngIf=\"searchShow\" id=\"SearchBox\">\n            <form id=\"submitForm\" (ngSubmit)=\"submitdata(f.value)\" #f=\"ngForm\">\n                <input type=\"text\" id=\"search_input\" value=\"\" name=\"searchvalue\" [(ngModel)]=\"searchvalue\" placeholder=\"Search...\" />\n            </form>\n        </div>\n        <ion-buttons (click)=\"showHide()\" id=\"SearchComponent\" class=\"searchIcon SearchComponent\"></ion-buttons>\n    </div>\n</ion-header>\n<!-- <app-searchheader></app-searchheader> -->\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ul class=\"homeListItom\">\n        <!-- <li class=\"albumList\" *ngFor=\"let cat of categories; let i = 1; i++;\" *ngIf=\" cat.category_position == 'i'\" id=\"{{cat.subcategory_id}}\"> -->\n        <li class=\"albumList VideoPage\" *ngFor=\"let cat of ArrangeCategory; let i = index; let key of keys\" id=\"{{cat.subcategory_id}}\">\n            <div class=\"homeItems\" *ngIf=\"cat.subcategory_id != ''\">\n                <!-- <ion-tab-button tab={{cat.link}}  (click)=\"HomeSubFn(15)\"> -->\n                <!-- <ion-tab-button [routerLink]=\"'/subcategory/' + cat.subcategory_id\" routerDirection=\"forward\"> -->\n                <ion-tab-button tab={{cat.link}} (click)=\"HomeSubFn(cat.subcategory_id)\">\n                    <div class=\"HomeItemImgs\" [style.background-image]=\"'url('+cat.category_image+')'\" style=\"background-image: url(../../assets/images/HomeIcon1.png);\"></div>\n                    <h2>{{cat.name}}</h2>\n                    <p>{{cat.description}}</p>\n                </ion-tab-button> \n            </div>\n        </li>\n    </ul>\n    <div class=\"CustomLoader\" *ngIf=\"LoaderShow == true\">\n        <div class=\"loaderInner\">\n            <div class=\"lds-spinner\">\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n            </div>\n        </div>\n    </div>\n</ion-content>"

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







// import { ComponentsModule } from '../../components/components.module';
let VideoPageModule = class VideoPageModule {
};
VideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _video_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoPageRoutingModule"],
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let VideoPage = class VideoPage {
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
            this.homeListing(true);
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
    homeListing(refresh = false) {
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            this.LoaderShow = false;
            this.storage.get('VideoPageSQLite').then((val) => {
                this.result = val;
                //  this.categories = this.result.data;
                // console.log('Video result ==> '+JSON.stringify(this.result));
                // this.keys = Object.keys(this.categories);
                // var newArray = [];
                // for (let CatData of this.result) {
                //   this.categories = CatData.data;
                //   var index = CatData.data.findIndex(p => p.category_position == c);
                //   this.ArrangeCategory.push(CatData.data[index]);
                //   c++;
                // }
                let o = 1;
                let z = 0;
                console.log('this.ArrangeCategory ==> ' + JSON.stringify(this.result));
                for (let CatData of this.result) {
                    this.ArrangeCategory = CatData.data;
                    //console.log('Video All  Data ==> '+ JSON.stringify(CatData.data));
                    //var index = CatData.data.findIndex(p => p.category_position == o);
                    //this.ArrangeCategory.push(CatData.data[z]);
                    //console.log('Video Index ==>'+ CatData.data[index]);  
                    //o++;
                    //z++;
                }
                //this.ArrangeCategory = this.result.data;
                console.log('this.ArrangeCategory22222 ==> ' + JSON.stringify(this.ArrangeCategory));
                // let o = 1;
                // for (let CatData of this.result) {
                //   this.categories = CatData.data;
                //   console.log('Which Test Data ==> '+ JSON.stringify(CatData.data));
                //   var index = CatData.data.findIndex(p => p.category_position == o);
                //   this.ArrangeCategory.push(CatData.data[index]);
                // //  console.log('Which Test ==>'+ CatData.data[index]);
                //   o++;
                // console.log('which Test ArrangeCategory'+JSON.stringify(this.ArrangeCategory));
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
    loadData(refresh = false, refresher) {
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            if (refresher) {
                refresher.target.complete();
                //this.LoaderShow = false;
            }
        }
        else {
            this.LoaderShow = false;
            this.homeListing(true);
            this.categories = '';
            let self = this;
            this.apiservice.VideoData().then((res) => {
                this.result = res;
                this.categories = this.result.data;
                //this.categories = this.result.data;
                self.keys = Object.keys(self.categories);
                self.ArrangeCategory = [];
                setTimeout(function () {
                    var newArray = [];
                    let s = 1;
                    self.ArrangeCategory = [];
                    for (let catsPos of self.categories) {
                        var index = self.categories.findIndex(p => p.category_position == s);
                        self.ArrangeCategory.push(self.categories[index]);
                        s++;
                    }
                    console.log('ArrangeCategory' + JSON.stringify(self.ArrangeCategory));
                }, 200);
                if (refresher) {
                    refresher.target.complete();
                    //this.LoaderShow = false;
                }
            }, (error) => {
                console.log('error');
                console.log(error);
                console.log('error');
            });
        }
    }
};
VideoPage.ctorParameters = () => [
    { type: _providers_apiservice__WEBPACK_IMPORTED_MODULE_3__["Apiservice"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], VideoPage);



/***/ })

}]);
//# sourceMappingURL=pages-video-video-module-es2015.js.map