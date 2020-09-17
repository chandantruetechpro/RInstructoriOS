import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Apiservice } from '../../../providers/apiservice';
import { Platform } from '@ionic/angular';
import { NetworkService, ConnectionStatus } from '../../../providers/network';
import { Storage } from '@ionic/storage';
import { OfflineManagerService } from '../../../providers/offline-manager.service';
// import { CacheService } from "ionic-cache";
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DocumentViewer } from "@ionic-native/document-viewer/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/File/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
let SubcategoryPage = class SubcategoryPage {
    constructor(apiservice, plt, networkService, storage, offlineManager, loadingCtrl, route, navCtrl, document, fileOpener, file, ft) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.navCtrl = navCtrl;
        this.document = document;
        this.fileOpener = fileOpener;
        this.file = file;
        this.ft = ft;
        this.categories = [];
        this.description = [];
        this.SubCategories = [];
        this.CategoryData = [];
        this.users = [];
        this.page = 1;
        this.categoriesData = [];
        this.newDataArray = [];
        this.getData = [];
        this.finalVal = [];
        this.catDATA = [];
        this.ArrayData = [];
        this.getSubtCat = [];
        this.ckData = [];
        this.newArrayPost = [];
        this.SubCatData = [];
        this.PostData = [];
        this.CreateCatArray = [];
        this.CreatePostArray = [];
        this.show = false;
        this.CategoryImage = 0;
        this.CategoryImageTrue = false;
        const options = {
            title: "pdf_image"
        };
    }
    ngOnInit() {
        this.SubCategories = [];
        let joinArrayCat = {
            subcategory_name: "",
            subcategory_id: "",
            category_id: "",
            description: "",
            category_image: "",
            subcategory_page_name: "",
            type: ""
        };
        let CatCreateArray = {
            post_id: "",
            post_title: "",
            post_page_name: "",
            upload_image: "",
            featured_image: "",
            subcategory_page_name: "",
            type: "",
            video_url: ""
        };
        this.type_sent = "category";
        let n_id = this.plt.getQueryParam("id");
        this.sub = this.route.params.subscribe(params => {
            this.id = params["id"];
            this.HomeSubFn(true, this.id);
        });
    }
    HomeSubFn(refresh = false, id) {
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
            this.storage.get("CategoryDataSQLite").then(val => {
                this.result = val;
                for (let CatData of this.result) {
                    let dataArray = CatData.data;
                    let z = 0;
                    for (let newArray of dataArray) {
                        let catIDNew = newArray.subcategory_id;
                        if (catIDNew == id) {
                            this.PostData = newArray.posts;
                            this.description = newArray.description;
                            this.CategoryData = newArray.category_data;
                            this.MainPageName = newArray.subcategory_name;
                            this.OptionalPageName = newArray.subcategory_page_name;
                            let c = 1;
                            for (let SubCats of newArray.subcats) {
                                if (typeof SubCats.category_image != "undefined" &&
                                    SubCats.category_image != "") {
                                    this.CategoryImage = +c;
                                    this.CategoryImageTrue = true;
                                }
                                c++;
                            }
                            let joinArrayCat = {
                                subcategory_name: "",
                                subcategory_id: "",
                                category_id: "",
                                description: "",
                                category_image: "",
                                subcategory_page_name: "",
                                type: ""
                            };
                            this.CreateCatArray = [];
                            for (let mainCatData of newArray.subcats) {
                                let subcategory_name = mainCatData.subcategory_name;
                                let subcategory_id = mainCatData.subcategory_id;
                                let category_id = mainCatData.category_id;
                                let description = mainCatData.description;
                                let category_image = mainCatData.category_image;
                                let subcategory_page_name = mainCatData.subcategory_page_name;
                                let type = mainCatData.type;
                                let joinArrayCat = {
                                    subcategory_name: subcategory_name,
                                    subcategory_id: subcategory_id,
                                    category_id: category_id,
                                    description: description,
                                    category_image: category_image,
                                    subcategory_page_name: subcategory_page_name,
                                    type: type
                                };
                                this.CreateCatArray.push(joinArrayCat);
                            }
                            let CatCreateArray = {
                                post_id: "",
                                post_title: "",
                                post_page_name: "",
                                upload_image: "",
                                featured_image: "",
                                subcategory_page_name: "",
                                type: "",
                                video_url: ""
                            };
                            this.CreatePostArray = [];
                            for (let CatDataPost of this.PostData) {
                                let post_id = CatDataPost.post_id;
                                let post_content = CatDataPost.post_content;
                                let post_title = CatDataPost.post_title;
                                let post_page_name = CatDataPost.post_page_name;
                                let upload_image = CatDataPost.upload_image;
                                let featured_image = CatDataPost.featured_image;
                                let wps_subtitle = CatDataPost.wps_subtitle;
                                let type = CatDataPost.type;
                                let video_url = CatDataPost.video_url;
                                let pdf_image_for_subcategory = CatDataPost.pdf_image_for_subcategory;
                                let CatCreateArray = {
                                    post_id: post_id,
                                    post_content: post_content,
                                    post_title: post_title,
                                    post_page_name: post_page_name,
                                    upload_image: upload_image,
                                    featured_image: featured_image,
                                    wps_subtitle: wps_subtitle,
                                    pdf_image_for_subcategory: pdf_image_for_subcategory,
                                    type: type,
                                    video_url: video_url
                                };
                                this.CreatePostArray.push(CatCreateArray);
                            }
                        }
                        z++;
                    }
                    this.SubCategories = this.CreateCatArray.concat(this.CreatePostArray);
                }
            });
        }
        else {
            let definedthis = window.itemsini;
            let ctt = 0;
            for (let itemsingle of definedthis) {
                if (itemsingle["active"] == "active") {
                    window.itemsini[ctt]["name"] = "subcategory/" + id;
                    window.itemsini[ctt]["active"] = "active";
                }
                ctt++;
            }
            this.apiservice.HomeCategory(id).then(res => {
                this.result = res;
                if (this.result.code == "200") {
                    this.SubCategories = this.result.data;
                    this.description = this.result.description;
                    this.CategoryData = this.result.category_data;
                    let s = 1;
                    for (let SubCats of this.SubCategories) {
                        if (typeof SubCats.category_image != "undefined" &&
                            SubCats.category_image != "") {
                            this.CategoryImage = +s;
                            this.CategoryImageTrue = true;
                            // this.type_sent = 'post';
                        }
                        s++;
                    }
                    for (let CatData of this.CategoryData) {
                        this.MainPageName = CatData.category_name;
                        this.OptionalPageName = CatData.category_page_name;
                        if (typeof CatData.category_video_url != "undefined" &&
                            CatData.category_video_url != "") {
                            this.show = true;
                            this.categoryvideourl = CatData.category_video_url;
                        }
                        else {
                            this.categoryvideourl = "";
                        }
                    }
                    console.log(this.categoryvideourl);
                }
            }, error => {
                console.log("error");
                console.log(error);
                console.log("error");
            });
        }
    }
    pdfClickOption(post_id) {
        console.log('Sub Category Event Fire==>' + post_id);
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
    /*goBack() {
          
      window.history.back();
    }*/
    goBack(id, type_sent) {
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
            window.history.back();
        }
        else {
            this.apiservice.getParentPage(id, type_sent).then(res => {
                this.result = res;
                if (this.result.code == "200") {
                    console.log("getParentPage " + this.result.ParentPage_id);
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
    HomeSubInnFn(idsub) {
        this.navCtrl.navigateForward(["subcategory/" + idsub]);
    }
    HomePostDetail(postId) {
        this.navCtrl.navigateForward(["postdetail/" + postId]);
    }
    playBtn(postId, from) {
        if (from == "from_post") {
            this.navCtrl.navigateForward(["videopost/" + postId]);
        }
        else {
            this.navCtrl.navigateForward([
                "videopost/" + postId + "?from_category=yes"
            ]);
            // this.navCtrl.navigateForward(['videopost/' + postId]);
        }
    }
    loadData(refresh = false, refresher) {
        this.apiservice.HomeCategory(this.id).then(res => {
            this.result = res;
            if (this.result.code == "200") {
                this.SubCategories = this.result.data;
                this.description = this.result.description;
                this.CategoryData = this.result.category_data;
                let s = 1;
                for (let SubCats of this.SubCategories) {
                    if (typeof SubCats.category_image != "undefined" &&
                        SubCats.category_image != "") {
                        this.CategoryImage = +s;
                        this.CategoryImageTrue = true;
                        // this.type_sent = 'post';
                    }
                    s++;
                }
                for (let CatData of this.CategoryData) {
                    this.MainPageName = CatData.category_name;
                    this.OptionalPageName = CatData.category_page_name;
                    if (typeof CatData.category_video_url != "undefined" &&
                        CatData.category_video_url != "") {
                        this.show = true;
                        this.categoryvideourl = CatData.category_video_url;
                    }
                    else {
                        this.categoryvideourl = "";
                    }
                }
                console.log(this.categoryvideourl);
                console.log(this.SubCategories);
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
SubcategoryPage = tslib_1.__decorate([
    Component({
        selector: "app-subcategory",
        templateUrl: "./subcategory.page.html",
        styleUrls: ["./subcategory.page.scss"]
    }),
    tslib_1.__metadata("design:paramtypes", [Apiservice,
        Platform,
        NetworkService,
        Storage,
        OfflineManagerService,
        LoadingController,
        ActivatedRoute,
        NavController,
        DocumentViewer,
        FileOpener,
        File,
        FileTransfer])
], SubcategoryPage);
export { SubcategoryPage };
//# sourceMappingURL=subcategory.page.js.map