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
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

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
      this.homeListing(true);
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
  homeListing(refresh = false) {
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      this.LoaderShow = false;

      this.storage.get('VideoPageSQLite').then((val) => {
        this.result = val;

      //  this.categories = this.result.data;

       // console.log('Video result ==> '+JSON.stringify(this.result));

       // this.keys = Object.keys(this.categories);
       // var newArray = [];
        // for (let CatData of this.result) {
        //   this.categories = CatData.data;
        //   var index = CatData.data.findIndex(p => p.category_position == c);
        //   this.ArrangeCategory.push(CatData.data[index]);
        //   c++;
        // }
        let o = 1;
        let z = 0;
        console.log('this.ArrangeCategory ==> '+ JSON.stringify(this.result));
        for (let CatData of this.result) {
          this.ArrangeCategory = CatData.data;
          //console.log('Video All  Data ==> '+ JSON.stringify(CatData.data));
          //var index = CatData.data.findIndex(p => p.category_position == o);
          //this.ArrangeCategory.push(CatData.data[z]);
          //console.log('Video Index ==>'+ CatData.data[index]);  
          //o++;
          //z++;
        }
        //this.ArrangeCategory = this.result.data;
       console.log('this.ArrangeCategory22222 ==> '+ JSON.stringify(this.ArrangeCategory));


        // let o = 1;
        // for (let CatData of this.result) {
        //   this.categories = CatData.data;

        //   console.log('Which Test Data ==> '+ JSON.stringify(CatData.data));
        //   var index = CatData.data.findIndex(p => p.category_position == o);
        //   this.ArrangeCategory.push(CatData.data[index]);
        // //  console.log('Which Test ==>'+ CatData.data[index]);
        //   o++;
 
        // console.log('which Test ArrangeCategory'+JSON.stringify(this.ArrangeCategory));





      });
    } else {
      this.apiservice.VideoData().then((res) => {
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
  
  loadData(refresh = false, refresher?) { 
   
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      if (refresher) {
        refresher.target.complete();
        //this.LoaderShow = false;
      }
    }else{
      this.LoaderShow = false;
      this.homeListing(true);
      this.categories = '';
      let self = this;
      this.apiservice.VideoData().then((res) => {
      this.result = res;
      this.categories = this.result.data;
      //this.categories = this.result.data;
      self.keys = Object.keys(self.categories);
      self.ArrangeCategory = [];
        setTimeout(function(){

       
         
          var newArray = [];
          let s = 1;
          
          self.ArrangeCategory = [];
          for (let catsPos of self.categories) {
            var index = self.categories.findIndex(p => p.category_position == s);
            self.ArrangeCategory.push(self.categories[index]);
            s++;
          }

          console.log('ArrangeCategory'+JSON.stringify(self.ArrangeCategory));
      
        
      },200);
      if (refresher) {
        refresher.target.complete();
        //this.LoaderShow = false;
      }
     
      }, (error) => {
        console.log('error');
        console.log(error);
        console.log('error');
      }); 
    
    }
}

}
