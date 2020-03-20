import * as tslib_1 from "tslib";
import { Platform } from '@ionic/angular';
import { Component, NgModule } from '@angular/core';
import { Apiservice } from '../../providers/apiservice';
import { NetworkService, ConnectionStatus } from '../../providers/network';
import { Storage } from '@ionic/storage';
// import { CacheService } from "ionic-cache";
import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
let PageOneModule = class PageOneModule {
};
PageOneModule = tslib_1.__decorate([
    NgModule({
        imports: [NavController, SharedModule]
    })
], PageOneModule);
export { PageOneModule };
let HomePage = class HomePage {
    constructor(apiservice, plt, networkService, storage, 
    //private cache: CacheService,
    loadingCtrl, navCtrl) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
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
            // this.loadData(true);
            this.homeListing(true);
        });
        // this.getMoments()
    }
    homeListing(refresh = false) {
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
            // alert('offline');
            this.storage.get('categories').then((val) => {
                this.result = val;
                if (this.result.code == "200") {
                    this.categories = this.result.data;
                    this.keys = Object.keys(this.categories);
                    var newArray = [];
                    let s = 1;
                    for (let catsPos of this.categories) {
                        var index = this.categories.findIndex(p => p.category_position == s);
                        //console.log(index);
                        this.ArrangeCategory.push(this.categories[index]);
                        s++;
                    }
                }
            });
        }
        else {
            console.log('Online');
            this.apiservice.homeListing_dataNewSQLite().then((res) => {
                let subCatUrl = 'get_posts_and_subcategories?category_id=';
                this.result = res;
                if (this.result.code == "200") {
                    this.categories = this.result.data;
                    this.keys = Object.keys(this.categories);
                    var newArray = [];
                    let s = 1;
                    for (let catsPos of this.categories) {
                        var index = this.categories.findIndex(p => p.category_position == s);
                        //console.log(index);
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
    openContact() {
        this.navCtrl.navigateForward(['contact/']);
    }
    loadData(refresh = false, refresher) {
        this.apiservice.homeListing_dataNewSQLite(refresh).then((res) => {
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
    updateUser(id) {
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.page.html',
        styleUrls: ['./home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Apiservice,
        Platform,
        NetworkService, Storage,
        LoadingController,
        NavController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map