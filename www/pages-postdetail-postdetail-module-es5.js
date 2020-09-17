(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-postdetail-postdetail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/postdetail/postdetail.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/postdetail/postdetail.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons class=\"customBack\" (click)=\"goBack(postId,type_sent);\">&nbsp;</ion-buttons>\r\n        <ion-title>\r\n            {{this.optionalTitle != '' ? this.optionalTitle : this.PostTitle}}\r\n\r\n        </ion-title>\r\n        <!-- <ion-buttons *ngIf=\"this.PostVideo != ''\" [ngClass]=\"this.PostVideo != '' ? 'showPlayBtn' : ''\" class=\"customPlay\" (click)=\"playBtn(this.PostID);\">&nbsp;</ion-buttons> -->\r\n        <!-- <ion-buttons [ngClass]=\"this.PostVideo != '' ? 'showPlayBtn' : ''\" class=\"customPlay\" (click)=\"playBtn(this.PostID);\">&nbsp;</ion-buttons> -->\r\n        <ion-buttons class=\"infoIcon\" *ngIf=\"showpdf\" (click)=\"pdfClickOption(this.PostID)\">&nbsp;</ion-buttons>\r\n        <ion-buttons class=\"customPlay showPlayBtn\" *ngIf=\"show\" (click)=\"playBtn(this.PostID);\">&nbsp;</ion-buttons>\r\n        <!--ion-buttons (click)=\"showHide()\" class=\"searchIcon\"></ion-buttons-->\r\n\r\n        <!-- {{this.video_url}} -->\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\r\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\r\n        </ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <div class=\"detailPage\" [innerHTML]=\"this.postContent\">\r\n        <!-- {{this.postContent}} -->\r\n    </div>\r\n    <!-- <div  *ngFor=\"let detail of postDetail\">\r\n    {{detail.post_id}}\r\n    {{detail.post_title}}\r\n    {{detail.post_content}}\r\n    {{detail.detail_page_name}}\r\n  </div> -->\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/postdetail/postdetail-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/postdetail/postdetail-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PostdetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostdetailPageRoutingModule", function() { return PostdetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _postdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postdetail.page */ "./src/app/pages/postdetail/postdetail.page.ts");




var routes = [
    {
        path: '',
        component: _postdetail_page__WEBPACK_IMPORTED_MODULE_3__["PostdetailPage"]
    }
];
var PostdetailPageRoutingModule = /** @class */ (function () {
    function PostdetailPageRoutingModule() {
    }
    PostdetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PostdetailPageRoutingModule);
    return PostdetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/postdetail/postdetail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/postdetail/postdetail.module.ts ***!
  \*******************************************************/
/*! exports provided: PostdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostdetailPageModule", function() { return PostdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _postdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postdetail-routing.module */ "./src/app/pages/postdetail/postdetail-routing.module.ts");
/* harmony import */ var _postdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postdetail.page */ "./src/app/pages/postdetail/postdetail.page.ts");







var PostdetailPageModule = /** @class */ (function () {
    function PostdetailPageModule() {
    }
    PostdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _postdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostdetailPageRoutingModule"]
            ],
            declarations: [_postdetail_page__WEBPACK_IMPORTED_MODULE_6__["PostdetailPage"]]
        })
    ], PostdetailPageModule);
    return PostdetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/postdetail/postdetail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/postdetail/postdetail.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "postdetail.page ion-header.header-md,\npostdetail.page .header-ios ion-toolbar:last-child {\n  padding-right: 9%;\n}\npostdetail.page * {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcmlzaG5hL0RvY3VtZW50cy9jaGFuZGFuLzEwXzA2XzIwMjAvUkluc3RlcnVjdG9yVGVzdGluZ0NvbnRhY3ROZXcvc3JjL2FwcC9wYWdlcy9wb3N0ZGV0YWlsL3Bvc3RkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3N0ZGV0YWlsL3Bvc3RkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztFQUVJLGlCQUFBO0FDQVI7QURFSTtFQUNJLHFCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3N0ZGV0YWlsL3Bvc3RkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicG9zdGRldGFpbC5wYWdlIHtcbiAgICBpb24taGVhZGVyLmhlYWRlci1tZCxcbiAgICAuaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogOSU7XG4gICAgfVxuICAgICoge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgfVxufSIsInBvc3RkZXRhaWwucGFnZSBpb24taGVhZGVyLmhlYWRlci1tZCxcbnBvc3RkZXRhaWwucGFnZSAuaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogOSU7XG59XG5wb3N0ZGV0YWlsLnBhZ2UgKiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/postdetail/postdetail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/postdetail/postdetail.page.ts ***!
  \*****************************************************/
/*! exports provided: PostdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostdetailPage", function() { return PostdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_apiservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/apiservice */ "./src/providers/apiservice.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _providers_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/network */ "./src/providers/network.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/offline-manager.service */ "./src/providers/offline-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_13__);







// import { CacheService } from "ionic-cache";









var PostdetailPage = /** @class */ (function () {
    function PostdetailPage(apiservice, plt, networkService, storage, offlineManager, loadingCtrl, route, iab, navCtrl, document, fileOpener, file, ft) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.document = document;
        this.fileOpener = fileOpener;
        this.file = file;
        this.ft = ft;
        this.PostData = [];
        this.show = false;
        this.showpdf = false;
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
        var options = {
            title: "pdf_image"
        };
    }
    PostdetailPage.prototype.ngOnInit = function () {
        var _this = this;
        var n_id = this.plt.getQueryParam("postId");
        // this.type_sent = 'post';
        var definedthis2 = window.itemsini;
        this.type_sent = "post";
        for (var _i = 0, definedthis2_1 = definedthis2; _i < definedthis2_1.length; _i++) {
            var itemsingle2 = definedthis2_1[_i];
            if (itemsingle2["active"] == "active" &&
                itemsingle2["PageNameNew"] == "Cheat Sheets") {
                this.type_sent = "post";
            }
        }
        this.post = this.route.params.subscribe(function (params) {
            _this.postId = params["postId"];
            _this.postDetail(true, _this.postId);
        });
        console.log(this.postId);
        // if(this.postId  == 47 || this.postId  == 100 || this.postId  == 102 || this.postId  == 104){
        // this.type_sent = 'post';
        // }
        this.videoBtnFn();
        this.docClick();
    };
    PostdetailPage.prototype.pdfClickOption1 = function (pdf_image, options) {
        // this.document.viewDocument(`${pdf_image}/my.pdf`, 'application/pdf', options);
        //<Route path="" component={}/> this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)
        this.document.viewDocument("" + pdf_image, "application/pdf", options);
        // <Route path="" component = {} /> this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)
    };
    PostdetailPage.prototype.pdfClickOption = function (post_id) {
        var _this = this;
        console.log('Post Event Fire==>' + post_id);
        this.storage.get('pdf_local_url_' + post_id).then(function (data) {
            if (data) {
                console.log('Post Event Data ==>' + data);
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
                /*this.apiservice.getpdf_for_specific_id(post_id).then(
                  res => {
                    this.resultpdf = res;
                      if (this.resultpdf.code == "200") {
                        this.pdfposts = this.resultpdf.data;
                        let pdf_image = this.pdfposts.pdf_image
                        let post_title = this.pdfposts.post_title
                        let newpdfname = post_title + '.pdf';
                        if (this.plt.is("ios")) {
                            transfer.download(pdf_image, this.file.documentsDirectory + newpdfname).then((entry) => {
                              console.log('download complete: ' + entry.toURL());
                              this.storage.set('pdf_local_url_' + post_id, entry.toURL());
                              this.document.viewDocument(entry.toURL(), "application/pdf", {});
                            }, (error) => {
                              console.log('pdf save error')
                              console.log(error)
                            });
                        } else {
                            transfer.download(pdf_image, this.file.dataDirectory + newpdfname).then((entry) => {
                              console.log('download complete: ' + entry.toURL());
                              this.storage.set('pdf_local_url_' + post_id, entry.toURL());
                              this.fileOpener
                                .open(entry.toURL(), "application/pdf")
                                .then(() => console.log("File is opened"))
                                .catch(e => console.log("Error opening file", e));
                              console.log("PDF AndroidS");
                            }, (error) => {
                              console.log('pdf save error')
                              console.log(error)
                            });
        
                        }
                      }
                    },
                    error => {
                      console.log("error");
                      console.log(error);
                      setTimeout(function () {
                        $('.footInner ion-toolbar').eq(0).trigger('click');
                      }, 2000);
                      console.log("error");
                    }
                );*/
            }
        });
    };
    PostdetailPage.prototype.docClick = function () {
        var self = this;
        jquery__WEBPACK_IMPORTED_MODULE_13__(document).on('click', 'a[href^=http], a[href^=https], a[href^=www]', function (e) {
            e.preventDefault();
            var $this = jquery__WEBPACK_IMPORTED_MODULE_13__(this);
            //var target = $this.data('inAppBrowser') || '_blank';
            var linkurl = $this.attr('href');
            var target = "_blank";
            console.log('a Tag Href = > ' + linkurl);
            self.OpenExtUrl(linkurl);
            // const browser = this.iab.create(URL, target);
            // browser.on("loadstop").subscribe(event => {
            //   // browser.insertCSS({ code: "body{color: red;" });
            // });
            // return false;
            // window.open($this.attr('href'), target, 'location=no');
        });
    };
    PostdetailPage.prototype.OpenExtUrl = function (HREFURL) {
        var hrefUrlNew = HREFURL;
        console.log('a Tag Click => ' + hrefUrlNew);
        var target = "_blank";
        var browser = this.iab.create(HREFURL, target, this.option);
        browser.on("loadstop").subscribe(function (event) {
            // browser.insertCSS({ code: "body{color: red;" });
        });
        return false;
    };
    PostdetailPage.prototype.open_out_url = function (urlthis) {
        console.log('External URL urlthis Post Chandan ==> ' + urlthis);
        var URL = urlthis;
        var target = "_blank";
        var browser = this.iab.create(URL, target);
        browser.on("loadstop").subscribe(function (event) {
            // browser.insertCSS({ code: "body{color: red;" });
        });
        return false;
    };
    PostdetailPage.prototype.openURL = function (postUrl) {
        console.log('External URL postUrl Chandan  Post ==> ' + postUrl);
        var postUrNew = postUrl;
        var target = "_blank";
        var browser = this.iab.create(postUrNew, target);
        browser.on("loadstop").subscribe(function (event) {
            // browser.insertCSS({ code: "body{color: red;" });
        });
        return false;
    };
    PostdetailPage.prototype.postDetail = function (refresh, postId) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            console.log('Post Details  Page =>');
            this.storage.get("PostDataSQLite").then(function (val) {
                _this.result = val;
                console.log('Post Details  Data Offline => ' + JSON.stringify(_this.result));
                for (var _i = 0, _a = _this.result; _i < _a.length; _i++) {
                    var CatData = _a[_i];
                    var postDataArray = CatData.data;
                    for (var _b = 0, postDataArray_1 = postDataArray; _b < postDataArray_1.length; _b++) {
                        var newArray = postDataArray_1[_b];
                        var catIDNew = newArray.post_id;
                        if (catIDNew == postId) {
                            newArray.post_id;
                            _this.PostTitle = newArray.post_title;
                            _this.optionalTitle = newArray.detail_page_name;
                            _this.postContent = newArray.post_content;
                            _this.PostVideo = newArray.video_url;
                            _this.PostID = newArray.post_id;
                            _this.pdf_image = newArray.pdf_image;
                            if (_this.PostVideo != "" && _this.PostVideo != "undefined") {
                                _this.show = true;
                            }
                            else {
                            }
                            if (_this.pdf_image != "" && _this.pdf_image != "undefined") {
                                _this.showpdf = true;
                            }
                            else {
                            }
                        }
                    }
                }
            });
        }
        else {
            var definedthis = window.itemsini;
            var ctt = 0;
            for (var _i = 0, definedthis_1 = definedthis; _i < definedthis_1.length; _i++) {
                var itemsingle = definedthis_1[_i];
                if (itemsingle["active"] == "active") {
                    window.itemsini[ctt]["name"] = "postdetail/" + postId;
                }
                ctt++;
            }
            this.apiservice.PostDetail(postId, "No").then(function (res) {
                _this.result = res;
                if (_this.result.code == "200") {
                    _this.PostData = _this.result.data;
                    for (var _i = 0, _a = _this.PostData; _i < _a.length; _i++) {
                        var content = _a[_i];
                        _this.PostTitle = content.post_title;
                        _this.optionalTitle = content.detail_page_name;
                        _this.postContent = content.post_content;
                        _this.PostVideo = content.video_url;
                        _this.PostID = content.post_id;
                        _this.pdf_image = content.pdf_image;
                        if (_this.PostVideo != "" && _this.PostVideo != "undefined") {
                            _this.show = true;
                        }
                        else {
                        }
                        if (_this.pdf_image != "" && _this.pdf_image != "undefined") {
                            _this.showpdf = true;
                        }
                        else {
                        }
                    }
                }
            }, function (error) {
                console.log("error");
                console.log(error);
                console.log("error");
            });
        }
    };
    /* goBack() {
      window.history.back();
    }*/
    PostdetailPage.prototype.goBackFull = function () {
        this.navCtrl.navigateBack("/home");
    };
    PostdetailPage.prototype.goBack = function (postId, type_sent) {
        var _this = this;
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            window.history.back();
        }
        else {
            if (window.location.href.indexOf("from_search") >= 0) {
                window.history.back();
            }
            else {
                this.apiservice.getParentPage(postId, type_sent).then(function (res) {
                    _this.result = res;
                    if (_this.result.code == "200") {
                        // console.log('getParentPage ' + this.result.ParentPage_id);
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
        }
    };
    PostdetailPage.prototype.playBtn = function (postId) {
        this.navCtrl.navigateForward(["videopost/" + postId + "?from_search=yes"]);
    };
    PostdetailPage.prototype.loadData = function (refresh, refresher) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            if (refresher) {
                refresher.target.complete();
                //this.LoaderShow = false;
            }
        }
        else {
            //this.postDetail(true, this.postId);
            this.apiservice.PostDetail(this.postId, "No").then(function (res) {
                _this.result = res;
                if (_this.result.code == "200") {
                    _this.PostData = _this.result.data;
                    for (var _i = 0, _a = _this.PostData; _i < _a.length; _i++) {
                        var content = _a[_i];
                        _this.PostTitle = content.post_title;
                        _this.optionalTitle = content.detail_page_name;
                        _this.postContent = content.post_content;
                        _this.PostVideo = content.video_url;
                        _this.PostID = content.post_id;
                        if (_this.PostVideo != "" && _this.PostVideo != "undefined") {
                            _this.show = true;
                        }
                        else {
                        }
                    }
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
    PostdetailPage.prototype.videoBtnFn = function () { };
    PostdetailPage.ctorParameters = function () { return [
        { type: _providers_apiservice__WEBPACK_IMPORTED_MODULE_2__["Apiservice"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["DocumentViewer"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"] },
        { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_11__["File"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"] }
    ]; };
    PostdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-postdetail",
            template: __webpack_require__(/*! raw-loader!./postdetail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/postdetail/postdetail.page.html"),
            styles: [__webpack_require__(/*! ./postdetail.page.scss */ "./src/app/pages/postdetail/postdetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_apiservice__WEBPACK_IMPORTED_MODULE_2__["Apiservice"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _providers_network__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__["OfflineManagerService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["DocumentViewer"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_11__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"]])
    ], PostdetailPage);
    return PostdetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-postdetail-postdetail-module-es5.js.map