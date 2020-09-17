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
let CheatsheetsPage = class CheatsheetsPage {
    constructor(apiservice, plt, networkService, storage, offlineManager, 
    // private cache: CacheService,
    loadingCtrl, route, navCtrl) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.navCtrl = navCtrl;
        this.categories = [];
        this.description = [];
        this.SubCategories = [];
        this.CategoryData = [];
        this.users = [];
        this.page = 1;
        this.categoriesData = [];
        this.ArrangeCategory = [];
        this.CategoryImage = 0;
        this.CategoryImageTrue = false;
    }
    ngOnInit() {
        let n_id = this.plt.getQueryParam("id");
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.HomeSubFn(true, 79);
        });
    }
    //HomeSubFn(id) {
    HomeSubFn(refresh = false, id) {
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
            this.storage.get('CheatSheetPageSQLite').then((val) => {
                this.result = val;
                for (let CatData of this.result) {
                    this.categories = CatData.data;
                    let o = 1;
                    for (let getWhichTestData of CatData.data) {
                        var index = CatData.data.findIndex(p => p.category_position == o);
                        this.ArrangeCategory.push(CatData.data[index]);
                        o++;
                    }
                }
            });
        }
        else {
            this.apiservice.HomeCategory(id).then((res) => {
                this.result = res;
                if (this.result.code == "200") {
                    this.SubCategories = this.result.data;
                    this.description = this.result.description;
                    this.CategoryData = this.result.category_data;
                    let s = 1;
                    for (let SubCats of this.SubCategories) {
                        if (typeof SubCats.category_image != 'undefined' && SubCats.category_image != '') {
                            this.CategoryImage = +s;
                            this.CategoryImageTrue = true;
                        }
                        s++;
                    }
                    for (let CatData of this.CategoryData) {
                        this.MainPageName = CatData.category_name;
                        this.OptionalPageName = CatData.category_page_name;
                    }
                }
            }, (error) => {
                console.log('error');
                console.log(error);
                console.log('error');
            });
        }
    }
    goBack() {
        window.history.back();
    }
    HomeSubInnFn(idsub) {
        this.navCtrl.navigateForward(['subcategory/' + idsub]);
    }
    HomePostDetail(postId) {
        this.navCtrl.navigateForward(['postdetail/' + postId]);
    }
    playBtn(postId) {
        this.navCtrl.navigateForward(['videopost/' + postId]);
    }
    loadData(refresh = false, refresher) {
        this.apiservice.HomeCategory(this.id).then((res) => {
            this.result = res;
            if (this.result.code == "200") {
                this.SubCategories = this.result.data;
                this.description = this.result.description;
                this.CategoryData = this.result.category_data;
                let s = 1;
                for (let SubCats of this.SubCategories) {
                    if (typeof SubCats.category_image != 'undefined' && SubCats.category_image != '') {
                        this.CategoryImage = +s;
                        this.CategoryImageTrue = true;
                    }
                    s++;
                }
                for (let CatData of this.CategoryData) {
                    this.MainPageName = CatData.category_name;
                    this.OptionalPageName = CatData.category_page_name;
                }
            }
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
CheatsheetsPage = tslib_1.__decorate([
    Component({
        selector: 'app-cheatsheets',
        templateUrl: './cheatsheets.page.html',
        styleUrls: ['./cheatsheets.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Apiservice,
        Platform,
        NetworkService, Storage, OfflineManagerService,
        LoadingController,
        ActivatedRoute,
        NavController])
], CheatsheetsPage);
export { CheatsheetsPage };
//# sourceMappingURL=cheatsheets.page.js.map