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
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// import { AppAvailability } from '@ionic-native/app-availability';
let ContactPage = class ContactPage {
    constructor(apiservice, plt, networkService, storage, offlineManager, 
    // private cache: CacheService,
    loadingCtrl, route, navCtrl, iab) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.categories = [];
        this.description = [];
        this.SubCategories = [];
        this.CategoryData = [];
        this.users = [];
        this.page = 1;
        this.categoriesData = [];
        this.CategoryImage = 0;
        this.CategoryImageTrue = false;
    }
    ngOnInit() {
        this.HomeSubFn(true);
    }
    HomeSubFn(refresh = false) {
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
            this.storage.get('ContactPageSQLite').then((val) => {
                this.result = val;
                for (let CatData of this.result) {
                    this.SubCategories = CatData.data;
                    // console.log('CatData.data'+CatData.data);
                    this.description = CatData.description;
                    this.CategoryData = CatData.category_data;
                    console.log('this. ContactPageSQLite categories' + JSON.stringify(this.SubCategories));
                    let o = 1;
                    for (let getWhichTestData of CatData.data) {
                        o++;
                    }
                }
            });
        }
        else {
            //HomeSubFn() {
            this.apiservice.ContactData().then((res) => {
                this.result = res;
                if (this.result.code == "200") {
                    this.SubCategories = this.result.data;
                    this.description = this.result.description;
                    this.CategoryData = this.result.category_data;
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
    clickUrl(url) {
        // alert(url);
        const browser = this.iab.create(url);
        // alert(browser);
    }
    openEmail(email) {
        if (this.plt.is('ios')) {
            alert('ios');
            window.open('googlegmail:///co?to=' + email + '&subject=' + 'subject' + '&body=', '_system');
        }
        ;
        // if (this.plt.is('android')) {
        //   alert('android')
        //   window.open('mailto:' + email);
        // };
        this.plt.ready().then(() => {
            window.open('mailto:' + email, "_system");
        });
    }
    goBack() {
        window.history.back();
    }
    openTwitter(twitter) {
        let app;
        if (this.plt.is('ios')) {
            app = 'twitter://';
        }
        else if (this.plt.is('android')) {
            app = 'com.twitter.android';
        }
        else {
            const browser = this.iab.create(twitter + name, '_system');
            return;
        }
        // this.appAvailability.check(app)
        //   .then(
        //     (yes: boolean) => {
        //       console.log(app + ' is available')
        //       // Success
        //       // App exists
        //       const browser: InAppBrowserObject = this.iab.create(twitter + name, '_system');
        //     },
        //     (no: boolean) => {
        //       // Error
        //       // App does not exist
        //       // Open Web URL
        //       const browser: InAppBrowserObject = this.iab.create(twitter + name, '_system');
        //     }
        //   );
    }
    openURL(weburl) {
        let URL = weburl;
        let target = "_blank";
        const browser = this.iab.create(URL, target);
        browser.on('loadstop').subscribe(event => {
            browser.insertCSS({ code: "body{color: red;" });
        });
        //browser.close();
    }
    loadData(refresh = false, refresher) {
        // this.WhichTest(true);
        this.HomeSubFn(true);
        this.apiservice.ContactData().then((res) => {
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
ContactPage = tslib_1.__decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.page.html',
        styleUrls: ['./contact.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Apiservice,
        Platform,
        NetworkService, Storage, OfflineManagerService,
        LoadingController,
        ActivatedRoute,
        NavController,
        InAppBrowser])
], ContactPage);
export { ContactPage };
//# sourceMappingURL=contact.page.js.map