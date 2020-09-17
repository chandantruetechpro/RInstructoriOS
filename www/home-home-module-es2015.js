(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/searchheader/searchheader.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/searchheader/searchheader.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"SearchSection\" id=\"SearchSection\" *ngIf=\"router.url === '/home' || router.url === '/video' || router.url === '/cheatsheets' || router.url === '/whichtest'\">\n    <div class=\"SearchBox\" *ngIf=\"show\" id=\"SearchBox\">\n        <input type=\"text\" id=\"search_input\" (keyup.enter)=\"OnInput($event)\" value=\"\" placeholder=\"Search...\" />\n    </div>\n    <ion-buttons (click)=\"showHide()\" id=\"SearchComponent\" class=\"searchIcon SearchComponent\"></ion-buttons>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n    <ion-toolbar>\n        <ion-title>Home</ion-title>\n        <ion-tab-button (click)=\"openContact()\" class=\"contactBtnHdr\"></ion-tab-button>\n        <!-- <ion-buttons (click)=\"showHide()\" class=\"searchIcon\"></ion-buttons> -->\n\n    </ion-toolbar>\n    <div class=\"SearchSection\" id=\"SearchSection\" *ngIf=\"router.url === '/home' || router.url === '/video' || router.url === '/cheatsheets' || router.url === '/whichtest'\">\n        <div class=\"SearchBox\" *ngIf=\"searchShow\" id=\"SearchBox\">\n            <form id=\"submitForm\" (ngSubmit)=\"submitdata(f.value)\" #f=\"ngForm\">\n                <input type=\"text\" id=\"search_input\" value=\"\" name=\"searchvalue\" [(ngModel)]=\"searchvalue\" placeholder=\"Search...\" />\n            </form>\n        </div>\n        <ion-buttons (click)=\"showHide()\" id=\"SearchComponent\" class=\"searchIcon SearchComponent\"></ion-buttons>\n    </div>\n            \n<!-- (keyup.enter)=\"OnInput($event)\"  ng-submit=\"submitdata($event)\"  style=\"position: absolute; left: -9999px; width: 1px; height: 1px;\" -->\n</ion-header>\n<!-- <app-searchheader></app-searchheader> -->\n\n<ion-content>\n\n    <div class=\"CustomLoader\" *ngIf=\"LoaderShow == true\">\n        <div class=\"loaderInner\">\n            <div class=\"lds-spinner\">\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n            </div>\n        </div>\n    </div>\n\n\n    <!-- <div text-center *ngIf=\"count\">Found {{count}} posts</div> -->\n\n    <!-- <ion-card *ngFor=\"let post of posts\" >\n        <ion-card-header>\n            <ion-title innerHTML=\"post.title.rendered\"></ion-title>\n            <ion-card-subtitle>{{ post.date_gmt | date }}</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n            <img [src]=\"post.media_url\" />\n        </ion-card-content>\n\n    </ion-card> -->\n\n\n    <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n        <ion-refresher-content>\n        </ion-refresher-content>\n    </ion-refresher> -->\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n\n\n    <!-- <ion-list>\n    <ion-item *ngFor=\"let user of users\" tappable (click)=\"updateUser(user.id)\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"user.avatar\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>{{ user.name }} {{ user.id }}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list> -->\n\n\n    <!-- <ul>\n        <li *ngFor=\"let product of products\">\n            <h2>{{product.name}} / ${{product.price}}</h2>\n            <p> {{product.description}} </p>\n        </li>\n        </ul> -->\n\n    <ul class=\"homeListItom\">\n        <!-- <li class=\"albumList\" *ngFor=\"let cat of categories; let i = 1; i++;\" *ngIf=\" cat.category_position == 'i'\" id=\"{{cat.subcategory_id}}\"> -->\n        <li class=\"albumList\" *ngFor=\"let cat of ArrangeCategory; let i = index; let key of keys\" id=\"{{cat.subcategory_id}}\">\n\n            <!-- *ngIf=\"cat.category_position == i\" -->\n\n            <div class=\"homeItems\">\n                <!-- <ion-tab-button tab={{cat.link}}  (click)=\"HomeSubFn(15)\"> -->\n                <!-- <ion-tab-button [routerLink]=\"'/subcategory/' + cat.subcategory_id\" routerDirection=\"forward\"> -->\n                <ion-tab-button tab={{cat.link}} (click)=\"HomeSubFn(cat.subcategory_id)\" routerDirection=\"forward\">\n                    <div class=\"HomeItemImgs\" [style.background-image]=\"'url('+cat.category_image+')'\" style=\"background-image: url(../../assets/images/HomeIcon1.png);\"></div>\n                    <h2>{{cat.name}}</h2>\n                    <p>{{cat.description}}</p>\n\n                </ion-tab-button>\n            </div>\n        </li>\n    </ul>\n\n    <!-- \n    <ul class=\"homeListItom\">\n        <li class=\"albumList\" *ngFor=\"let category of categoriesData\" id=\"{{category.id}}\">\n            <div class=\"homeItems\">\n                <ion-tab-button tab={{category.category_image}}>\n                    <div class=\"HomeItemImgs\" [style.background-image]=\"'url('+category.category_image+')'\"\n                        style=\"background-image: url(../../assets/images/HomeIcon1.png);\"></div>\n                    \n                    <h2>{{category.name}}</h2>\n                    <p>{{category.description}}</p>\n\n                </ion-tab-button>\n            </div>\n        </li>\n    </ul> -->\n\n\n    <!-- <ul class=\"homeListItom\">\n        <li class=\"albumList\" *ngFor=\"let items of HomeItems\" id=\"{{items.id}}\">\n            <div class=\"homeItems\">\n                <ion-tab-button tab={{items.Link}}>\n                    <div class=\"HomeItemImgs\" [style.background-image]=\"'url('+items.ImageName+')'\"\n                        style=\"background-image: url(../../assets/images/HomeIcon1.png);\"></div>\n                    <h2>{{items.HomeItemtitle}}</h2>\n                    <p>{{items.HomeItemText}}</p>\n                </ion-tab-button>\n            </div>\n        </li>\n    </ul> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _searchheader_searchheader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchheader/searchheader.component */ "./src/app/components/searchheader/searchheader.component.ts");



let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_searchheader_searchheader_component__WEBPACK_IMPORTED_MODULE_2__["SearchheaderComponent"]],
        exports: [_searchheader_searchheader_component__WEBPACK_IMPORTED_MODULE_2__["SearchheaderComponent"]]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/searchheader/searchheader.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/searchheader/searchheader.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoaGVhZGVyL3NlYXJjaGhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/searchheader/searchheader.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/searchheader/searchheader.component.ts ***!
  \*******************************************************************/
/*! exports provided: SearchheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchheaderComponent", function() { return SearchheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





let SearchheaderComponent = class SearchheaderComponent {
    constructor(navCtrl, _eref, router) {
        this.navCtrl = navCtrl;
        this._eref = _eref;
        this.router = router;
        this.show = false;
        this.buttonName = 'Show';
    }
    ngOnInit() {
        let self = this;
        setTimeout(function () {
            var path = window.location.pathname;
            var page = path.split('/').pop();
            jquery__WEBPACK_IMPORTED_MODULE_4__('.CustomFooter ion-toolbar#' + page).addClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_4__('.CustomFooter ion-toolbar#' + page).trigger('click');
        }, 500);
        const hostElem = self._eref.nativeElement;
        window.addEventListener('mouseup', function (event) {
            var pol = document.getElementById('SearchSection');
            if (event.target != pol) {
                var inputText = document.getElementById('search_input');
                if (event.target != inputText) {
                    var buttonTxt = document.getElementById('SearchComponent');
                    if (event.target != buttonTxt) {
                        self.show = false;
                    }
                }
            }
        });
    }
    OnInput(event) {
        let self = this;
        this.navCtrl.navigateForward(['search/' + event.target.value]);
        self.show = false;
    }
    showHide() {
        this.show = !this.show;
        if (this.show)
            this.buttonName = 'Hide';
        else
            this.buttonName = 'Show';
    }
};
SearchheaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SearchheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searchheader',
        template: __webpack_require__(/*! raw-loader!./searchheader.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/searchheader/searchheader.component.html"),
        styles: [__webpack_require__(/*! ./searchheader.component.scss */ "./src/app/components/searchheader/searchheader.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SearchheaderComponent);



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
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");









let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
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
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_apiservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/apiservice */ "./src/providers/apiservice.ts");
/* harmony import */ var _providers_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/network */ "./src/providers/network.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






// import { CacheService } from "ionic-cache";







//import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
let HomePage = class HomePage {
    constructor(apiservice, plt, networkService, storage, loadingCtrl, navCtrl, fileOpener, file, ft, router) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.fileOpener = fileOpener;
        this.file = file;
        this.ft = ft;
        this.router = router;
        this.categories = [];
        this.SubCategories = [];
        this.users = [];
        this.page = 1;
        this.categoriesData = [];
        this.ArrangeCategory = [];
        this.classApplied = false;
        this.show = true;
        this.buttonName = "Show";
        this.searchShow = false;
        this.LoaderShow = false;
        this.AllDataLoaded = false;
        this.todo = {};
    }
    ngOnInit() {
        this.searchHideDefault();
        this.plt.ready().then(() => {
            this.LoaderShow = true;
            //if (this.AllDataLoaded == false){
            this.homeListing(true);
            //}
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
        console.log('dddd' + this.file.applicationDirectory);
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
    SearchForm() {
        console.log(this.todo);
    }
    ionViewWillEnter() {
        this.searchHideDefault();
    }
    searchHideDefault() {
        //$('.SearchSection').css('display','none');
        this.searchShow = false;
    }
    homeListing(refresh = false) {
        //console.log('NSSS'+this.networkService.getCurrentNetworkStatus());
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            this.LoaderShow = false;
            // console.log('Home Page Offline Now => ');
            this.storage.get("categories").then(val => {
                this.result = val;
                // console.log('CheatSheet Data Offline => '+ JSON.stringify(this.result));
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
            let self = this;
            this.apiservice.homeListing_dataNewSQLite().then(res => {
                let subCatUrl = "get_posts_and_subcategories?category_id=";
                this.result = res;
                if (this.result.code == "200") {
                    this.categories = this.result.data;
                    console.log('HomeCat 200 ==> ' + this.categories);
                    this.keys = Object.keys(this.categories);
                    var newArray = [];
                    let s = 1;
                    for (let catsPos of this.categories) {
                        var index = this.categories.findIndex(p => p.category_position == s);
                        this.ArrangeCategory.push(this.categories[index]);
                        console.log('index ==> ' + index);
                        s++;
                    }
                    setTimeout(() => {
                        self.pdfFunction();
                    }, 10);
                }
                console.log('Home page Ts Api Done!');
                self.LoaderShow = false;
            }, error => {
                console.log("error");
                console.log(error);
                console.log("error");
                self.LoaderShow = false;
            });
        }
        // console.log(
        //   "this.file.applicationStorageDirectory" +
        //     this.file.applicationStorageDirectory
        // );
    }
    pdfFunction() {
        let self = this;
        this.apiservice.getAllpostshavingpdfs().then(res => {
            this.resultpdf = res;
            if (this.resultpdf.code == "200") {
                this.pdfposts = this.resultpdf.data;
                console.log(this.pdfposts);
                self.LoaderShow = false;
                this.AllDataLoaded = true;
                for (let newArray of this.pdfposts) {
                    let pdf_image = newArray.pdf_image;
                    let post_id = newArray.post_id;
                    let post_title = newArray.post_title;
                    let newpdfname = post_title + '.pdf';
                    const transfer = this.ft.create();
                    this.storage.get('pdf_local_url_' + post_id).then(data => {
                        if (data) {
                            console.log('Already Stored PDF Files = > ' + JSON.stringify(data));
                            this.AllDataLoaded = false;
                            self.LoaderShow = false;
                        }
                        else {
                            if (this.plt.is("ios")) {
                                transfer.download(pdf_image, this.file.documentsDirectory + newpdfname).then((entry) => {
                                    console.log('download complete: ' + entry.toURL());
                                    this.storage.set('pdf_local_url_' + post_id, entry.toURL());
                                    self.LoaderShow = false;
                                }, (error) => {
                                    console.log('pdf save error');
                                    console.log(error);
                                    self.LoaderShow = false;
                                });
                            }
                            else {
                                transfer.download(pdf_image, this.file.dataDirectory + newpdfname).then((entry) => {
                                    console.log('download complete: ' + entry.toURL());
                                    this.storage.set('pdf_local_url_' + post_id, entry.toURL());
                                    self.LoaderShow = false;
                                }, (error) => {
                                    console.log('pdf save error');
                                    console.log(error);
                                    self.LoaderShow = false;
                                });
                            }
                        }
                    });
                }
            }
        }, error => {
            console.log("error");
            console.log(error);
            console.log("error");
            self.LoaderShow = false;
        });
    }
    HomeSubFn(id) {
        // this.navCtrl.pop({animate: true, direction: 'back'})
        this.navCtrl.navigateForward(["subcategory/" + id]);
        // this.navCtrl.push(["subcategory/" + id],{},{animate: true, direction: 'back'});
    }
    openContact() {
        this.navCtrl.navigateForward(["contact/"]);
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
            //window.location.reload(true);
            this.apiservice.homeListing_dataNewSQLite(refresh).then(res => {
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
            }, error => {
                console.log("error");
                console.log(error);
                console.log("error");
            });
        }
    }
    updateUser(id) { }
};
HomePage.ctorParameters = () => [
    { type: _providers_apiservice__WEBPACK_IMPORTED_MODULE_3__["Apiservice"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__["FileOpener"] },
    { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_apiservice__WEBPACK_IMPORTED_MODULE_3__["Apiservice"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
        _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__["FileOpener"],
        _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map