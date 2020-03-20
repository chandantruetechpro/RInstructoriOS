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
  constructor(
    private apiservice: Apiservice,
    private plt: Platform,
    private networkService: NetworkService, private storage: Storage, private offlineManager: OfflineManagerService,
    // private cache: CacheService,
    public loadingCtrl: LoadingController,
    private route: ActivatedRoute,
    public navCtrl: NavController,
    // private NoImage: string = 'https://images.pexels.com/photos/3496542/pexels-photo-3496542.jpeg'

  ) {
    this.CategoryImage = 0;
    this.CategoryImageTrue = false;
  }



  ngOnInit() {
    let n_id = this.plt.getQueryParam("id");
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.HomeSubFn(true, 79);
    });
  }



  //HomeSubFn(id) {
    HomeSubFn(refresh = false, id) {
	  if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
			this.storage.get('CheatSheetPageSQLite').then((val) => {
			this.result = val;

			for (let CatData of this.result) {
			  this.categories = CatData.data;
			 
			  let o = 1;
			  for(let getWhichTestData of CatData.data){
				var index = CatData.data.findIndex(p => p.category_position == o);
			  this.ArrangeCategory.push(CatData.data[index]);
			  o++;
			  
			  }

			}

		  });
	  }else{

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

		  }
		}, (error) => {
			console.log('error')
			console.log(error)
			console.log('error')
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

  playBtn(postId){
    this.navCtrl.navigateForward(['videopost/' + postId]);
 }

  loadData(refresh = false, refresher?) {

    this.apiservice.HomeCategory(this.id).then((res) => {
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
