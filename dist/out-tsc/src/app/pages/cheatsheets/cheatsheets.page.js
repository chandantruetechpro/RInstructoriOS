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
            console.log('pageID => ' + this.id);
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
                    console.log('this. CheatSheetPageSQLite categories' + this.categories);
                    let o = 1;
                    for (let getWhichTestData of CatData.data) {
                        console.log('getWhichTestData' + getWhichTestData.category_position);
                        var index = CatData.data.findIndex(p => p.category_position == o);
                        this.ArrangeCategory.push(CatData.data[index]);
                        o++;
                    }
                    console.log('this.ArrangeCategory' + this.ArrangeCategory);
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
                    //console.log('Type which ==> ' + JSON.stringify(this.SubCategories));
                    let s = 1;
                    for (let SubCats of this.SubCategories) {
                        // debugger;
                        // if(SubCats.category_image != '' &&  SubCats.category_image != 'undefined'){
                        // console.log('SubCats.subcategory_page_name ==> '+ SubCats.subcategory_page_name);
                        // let datanew = JSON.stringify(SubCats);
                        // console.log('SubCategories.category_image ==> '+ this.SubCategories.category_image);
                        if (typeof SubCats.category_image != 'undefined' && SubCats.category_image != '') {
                            console.log('Image Index ==> ' + SubCats.category_image);
                            this.CategoryImage = +s;
                            this.CategoryImageTrue = true;
                        }
                        s++;
                    }
                    for (let CatData of this.CategoryData) {
                        this.MainPageName = CatData.category_name;
                        this.OptionalPageName = CatData.category_page_name;
                    }
                    console.log('SubCategories');
                    console.log(this.SubCategories);
                    console.log('SubCategories');
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
        console.log('postId => CK ' + postId);
        // alert(postId);
        this.navCtrl.navigateForward(['postdetail/' + postId]);
    }
    playBtn(postId) {
        this.navCtrl.navigateForward(['videopost/' + postId]);
    }
    loadData(refresh = false, refresher) {
        // this.WhichTest(true);
        this.HomeSubFn(true, 79);
        this.apiservice.HomeCategory(79).then((res) => {
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