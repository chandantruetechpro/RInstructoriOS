import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Apiservice } from "../../../providers/apiservice";
import { Platform } from "@ionic/angular";
import { NetworkService, ConnectionStatus } from "../../../providers/network";
import { Storage } from "@ionic/storage";
import { OfflineManagerService } from "../../../providers/offline-manager.service";
// import { CacheService } from "ionic-cache";
import { LoadingController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/File/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
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
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
            this.storage.get("PostDataSQLite").then(val => {
                this.result = val;
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
        this.navCtrl.navigateForward("/home");
    }
    goBack(postId, type_sent) {
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
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
    playBtn(postId) {
        this.navCtrl.navigateForward(["videopost/" + postId + "?from_search=yes"]);
    }
    loadData(refresh = false, refresher) {
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
    videoBtnFn() { }
};
PostdetailPage = tslib_1.__decorate([
    Component({
        selector: "app-postdetail",
        templateUrl: "./postdetail.page.html",
        styleUrls: ["./postdetail.page.scss"]
    }),
    tslib_1.__metadata("design:paramtypes", [Apiservice,
        Platform,
        NetworkService,
        Storage,
        OfflineManagerService,
        LoadingController,
        ActivatedRoute,
        InAppBrowser,
        NavController,
        DocumentViewer,
        FileOpener,
        File,
        FileTransfer])
], PostdetailPage);
export { PostdetailPage };
//# sourceMappingURL=postdetail.page.js.map