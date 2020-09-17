import { Component, OnInit, Self } from '@angular/core';
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
import { InAppBrowser, InAppBrowserObject , InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';
import * as $ from 'jquery';
import {
  DocumentViewer,
  DocumentViewerOptions
} from "@ionic-native/document-viewer/ngx";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/File/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";

declare let window: any;

@Component({
  selector: "app-subcategory",
  templateUrl: "./subcategory.page.html",
  styleUrls: ["./subcategory.page.scss"]
})
export class SubcategoryPage implements OnInit {
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
  type_sent: any;
  sub: any;
  MainPageName: any;
  OptionalPageName: any;
  CategoryImageTrue: boolean;
  CategoryImage: number;
  newData: any;
  newDataArray: any = [];
  getData: any = [];
  finalVal: any = [];
  catDATA: any = [];
  ArrayData: any = [];
  getSubtCat: any = [];
  ckData: any = [];
  newArrayPost: any = [];
  values: any;
  userData: any;
  categoryvideourl: any;
  value: any;
  SubCatData: any = [];
  PostData: any = [];
  CreateCatArray: any = [];
  CreatePostArray: any = [];
  external_url: any;
  ExternalURLFromAPI: any;
  public show: boolean = false;
  options: any;
  ArrangeCategory = [];
  public ArangeTrue: boolean = false;

  constructor(
    private apiservice: Apiservice,
    private plt: Platform,
    private networkService: NetworkService,
    private storage: Storage,
    private offlineManager: OfflineManagerService,
    public loadingCtrl: LoadingController,
    private route: ActivatedRoute,
    public navCtrl: NavController,
    private document: DocumentViewer,
    private fileOpener: FileOpener,
    private file: File,
    private ft: FileTransfer,
    private iab: InAppBrowser,
  ) {
    this.CategoryImage = 0;
    this.CategoryImageTrue = false;
    const options: DocumentViewerOptions = {
      title: "pdf_image"
    };
  }
  ngOnInit() {
    this.SubCategories = [];
    let joinArrayCat = {
      subcategory_name: "",
      subcategory_id: "",
      category_id: "",
      description: "",
      category_image: "",
      subcategory_page_name: "",
      type: ""
    };
    let CatCreateArray = {
      post_id: "",
      post_title: "",
      post_page_name: "",
      upload_image: "",
      featured_image: "",
      subcategory_page_name: "",
      type: "",
      video_url: ""
    };

    this.type_sent = "category";
    this.plt.ready().then(() => {
      // let n_id = this.plt.getQueryParam("id");
      // this.sub = this.route.params.subscribe(params => {
      //   this.id = params["id"];
      //   this.HomeSubFn(true, this.id);
      // });
    });
  }

  ionViewWillEnter() {
    let n_id = this.plt.getQueryParam("id");
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.HomeSubFn(true, this.id);
    });
    this.hideImgGrid();
  }

  ionViewDidLoad(){
    // setTimeout(function(){ 
    //   this.EqualHeight();
    // },1500);

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


  open_out_url(urlthis) {
    console.log('External URL urlthis Post Chandan ==> ' + urlthis);
    let URL = urlthis;
    // let target = "_blank";
    // const browser = this.iab.create(URL, target);
    // browser.on("loadstop").subscribe(event => {
    //   // browser.insertCSS({ code: "body{color: red;" });
    // });
    // return false;
    let target = "_blank";
      const browser = this.iab.create(URL, target, this.option);
      browser.on("loadstop").subscribe(event => {
        // browser.insertCSS({ code: "body{color: red;" });
      });
      return false;


  }
  HomeSubFn(refresh = false, id) {
    let self = this;
    if (
      this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline
    ) {
      this.storage.get("CategoryDataSQLite").then(val => {
        this.result = val;
       // console.log('this.result all Sub categories data => '+JSON.stringify(this.result));
        for (let CatData of this.result) {
          let dataArray = CatData.data;

          let z = 0;
          let o = 0;
          console.log('offline id => '+id);
          for (let newArray of dataArray) {
            let catIDNew = newArray.subcategory_id;
            if (catIDNew == id) {
              this.PostData = newArray.posts;
              this.description = newArray.description;
              this.CategoryData = newArray.category_data;
              this.MainPageName = newArray.subcategory_name;
              this.OptionalPageName = newArray.subcategory_page_name;
              let c = 1;
              for (let SubCats of newArray.subcats) {
                console.log('SubCats.category_image ==> '+ SubCats.category_image);
                if (
                  typeof SubCats.category_image != "undefined" &&
                  SubCats.category_image != ""
                ) {
                  this.CategoryImage = +c;
                  this.CategoryImageTrue = true;
                }
                if (
                  typeof SubCats.featured_image != "undefined" &&
                  SubCats.featured_image != ""
                ) {
                  this.CategoryImage = +o;
                  this.CategoryImageTrue = true;
                  // this.type_sent = 'post';
                }
                o++;
                c++;
              }
             
              let joinArrayCat = {
                subcategory_name: "",
                subcategory_id: "",
                category_id: "",
                description: "",
                category_image: "",
                subcategory_page_name: "",
                type: ""
              }; 
             
              this.CreateCatArray = [];
              for (let mainCatData of newArray.subcats) {
                let subcategory_name = mainCatData.subcategory_name;
                let subcategory_id = mainCatData.subcategory_id;
                let category_id = mainCatData.category_id;
                let description = mainCatData.description;
                let category_image = mainCatData.category_image;
                let subcategory_page_name = mainCatData.subcategory_page_name;
                let type = mainCatData.type;
              //   if (category_image != "undefined" &&  category_image != "") {
              //     this.CategoryImageTrue = true;
              //  }
               
                
                let joinArrayCat = {
                  subcategory_name: subcategory_name,
                  subcategory_id: subcategory_id,
                  category_id: category_id,
                  description: description,
                  category_image: category_image,
                  subcategory_page_name: subcategory_page_name,
                  type: type
                };
                this.CreateCatArray.push(joinArrayCat);
              }

              let CatCreateArray = {
                post_id: "",
                post_title: "",
                post_page_name: "",
                upload_image: "",
                featured_image: "",
                subcategory_page_name: "",
                type: "",
                video_url: ""
              };
              this.CreatePostArray = [];
              for (let CatDataPost of this.PostData) {
                let post_id = CatDataPost.post_id;
                let post_content = CatDataPost.post_content;
                let post_title = CatDataPost.post_title;
                let post_page_name = CatDataPost.post_page_name;
                let upload_image = CatDataPost.upload_image;
                let featured_image = CatDataPost.featured_image;

                // if (upload_image != "undefined" &&  upload_image != "") {
                //    this.CategoryImageTrue = true;
                // }
                if (featured_image != "undefined" &&  featured_image != "") {
                  this.CategoryImageTrue = true;
               }
                
                let wps_subtitle = CatDataPost.wps_subtitle;
                let type = CatDataPost.type;
                let video_url = CatDataPost.video_url;
                let pdf_image_for_subcategory = CatDataPost.pdf_image_for_subcategory;


                let CatCreateArray = {
                  post_id: post_id,
                  post_content: post_content,
                  post_title: post_title,
                  post_page_name: post_page_name,
                  upload_image: upload_image,
                  featured_image: featured_image,

                  wps_subtitle: wps_subtitle,
                  pdf_image_for_subcategory: pdf_image_for_subcategory,
                  type: type,
                  video_url: video_url
                };
                this.CreatePostArray.push(CatCreateArray);
              }
            }
            z++;
          }

          this.SubCategories = this.CreateCatArray.concat(this.CreatePostArray);

          
         
        } 
        this.ArrangeCategory = this.SubCategories;
        console.log('ArrangeCategory Offline'+ JSON.stringify(this.ArrangeCategory));
       // debugger;
        setTimeout(function(){
          self.EqualHeight();
          },100);
      });
    } else {
      let definedthis = window.itemsini;
      let ctt = 0;
      for (let itemsingle of definedthis) {
        if (itemsingle["active"] == "active") {
          window.itemsini[ctt]["name"] = "subcategory/" + id;
          window.itemsini[ctt]["active"] = "active";
        }
        ctt++;
      }
      this.apiservice.HomeCategory(id).then(
        res => {
          this.result = res;
          if (this.result.code == "200") {
            this.SubCategories = this.result.data;
            this.description = this.result.description;
            this.CategoryData = this.result.category_data;

           
            let s = 1;
            let c = 1;
            let p = 1;
            let indexall = 0;
            this.ArrangeCategory = [];
            for (let SubCats of this.SubCategories) {
             // console.log('this.SubCategories.category_position => ' + SubCats.category_position)

             //console.log('SubCats.category_position'+ SubCats.category_position);

            // this.ArrangeCategory = this.SubCategories;
            this.ArrangeCategory = this.SubCategories;
             
              console.log('SubCats category_position => ' + SubCats.category_position);
            /*  if (SubCats.category_position != '' && SubCats.category_position != 0) {
                if (this.ArangeTrue == false) {
                  var index = this.SubCategories.findIndex(
                  p => p.category_position == c
                );


                

                  //console.log('index ==> ' + index); 

                  let softVal = SubCats.category_position;
                  // this.ArrangeCategory.push(softVal)
                  // console.log('softVal ==> ' + softVal);
                  // let sortedArray: number[] = softVal.sort((n1, n2) => n1 - n2);
                  // const sorted = this.ArrangeCategory.slice().sort((sa, b) => a - b) // Make a copy with .slice()
                  //console.log('sortedArray ==> ' + sortedArray) // Array(5) [ 1.25, 2.33, 4.55, 13.44, 16.37 ]
                  
                  this.ArrangeCategory.push(this.SubCategories[index]);
                  //sort
                  c++; 

                     
                 //this.ArangeTrue = true;
                  //console.log('Arrange Ture');
                }
              } else {
                //console.log('Arrange false');
               // this.ArrangeCategory = [];
               
                this.ArrangeCategory = this.SubCategories;
              //  console.log('else cond Cat');
              }*/
 
            
			        //console.log('SubCategories' +this.SubCategories);
              //this.ArrangeCategory = this.SubCategories;
              console.log('SubCats.category_image ==> '+SubCats.category_image);
              console.log('SubCats.category_image ==> '+SubCats.type);
              console.log('SubCats.featured_image ==> '+SubCats.featured_image);
              console.log('SubCats.featured_image ==> '+SubCats.featured_image);
              console.log('SubCats.featured_image ==> '+SubCats.type);


              if (
                typeof SubCats.category_image != "undefined" &&
                SubCats.category_image != ""
              ) { console.log('here');
               this.CategoryImage = +s;
              this.CategoryImageTrue = true;

                // this.type_sent = 'post';
              }

              if (
                typeof SubCats.featured_image != "undefined" &&
                SubCats.featured_image != ""
              ) {  console.log('there');
               this.CategoryImage = +p;
               
              this.CategoryImageTrue = true;
                // this.type_sent = 'post';
              }
              p++;
              s++;
                 
              //s++;
            }
            
            console.log('this.ArrangeCategory Type of Data ==> '+this.ArrangeCategory);  
           
            
            for (let CatData of this.CategoryData) {
              this.MainPageName = CatData.category_name;
              this.OptionalPageName = CatData.category_page_name;
              if (
                typeof CatData.category_video_url != "undefined" &&
                CatData.category_video_url != ""
              ) {
                this.show = true;
                this.categoryvideourl = CatData.category_video_url;
              } else {
                this.categoryvideourl = "";
              }
            }
            console.log(this.categoryvideourl);
           
           setTimeout(function(){
            self.EqualHeight();
            },100);
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

  pdfClickOption(post_id) {
  //  console.log('Sub Category Event Fire==>' + post_id);
    console.log(JSON.stringify(post_id));
    this.storage.get('pdf_local_url_' + post_id).then(data => {
      //console.log('dataCAt = > ' + JSON.stringify(data))
      if (data) {
        if (this.plt.is("ios")) {
         //this.document.viewDocument(data, "application/pdf", {});
         // let PDFURL =  'http://www.africau.edu/images/default/sample.pdf'
         let PDFURL =  data;
         console.log('External URL urlthis Post Chandan ==> ' + PDFURL);
   
		   let target = "_blank";
		   const browser = this.iab.create(PDFURL, '_blank', 'location=no, zoom=no, toolbar=no, closebuttoncaption=Close, close.setText("Close")' );

		   browser.on("loadstop").subscribe(event => {
			 // browser.insertCSS({ code: "body{color: red;" });
			 
		   });
		   return false;
		  } else {
		  this.fileOpener
			.open(data, "application/pdf")
			.then(() => console.log("File is opened"))
			.catch(e => console.log("Error opening file", e));
			console.log("PDF AndroidS");
        }
      } else {



      }
    });
  }
  /*goBack() {
		
    window.history.back();
  }*/

  goBack(id, type_sent) {

    if (
      this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline
    ) {
      window.history.back();
    } else {
      this.apiservice.getParentPage(id, type_sent).then(
        res => {
          this.result = res;
          if (this.result.code == "200") {
           // console.log("getParentPage " + this.result.ParentPage_id);
            if (this.result.ParentPage_id == "home") {
              //Home
              this.navCtrl.navigateBack("/home");
            } else if (this.result.ParentPage_id == "video") {
              //Videos
              this.navCtrl.navigateBack("/video");
            } else if (this.result.ParentPage_id == "cheatsheets") {
              //Cheat Sheet
              this.navCtrl.navigateBack("/cheatsheets");
            } else if (this.result.ParentPage_id == "whichtest") {
              //Which Test
              this.navCtrl.navigateBack("/whichtest");
            } else {
              this.navCtrl.navigateBack(
                "subcategory/" + this.result.ParentPage_id
              );
            }
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

  HomeSubInnFn(idsub) {
    this.navCtrl.navigateForward(["subcategory/" + idsub]);
  }
  HomePostDetail(postId) {
    this.navCtrl.navigateForward(["postdetail/" + postId]);
  }
  playBtn(postId, from) {
    if (from == "from_post") {
      this.navCtrl.navigateForward(["videopost/" + postId]);
    } else {
      this.navCtrl.navigateForward([
        "videopost/" + postId + "?from_category=yes"
      ]);
      // this.navCtrl.navigateForward(['videopost/' + postId]);
    }
  }

  
  EqualHeight1(){
  
  //  this.winResizeFn();
    var resizeTimer;

$(window).on('resize', function(e) {
///  this.resizeHeight();
  console.log('resize Start Function');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
  console.log('resize COmplete fn');
   
  
    // Run code here, resizing has "stopped"
            
  }, 250);  

});
  } 

  EqualHeight(){

   // console.log('EqualHeightFn')
 //   let elementHeight =  $('.homeListItom').find('li').length;
  //  console.log('elementHeight', elementHeight);
    // let maxHeight = Math.max.apply(null, $(".homeListItom li").map(function ()
    // {
    //     return $(this).height();
    // }).get());

    var heights = $(".homeListItom.SubCategoryPage.Image li").map(function ()
    {
        return $(this).outerHeight();
    }).get();

    let maxHeight = Math.max.apply(null, heights);
    console.log('maxHeight'+ maxHeight);
    $(".homeListItom.SubCategoryPage.Image li").each(function(){
      if(maxHeight > 0){
        $(this).css('height', maxHeight+'px');
        setTimeout(function(){
          $(".homeListItom.SubCategoryPage.Image li").each(function(){
            $(this).css('visibility', 'visible');
           
          });
        },300); 
      }else{
        setTimeout(function(){
          $(".homeListItom.SubCategoryPage.Image li").each(function(){
            $(this).css('visibility', 'visible');
        
          });
        },300);
      }
    });


    var resizeTimer;

    $(window).on('resize', function(e) {
      $(".homeListItom.SubCategoryPage.Image li").each(function(){
        $(this).css('height', 'auto');
    
      });
     console.log('resize Start Function');
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
      console.log('resize COmplete fn');
      var heights = $(".homeListItom.SubCategoryPage.Image li").map(function ()
      {
          return $(this).outerHeight();
      }).get();
  
      let maxHeight = Math.max.apply(null, heights);
      console.log('maxHeight'+ maxHeight);
      $(".homeListItom.SubCategoryPage.Image li").each(function(){
        if(maxHeight > 0){
          $(this).css('height', maxHeight+'px');
          setTimeout(function(){
            $(".homeListItom.SubCategoryPage.Image li").each(function(){
              $(this).css('visibility', 'visible');
             
            });
          },300); 
        }else{
          setTimeout(function(){
            $(".homeListItom.SubCategoryPage.Image li").each(function(){
              $(this).css('visibility', 'visible');
          
            });
          },300);
        }
      });
      }, 250);  
    
    });

    
 }

 hideImgGrid(){
  $(".homeListItom.SubCategoryPage.Image li").each(function(){
    $(this).css('visibility', 'hidden');
    $(this).css('height', 'auto');

  });
 }

 resizeHeight(){
  $(".homeListItom.SubCategoryPage.Image li").each(function(){
    $(this).css('height', 'auto');

  });
 }



  loadData(refresh = false, refresher?) {
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      if (refresher) {
        refresher.target.complete();
        //this.LoaderShow = false;
      }
    }else{
  this.apiservice.HomeCategory(this.id).then(
      res => {
        this.result = res;
        if (this.result.code == "200") {
          this.SubCategories = this.result.data;
          this.description = this.result.description;
          this.CategoryData = this.result.category_data;

          let s = 1;
          for (let SubCats of this.SubCategories) {
            if (
              typeof SubCats.category_image != "undefined" &&
              SubCats.category_image != ""
            ) {
              this.CategoryImage = +s;
              this.CategoryImageTrue = true;
              // this.type_sent = 'post';
            }

            s++;
          }
          for (let CatData of this.CategoryData) {
            this.MainPageName = CatData.category_name;
            this.OptionalPageName = CatData.category_page_name;
            if (
              typeof CatData.category_video_url != "undefined" &&
              CatData.category_video_url != ""
            ) {
              this.show = true;
              this.categoryvideourl = CatData.category_video_url;
            } else {
              this.categoryvideourl = "";
            }
          }
          console.log(this.categoryvideourl);
          console.log(this.SubCategories);
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
}




