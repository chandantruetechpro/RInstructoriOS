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
let PostdetailPage = class PostdetailPage {
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
        this.PostData = [];
    }
    ngOnInit() {
        console.log('Post Detail Page');
        let n_id = this.plt.getQueryParam("postId");
        this.post = this.route.params.subscribe(params => {
            this.postId = params['postId'];
            console.log('pageID =>  ngInit ==> ' + this.postId);
            this.postDetail(true, this.postId);
        });
    }
    //postDetail(postId) {
    postDetail(refresh = false, postId) {
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
            this.storage.get('PostDataSQLite').then((val) => {
                this.result = val;
                console.log('this.result ' + this.result);
                for (let CatData of this.result) {
                    let postDataArray = CatData.data;
                    // console.log('CatData' + JSON.stringify(CatData));
                    console.log('CatData' + CatData);
                    for (let newArray of postDataArray) {
                        let catIDNew = newArray.post_id;
                        // console.log('catIDNew'+catIDNew);
                        // if (newArray[z].subcategory_id === id) {
                        //   // Found it
                        //   z = newArray;
                        //   break;
                        // }
                        //console.log('Sub Cat ID ==> ' + newArray.post_id);
                        if (catIDNew == postId) {
                            console.log('catIDNew' + catIDNew);
                            newArray.post_id;
                            this.PostTitle = newArray.post_title;
                            this.optionalTitle = newArray.detail_page_name;
                            this.postContent = newArray.post_content;
                            this.PostVideo = newArray.video_url;
                            this.PostID = newArray.post_id;
                        }
                    }
                }
                //  this.PostData = this.result.data;
                // console.log('this.PostData = >'+ this.PostData[0]);
                // for (let content of this.PostData) {
                //   this.PostTitle =   content.post_title;
                //   this.optionalTitle = content.detail_page_name;
                //   this.postContent =   content.post_content;
                //   this.PostVideo =   content.video_url;
                //   this.PostID =   content.post_id;
                //   console.log('this.PostVideo =>'+this.PostVideo)      
                // } 
            });
        }
        else {
            // debugger;
            this.apiservice.PostDetail(postId).then((res) => {
                this.result = res;
                //console.log('Code'+this.result.data);
                if (this.result.code == "200") {
                    this.PostData = this.result.data;
                    //console.log('this.PostData = >'+ this.PostData[0]);
                    for (let content of this.PostData) {
                        this.PostTitle = content.post_title;
                        this.optionalTitle = content.detail_page_name;
                        this.postContent = content.post_content;
                        this.PostVideo = content.video_url;
                        this.PostID = content.post_id;
                        console.log('this.PostVideo =>' + this.PostVideo);
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
    playBtn(postId) {
        this.navCtrl.navigateForward(['videopost/' + postId]);
    }
    loadData(refresh = false, refresher) {
        this.postDetail(true, this.postId);
        this.apiservice.PostDetail(refresh).then((res) => {
            this.result = res;
            this.PostData = this.result;
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
PostdetailPage = tslib_1.__decorate([
    Component({
        selector: 'app-postdetail',
        templateUrl: './postdetail.page.html',
        styleUrls: ['./postdetail.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Apiservice,
        Platform,
        NetworkService, Storage, OfflineManagerService,
        LoadingController,
        ActivatedRoute,
        NavController])
], PostdetailPage);
export { PostdetailPage };
//# sourceMappingURL=postdetail.page.js.map