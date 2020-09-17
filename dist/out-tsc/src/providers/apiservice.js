import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
//let apiUrl = 'http://demo.getyoursolutions.com/tabapp';
let apiUrl = 'http://182.74.186.138/takeacross';
import { NetworkService } from './network';
import { Storage } from '@ionic/storage';
import { OfflineManagerService } from './offline-manager.service';
const API_STORAGE_KEY = 'specialkey';
const API_URL = 'http://rinstructor.truetechpro.com/wp-json/webservices/v1/';
let Apiservice = class Apiservice {
    constructor(http, networkService, storage, offlineManager, httpPlugin) {
        this.http = http;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
        this.httpPlugin = httpPlugin;
        this.URL = 'https://devdactic.com/wp-json/wp/v2/';
        this.TotalCat = null;
        this.totalPosts = null;
        this.data = [];
        this.stopLoop = true;
        this.ResetLoop = true;
        this.HomeSubCateogeryDone = false;
        this.HomeSubPostDone = false;
        this.SubCatArray = [];
        this.SubPostArray = [];
        this.finalVal = [];
        this.finalValPost = [];
        this.SubCatPostArray = [];
        this.VideoPageArray = [];
        this.WhichTestPageArray = [];
        this.ContactPageArray = [];
        this.CheatSheetPageArray = [];
        this.APIStartEnd = false;
        httpPlugin.setServerTrustMode("pinned");
        //Clear old cookies
        httpPlugin.clearCookies();
    }
    /*************************** Home Page API Main Category Start Here ********************** */
    searching_callback(search_keyword) {
        return new Promise((resolve, reject) => {
            let self = this;
            this.http.get(API_URL + 'get_posts_by_search_keyword/?search_keyword=' + search_keyword)
                .subscribe(res => {
                resolve(res);
                if (this.result.code == "200") {
                    this.result = res;
                }
                else {
                    this.result = 'No Posts';
                }
            }, (err) => {
                reject(err);
            });
        });
    }
    homeListing_dataNewSQLite(refresh = false, refresher) {
        if (this.APIStartEnd == false) {
            //debugger;
            return new Promise((resolve, reject) => {
                let self = this;
                this.http.get(API_URL + 'home?' + Date.now())
                    .subscribe(res => {
                    resolve(res);
                    this.result = res;
                    //this.setLocalData('categories', res);
                    this.storage.set('categories', res);
                    self.HomeCategorySQLite(1);
                    self.CategoriesListsHeader();
                }, (err) => {
                    reject(err);
                });
            });
            this.APIStartEnd = true;
        }
    }
    getAllpostshavingpdfs(refresh = false, refresher) {
        return new Promise((resolve, reject) => {
            let self = this;
            this.http.get(API_URL + 'getAllpostshavingpdfs?' + Date.now())
                .subscribe(res => {
                resolve(res);
                this.result = res;
            }, (err) => {
                reject(err);
            });
        });
    }
    /*************************** With Header API ***************************** */
    CategoriesListsHeader() {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json; charset=UTF-8');
            this.http.get(API_URL + 'all_cat_posts_home2?' + Date.now())
                .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    /*************************** Home Page API Main Category End Here ********************** */
    /*************************** Home Page API Sub Category Start Here ********************** */
    //homeCategoryFn(id) {
    HomeCategorySQLite(id) {
        return new Promise((resolve, reject) => {
            let self = this;
            this.http.get(API_URL + 'all_cat_posts_home2')
                //this.http.get('http://rinstructor.truetechpro.com/wp-json/webservices/v1/get_posts_and_subcategories?category_id=4')
                .subscribe(res => {
                resolve(res);
                this.result = res;
                this.SubCatArray.push(res);
                self.HomeSubCateogeryDone = false;
                self.storage.set('CategoryDataSQLite', '');
                self.storage.set('CategoryDataSQLite', this.SubCatArray);
                self.storage.get('CategoryDataSQLite').then((val) => {
                    self.result = val;
                    let newResult = self.result;
                });
                // self.HomeSubCateogeryDone = false;
                self.PostDetailSQLite(1);
                self.VideoData();
                // }
                self.stopLoop = true;
                self.ResetLoop = true;
            }, (err) => {
                reject(err);
            });
        });
    }
    //}
    HomeCategory(id) {
        return new Promise((resolve, reject) => {
            let self = this;
            this.http.get(API_URL + 'get_posts_and_subcategories?category_id=' + id + '?time=' + Date.now())
                //this.http.get('http://rinstructor.truetechpro.com/wp-json/webservices/v1/get_posts_and_subcategories?category_id=4')
                .subscribe(res => {
                resolve(res);
                this.result = res;
                if (this.result.code == "200") {
                    this.SubCatPostArray = this.result.data;
                    // this.keys = Object.keys(this.SubCatPostArray);
                    var newArray = [];
                    let s = 1;
                    let j = 0;
                    for (let catsPos of this.SubCatPostArray) {
                        let IDCat = catsPos.subcategory_id;
                        newArray.push(IDCat);
                    }
                }
            }, (err) => {
                reject(err);
            });
        });
    }
    /*************************** Home Page API Sub Category End Here ********************** */
    /*************************** Home Page API Post Details SQL Lite  Content Start Here ********************** */
    PostDetailSQLite(postId) {
        // alert(123456)
        return new Promise((resolve, reject) => {
            this.http.get(API_URL + 'get_all_posts')
                //this.http.get(API_URL + 'single_view?id=' + postId + '&type=post')
                //http://rinstructor.truetechpro.com/wp-json/webservices/v1/single_view?id=343&type=post
                .subscribe(res => {
                let self = this;
                resolve(res);
                this.result = res;
                this.SubPostArray.push(res);
                self.HomeSubPostDone = false;
                //self.setLocalData('PostDataSQLite', '');
                self.storage.set('PostDataSQLite', '');
                //self.setLocalData('PostDataSQLite', this.SubPostArray);
                self.storage.set('PostDataSQLite', this.SubPostArray);
                self.storage.get('PostDataSQLite').then((val) => {
                    self.result = val;
                    let newResult = self.result;
                    // for (let thisback of newResult) {
                    // }
                    // for (let subCatData of self.finalValPost) {
                    // }
                });
                self.HomeSubPostDone = false;
                //8  }
            }, (err) => {
                reject(err);
            });
        });
    }
    /*************************** Home Page API Post Details SQL Lite  Content END Here ********************** */
    /*************************** Home Page API Post Details Content Start Here ********************** */
    PostDetail(postId, from_cat) {
        if (from_cat == 'Yes') {
            return new Promise((resolve, reject) => {
                this.http.get(API_URL + 'single_view?id=' + postId + '&type=category&time=' + Date.now())
                    .subscribe(res => {
                    resolve(res);
                    this.result = res;
                }, (err) => {
                    reject(err);
                });
            });
        }
        else {
            return new Promise((resolve, reject) => {
                this.http.get(API_URL + 'single_view?id=' + postId + '&type=post&time=' + Date.now())
                    //http://rinstructor.truetechpro.com/wp-json/webservices/v1/single_view?id=343&type=post
                    .subscribe(res => {
                    resolve(res);
                    this.result = res;
                    console.log(this.result);
                }, (err) => {
                    reject(err);
                });
            });
        }
    }
    /*************************** Home Page API Post Details Content End Here ********************** */
    /*************************** Home Page API Post Details Video Start Here ********************** */
    VideoData() {
        return new Promise((resolve, reject) => {
            let self = this;
            this.http.get(API_URL + 'video?' + Date.now())
                .subscribe(res => {
                resolve(res);
                this.VideoPageArray.push(res);
                //self.setLocalData('VideoPageSQLite', '');
                self.storage.set('VideoPageSQLite', '');
                //self.setLocalData('VideoPageSQLite', this.VideoPageArray);
                self.storage.set('VideoPageSQLite', this.VideoPageArray);
                self.storage.get('VideoPageSQLite').then((val) => {
                    self.result = val;
                    let newResult = self.result;
                });
                self.WhichTest();
            }, (err) => {
                reject(err);
            });
        });
    }
    /*************************** Home Page API Post Details Video End Here ********************** */
    WhichTest() {
        return new Promise((resolve, reject) => {
            let self = this;
            this.http.get(API_URL + 'whichtest?' + Date.now())
                .subscribe(res => {
                resolve(res);
                this.WhichTestPageArray.push(res);
                //self.setLocalData('VideoPageSQLite', '');
                self.storage.set('WhichTestPageSQLite', '');
                //self.setLocalData('WhichTestPageSQLite', this.VideoPageArray);
                self.storage.set('WhichTestPageSQLite', this.VideoPageArray);
                self.storage.get('WhichTestPageSQLite').then((val) => {
                    self.result = val;
                    let newResult = self.result;
                });
                self.ContactData();
            }, (err) => {
                reject(err);
            });
        });
    }
    ContactData() {
        return new Promise((resolve, reject) => {
            let self = this;
            this.http.get(API_URL + 'socialmedia?' + Date.now())
                .subscribe(res => {
                resolve(res);
                this.ContactPageArray.push(res);
                //self.setLocalData('VideoPageSQLite', '');
                self.storage.set('ContactPageSQLite', '');
                //self.setLocalData('ContactPageSQLite', this.VideoPageArray);
                self.storage.set('ContactPageSQLite', this.ContactPageArray);
                self.storage.get('ContactPageSQLite').then((val) => {
                    self.result = val;
                    let newResult = self.result;
                });
                self.CheatSheet();
            }, (err) => {
                reject(err);
            });
        });
    }
    CheatSheet() {
        return new Promise((resolve, reject) => {
            let self = this;
            this.http.get(API_URL + 'cheatsheets?' + Date.now())
                .subscribe(res => {
                resolve(res);
                this.CheatSheetPageArray.push(res);
                //self.setLocalData('VideoPageSQLite', '');
                self.storage.set('CheatSheetPageSQLite', '');
                //self.setLocalData('CheatSheetPageSQLite', this.VideoPageArray);
                self.storage.set('CheatSheetPageSQLite', this.VideoPageArray);
                self.storage.get('CheatSheetPageSQLite').then((val) => {
                    self.result = val;
                    let newResult = self.result;
                });
            }, (err) => {
                reject(err);
            });
        });
    }
    getParentPage(id, type_sent) {
        return new Promise((resolve, reject) => {
            let self = this;
            console.log(API_URL + 'getParentPage?id_sent=' + id + '&type_sent=' + type_sent);
            this.http.get(API_URL + 'getParentPage?id_sent=' + id + '&type_sent=' + type_sent)
                .subscribe(res => {
                resolve(res);
                this.result = res;
            }, (err) => {
                reject(err);
            });
        });
    }
};
Apiservice = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        NetworkService, Storage, OfflineManagerService,
        HTTP])
], Apiservice);
export { Apiservice };
//# sourceMappingURL=apiservice.js.map