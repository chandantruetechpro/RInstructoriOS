(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-videopost-videopost-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/videopost/videopost.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/videopost/videopost.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons class=\"customBack\" (click)=\"goBack(postId,type_sent);\">&nbsp;</ion-buttons>\n        <!-- <ion-title>videopost</ion-title> -->\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"AppVideoPage\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <video style=\"width: 100%; height: 100%;\" *ngIf=\"this.videoPoster == '' && this.external_url == 'No'\" preload=\"metadata\" controls>\n    <source src=\"{{this.PostVideo}}\" type=\"video/mp4\">\n    <source src=\"{{this.PostVideo}}\" type=\"video/ogg\"> Your browser does not support HTML5 video.\n    </video>\n    <video style=\"width: 100%; height: 100%;\" *ngIf=\"this.videoPoster != '' && this.external_url == 'No' \" poster={{this.videoPoster}} preload=\"metadata\" controls>\n    <source src=\"{{this.PostVideo}}\" type=\"video/mp4\">\n    <source src=\"{{this.PostVideo}}\" type=\"video/ogg\">\n    Your browser does not support HTML5 video.\n  </video>\n    <div class=\"adfsasdfdasfdasfasw\" *ngIf=\"this.external_url == 'Yes'\">\n        Opening URL...\n        <p (click)=\"open_out_url(this.ExternalURLFromAPI)\">Open Link 2</p>\n    </div>\n\n\n    <script>\n        iframe.onload = function() {\n            // we can get the reference to the inner window\n            let iframeWindow = iframe.contentWindow; // OK\n            try {\n                // ...but not to the document inside it\n                let doc = iframe.contentDocument; // ERROR\n            } catch (e) {\n                alert(e); // Security Error (another origin)\n            }\n\n            // also we can't READ the URL of the page in iframe\n            try {\n                // Can't read URL from the Location object\n                let href = iframe.contentWindow.location.href; // ERROR\n            } catch (e) {\n                alert(e); // Security Error\n            }\n\n            // ...we can WRITE into location (and thus load something else into the iframe)!\n            iframe.contentWindow.location = '/'; // OK\n\n            iframe.onload = null; // clear the handler, not to run it after the location change\n        };\n    </script>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/videopost/videopost-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/videopost/videopost-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VideopostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideopostPageRoutingModule", function() { return VideopostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _videopost_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videopost.page */ "./src/app/pages/videopost/videopost.page.ts");




var routes = [
    {
        path: '',
        component: _videopost_page__WEBPACK_IMPORTED_MODULE_3__["VideopostPage"]
    }
];
var VideopostPageRoutingModule = /** @class */ (function () {
    function VideopostPageRoutingModule() {
    }
    VideopostPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], VideopostPageRoutingModule);
    return VideopostPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/videopost/videopost.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/videopost/videopost.module.ts ***!
  \*****************************************************/
/*! exports provided: VideopostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideopostPageModule", function() { return VideopostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _videopost_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videopost-routing.module */ "./src/app/pages/videopost/videopost-routing.module.ts");
/* harmony import */ var _videopost_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videopost.page */ "./src/app/pages/videopost/videopost.page.ts");







var VideopostPageModule = /** @class */ (function () {
    function VideopostPageModule() {
    }
    VideopostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _videopost_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideopostPageRoutingModule"]
            ],
            declarations: [_videopost_page__WEBPACK_IMPORTED_MODULE_6__["VideopostPage"]]
        })
    ], VideopostPageModule);
    return VideopostPageModule;
}());



/***/ }),

/***/ "./src/app/pages/videopost/videopost.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/videopost/videopost.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZGVvcG9zdC92aWRlb3Bvc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/videopost/videopost.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/videopost/videopost.page.ts ***!
  \***************************************************/
/*! exports provided: VideopostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideopostPage", function() { return VideopostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_apiservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/apiservice */ "./src/providers/apiservice.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _providers_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/network */ "./src/providers/network.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/offline-manager.service */ "./src/providers/offline-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");







// import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
// import { DocumentViewerOptions  } from '@ionic-native/document-viewer/ngx';
// import { CacheService } from "ionic-cache";





// const options: DocumentViewerOptions = {
// title: 'My PDF'
// }
var VideopostPage = /** @class */ (function () {
    function VideopostPage(apiservice, plt, networkService, storage, offlineManager, 
    // private cache: CacheService,
    loadingCtrl, route, navCtrl, sanitizer, iab) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.iab = iab;
        this.PostData = [];
    }
    VideopostPage.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('Post Detail Page');
        var n_id = this.plt.getQueryParam("postId");
        this.from_category = 'No';
        if (window.location.href.indexOf('from_category') >= 0) {
            this.from_category = 'Yes';
        }
        this.type_sent = 'post';
        this.post = this.route.params.subscribe(function (params) {
            _this.postId = params['postId'];
            // console.log('pageID =>  ngInit ==> ' + this.postId);
            _this.postDetail(_this.postId);
        });
    };
    VideopostPage.prototype.open_out_url = function (urlthis) {
        var URL = urlthis;
        var target = "_blank";
        var browser = this.iab.create(URL, target);
        browser.on('loadstop').subscribe(function (event) {
            // browser.insertCSS({ code: "body{color: red;" });
        });
        return false;
    };
    VideopostPage.prototype.postDetail = function (postId) {
        var _this = this;
        var definedthis = window.itemsini;
        var ctt = 0;
        for (var _i = 0, definedthis_1 = definedthis; _i < definedthis_1.length; _i++) {
            var itemsingle = definedthis_1[_i];
            if (itemsingle['active'] == 'active') {
                window.itemsini[ctt]['name'] = 'videopost/' + postId;
            }
            ctt++;
        }
        // debugger;
        this.apiservice.PostDetail(postId, this.from_category).then(function (res) {
            _this.result = res;
            if (_this.result.code == "200") {
                _this.PostData = _this.result.data;
                for (var _i = 0, _a = _this.PostData; _i < _a.length; _i++) {
                    var content = _a[_i];
                    if (content.pdf_image != '' && content.external_url == '') {
                        // this.document.viewDocument(content.pdf_image, 'application/pdf', options)
                        window.open(content.pdf_image, '_system', 'location=yes');
                        // console.log(content.pdf_image);
                        // this.ExternalURLFromAPI = content.pdf_image;
                        // this.open_out_url(this.ExternalURLFromAPI);
                        window.history.back();
                    }
                    else if (content.external_url != '' && content.video_url == '') {
                        _this.ExternalURLFromAPI = content.external_url;
                        console.log(_this.ExternalURLFromAPI);
                        _this.external_url = 'Yes';
                        _this.open_out_url(_this.ExternalURLFromAPI);
                        window.history.back();
                    }
                    else {
                        _this.PostVideo = content.video_url;
                        _this.videoPoster = content.video_poster;
                        _this.external_url = 'No';
                    }
                }
            }
        }, function (error) {
            console.log('error');
            console.log(error);
            console.log('error');
        });
    };
    /*goBack() {
      window.history.back();
    }*/
    VideopostPage.prototype.goBack = function (postId, type_sent) {
        var _this = this;
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            window.history.back();
        }
        else {
            if (window.location.href.indexOf('from_search') >= 0 || window.location.href.indexOf('from_category') >= 0) {
                window.history.back();
            }
            else {
                this.apiservice.getParentPage(postId, type_sent).then(function (res) {
                    _this.result = res;
                    if (_this.result.code == "200") {
                        // console.log('getParentPage ' + this.result.ParentPage_id);
                        if (_this.result.ParentPage_id == 'home') { //Home
                            _this.navCtrl.navigateForward('/home');
                        }
                        else if (_this.result.ParentPage_id == 'video') { //Videos
                            _this.navCtrl.navigateForward('/video');
                        }
                        else if (_this.result.ParentPage_id == 'cheatsheets') { //Cheat Sheet
                            _this.navCtrl.navigateForward('/cheatsheets');
                        }
                        else if (_this.result.ParentPage_id == 'whichtest') { //Which Test
                            _this.navCtrl.navigateForward('/whichtest');
                        }
                        else {
                            _this.navCtrl.navigateForward('subcategory/' + _this.result.ParentPage_id);
                        }
                    }
                }, function (error) {
                    console.log('error');
                    console.log(error);
                    console.log('error');
                });
            }
        }
    };
    VideopostPage.prototype.loadData = function (refresh, refresher) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        this.apiservice.PostDetail(this.postId, this.from_category).then(function (res) {
            _this.result = res;
            if (_this.result.code == "200") {
                _this.PostData = _this.result.data;
                for (var _i = 0, _a = _this.PostData; _i < _a.length; _i++) {
                    var content = _a[_i];
                    if (content.pdf_image != '' && content.external_url == '') {
                        // this.document.viewDocument(content.pdf_image, 'application/pdf', options)
                        window.open(content.pdf_image, '_system', 'location=yes');
                        // console.log(content.pdf_image);
                        // this.ExternalURLFromAPI = content.pdf_image;
                        // this.open_out_url(this.ExternalURLFromAPI);
                        window.history.back();
                    }
                    else if (content.external_url != '' && content.video_url == '') {
                        _this.ExternalURLFromAPI = content.external_url;
                        console.log(_this.ExternalURLFromAPI);
                        _this.external_url = 'Yes';
                        _this.open_out_url(_this.ExternalURLFromAPI);
                        window.history.back();
                    }
                    else {
                        _this.PostVideo = content.video_url;
                        _this.videoPoster = content.video_poster;
                        _this.external_url = 'No';
                    }
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
    VideopostPage.ctorParameters = function () { return [
        { type: _providers_apiservice__WEBPACK_IMPORTED_MODULE_2__["Apiservice"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"] }
    ]; };
    VideopostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videopost',
            template: __webpack_require__(/*! raw-loader!./videopost.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/videopost/videopost.page.html"),
            styles: [__webpack_require__(/*! ./videopost.page.scss */ "./src/app/pages/videopost/videopost.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_apiservice__WEBPACK_IMPORTED_MODULE_2__["Apiservice"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]])
    ], VideopostPage);
    return VideopostPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-videopost-videopost-module-es5.js.map