import { Platform } from '@ionic/angular';
import { Component, OnInit, NgModule } from '@angular/core';
import { Apiservice } from '../../providers/apiservice';

import { NetworkService, ConnectionStatus } from '../../providers/network';
import { Storage } from '@ionic/storage';
import { Observable, from, observable } from 'rxjs';
import { tap, map, catchError } from "rxjs/operators";
import { OfflineManagerService } from '../../providers/offline-manager.service';
// import { CacheService } from "ionic-cache";
import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/File/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";

import { SharedModule } from '../shared/shared.module';
import { promise } from 'protractor';
import { Server } from 'http';
import { Router } from '@angular/router';
import * as $ from 'jquery';
//import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';




@NgModule({
  imports: [NavController, SharedModule]
})

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  result: any;
  resultpdf: any;
  categories: any = [];
  SubCategories: any = [];
  users = [];
  posts: [];
  page = 1;
  count: null;
  categoriesData = [];
  keys: any;
  ArrangeCategory = [];
  classApplied = false;
  pdfposts: any[];
  public show: boolean = true;
  public buttonName: any = "Show";
  public searchShow: boolean = false;
  public LoaderShow: boolean = false;
  public AllDataLoaded: boolean = false;
  public searchvalue: any;
  constructor(
    private apiservice: Apiservice,
    private plt: Platform,
    private networkService: NetworkService,
    private storage: Storage,

    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    private fileOpener: FileOpener,
    private file: File,
    private ft: FileTransfer,
    public router: Router
    ) { }

  ngOnInit() {
  this.searchHideDefault();
    this.plt.ready().then(() => {
      this.LoaderShow = true;
      //if (this.AllDataLoaded == false){
      this.homeListing(true);
     
      //}
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
    console.log('dddd' + this.file.applicationDirectory)
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


  todo = {}
  SearchForm() {
    console.log(this.todo)
  }

  ionViewWillEnter() {
      this.searchHideDefault();
  }
  searchHideDefault(){
    //$('.SearchSection').css('display','none');
    this.searchShow = false
  }


  homeListing(refresh = false) { 
    //console.log('NSSS'+this.networkService.getCurrentNetworkStatus());
    if (
      this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline
    ) {
      this.LoaderShow = false;
     // console.log('Home Page Offline Now => ');
      this.storage.get("categories").then(val => {
       
        this.result = val;
       // console.log('CheatSheet Data Offline => '+ JSON.stringify(this.result));
        if (this.result.code == "200") {
          this.categories = this.result.data;
          this.keys = Object.keys(this.categories);
          var newArray = [];
          let s = 1;
          for (let catsPos of this.categories) {
            var index = this.categories.findIndex(
              p => p.category_position == s
              
            );

            this.ArrangeCategory.push(this.categories[index]);
            s++;
          }
        }
      });
    } else {
      let self = this;
      this.apiservice.homeListing_dataNewSQLite().then(

        res => {
          let subCatUrl = "get_posts_and_subcategories?category_id="; 
          this.result = res;
          if (this.result.code == "200") {
            this.categories = this.result.data;
            console.log('HomeCat 200 ==> ' + this.categories);
            this.keys = Object.keys(this.categories);
            var newArray = [];
            let s = 1;
            for (let catsPos of this.categories) {
              var index = this.categories.findIndex(
                p => p.category_position == s
              );
              this.ArrangeCategory.push(this.categories[index]);
              console.log('index ==> ' + index);
              s++;
            }
            setTimeout(() => {
              self.pdfFunction();
            }, 10);
          }
          console.log('Home page Ts Api Done!');
          self.LoaderShow = false;
        },
        error => {
          console.log("error");
          console.log(error);
          console.log("error");
          self.LoaderShow = false;
        }
      );

    }
    // console.log(
    //   "this.file.applicationStorageDirectory" +
    //     this.file.applicationStorageDirectory
    // );

  }


  pdfFunction() {
    let self = this;
    this.apiservice.getAllpostshavingpdfs().then(
      res => {
        this.resultpdf = res;
        if (this.resultpdf.code == "200") {
          this.pdfposts = this.resultpdf.data;
          console.log(this.pdfposts);
          self.LoaderShow = false;
          this.AllDataLoaded = true;

          for (let newArray of this.pdfposts) {
            let pdf_image = newArray.pdf_image;
            let post_id = newArray.post_id;
            let post_title = newArray.post_title;

            let newpdfname = post_title + '.pdf';

            const transfer = this.ft.create();
            this.storage.get('pdf_local_url_' + post_id).then(data => {
              if (data) {
                console.log('Already Stored PDF Files = > ' + JSON.stringify(data));
                this.AllDataLoaded = false;

                self.LoaderShow = false;
              } else {
                if (this.plt.is("ios")) {
                  transfer.download(pdf_image, this.file.documentsDirectory + newpdfname).then((entry) => {
                    console.log('download complete: ' + entry.toURL());
                    this.storage.set('pdf_local_url_' + post_id, entry.toURL());

                    self.LoaderShow = false;

                  }, (error) => {
                    console.log('pdf save error')
                    console.log(error)

                    self.LoaderShow = false;
                  });
                } else {
                  transfer.download(pdf_image, this.file.dataDirectory + newpdfname).then((entry) => {
                    console.log('download complete: ' + entry.toURL());
                    this.storage.set('pdf_local_url_' + post_id, entry.toURL());
                    self.LoaderShow = false;
                  }, (error) => {
                    console.log('pdf save error')
                    console.log(error);
                    self.LoaderShow = false;
                  });

                }
              }

            });
          }
        }
      },
      error => {
        console.log("error");
        console.log(error);
        console.log("error");
        self.LoaderShow = false;
      }
    );
  }

  


  HomeSubFn(id) {
	  // this.navCtrl.pop({animate: true, direction: 'back'})
    this.navCtrl.navigateForward(["subcategory/" + id]);
	// this.navCtrl.push(["subcategory/" + id],{},{animate: true, direction: 'back'});
  }
  openContact() {
    this.navCtrl.navigateForward(["contact/"]);
  }
  loadData(refresh = false, refresher?) {
  if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
    if (refresher) {
      refresher.target.complete();
      //this.LoaderShow = false;
    }
  }else{
    this.LoaderShow = false;
    //window.location.reload(true);
    this.apiservice.homeListing_dataNewSQLite(refresh).then(
      res => {
        this.result = res;
        if (this.result.code == "200") {
          this.categories = this.result.data;
          this.keys = Object.keys(this.categories);
          var newArray = [];
          let s = 1;
          this.ArrangeCategory = [];
          for (let catsPos of this.categories) {
            var index = this.categories.findIndex(
              p => p.category_position == s
            );

            this.ArrangeCategory.push(this.categories[index]);
            s++;
          }
        }

        if (refresher) {
          refresher.target.complete();
        }
      },
      error => {
        console.log("error");
        console.log(error);
        console.log("error");
      }
    );
  }
  }

  updateUser(id) { }
}

