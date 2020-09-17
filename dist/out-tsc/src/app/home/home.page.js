import * as tslib_1 from "tslib";
import { Platform } from '@ionic/angular';
import { Component, NgModule } from '@angular/core';
import { Apiservice } from '../../providers/apiservice';
import { NetworkService, ConnectionStatus } from '../../providers/network';
import { Storage } from '@ionic/storage';
// import { CacheService } from "ionic-cache";
import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/File/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { SharedModule } from '../shared/shared.module';
let HomePage = class HomePage {
    constructor(apiservice, plt, networkService, storage, loadingCtrl, navCtrl, fileOpener, file, ft) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.fileOpener = fileOpener;
        this.file = file;
        this.ft = ft;
        this.categories = [];
        this.SubCategories = [];
        this.users = [];
        this.page = 1;
        this.categoriesData = [];
        this.ArrangeCategory = [];
        this.classApplied = false;
        this.show = true;
        this.buttonName = "Show";
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            this.homeListing(true);
        });
    }
    homeListing(refresh = false) {
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
            this.storage.get("categories").then(val => {
                this.result = val;
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
            this.apiservice.homeListing_dataNewSQLite().then(res => {
                let subCatUrl = "get_posts_and_subcategories?category_id=";
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
                }
            }, error => {
                console.log("error");
                console.log(error);
                console.log("error");
            });
            this.apiservice.getAllpostshavingpdfs().then(res => {
                this.result = res;
                if (this.result.code == "200") {
                    this.pdfposts = this.result.data;
                    console.log(this.pdfposts);
                    for (let newArray of this.pdfposts) {
                        let pdf_image = newArray.pdf_image;
                        let post_id = newArray.post_id;
                        let post_title = newArray.post_title;
                        let newpdfname = post_title + '.pdf';
                        const transfer = this.ft.create();
                        this.storage.get('pdf_local_url_' + post_id).then(data => {
                            if (data) {
                                console.log('Already Stored PDF Files = > ' + JSON.stringify(data));
                            }
                            else {
                                transfer.download(pdf_image, this.file.dataDirectory + newpdfname).then((entry) => {
                                    console.log('download complete: ' + entry.toURL());
                                    this.storage.set('pdf_local_url_' + post_id, entry.toURL());
                                }, (error) => {
                                    console.log('pdf save error');
                                    console.log(error);
                                });
                            }
                        });
                    }
                }
            }, error => {
                console.log("error");
                console.log(error);
                console.log("error");
            });
        }
        // console.log(
        //   "this.file.applicationStorageDirectory" +
        //     this.file.applicationStorageDirectory
        // );
    }
    HomeSubFn(id) {
        this.navCtrl.navigateForward(["subcategory/" + id]);
    }
    openContact() {
        this.navCtrl.navigateForward(["contact/"]);
    }
    loadData(refresh = false, refresher) {
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
    updateUser(id) { }
};
HomePage = tslib_1.__decorate([
    NgModule({
        imports: [NavController, SharedModule]
    }),
    Component({
        selector: "app-home",
        templateUrl: "./home.page.html",
        styleUrls: ["./home.page.scss"]
    }),
    tslib_1.__metadata("design:paramtypes", [Apiservice,
        Platform,
        NetworkService,
        Storage,
        LoadingController,
        NavController,
        FileOpener,
        File,
        FileTransfer])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map