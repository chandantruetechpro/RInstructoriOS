import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../../providers/apiservice';
import { Platform } from '@ionic/angular';
import { NetworkService, ConnectionStatus } from '../../../providers/network';
import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';
import { tap, map, catchError } from "rxjs/operators";
import { OfflineManagerService } from '../../../providers/offline-manager.service';
// import { CacheService } from "ionic-cache";
import { LoadingController } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
// import { AppAvailability } from '@ionic-native/app-availability';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  result: any;
  categories: any = [];
  description: any = [];
  SubCategories: any = [];
  CategoryData: any = [];
  users = [];
  posts: [];
  page = 1;
  count: null;
  categoriesData = [];
  keys: any;
  id: any;
  sub: any;
  MainPageName: any;
  OptionalPageName: any;
  CategoryImageTrue: boolean;
  CategoryImage: number;

  constructor(
    private apiservice: Apiservice,
    private plt: Platform,
    private networkService: NetworkService, private storage: Storage, private offlineManager: OfflineManagerService,
    // private cache: CacheService,
    public loadingCtrl: LoadingController,
    private route: ActivatedRoute,
    public navCtrl: NavController,
    private iab: InAppBrowser,
    // private appAvailability: AppAvailability,
    // private NoImage: string = 'https://images.pexels.com/photos/3496542/pexels-photo-3496542.jpeg'

  ) {
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

              
              this.description = CatData.description;
              this.CategoryData = CatData.category_data;
            
             let o = 1;
             for(let getWhichTestData of CatData.data){
              
             o++;
             
             }
   
          
           }
   
         });
    }else {

  //HomeSubFn() {
    this.apiservice.ContactData().then((res) => {
      this.result = res;
      if (this.result.code == "200") {
        this.SubCategories = this.result.data;
        this.description = this.result.description;
        this.CategoryData = this.result.category_data;

      }
    }, (error) => {
      console.log('error')
      console.log(error)
      console.log('error')
    });

  }
  }

  clickUrl(url) {
    const browser = this.iab.create(url);

  }

  openEmail(email) {
    if (this.plt.is('ios')) {

      window.open('googlegmail:///co?to=' + email + '&subject=' + 'subject' + '&body=', '_system');
    };
  
    this.plt.ready().then(() => {
      window.open('mailto:'+email, "_system");
    });
  }

  goBack() {
    window.history.back();
  }

  openTwitter(twitter){
    let app;

    if (this.plt.is('ios')) {
      app = 'twitter://';
    } else if (this.plt.is('android')) {
      app = 'com.twitter.android';
    } else {
      const browser: InAppBrowserObject = this.iab.create(twitter + name, '_system');
      return;
    }

  
  }
  

  openURL(weburl) {
    let URL = weburl;
    let target = "_blank";
    const browser = this.iab.create(URL, target);
    browser.on('loadstop').subscribe(event => {
      browser.insertCSS({ code: "body{color: red;" });
    });

  }

  loadData(refresh = false, refresher?) {

    this.HomeSubFn(true);
    this.apiservice.ContactData().then((res) => {
      this.result = res;
      if (this.result.code == "200") {
        this.SubCategories = this.result.data;
        this.description = this.result.description;
        this.CategoryData = this.result.category_data;

      }
    }, (error) => {
      console.log('error')
      console.log(error)
      console.log('error')
    });
  }

}
