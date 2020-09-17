(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-contact-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contact/contact.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons class=\"customBack\" (click)=\"goBack();\">&nbsp;</ion-buttons>\n        <ion-title>Contact Us</ion-title>\n\n        <!-- <ion-buttons (click)=\"showHide()\" class=\"searchIcon\"></ion-buttons> -->\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ul class=\"homeListItom ListSyle Link\">\n        <li class=\"albumList\" *ngFor=\"let items of SubCategories\" id=\"{{items.id}}\">\n            <div class=\"homeItems\">\n                <ion-tab-button tab={{items.Link}}>\n                    <div class=\"flexBox\">\n                        <div class=\"leftContHor\">\n                            <h2 *ngIf=\"items.HomeItemtitle != ''\">{{items.HomeItemtitle}}</h2>\n                           <p *ngIf=\"items.type == 'Email'\" (click)=\"openEmail(items.Link)\">{{items.HomeItemText}}</p>\n                            <p *ngIf=\"items.type == 'Twitter'\" (click)=\"openTwitter(items.Link)\">{{items.HomeItemText}}</p>\n                            <p *ngIf=\"items.type == 'Url'\" (click)=\"openURL(items.Link)\">{{items.HomeItemText}}</p>\n                        </div>\n                        <div class=\"arrowRight\">\n                            <ion-icon name=\"arrow-forward\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-tab-button>\n            </div>\n        </li>\n    </ul>\n    <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher> -->\n    \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/contact/contact-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/contact/contact-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function() { return ContactPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.page */ "./src/app/pages/contact/contact.page.ts");




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/contact/contact.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-routing.module */ "./src/app/pages/contact/contact-routing.module.ts");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.page */ "./src/app/pages/contact/contact.page.ts");







let ContactPageModule = class ContactPageModule {
};
ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactPageRoutingModule"]
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
    })
], ContactPageModule);



/***/ }),

/***/ "./src/app/pages/contact/contact.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/contact/contact.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/contact/contact.page.ts ***!
  \***********************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_apiservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/apiservice */ "./src/providers/apiservice.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/network */ "./src/providers/network.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/offline-manager.service */ "./src/providers/offline-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_app_availability_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/app-availability/ngx */ "./node_modules/@ionic-native/app-availability/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");







// import { CacheService } from "ionic-cache";





// import { AppAvailability } from '@ionic-native/app-availability';

let ContactPage = class ContactPage {
    constructor(apiservice, plt, networkService, storage, offlineManager, 
    // private cache: CacheService,
    loadingCtrl, route, navCtrl, iab, appAvailability, 
    // private appAvailability: AppAvailability,
    // private NoImage: string = 'https://images.pexels.com/photos/3496542/pexels-photo-3496542.jpeg'
    device) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.appAvailability = appAvailability;
        this.device = device;
        this.categories = [];
        this.description = [];
        this.SubCategories = [];
        this.CategoryData = [];
        this.users = [];
        this.page = 1;
        this.categoriesData = [];
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
    }
    ngOnInit() {
        this.HomeSubFn(true);
    }
    HomeSubFn(refresh = false) {
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            console.log('Contact  Page Offline Now ');
            this.storage.get('ContactPageSQLite').then((val) => {
                this.result = val;
                console.log('Contact  Page Offline Data ' + JSON.stringify(this.result));
                for (let CatData of this.result) {
                    this.SubCategories = CatData.data;
                    this.description = CatData.description;
                    this.CategoryData = CatData.category_data;
                    let o = 1;
                    for (let getWhichTestData of CatData.data) {
                        o++;
                    }
                }
            });
        }
        else {
            //HomeSubFn() {
            this.apiservice.ContactData().then((res) => {
                this.result = res;
                if (this.result.code == "200") {
                    this.SubCategories = this.result.data;
                    this.description = this.result.description;
                    this.CategoryData = this.result.category_data;
                }
            }, (error) => {
                console.log('error');
                console.log(error);
                console.log('error');
            });
        }
    }
    clickUrl(url) {
        const browser = this.iab.create(url);
    }
    openEmail1(email) {
        if (this.plt.is('ios')) {
            window.open('googlegmail:///co?to=' + email + '&subject=' + 'subject' + '&body=', '_system');
        }
        ;
        this.plt.ready().then(() => {
            window.open('mailto:' + email, "_system");
        });
    }
    openEmail(email) {
        this.plt.ready().then(() => {
            console.log('email');
            window.open('mailto:' + email, "_system");
        });
    }
    goBack() {
        window.history.back();
    }
    launchExternalApp(iosSchemaName, androidPackageName, appUrl, httpUrl, username) {
        let app;
        httpUrl = 'https://twitter.com/';
        username = 'Rinstructor';
        androidPackageName = 'com.twitter.android';
        iosSchemaName = 'twitter://';
        if (this.device.platform === 'iOS') {
            app = iosSchemaName;
        }
        else if (this.device.platform === 'Android') {
            app = androidPackageName;
        }
        else {
            // let browser = new InAppBrowser(httpUrl + username, '_system');
            // const browser: InAppBrowserObject = this.iab.create(httpUrl + username, '_system');
            // return;
            let target = "_blank";
            const browser = this.iab.create(httpUrl + username, target, this.option);
            browser.on("loadstop").subscribe(event => {
                // browser.insertCSS({ code: "body{color: red;" });
            });
            return false;
        }
        this.appAvailability.check(app)
            .then((yes) => {
            const browser = this.iab.create(httpUrl + username, '_system');
            return;
            //   let target = "_blank";
            // const browser = this.iab.create(httpUrl + username, target, this.option);
            // browser.on("loadstop").subscribe(event => {
            //   // browser.insertCSS({ code: "body{color: red;" });
            // });
            // return false;
        }, () => {
            // const browser: InAppBrowserObject = this.iab.create(httpUrl + username, '_system');
            // return
            let target = "_blank";
            const browser = this.iab.create(httpUrl + username, target, this.option);
            browser.on("loadstop").subscribe(event => {
                // browser.insertCSS({ code: "body{color: red;" });
            });
            return false;
        });
    }
    openTwitter(username) {
        this.launchExternalApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=', 'https://twitter.com/', username);
    }
    openTwitter1(twitter) {
        console.log('twitter URL ==> ' + twitter);
        let app;
        // console.log('twitter app URL'+twitter)
        // // const browser: InAppBrowserObject = this.iab.create(twitter + twitter, '_system');
        // if (this.plt.is('ios')) {
        //   app = 'twitter://';
        // } else if (this.plt.is('android')) {
        //   console.log(' else if condition Android platform TTwitter App');
        //   app = 'com.twitter.android';
        // } else {
        //   console.log('iab else TTwitter App');
        //   const browser: InAppBrowserObject = this.iab.create(twitter + twitter, '_system');
        //   return;
        // }
        this.appAvailability.check(app)
            .then((yes) => {
            console.log(app + ' is available');
            // Success
            // App exists
            // app = 'twitter://'+'Rinstructor';
            app = 'com.twitter.android' + 'Rinstructor';
            // const browser: InAppBrowserObject = this.iab.create('twitter://user?screen_name=' + twitter, '_system');
        }, (no) => {
            // Error
            // App does not exist
            // Open Web URL
            // const browser: InAppBrowserObject = this.iab.create('https://twitter.com/' + 'Rinstructor', '_system');
            return;
        });
        //https://codevampires.com/open-twitter-app-in-ionic-4/
        // if (this.plt.is('ios')) {
        //   app = 'twitter://';
        // } else if (this.plt.is('android')) {
        //   app = 'com.twitter.android';
        //   console.log('Android Device Chandan');
        // } else {
        //     let URL = twitter;
        //     let target = "_blank";
        //     const browser = this.iab.create(URL, target);
        //     browser.on('loadstop').subscribe(event => {
        //     //  browser.insertCSS({ code: "body{color: red;" });
        //     });
        // }
        // this.appAvailability.check(app)
        // .then(
        //   (yes: boolean) => console.log(app + ' is available'),
        //   (no: boolean) => console.log(app + ' is NOT available')
        // );
    }
    openURL(weburl) {
        let URL = weburl;
        // let target = "_blank";
        // const browser = this.iab.create(URL, target);
        // browser.on('loadstop').subscribe(event => {
        //   browser.insertCSS({ code: "body{color: red;" });
        // });
        let target = "_blank";
        const browser = this.iab.create(weburl, target, this.option);
        browser.on("loadstop").subscribe(event => {
            // browser.insertCSS({ code: "body{color: red;" });
        });
        return false;
    }
    loadData(refresh = false, refresher) {
        this.HomeSubFn(true);
        this.apiservice.ContactData().then((res) => {
            this.result = res;
            if (this.result.code == "200") {
                console.log('returnContact Refresh' + res);
                this.SubCategories = this.result.data;
                this.description = this.result.description;
                this.CategoryData = this.result.category_data;
            }
        }, (error) => {
            console.log('error');
            console.log(error);
            console.log('error');
        });
    }
};
ContactPage.ctorParameters = () => [
    { type: _providers_apiservice__WEBPACK_IMPORTED_MODULE_2__["Apiservice"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] },
    { type: _ionic_native_app_availability_ngx__WEBPACK_IMPORTED_MODULE_9__["AppAvailability"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"] }
];
ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.page.html"),
        styles: [__webpack_require__(/*! ./contact.page.scss */ "./src/app/pages/contact/contact.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_apiservice__WEBPACK_IMPORTED_MODULE_2__["Apiservice"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"],
        _ionic_native_app_availability_ngx__WEBPACK_IMPORTED_MODULE_9__["AppAvailability"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"]])
], ContactPage);



/***/ })

}]);
//# sourceMappingURL=pages-contact-contact-module-es2015.js.map