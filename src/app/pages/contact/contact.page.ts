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
import { InAppBrowser, InAppBrowserObject, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
 import { AppAvailability } from '@ionic-native/app-availability/ngx';
// import { AppAvailability } from '@ionic-native/app-availability';
import { Device } from '@ionic-native/device/ngx';

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
     private appAvailability: AppAvailability,
    // private appAvailability: AppAvailability,
    // private NoImage: string = 'https://images.pexels.com/photos/3496542/pexels-photo-3496542.jpeg'
    private device: Device

  ) {
    this.CategoryImage = 0;
    this.CategoryImageTrue = false;

  }



  ngOnInit() {
    this.HomeSubFn(true);
  }


  HomeSubFn(refresh = false) {

   
 if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
    console.log('Contact  Page Offline Now ');

   
         this.storage.get('ContactPageSQLite').then((val) => {
           this.result = val;
           console.log('Contact  Page Offline Data ' + JSON.stringify(this.result));
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

  openEmail1(email) {
    if (this.plt.is('ios')) {

      window.open('googlegmail:///co?to=' + email + '&subject=' + 'subject' + '&body=', '_system');
    };
  
    this.plt.ready().then(() => {
      window.open('mailto:'+email, "_system");
    });

    
  }

  openEmail(email) {
    this.plt.ready().then(() => {
      console.log('email');
        window.open('mailto:'+email, "_system");
    });
  }

  goBack() {
    window.history.back();
  }

  option: InAppBrowserOptions = {
    location: "no", //Or 'no'
    hidden: "no", //Or  'yes'
    zoom: "no", //Android only ,shows browser zoom controls
    hideurlbar: "yes", //Or 'no'
    closebuttoncaption: 'Back!',
    closebuttoncolor: '#ffffff',
    clearcache: 'yes',
    hardwareback: 'yes',
    hidenavigationbuttons: 'yes',
    footer: 'yes',
    toolbar: 'yes',
    disallowoverscroll: 'no',
    toolbarposition: 'bottom',
    //fullscreen:'yes',
    // enableViewportScale: 'yes',
    // usewkwebview:'yes',
  };


  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
    let app: string;
     httpUrl = 'https://twitter.com/';
     username = 'Rinstructor';
     androidPackageName = 'com.twitter.android';
     iosSchemaName = 'twitter://';

    if (this.device.platform === 'iOS') {
        app = iosSchemaName;
    } else if (this.device.platform === 'Android') {
        app = androidPackageName;
        
    } else {
       // let browser = new InAppBrowser(httpUrl + username, '_system');
        // const browser: InAppBrowserObject = this.iab.create(httpUrl + username, '_system');
        // return;
      let target = "_blank";
      const browser = this.iab.create(httpUrl + username, target, this.option);
      browser.on("loadstop").subscribe(event => {
        // browser.insertCSS({ code: "body{color: red;" });
      });
      return false;
    }
    
    this.appAvailability.check(app)
    .then(
      (yes: boolean) => { // success callback
        const browser: InAppBrowserObject = this.iab.create(httpUrl + username, '_system');
        return
      //   let target = "_blank";
      // const browser = this.iab.create(httpUrl + username, target, this.option);
      // browser.on("loadstop").subscribe(event => {
      //   // browser.insertCSS({ code: "body{color: red;" });
      // });
      // return false;
        },
        () => { // error callback
          // const browser: InAppBrowserObject = this.iab.create(httpUrl + username, '_system');
          // return
      let target = "_blank";
      const browser = this.iab.create(httpUrl + username, target, this.option);
      browser.on("loadstop").subscribe(event => {
      // browser.insertCSS({ code: "body{color: red;" });
      });
      return false;
        }
    );
    }
    
    openTwitter(username: string) {
        this.launchExternalApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=', 'https://twitter.com/', username);
    }

 
  openTwitter1(twitter){
    console.log('twitter URL ==> '+twitter);
    
    let app;

    // console.log('twitter app URL'+twitter)
    // // const browser: InAppBrowserObject = this.iab.create(twitter + twitter, '_system');
    // if (this.plt.is('ios')) {
    //   app = 'twitter://';
    // } else if (this.plt.is('android')) {
    //   console.log(' else if condition Android platform TTwitter App');
    //   app = 'com.twitter.android';
    // } else {
    //   console.log('iab else TTwitter App');
    //   const browser: InAppBrowserObject = this.iab.create(twitter + twitter, '_system');
    //   return;
    // }


    
  
    
    this.appAvailability.check(app)
    .then(
      (yes: boolean) => {
        console.log(app + ' is available');
        // Success
        // App exists
       // app = 'twitter://'+'Rinstructor';
        app = 'com.twitter.android'+'Rinstructor';
       // const browser: InAppBrowserObject = this.iab.create('twitter://user?screen_name=' + twitter, '_system');
      },
      (no: boolean) => {
        // Error
        // App does not exist
        // Open Web URL
       // const browser: InAppBrowserObject = this.iab.create('https://twitter.com/' + 'Rinstructor', '_system');
        return;
      }
    );
//https://codevampires.com/open-twitter-app-in-ionic-4/





    // if (this.plt.is('ios')) {
    //   app = 'twitter://';
    // } else if (this.plt.is('android')) {
    //   app = 'com.twitter.android';
      

    //   console.log('Android Device Chandan');
    // } else {
    //     let URL = twitter;
    //     let target = "_blank";
    //     const browser = this.iab.create(URL, target);
    //     browser.on('loadstop').subscribe(event => {
    //     //  browser.insertCSS({ code: "body{color: red;" });
    //     });
    // }

    // this.appAvailability.check(app)
    // .then(
    //   (yes: boolean) => console.log(app + ' is available'),
    //   (no: boolean) => console.log(app + ' is NOT available')
    // );
  }

  

  

  
  

  openURL(weburl) {
    let URL = weburl;
    // let target = "_blank";
    // const browser = this.iab.create(URL, target);
    // browser.on('loadstop').subscribe(event => {
    //   browser.insertCSS({ code: "body{color: red;" });
    // });

    let target = "_blank";
      const browser = this.iab.create(weburl , target, this.option);
      browser.on("loadstop").subscribe(event => {
        // browser.insertCSS({ code: "body{color: red;" });
      });
      return false;

  }

  

  loadData(refresh = false, refresher?) {

    this.HomeSubFn(true);
    this.apiservice.ContactData().then((res) => {
      this.result = res;
      
      if (this.result.code == "200") {
        console.log('returnContact Refresh'+ res);
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
