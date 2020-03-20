import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//let apiUrl = 'http://demo.getyoursolutions.com/tabapp';
let apiUrl = 'http://182.74.186.138/takeacross';
import { NetworkService } from './network';
import { Storage } from '@ionic/storage';
import { OfflineManagerService } from './offline-manager.service';
const API_STORAGE_KEY = 'specialkey';
const API_URL = 'http://rinstructor.truetechpro.com/wp-json/webservices/v1/';
let Apiservice = class Apiservice {
    constructor(http, networkService, storage, offlineManager) {
        this.http = http;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
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
        console.log('API_Fire... Count');
    }
    /*************************** Home Page API Main Category Start Here ********************** */
    searching_callback(search_keyword) {
        return new Promise((resolve, reject) => {
            let self = this;
            console.log(API_URL + 'get_posts_by_search_keyword/?search_keyword=' + search_keyword);
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
            console.log('api fire');
            //debugger;
            return new Promise((resolve, reject) => {
                let self = this;
                this.http.get(API_URL + 'home')
                    .subscribe(res => {
                    resolve(res);
                    this.result = res;
                    //this.setLocalData('categories', res);
                    this.storage.set('categories', res);
                    console.log('Home API Main Fire ==> ' + this.result);
                    /* setTimeout(function () {
                       this.result = res;
                       console.log('Home API =>' + this.result);
                       if (this.result.code == "200") {
                         this.categories = this.result.data;
                         this.keys = Object.keys(this.categories);
                         var newArray = [];
                         let s = 1;
           
                         let j = 0
                         for (let catsPos of this.categories) {
                           let IDCat = catsPos.subcategory_id;
                           newArray.push(IDCat);
                         }
                         // self.HomeCategorySQLite(1);
                         //self.homeCategoryFn(1);
                         var promises = [];
                         // for (var i = 1; i < 1; i++) {
                         //   console.log('Api Hit ');
                         //  // alert(12);
                         //   var request = self.HomeCategorySQLite(newArray[i]);
                         //   promises.push(request);
                         //   self.HomeSubCateogeryDone = true;
                         // }
                         // $.when.apply(null, promises).done(function () {
                         //  // console.log('All done');
                         //   self.HomeSubCateogeryDone = true;
                         //  return false;
                         // })
                       }
           
                     });*/
                    self.HomeCategorySQLite(1);
                    self.CategoriesListsHeader();
                }, (err) => {
                    reject(err);
                });
            });
            this.APIStartEnd = true;
        }
    }
    /*************************** With Header API ***************************** */
    CategoriesListsHeader() {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json; charset=UTF-8');
            this.http.get(API_URL + 'all_cat_posts_home2')
                .subscribe(res => {
                resolve(res);
                // alert('sadfasdf');
                console.log('Header output' + res);
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
            // console.log(API_URL + 'get_posts_and_subcategories?category_id=' + id);
            this.http.get(API_URL + 'all_cat_posts_home2')
                //this.http.get('http://rinstructor.truetechpro.com/wp-json/webservices/v1/get_posts_and_subcategories?category_id=4')
                .subscribe(res => {
                resolve(res);
                this.result = res;
                console.log('Chandan API', res);
                this.SubCatArray.push(res);
                // if (self.HomeSubCateogeryDone == true) {
                //  alert('Hello');
                self.HomeSubCateogeryDone = false;
                //self.setLocalData('CategoryDataSQLite', '');
                self.storage.set('CategoryDataSQLite', '');
                //self.setLocalData('CategoryDataSQLite', this.SubCatArray);
                self.storage.set('CategoryDataSQLite', this.SubCatArray);
                self.storage.get('CategoryDataSQLite').then((val) => {
                    self.result = val;
                    // alert('121545'+self.result)
                    let newResult = self.result;
                    console.log('Chandan' + newResult);
                    // for (let thisback of newResult) {
                    //   console.log('Chandan' + thisback)
                    //   let categoryData = thisback.category_data;
                    //   self.finalVal.push(thisback);
                    // }
                    // for (let subCatData of self.finalVal) {
                    // }
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
            this.http.get(API_URL + 'get_posts_and_subcategories?category_id=' + id)
                //this.http.get('http://rinstructor.truetechpro.com/wp-json/webservices/v1/get_posts_and_subcategories?category_id=4')
                .subscribe(res => {
                resolve(res);
                this.result = res;
                //console.log('Sub Category API Online Data ==> '+this.result)
                //console.log('Sub Category API Online Data ==>'+ JSON.stringify(this.result));
                if (this.result.code == "200") {
                    this.SubCatPostArray = this.result.data;
                    console.log(JSON.stringify('SubCatID => ' + this.SubCatPostArray));
                    // this.keys = Object.keys(this.SubCatPostArray);
                    console.log('this.SubCatPostArray' + this.SubCatPostArray);
                    var newArray = [];
                    let s = 1;
                    let j = 0;
                    for (let catsPos of this.SubCatPostArray) {
                        let IDCat = catsPos.subcategory_id;
                        newArray.push(IDCat);
                    }
                    // this.PostDetailSQLite(1);
                    // var promises = [];
                    // for (var i = 0; i < newArray.length; i++) {
                    //   var request = self.PostDetailSQLite(newArray[i]);
                    //   promises.push(request);
                    // }
                    // $.when.apply(null, promises).done(function () {
                    //   console.log('All done');
                    //   self.HomeSubCateogeryDone = true;
                    //  return false;
                    // })
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
                // console.log('Post SQLite Data ==>'+ this.result )
                this.SubPostArray.push(res);
                console.log('Chandan Post API', res);
                self.HomeSubPostDone = false;
                //self.setLocalData('PostDataSQLite', '');
                self.storage.set('PostDataSQLite', '');
                //self.setLocalData('PostDataSQLite', this.SubPostArray);
                self.storage.set('PostDataSQLite', this.SubPostArray);
                self.storage.get('PostDataSQLite').then((val) => {
                    self.result = val;
                    console.log('self.result' + self.result);
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
    PostDetail(postId) {
        return new Promise((resolve, reject) => {
            this.http.get(API_URL + 'single_view?id=' + postId + '&type=post')
                //http://rinstructor.truetechpro.com/wp-json/webservices/v1/single_view?id=343&type=post
                .subscribe(res => {
                resolve(res);
                this.result = res;
                console.log('Post Online Data ==>' + this.result);
            }, (err) => {
                reject(err);
            });
        });
    }
    /*************************** Home Page API Post Details Content End Here ********************** */
    /*************************** Home Page API Post Details Video Start Here ********************** */
    VideoData() {
        return new Promise((resolve, reject) => {
            let self = this;
            this.http.get(API_URL + 'video')
                .subscribe(res => {
                resolve(res);
                // console.log('Chandan Video API', res)
                this.VideoPageArray.push(res);
                //self.setLocalData('VideoPageSQLite', '');
                self.storage.set('VideoPageSQLite', '');
                //self.setLocalData('VideoPageSQLite', this.VideoPageArray);
                self.storage.set('VideoPageSQLite', this.VideoPageArray);
                self.storage.get('VideoPageSQLite').then((val) => {
                    self.result = val;
                    let newResult = self.result;
                    console.log('Chandan Video ==> ' + newResult);
                    // for (let thisback of newResult) {
                    //   console.log('Chandan Video ==> ' + thisback)
                    //   let categoryData = thisback.category_data;
                    //   self.finalVal.push(thisback);
                    // }
                    // for (let subCatData of self.finalVal) {
                    // }
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
            this.http.get(API_URL + 'whichtest')
                .subscribe(res => {
                resolve(res);
                console.log('Chandan WhichTest API', res);
                this.WhichTestPageArray.push(res);
                //self.setLocalData('VideoPageSQLite', '');
                self.storage.set('WhichTestPageSQLite', '');
                //self.setLocalData('WhichTestPageSQLite', this.VideoPageArray);
                self.storage.set('WhichTestPageSQLite', this.VideoPageArray);
                self.storage.get('WhichTestPageSQLite').then((val) => {
                    self.result = val;
                    let newResult = self.result;
                    console.log('Chandan WhichTest ==>' + newResult);
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
            this.http.get(API_URL + 'socialmedia')
                .subscribe(res => {
                resolve(res);
                console.log('Chandan Contact API', res);
                this.ContactPageArray.push(res);
                //self.setLocalData('VideoPageSQLite', '');
                self.storage.set('ContactPageSQLite', '');
                //self.setLocalData('ContactPageSQLite', this.VideoPageArray);
                self.storage.set('ContactPageSQLite', this.ContactPageArray);
                self.storage.get('ContactPageSQLite').then((val) => {
                    self.result = val;
                    let newResult = self.result;
                    console.log('Chandan Contact ==> ' + newResult);
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
            this.http.get(API_URL + 'cheatsheets')
                .subscribe(res => {
                resolve(res);
                console.log('Chandan CheatSheet API', res);
                this.CheatSheetPageArray.push(res);
                //self.setLocalData('VideoPageSQLite', '');
                self.storage.set('CheatSheetPageSQLite', '');
                //self.setLocalData('CheatSheetPageSQLite', this.VideoPageArray);
                self.storage.set('CheatSheetPageSQLite', this.VideoPageArray);
                self.storage.get('CheatSheetPageSQLite').then((val) => {
                    self.result = val;
                    let newResult = self.result;
                    console.log('Chandan CheatSheet ==> ' + newResult);
                });
            }, (err) => {
                reject(err);
            });
        });
    }
};
Apiservice = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        NetworkService, Storage, OfflineManagerService])
], Apiservice);
export { Apiservice };
//# sourceMappingURL=apiservice.js.map