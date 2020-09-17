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
import { Router } from '@angular/router';


@Component({
  selector: 'app-cheatsheets',
  templateUrl: './cheatsheets.page.html',
  styleUrls: ['./cheatsheets.page.scss'],
})
export class CheatsheetsPage implements OnInit {
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
  ArrangeCategory = [];
  public LoaderShow: boolean = false;
  public show: boolean = true;
  public buttonName: any = "Show";
  public searchShow: boolean = false;
  public searchvalue: any;
  constructor(
    private apiservice: Apiservice,
    private plt: Platform,
    private networkService: NetworkService, private storage: Storage, private offlineManager: OfflineManagerService,
    // private cache: CacheService,
    public loadingCtrl: LoadingController,
    private route: ActivatedRoute,
    public navCtrl: NavController,
    public router: Router,
    // private NoImage: string = 'https://images.pexels.com/photos/3496542/pexels-photo-3496542.jpeg'

  ) {
    this.CategoryImage = 0;
    this.CategoryImageTrue = false;
  }



  ngOnInit() {
    this.LoaderShow = true;
    let n_id = this.plt.getQueryParam("id");
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.HomeSubFn(true, 79);
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

  //HomeSubFn(id) {
  HomeSubFn(refresh = false, id) {
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      this.storage.get('CheatSheetPageSQLite').then((val) => {
        this.LoaderShow = false;
        this.result = val;
       
        
        
       
          // for (let CatData of this.CategoryData) {
          //   this.MainPageName = CatData.category_name;
          //   this.OptionalPageName = CatData.category_page_name;
          //   console.log('this.MainPageName'+CatData.MainPageName)
          // }


        for (let subCatLoop of this.result) {
          this.SubCategories = subCatLoop.data;

        // console.log('cheatSheet Page Data Offline ==> ' + JSON.stringify(this.SubCategories));

          let o = 1;
          // for (let getWhichTestData of CatData.data) {
          //   var index = CatData.data.findIndex(p => p.category_position == o);
          //   this.ArrangeCategory.push(CatData.data[index]);
          //   console.log('this.categories ==> '+JSON.stringify(getWhichTestData));
          //   o++;

          // }
         // this.CategoryData = this.SubCategories.category_data;

         this.CategoryData = subCatLoop.category_data;
        // console.log('this.CategoryData 1'+ JSON.stringify(this.CategoryData));

         for (let CatData of this.CategoryData ) {
            this.MainPageName = CatData.category_name;
            this.OptionalPageName = CatData.category_page_name;
           // console.log('this.MainPageName ofline'+ this.MainPageName);
          }

       // console.log('this.MainPageName = CatData.category_name;'+this.CategoryData.category_name);
       
          for (let SubCats of this.SubCategories) {
            if (typeof SubCats.category_image != 'undefined' && SubCats.category_image != '') {

              this.CategoryImage = + o;
              this.CategoryImageTrue = true;
             
            }
            o++;
           
          //  console.log('SubCats CheatSheet Offline Loop 2 ==> '+ JSON.stringify(SubCats));
           // console.log('SubCats CheatSheet Offline Loop 2 ==> '+ SubCats.name);
          }
          // for (let CatData of this.SubCategories) {
          //   this.MainPageName = CatData.category_name;
          //   this.OptionalPageName = CatData.category_page_name;
          //  // console.log('this.MainPageName ofline'+ this.MainPageName);
          // }

          
          
        }

      });
    } else {

      this.apiservice.HomeCategory(id).then((res) => {
        this.result = res;
        if (this.result.code == "200") {
          this.SubCategories = this.result.data;
          this.description = this.result.description;
          this.CategoryData = this.result.category_data;
          let s = 1;
          for (let SubCats of this.SubCategories) {
            if (typeof SubCats.category_image != 'undefined' && SubCats.category_image != '') {

              this.CategoryImage = + s;
              this.CategoryImageTrue = true;
            }
            s++;
          }
          for (let CatData of this.CategoryData) {
            this.MainPageName = CatData.category_name;
            this.OptionalPageName = CatData.category_page_name;
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



  goBack() {
    window.history.back();
  }
  HomeSubInnFn(idsub) {

    this.navCtrl.navigateForward(['subcategory/' + idsub]);
  }
  HomePostDetail(postId) {

    this.navCtrl.navigateForward(['postdetail/' + postId]);
  }

  playBtn(postId) {
    this.navCtrl.navigateForward(['videopost/' + postId]);
  }

  loadData(refresh = false, refresher?) {
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      if (refresher) {
        refresher.target.complete();
        //this.LoaderShow = false;
      }
    }else{
    this.LoaderShow = false;
    //this.apiservice.HomeCategory(this.id).then((res) => {
    this.apiservice.HomeCategory(79).then((res) => {

      console.log('this.id'+this.id);
      this.result = res;
      if (this.result.code == "200") {
        this.SubCategories = this.result.data;
        this.description = this.result.description;
        this.CategoryData = this.result.category_data;
        let s = 1;
        for (let SubCats of this.SubCategories) {
          if (typeof SubCats.category_image != 'undefined' && SubCats.category_image != '') {

            this.CategoryImage = + s;
            this.CategoryImageTrue = true;
          }
          s++;
        }
        for (let CatData of this.CategoryData) {
          this.MainPageName = CatData.category_name;
          this.OptionalPageName = CatData.category_page_name;
        }

      }
      if (refresher) {
        refresher.target.complete();
      }
    }, (error) => {
      console.log('error')
      console.log(error)
      console.log('error')
    });
  }
  }

}
