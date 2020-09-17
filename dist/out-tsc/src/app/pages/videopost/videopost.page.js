import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Apiservice } from '../../../providers/apiservice';
import { Platform } from '@ionic/angular';
import { NetworkService, ConnectionStatus } from '../../../providers/network';
import { Storage } from '@ionic/storage';
import { OfflineManagerService } from '../../../providers/offline-manager.service';
// import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
// import { DocumentViewerOptions  } from '@ionic-native/document-viewer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
// import { CacheService } from "ionic-cache";
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
// const options: DocumentViewerOptions = {
// title: 'My PDF'
//}
let VideopostPage = class VideopostPage {
    constructor(apiservice, plt, networkService, storage, offlineManager, 
    // private cache: CacheService,
    loadingCtrl, route, navCtrl, sanitizer, fileOpener, document, iab // private document: DocumentViewer,
    ) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.fileOpener = fileOpener;
        this.document = document;
        this.iab = iab;
        this.PostData = [];
        this.options = {
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
    }
    ngOnInit() {
        // console.log('Post Detail Page');
        let n_id = this.plt.getQueryParam("postId");
        this.from_category = "No";
        if (window.location.href.indexOf("from_category") >= 0) {
            this.from_category = "Yes";
        }
        this.type_sent = "post";
        this.post = this.route.params.subscribe(params => {
            this.postId = params["postId"];
            // console.log('pageID =>  ngInit ==> ' + this.postId);
            this.postDetail(this.postId);
        });
    }
    open_out_url1(urlthis) {
        alert(4544545);
        let URL = urlthis;
        let target = "_blank";
        const browser = this.iab.create(URL, target);
        browser.on("loadstop").subscribe(event => {
            // browser.insertCSS({ code: "body{color: red;" });
        });
        return false;
    }
    open_out_url(urlthis) {
        console.log('External URL urlthis Chandan Video Post ==> ' + urlthis);
        let target = "_blank";
        this.iab.create(urlthis, target, this.options);
    }
    postDetail(postId) {
        let definedthis = window.itemsini;
        let ctt = 0;
        for (let itemsingle of definedthis) {
            if (itemsingle["active"] == "active") {
                window.itemsini[ctt]["name"] = "videopost/" + postId;
            }
            ctt++;
        }
        // debugger;
        this.apiservice.PostDetail(postId, this.from_category).then(res => {
            this.result = res;
            if (this.result.code == "200") {
                this.PostData = this.result.data;
                for (let content of this.PostData) {
                    if (content.pdf_image != "" && content.external_url == "") {
                        // this.document.viewDocument(content.pdf_image, 'application/pdf', options)
                        //window.open(content.pdf_image, "_system", "location=yes");
                        // console.log(content.pdf_image);
                        // this.ExternalURLFromAPI = content.pdf_image;
                        // this.open_out_url(this.ExternalURLFromAPI);
                        this.storage.get('pdf_local_url_' + postId).then(data => {
                            if (data) {
                                if (this.plt.is("ios")) {
                                    this.document.viewDocument(data, "application/pdf", {});
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
                            }
                        });
                        window.history.back();
                    }
                    else if (content.external_url != "" && content.video_url == "") {
                        this.ExternalURLFromAPI = content.external_url;
                        console.log(this.ExternalURLFromAPI);
                        this.external_url = "Yes";
                        this.open_out_url(this.ExternalURLFromAPI);
                        window.history.back();
                    }
                    else {
                        this.PostVideo = content.video_url;
                        this.videoPoster = content.video_poster;
                        this.external_url = "No";
                    }
                }
            }
        }, error => {
            console.log("error");
            console.log(error);
            console.log("error");
        });
    }
    /*goBack() {
      window.history.back();
    }*/
    goBack(postId, type_sent) {
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
            window.history.back();
        }
        else {
            if (window.location.href.indexOf("from_search") >= 0 ||
                window.location.href.indexOf("from_category") >= 0) {
                window.history.back();
            }
            else {
                this.apiservice.getParentPage(postId, type_sent).then(res => {
                    this.result = res;
                    if (this.result.code == "200") {
                        // console.log('getParentPage ' + this.result.ParentPage_id);
                        if (this.result.ParentPage_id == "home") {
                            //Home
                            this.navCtrl.navigateForward("/home");
                        }
                        else if (this.result.ParentPage_id == "video") {
                            //Videos
                            this.navCtrl.navigateForward("/video");
                        }
                        else if (this.result.ParentPage_id == "cheatsheets") {
                            //Cheat Sheet
                            this.navCtrl.navigateForward("/cheatsheets");
                        }
                        else if (this.result.ParentPage_id == "whichtest") {
                            //Which Test
                            this.navCtrl.navigateForward("/whichtest");
                        }
                        else {
                            this.navCtrl.navigateForward("subcategory/" + this.result.ParentPage_id);
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
    loadData(refresh = false, refresher) {
        this.apiservice.PostDetail(this.postId, this.from_category).then(res => {
            this.result = res;
            if (this.result.code == "200") {
                this.PostData = this.result.data;
                for (let content of this.PostData) {
                    if (content.pdf_image != "" && content.external_url == "") {
                        // this.document.viewDocument(content.pdf_image, 'application/pdf', options)
                        window.open(content.pdf_image, "_system", "location=yes");
                        // console.log(content.pdf_image);
                        // this.ExternalURLFromAPI = content.pdf_image;
                        // this.open_out_url(this.ExternalURLFromAPI);
                        window.history.back();
                    }
                    else if (content.external_url != "" && content.video_url == "") {
                        this.ExternalURLFromAPI = content.external_url;
                        console.log(this.ExternalURLFromAPI);
                        this.external_url = "Yes";
                        this.open_out_url(this.ExternalURLFromAPI);
                        window.history.back();
                    }
                    else {
                        this.PostVideo = content.video_url;
                        this.videoPoster = content.video_poster;
                        this.external_url = "No";
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
};
VideopostPage = tslib_1.__decorate([
    Component({
        selector: "app-videopost",
        templateUrl: "./videopost.page.html",
        styleUrls: ["./videopost.page.scss"]
    }),
    tslib_1.__metadata("design:paramtypes", [Apiservice,
        Platform,
        NetworkService,
        Storage,
        OfflineManagerService,
        LoadingController,
        ActivatedRoute,
        NavController,
        DomSanitizer,
        FileOpener,
        DocumentViewer,
        InAppBrowser // private document: DocumentViewer,
    ])
], VideopostPage);
export { VideopostPage };
//# sourceMappingURL=videopost.page.js.map