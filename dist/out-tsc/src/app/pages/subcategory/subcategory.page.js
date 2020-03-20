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
let SubcategoryPage = class SubcategoryPage {
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
        this.CategoryImage = 0;
        this.CategoryImageTrue = false;
    }
    ngOnInit() {
        this.SubCategories = [];
        let joinArrayCat = { 'subcategory_name': '', 'subcategory_id': '', 'category_id': '', 'description': '', 'category_image': '', 'subcategory_page_name': '', 'type': '' };
        let CatCreateArray = { 'post_id': '', 'post_title': '', 'post_page_name': '', 'upload_image': '', 'featured_image': '', 'subcategory_page_name': '', 'type': '', 'video_url': '' };
        let n_id = this.plt.getQueryParam("id");
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log('pageID => ' + this.id);
            this.HomeSubFn(true, this.id);
            // console.log('Hello return page 1');
        });
    }
    HomeSubFn(refresh = false, id) {
        // alert(this.networkService.getCurrentNetworkStatus());
        // alert(ConnectionStatus.Offline);
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
            this.storage.get('CategoryDataSQLite').then((val) => {
                // debugger;
                this.result = val;
                //  console.log('this.result' + this.result.length);
                //console.log(this.result);
                console.log('this.result' + this.result);
                for (let CatData of this.result) {
                    let dataArray = CatData.data;
                    // console.log(dataArray);
                    // let a = dataArray.filter((key) => key.subcategory_id === 99);
                    // console.log('Return Filter A =>' + JSON.stringify(a));
                    //  let   uniqueprice = dataArray
                    //       .map(function (product) {
                    //         if (product.subcategory_id == id) {
                    //           return product.key;
                    //         }
                    //       })
                    //     console.log(uniqueprice);
                    // return( dataArray.filter(data => data.subcategory_id == id));
                    let z = 0;
                    for (let newArray of dataArray) {
                        let catIDNew = newArray.subcategory_id;
                        // if (newArray[z].subcategory_id === id) {
                        //   // Found it
                        //   z = newArray;
                        //   break;
                        // }
                        // console.log('Sub Cat ID ==> ' + newArray.subcategory_id);
                        if (catIDNew == id) {
                            //this.SubCategories = newArray.subcats;
                            console.log('Sub Cat ID ==> ' + catIDNew);
                            this.PostData = newArray.posts;
                            this.description = newArray.description;
                            this.CategoryData = newArray.category_data;
                            this.MainPageName = newArray.subcategory_name;
                            this.OptionalPageName = newArray.subcategory_page_name;
                            // console.log('this.PostData' + this.PostData);
                            let c = 1;
                            for (let SubCats of newArray.subcats) {
                                console.log('Loop ==>' + SubCats.category_image);
                                if (typeof SubCats.category_image != 'undefined' && SubCats.category_image != '') {
                                    console.log('Image Index ==> ' + SubCats.category_image);
                                    this.CategoryImage = +c;
                                    this.CategoryImageTrue = true;
                                }
                                c++;
                            }
                            //let fruitArray = []
                            let joinArrayCat = { 'subcategory_name': '', 'subcategory_id': '', 'category_id': '', 'description': '', 'category_image': '', 'subcategory_page_name': '', 'type': '' };
                            this.CreateCatArray = [];
                            for (let mainCatData of newArray.subcats) {
                                let subcategory_name = mainCatData.subcategory_name;
                                let subcategory_id = mainCatData.subcategory_id;
                                let category_id = mainCatData.category_id;
                                let description = mainCatData.description;
                                let category_image = mainCatData.category_image;
                                let subcategory_page_name = mainCatData.subcategory_page_name;
                                let type = mainCatData.type;
                                console.log('subcategory_id' + subcategory_id);
                                let joinArrayCat = { 'subcategory_name': subcategory_name, 'subcategory_id': subcategory_id, 'category_id': category_id, 'description': description, 'category_image': category_image, 'subcategory_page_name': subcategory_page_name, 'type': type };
                                this.CreateCatArray.push(joinArrayCat);
                                // console.log('this.CreateCatArray' + JSON.stringify(mainCatData));
                            }
                            let CatCreateArray = { 'post_id': '', 'post_title': '', 'post_page_name': '', 'upload_image': '', 'featured_image': '', 'subcategory_page_name': '', 'type': '', 'video_url': '' };
                            this.CreatePostArray = [];
                            for (let CatDataPost of this.PostData) {
                                let post_id = CatDataPost.post_id;
                                let post_title = CatDataPost.post_title;
                                let post_page_name = CatDataPost.post_page_name;
                                let upload_image = CatDataPost.upload_image;
                                let featured_image = CatDataPost.featured_image;
                                let wps_subtitle = CatDataPost.wps_subtitle;
                                let type = CatDataPost.type;
                                let video_url = CatDataPost.video_url;
                                //console.log('CatData' + JSON.stringify(CatDataPost));
                                // console.log('post_title' + post_title);
                                let CatCreateArray = { 'post_id': post_id, 'post_title': post_title, 'post_page_name': post_page_name, 'upload_image': upload_image, 'featured_image': featured_image, 'subcategory_page_name': wps_subtitle, 'type': type, 'video_url': video_url };
                                this.CreatePostArray.push(CatCreateArray);
                                //CreatePostArray
                            }
                            // console.log('this.CreateCatArray' + JSON.stringify(this.CreateCatArray));
                            // console.log('this.CreatePostArray' + JSON.stringify(this.CreatePostArray));
                            // console.log('this.CreateCatArray' + this.CreateCatArray);
                            // console.log('this.CreatePostArray' + this.CreatePostArray);
                            // console.log('this.SubCategories' + this.SubCategories);
                            // for (let CatData of newArray.subcats) {
                            //   this.MainPageName = CatData.category_name;
                            //   this.OptionalPageName = CatData.category_page_name;
                            // }
                        }
                        z++;
                    }
                    this.SubCategories = this.CreateCatArray.concat(this.CreatePostArray);
                }
                // let newResult = this.result;
                // //this.getSubtCat =  newResult.data;
                // console.log('newResult');
                // console.log(newResult);
                // console.log('newResult');
                // console.log('new results'+ JSON.stringify(this.getSubtCat));
                //console.log('newResult'+ newResult.data)
                // // console.log('Get Data ID'+id);
                // // console.log('SubIDs => '+catNameID.subcategory_id);
                // for (var key in  this.result) {
                //   this.getSubtCat.push( this.result[key]);
                //   console.log('newdata'+this.getSubtCat);
                // }
                //console.log('newdata'+newdata)
                //  if(catHomeNew.subcategory_id == id){
                //    let catFourData = catHomeNew.data; 
                //   // for(let catHomeNew of catFourData){
                //      console.log('homeCat =>' + catHomeNew.subcats);
                //    //}
                //  }
                //}
                // for (let newCat of catDATA) {
                //  // console.log('newCat.subcategory_id'+newCat.subcategory_id);
                //   let getCatID = newCat.category_id;
                //   if (getCatID == id) {
                //     this.MainPageName = newCat.category_name;
                //     this.OptionalPageName = newCat.category_page_name;
                //    // console.log('Page Name ==> '+this.MainPageName);
                //   }
                //  // console.log('catDATA ==>' + getCatID);
                // }
                // console.log('catNameID'+JSON.stringify(catNameID));
                // for (let thisback of newResult) {
                //   let categoryData = thisback.category_data;
                //   let dataGet = thisback.data;
                //   for (let newData of dataGet) {
                //     let getID = newData.category_id
                //    // console.log('OLD ID'+getID);
                //    // console.log('New ID'+id);
                //     if (getID == id){
                //       this.SubCategories.push(newData);
                //      // console.log('dataGet ==>'+ JSON.stringify( newData));
                //     //8  console.log('post ID ==>'+newData.type);
                //     }
                //   }
                //   this.finalVal.push(categoryData);
                // }
                // console.log('SubCategories');
                // console.log(this.SubCategories);
                // console.log('SubCategories');
                // let s = 1;
                //   for (let SubCats of this.SubCategories) {
                //     if (typeof SubCats.category_image != 'undefined' && SubCats.category_image != '') {
                //       console.log('Image Index ==> ' + SubCats.category_image);
                //       this.CategoryImage = + s;
                //       this.CategoryImageTrue = true;
                //     }
                //     s++;
                //   }
            });
        }
        else {
            //console.log('false Online');
            // alert('online data mode');
            this.apiservice.HomeCategory(id).then((res) => {
                this.result = res;
                if (this.result.code == "200") {
                    this.SubCategories = this.result.data;
                    this.description = this.result.description;
                    this.CategoryData = this.result.category_data;
                    let s = 1;
                    for (let SubCats of this.SubCategories) {
                        if (typeof SubCats.category_image != 'undefined' && SubCats.category_image != '') {
                            //console.log('Image Index ==> ' + SubCats.category_image);
                            this.CategoryImage = +s;
                            this.CategoryImageTrue = true;
                        }
                        s++;
                    }
                    for (let CatData of this.CategoryData) {
                        this.MainPageName = CatData.category_name;
                        this.OptionalPageName = CatData.category_page_name;
                    }
                    //console.log('SubCategories');
                    console.log(this.SubCategories);
                    //console.log('SubCategories');
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
        this.navCtrl.navigateForward(['postdetail/' + postId]);
    }
    playBtn(postId) {
        this.navCtrl.navigateForward(['videopost/' + postId]);
    }
    loadData(refresh = false, refresher) {
        //this.HomeSubFn(true, this.id);
        // this.apiservice.HomeCategory(refresh).then((res) => {
        //   this.result = res;
        //   this.categories = this.result;
        //   if (refresher) {
        //     refresher.target.complete();
        //   }
        // }, (error) => {
        //   console.log('error');
        //   console.log(error);
        //   console.log('error');
        // });
    }
};
SubcategoryPage = tslib_1.__decorate([
    Component({
        selector: 'app-subcategory',
        templateUrl: './subcategory.page.html',
        styleUrls: ['./subcategory.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Apiservice,
        Platform,
        NetworkService, Storage, OfflineManagerService,
        LoadingController,
        ActivatedRoute,
        NavController])
], SubcategoryPage);
export { SubcategoryPage };
//# sourceMappingURL=subcategory.page.js.map