import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import * as $ from 'jquery'
//let apiUrl = 'http://demo.getyoursolutions.com/tabapp';
let apiUrl = 'http://182.74.186.138/takeacross';

import { NetworkService, ConnectionStatus } from './network';
import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';
import { tap, map, catchError } from "rxjs/operators";
import { OfflineManagerService } from './offline-manager.service';

const API_STORAGE_KEY = 'specialkey';
//const API_URL = 'http://rinstructor.truetechpro.com/wp-json/webservices/v1/';
const API_URL = 'https://www.truetechpro.com/rinstructordev/wp-json/webservices/v1/';
@Injectable()
export class Apiservice {
  Promise: any;
  resolve: any;
  reject: any;
  URL = 'https://devdactic.com/wp-json/wp/v2/';
  TotalCat = null;
  totalPosts = null;
  pages: any;
  data: any = [];
  stopLoop: boolean = true;
  ResetLoop: boolean = true;
  HomeCatID: any;
  result: any;
  HomeSubCateogeryDone: boolean = false;
  HomeSubPostDone: boolean = false;
  SubCatArray: any = []
  SubPostArray: any = []
  finalVal: any = [];
  finalValPost: any = [];
  SubCatPostArray: any = [];
  VideoPageArray: any = [];
  WhichTestPageArray: any = [];
  ContactPageArray: any = [];
  CheatSheetPageArray: any = [];
  APIStartEnd: any = false;
  constructor(
    public http: HttpClient,
    private networkService: NetworkService, private storage: Storage, private offlineManager: OfflineManagerService,
    public httpPlugin: HTTP,
  ) {
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
          } else {
            this.result = 'No Posts';
          }

        }, (err) => {
          reject(err);
        });
    });
  }
  homeListing_dataNewSQLite(refresh = false, refresher?) {
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
           // self.VideoData();

          }, (err) => {
            reject(err);
          });
      });

      this.APIStartEnd = true;
    }

  }
  getAllpostshavingpdfs(refresh = false, refresher?) {
    return new Promise((resolve, reject) => {
      let self = this;
      this.http.get(API_URL + 'getAllpostshavingpdfs?' + Date.now())
        .subscribe(res => {
          resolve(res);
          this.result = res;
         // console.log('this.result' + this.result);
        }, (err) => {
          reject(err);
        });
    });
  }
  getpdf_for_specific_id(post_id) {
    return new Promise((resolve, reject) => {

      let self = this;

      this.http.get(API_URL + 'getpdf_for_specific_id?post_id=' + post_id + '&time=' + Date.now())
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

      this.http.get(API_URL + 'all_cat_posts_home2?' + Date.now())
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
           // console.log('HomeCategorySQLite = > data => '+ JSON.stringify(newResult));
          });
          console.log('HomeCategorySQLite = > data => Check');
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
      this.http.get(API_URL + 'get_posts_and_subcategories?category_id=' + id + '&time=' + Date.now())
        //this.http.get('http://rinstructor.truetechpro.com/wp-json/webservices/v1/get_posts_and_subcategories?category_id=4')
        .subscribe(res => {
          resolve(res);
          this.result = res;

         

          if (this.result.code == "200") {
            this.SubCatPostArray = this.result.data;
            // this.keys = Object.keys(this.SubCatPostArray);

            var newArray = [];
            let s = 1;

            let j = 0
            for (let catsPos of this.SubCatPostArray) {
              let IDCat = catsPos.subcategory_id;
              newArray.push(IDCat);

            }
            console.log('Home Page process Done!');
            self.HomeCategory_cheatsheet(79);
          }
          

        }, (err) => {
          reject(err);
        });
    });
  }

  /*************************** Home Page API Sub Category End Here ********************** */

  HomeCategory_cheatsheet(id) {
    return new Promise((resolve, reject) => {
      let self = this;
      this.http.get(API_URL + 'get_posts_and_subcategories?category_id=' + id + '&time=' + Date.now())
        //this.http.get('http://rinstructor.truetechpro.com/wp-json/webservices/v1/get_posts_and_subcategories?category_id=4')
        .subscribe(res => {
          resolve(res);
          this.result = res;

          this.SubCatArray.push(res);
          
          if (this.result.code == "200") {
            this.SubCatPostArray = this.result.data;


            self.storage.set('CheatSheetPageArray', ''); 
            self.storage.set('CheatSheetPageArray', this.result);
            self.storage.get('CheatSheetPageArray').then((val) => {
              self.result = val;
              let newResult = self.result;
           //  console.log('CheatSheetPageArray = > data'+ JSON.stringify(newResult));
            });



            // this.keys = Object.keys(this.SubCatPostArray);

            var newArray = [];
            let s = 1;

            let j = 0
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
  /*************************** Home Page API Post Details SQL Lite  Content Start Here ********************** */

  PostDetailSQLite(postId) {
    // alert(123456)
    return new Promise((resolve, reject) => {
      this.http.get(API_URL + 'get_all_posts?' + Date.now())
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
            //console.log('HomeCategorySQLite = > data'+ JSON.stringify(newResult))
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
    } else {
      return new Promise((resolve, reject) => {
        this.http.get(API_URL + 'single_view?id=' + postId + '&type=post&time=' + Date.now())
          //http://rinstructor.truetechpro.com/wp-json/webservices/v1/single_view?id=343&type=post
          .subscribe(res => {
            resolve(res);
            this.result = res;

         //   console.log(this.result);
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
           // console.log('HomeCategorySQLite = > data'+ JSON.stringify(newResult))

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
         // console.log('Which Test Response ==>'+ JSON.stringify(this.WhichTestPageArray)); 
          //self.setLocalData('VideoPageSQLite', '');
          self.storage.set('WhichTestPageSQLite', '');
          //self.setLocalData('WhichTestPageSQLite', this.VideoPageArray);
          self.storage.set('WhichTestPageSQLite', this.WhichTestPageArray);
          self.storage.get('WhichTestPageSQLite').then((val) => {
            self.result = val;
            let newResult = self.result;
           //console.log('WhichTest  = > data =>'+ JSON.stringify(newResult))
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
            //console.log('HomeCategorySQLite = > data'+ JSON.stringify(newResult))
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
	  let idd = 79;
	  this.http.get(API_URL + 'get_posts_and_subcategories?category_id=' + idd + '&time=' + Date.now())
        //this.http.get('http://rinstructor.truetechpro.com/wp-json/webservices/v1/get_posts_and_subcategories?category_id=4')
        .subscribe(res => {
          resolve(res);
          this.result = res;

		 // console.log('cheatsheet = > data'+ JSON.stringify(res))
          this.CheatSheetPageArray.push(res);
          self.storage.set('CheatSheetPageSQLite', '');
          self.storage.set('CheatSheetPageSQLite', this.CheatSheetPageArray);
          self.storage.get('CheatSheetPageSQLite').then((val) => {
            self.result = val;
            let newResult = self.result;
           //console.log('cheatsheet = > data'+ JSON.stringify(newResult))
          });
          console.log('All Data Update SQL Injected');
        }, (err) => {
          reject(err);
        });
		
		
        // this.http.get(API_URL + 'cheatsheets?' + Date.now()).subscribe(res => {
        //   resolve(res);
        // //  console.log('cheatsheet = > data'+ JSON.stringify(res))
        //   this.CheatSheetPageArray.push(res);
        //   //self.setLocalData('VideoPageSQLite', '');
        //   self.storage.set('CheatSheetPageSQLite', '');
        //   //self.setLocalData('CheatSheetPageSQLite', this.VideoPageArray);
        //   self.storage.set('CheatSheetPageSQLite', this.CheatSheetPageArray);
        //   self.storage.get('CheatSheetPageSQLite').then((val) => {
        //     self.result = val;
        //     let newResult = self.result;
        //    console.log('cheatsheet = > data SQL ==> '+ JSON.stringify(newResult))
        //   });
        // }, (err) => {
        //   reject(err);
        // });
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
}
 