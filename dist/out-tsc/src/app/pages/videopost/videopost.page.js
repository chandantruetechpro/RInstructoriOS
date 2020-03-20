import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Apiservice } from '../../../providers/apiservice';
import { Platform } from '@ionic/angular';
import { NetworkService } from '../../../providers/network';
import { Storage } from '@ionic/storage';
import { OfflineManagerService } from '../../../providers/offline-manager.service';
// import { CacheService } from "ionic-cache";
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
let VideopostPage = class VideopostPage {
    constructor(apiservice, plt, networkService, storage, offlineManager, 
    // private cache: CacheService,
    loadingCtrl, route, navCtrl, sanitizer, iab) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.iab = iab;
        this.PostData = [];
    }
    ngOnInit() {
        // console.log('Post Detail Page');
        let n_id = this.plt.getQueryParam("postId");
        this.post = this.route.params.subscribe(params => {
            this.postId = params['postId'];
            // console.log('pageID =>  ngInit ==> ' + this.postId);
            this.postDetail(this.postId);
        });
    }
    open_out_url(urlthis) {
        let URL = urlthis;
        let target = "_blank";
        const browser = this.iab.create(URL, target);
        browser.on('loadstop').subscribe(event => {
            // browser.insertCSS({ code: "body{color: red;" });
        });
        return false;
    }
    postDetail(postId) {
        // debugger;
        this.apiservice.PostDetail(postId).then((res) => {
            this.result = res;
            //console.log('Code'+this.result.data);
            if (this.result.code == "200") {
                this.PostData = this.result.data;
                //console.log('this.PostData = >'+ this.PostData[0]);
                for (let content of this.PostData) {
                    // console.log(content.video_url);
                    // console.log(content.external_url);
                    if (content.external_url != '' && content.video_url == '') {
                        // this.ExternalURLFromAPI = this.sanitizer.bypassSecurityTrustResourceUrl(content.external_url);
                        this.ExternalURLFromAPI = content.external_url;
                        console.log(this.ExternalURLFromAPI);
                        this.external_url = 'Yes';
                        this.open_out_url(this.ExternalURLFromAPI);
                        window.history.back();
                        // const browser = this.iab.create(this.ExternalURLFromAPI);
                    }
                    else {
                        this.PostVideo = content.video_url;
                        this.videoPoster = content.video_poster;
                        this.external_url = 'No';
                    }
                }
            }
        }, (error) => {
            console.log('error');
            console.log(error);
            console.log('error');
        });
    }
    goBack() {
        window.history.back();
    }
};
VideopostPage = tslib_1.__decorate([
    Component({
        selector: 'app-videopost',
        templateUrl: './videopost.page.html',
        styleUrls: ['./videopost.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Apiservice,
        Platform,
        NetworkService, Storage, OfflineManagerService,
        LoadingController,
        ActivatedRoute,
        NavController,
        DomSanitizer,
        InAppBrowser])
], VideopostPage);
export { VideopostPage };
//# sourceMappingURL=videopost.page.js.map