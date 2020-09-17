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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _postdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postdetail.page */ "./src/app/pages/postdetail/postdetail.page.ts");




const routes = [
    {
        path: '',
        component: _postdetail_page__WEBPACK_IMPORTED_MODULE_3__["PostdetailPage"]
    }
];
let PostdetailPageRoutingModule = class PostdetailPageRoutingModule {
};
PostdetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostdetailPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _postdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postdetail-routing.module */ "./src/app/pages/postdetail/postdetail-routing.module.ts");
/* harmony import */ var _postdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postdetail.page */ "./src/app/pages/postdetail/postdetail.page.ts");







let PostdetailPageModule = class PostdetailPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_apiservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/apiservice */ "./src/providers/apiservice.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/network */ "./src/providers/network.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_offline_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/offline-manager.service */ "./src/providers/offline-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_13__);







// import { CacheService } from "ionic-cache";









let PostdetailPage = class PostdetailPage {
    constructor(apiservice, plt, networkService, storage, offlineManager, loadingCtrl, route, iab, navCtrl, document, fileOpener, file, ft) {
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
        const options = {
            title: "pdf_image"
        };
    }
    ngOnInit() {
        let n_id = this.plt.getQueryParam("postId");
        // this.type_sent = 'post';
        let definedthis2 = window.itemsini;
        this.type_sent = "post";
        for (let itemsingle2 of definedthis2) {
            if (itemsingle2["active"] == "active" &&
                itemsingle2["PageNameNew"] == "Cheat Sheets") {
                this.type_sent = "post";
            }
        }
        this.post = this.route.params.subscribe(params => {
            this.postId = params["postId"];
            this.postDetail(true, this.postId);
        });
        console.log(this.postId);
        // if(this.postId  == 47 || this.postId  == 100 || this.postId  == 102 || this.postId  == 104){
        // this.type_sent = 'post';
        // }
        this.videoBtnFn();
        this.docClick();
    }
    pdfClickOption1(pdf_image, options) {
        // this.document.viewDocument(`${pdf_image}/my.pdf`, 'application/pdf', options);
        //<Route path="" component={}/> this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)
        this.document.viewDocument(`${pdf_image}`, "application/pdf", options);
        // <Route path="" component = {} /> this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)
    }
    pdfClickOption(post_id) {
        console.log('Post Event Fire==>' + post_id);
        this.storage.get('pdf_local_url_' + post_id).then(data => {
            if (data) {
                console.log('Post Event Data ==>' + data);
                if (this.plt.is("ios")) {
                    //this.document.viewDocument(data, "application/pdf", {});
                    // let PDFURL =  'http://www.africau.edu/images/default/sample.pdf'
                    let PDFURL = data;
                    console.log('External URL urlthis Post Chandan ==> ' + PDFURL);
                    let target = "_blank";
                    const browser = this.iab.create(PDFURL, '_blank', 'location=no, zoom=no, toolbar=no, closebuttoncaption=Close, close.setText("Close")');
                    browser.on("loadstop").subscribe(event => {
                        // browser.insertCSS({ code: "body{color: red;" });
                    });
                    return false;
                }
                else {
                    this.fileOpener
                        .open(data, "application/pdf")
                        .then(() => console.log("File is opened"))
                        .catch(e => console.log("Error opening file", e));
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
    }
    docClick() {
        let self = this;
        jquery__WEBPACK_IMPORTED_MODULE_13__(document).on('click', 'a[href^=http], a[href^=https], a[href^=www]', function (e) {
            e.preventDefault();
            var $this = jquery__WEBPACK_IMPORTED_MODULE_13__(this);
            //var target = $this.data('inAppBrowser') || '_blank';
            let linkurl = $this.attr('href');
            let target = "_blank";
            console.log('a Tag Href = > ' + linkurl);
            self.OpenExtUrl(linkurl);
            // const browser = this.iab.create(URL, target);
            // browser.on("loadstop").subscribe(event => {
            //   // browser.insertCSS({ code: "body{color: red;" });
            // });
            // return false;
            // window.open($this.attr('href'), target, 'location=no');
        });
    }
    OpenExtUrl(HREFURL) {
        let hrefUrlNew = HREFURL;
        console.log('a Tag Click => ' + hrefUrlNew);
        let target = "_blank";
        const browser = this.iab.create(HREFURL, target, this.option);
        browser.on("loadstop").subscribe(event => {
            // browser.insertCSS({ code: "body{color: red;" });
        });
        return false;
    }
    open_out_url(urlthis) {
        console.log('External URL urlthis Post Chandan ==> ' + urlthis);
        let URL = urlthis;
        let target = "_blank";
        const browser = this.iab.create(URL, target);
        browser.on("loadstop").subscribe(event => {
            // browser.insertCSS({ code: "body{color: red;" });
        });
        return false;
    }
    openURL(postUrl) {
        console.log('External URL postUrl Chandan  Post ==> ' + postUrl);
        let postUrNew = postUrl;
        let target = "_blank";
        const browser = this.iab.create(postUrNew, target);
        browser.on("loadstop").subscribe(event => {
            // browser.insertCSS({ code: "body{color: red;" });
        });
        return false;
    }
    postDetail(refresh = false, postId) {
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            console.log('Post Details  Page =>');
            this.storage.get("PostDataSQLite").then(val => {
                this.result = val;
                console.log('Post Details  Data Offline => ' + JSON.stringify(this.result));
                for (let CatData of this.result) {
                    let postDataArray = CatData.data;
                    for (let newArray of postDataArray) {
                        let catIDNew = newArray.post_id;
                        if (catIDNew == postId) {
                            newArray.post_id;
                            this.PostTitle = newArray.post_title;
                            this.optionalTitle = newArray.detail_page_name;
                            this.postContent = newArray.post_content;
                            this.PostVideo = newArray.video_url;
                            this.PostID = newArray.post_id;
                            this.pdf_image = newArray.pdf_image;
                            if (this.PostVideo != "" && this.PostVideo != "undefined") {
                                this.show = true;
                            }
                            else {
                            }
                            if (this.pdf_image != "" && this.pdf_image != "undefined") {
                                this.showpdf = true;
                            }
                            else {
                            }
                        }
                    }
                }
            });
        }
        else {
            let definedthis = window.itemsini;
            let ctt = 0;
            for (let itemsingle of definedthis) {
                if (itemsingle["active"] == "active") {
                    window.itemsini[ctt]["name"] = "postdetail/" + postId;
                }
                ctt++;
            }
            this.apiservice.PostDetail(postId, "No").then(res => {
                this.result = res;
                if (this.result.code == "200") {
                    this.PostData = this.result.data;
                    for (let content of this.PostData) {
                        this.PostTitle = content.post_title;
                        this.optionalTitle = content.detail_page_name;
                        this.postContent = content.post_content;
                        this.PostVideo = content.video_url;
                        this.PostID = content.post_id;
                        this.pdf_image = content.pdf_image;
                        if (this.PostVideo != "" && this.PostVideo != "undefined") {
                            this.show = true;
                        }
                        else {
                        }
                        if (this.pdf_image != "" && this.pdf_image != "undefined") {
                            this.showpdf = true;
                        }
                        else {
                        }
                    }
                }
            }, error => {
                console.log("error");
                console.log(error);
                console.log("error");
            });
        }
    }
    /* goBack() {
      window.history.back();
    }*/
    goBackFull() {
        this.navCtrl.navigateBack("/home");
    }
    goBack(postId, type_sent) {
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            window.history.back();
        }
        else {
            if (window.location.href.indexOf("from_search") >= 0) {
                window.history.back();
            }
            else {
                this.apiservice.getParentPage(postId, type_sent).then(res => {
                    this.result = res;
                    if (this.result.code == "200") {
                        // console.log('getParentPage ' + this.result.ParentPage_id);
                        if (this.result.ParentPage_id == "home") {
                            //Home
                            this.navCtrl.navigateBack("/home");
                        }
                        else if (this.result.ParentPage_id == "video") {
                            //Videos
                            this.navCtrl.navigateBack("/video");
                        }
                        else if (this.result.ParentPage_id == "cheatsheets") {
                            //Cheat Sheet
                            this.navCtrl.navigateBack("/cheatsheets");
                        }
                        else if (this.result.ParentPage_id == "whichtest") {
                            //Which Test
                            this.navCtrl.navigateBack("/whichtest");
                        }
                        else {
                            this.navCtrl.navigateBack("subcategory/" + this.result.ParentPage_id);
                        }
                    }
                }, error => {
                    console.log("error");
                    console.log(error);
                    console.log("error");
                });
            }
        }
    }
    playBtn(postId) {
        this.navCtrl.navigateForward(["videopost/" + postId + "?from_search=yes"]);
    }
    loadData(refresh = false, refresher) {
        if (this.networkService.getCurrentNetworkStatus() == _providers_network__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Offline) {
            if (refresher) {
                refresher.target.complete();
                //this.LoaderShow = false;
            }
        }
        else {
            //this.postDetail(true, this.postId);
            this.apiservice.PostDetail(this.postId, "No").then(res => {
                this.result = res;
                if (this.result.code == "200") {
                    this.PostData = this.result.data;
                    for (let content of this.PostData) {
                        this.PostTitle = content.post_title;
                        this.optionalTitle = content.detail_page_name;
                        this.postContent = content.post_content;
                        this.PostVideo = content.video_url;
                        this.PostID = content.post_id;
                        if (this.PostVideo != "" && this.PostVideo != "undefined") {
                            this.show = true;
                        }
                        else {
                        }
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
    videoBtnFn() { }
};
PostdetailPage.ctorParameters = () => [
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
];
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



/***/ })

}]);
//# sourceMappingURL=pages-postdetail-postdetail-module-es2015.js.map