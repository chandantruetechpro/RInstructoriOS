import * as tslib_1 from "tslib";
import { Platform } from '@ionic/angular';
import { Component, } from '@angular/core';
import { Apiservice } from '../../../providers/apiservice';
import { NetworkService, ConnectionStatus } from '../../../providers/network';
import { Storage } from '@ionic/storage';
import { OfflineManagerService } from '../../../providers/offline-manager.service';
import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
let VideoPage = class VideoPage {
    constructor(apiservice, plt, networkService, storage, offlineManager, loadingCtrl, navCtrl) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.categories = [];
        this.SubCategories = [];
        this.users = [];
        this.page = 1;
        this.categoriesData = [];
        this.ArrangeCategory = [];
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            this.homeListing(true);
        });
    }
    homeListing(refresh = false) {
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
            this.storage.get('VideoPageSQLite').then((val) => {
                this.result = val;
                for (let CatData of this.result) {
                    this.categories = CatData.data;
                    let o = 1;
                    for (let getVideoData of CatData.data) {
                        var index = CatData.data.findIndex(p => p.category_position == o);
                        this.ArrangeCategory.push(CatData.data[index]);
                        o++;
                    }
                }
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
                }
            }, (error) => {
                console.log('error');
                console.log(error);
                console.log('error');
            });
        }
    }
    HomeSubFn(id) {
        this.navCtrl.navigateForward(['subcategory/' + id]);
    }
    loadData(refresh = false, refresher) {
        this.homeListing(true);
        this.apiservice.VideoData().then((res) => {
            this.result = res;
            this.categories = this.result;
            if (refresher) {
                refresher.target.complete();
            }
        }, (error) => {
            console.log('error');
            console.log(error);
            console.log('error');
        });
    }
};
VideoPage = tslib_1.__decorate([
    Component({
        selector: 'app-video',
        templateUrl: './video.page.html',
        styleUrls: ['./video.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Apiservice,
        Platform,
        NetworkService, Storage, OfflineManagerService,
        LoadingController,
        NavController])
], VideoPage);
export { VideoPage };
//# sourceMappingURL=video.page.js.map