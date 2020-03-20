import { Platform } from '@ionic/angular';
import { Component, OnInit, } from '@angular/core';
import { Apiservice } from '../../../providers/apiservice';

import { NetworkService, ConnectionStatus } from '../../../providers/network';
import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';
import { tap, map, catchError } from "rxjs/operators";
import { OfflineManagerService } from '../../../providers/offline-manager.service';
import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-whichtest',
  templateUrl: './whichtest.page.html',
  styleUrls: ['./whichtest.page.scss'],
})
export class WhichtestPage implements OnInit {
  result: any;
  categories: any = [];
  SubCategories: any = [];
  users = [];
  posts: [];
  page = 1;
  count: null;
  categoriesData = [];
  keys: any;
  ArrangeCategory = [];
  constructor(
    private apiservice: Apiservice,
    private plt: Platform,
    private networkService: NetworkService, private storage: Storage, private offlineManager: OfflineManagerService,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController
  ) { }
  ngOnInit() {
    this.plt.ready().then(() => {
		this.WhichTest(true);
    });
  }
  WhichTest(refresh = false) {
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {

      this.storage.get('WhichTestPageSQLite').then((val) => {
        this.result = val;

        for (let CatData of this.result) {
          this.categories = CatData.data;
         
          console.log('this. WhichTestPageSQLite categories'+ this.categories);
          let o = 1;
          for(let getWhichTestData of CatData.data){
            console.log('getWhichTestData'+getWhichTestData.category_position);
            var index = CatData.data.findIndex(p => p.category_position == o);
			this.ArrangeCategory.push(CatData.data[index]);
			o++;
          }

          console.log('this.ArrangeCategory'+this.ArrangeCategory);
        }

      });
    } else {
      this.apiservice.WhichTest().then((res) => {
        let subCatUrl = 'get_posts_and_subcategories?category_id=';
        this.result = res;
        if (this.result.code == "200") {
          this.categories = this.result.data;
          this.keys = Object.keys(this.categories);
          var newArray = [];
          let s = 1;
          for (let catsPos of this.categories) {
            var index = this.categories.findIndex(p => p.category_position == s);
            this.ArrangeCategory.push(this.categories[index]);
            s++;
          }
         
        }
      }, (error) => {
        console.log('error')
        console.log(error)
        console.log('error')
      });
    }
  }
  HomeSubFn(id) {
    this.navCtrl.navigateForward(['subcategory/' + id]);
  }
  goBack() {
    window.history.back();
  }
  loadData(refresh = false, refresher?) {
    this.WhichTest(true);
    this.apiservice.WhichTest().then((res) => {
      this.result = res;this.ArrangeCategory = [];
      if (this.result.code == "200") {
        this.categories = this.result.data;
        this.keys = Object.keys(this.categories);
        var newArray = [];
        let s = 1;
        for (let catsPos of this.categories) {
          var index = this.categories.findIndex(p => p.category_position == s);
          this.ArrangeCategory.push(this.categories[index]);
          s++;
        }
       
      }

      if (refresher) {
        refresher.target.complete();
      }
    }, (error) => {
      console.log('error');
      console.log(error);
      console.log('error');
    });
  }
}
