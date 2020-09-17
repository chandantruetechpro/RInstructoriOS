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
import { Router } from '@angular/router';

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
  public show: boolean = true;
  public buttonName: any = "Show";
  public searchShow: boolean = false;
  public LoaderShow: boolean = false;
  public searchvalue: any;
  constructor(
    private apiservice: Apiservice,
    private plt: Platform,
    private networkService: NetworkService, private storage: Storage, private offlineManager: OfflineManagerService,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public router: Router,
  ) { }
  ngOnInit() {
    this.plt.ready().then(() => {
      this.LoaderShow = true;
      this.WhichTest(true);
    });
    let self = this
    window.addEventListener('mouseup', function (event) {
      var pol = document.getElementById('SearchSection')
      if (event.target != pol) {
        var inputText = document.getElementById('search_input')
        if (event.target != inputText) {
          var buttonTxt = document.getElementById('SearchComponent')
          if (event.target != buttonTxt) {
            self.searchShow = false
          }
        }
      }
    });
  }
  showHide() {
    this.searchShow = !this.searchShow
    if (this.searchShow) this.buttonName = 'Hide'
    else this.buttonName = 'Show'
  }
  OnInput(event: any) {
    let self = this 

    this.navCtrl.navigateForward(['search/' + event.target.value])
    self.show = false
  }

  submitdata(formValue:any){ 
    console.log("Form Value",formValue);
    this.navCtrl.navigateForward(['search/' + formValue.searchvalue])
    
}

  WhichTest(refresh = false) {
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      this.LoaderShow = false;
      this.storage.get('WhichTestPageSQLite').then((val) => {
        this.result = val;
      // console.log('whichTestData ==> '+ JSON.stringify(this.result));


       
       let o = 1;
        for (let CatData of this.result) {
          this.categories = CatData.data;

          console.log('Which Test Data ==> '+ JSON.stringify(CatData.data));
          
        //  console.log('getWhichTestData' + CatData.data.category_position);
          var index = CatData.data.findIndex(p => p.category_position == o);
          this.ArrangeCategory.push(CatData.data[index]);
        //  console.log('Which Test ==>'+ CatData.data[index]);
          o++;
 
        console.log('which Test ArrangeCategory'+JSON.stringify(this.ArrangeCategory));
          // for (let getWhichTestData of CatData.data) {
           
          // }

         // console.log('Which Test this.categories'+ JSON.stringify(this.ArrangeCategory));
         

         // console.log('this.ArrangeCategory' + this.ArrangeCategory);
        }
    //    console.log('getWhichTestData' + JSON.stringify( this.ArrangeCategory));  

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

          this.LoaderShow = false;

        }
      }, (error) => {
        console.log('error')
        console.log(error)
        console.log('error')
        this.LoaderShow = false;
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
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      if (refresher) {
        refresher.target.complete();
        //this.LoaderShow = false;
      }
    }else{
      let self =  this;
      this.ArrangeCategory = [];
      this.LoaderShow = false;
      this.WhichTest(true);
      this.apiservice.WhichTest().then((res) => {
        this.ArrangeCategory = [];
        this.result = res; 
        if (this.result.code == "200") {
          this.ArrangeCategory = [];
          setTimeout(function(){
            self.categories = '';
            self.categories = self.result.data;
            self.keys = Object.keys(self.categories);
            var newArray = [];
            let s = 1;
            
            self.ArrangeCategory = [];
            for (let catsPos of self.categories) {
              var index = self.categories.findIndex(p => p.category_position == s);
              self.ArrangeCategory.push(self.categories[index]);
              s++;
            }
            console.log(JSON.stringify(self.ArrangeCategory));
          },200);
          

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
}
