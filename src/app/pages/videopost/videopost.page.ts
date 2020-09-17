import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../../providers/apiservice';
import { Platform } from '@ionic/angular';
import { NetworkService, ConnectionStatus } from '../../../providers/network';
import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';
import { tap, map, catchError } from "rxjs/operators";
import { OfflineManagerService } from '../../../providers/offline-manager.service';
// import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
// import { DocumentViewerOptions  } from '@ionic-native/document-viewer/ngx';

import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

// import { CacheService } from "ionic-cache";
import { LoadingController } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DomSanitizer} from '@angular/platform-browser';
import {
  InAppBrowser,
  InAppBrowserObject,
  InAppBrowserOptions
} from "@ionic-native/in-app-browser/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
declare let window: any;

// const options: DocumentViewerOptions = {
	  // title: 'My PDF'
	//}

@Component({
  selector: "app-videopost",
  templateUrl: "./videopost.page.html",
  styleUrls: ["./videopost.page.scss"],
  host: {
   // '(document:click)': 'onClick($event)'
  }
})
export class VideopostPage implements OnInit {
  result: any;
  PostData: any = [];
  postId: any;
  post: any;
  postContent: any;
  PostTitle: any;
  optionalTitle: any;
  PostVideo: any;
  external_url: any;
  ExternalURLFromAPI: any;
  videoPoster: any;
  type_sent: any;
  from_category: any;


  constructor(
    private apiservice: Apiservice,
    private plt: Platform,
    private networkService: NetworkService,
    private storage: Storage,
    private offlineManager: OfflineManagerService,
    // private cache: CacheService,
    public loadingCtrl: LoadingController,
    private route: ActivatedRoute,
    public navCtrl: NavController,
    private sanitizer: DomSanitizer,
    private fileOpener: FileOpener,
    private document: DocumentViewer,
    private iab: InAppBrowser // private document: DocumentViewer,
    
  ) {

   

 

  }

  ngOnInit() {
    // console.log('Post Detail Page');
    let n_id = this.plt.getQueryParam("postId");
    this.from_category = "No";
    if (window.location.href.indexOf("from_category") >= 0) {
      this.from_category = "Yes";
    }
    this.type_sent = "post";
    this.post = this.route.params.subscribe(params => {
      this.postId = params["postId"];
      // console.log('pageID =>  ngInit ==> ' + this.postId);
      this.postDetail(this.postId);
    });
  }

  options: InAppBrowserOptions = {
    location: "no", //Or 'no'
    hidden: "no", //Or  'yes'
    zoom: "no", //Android only ,shows browser zoom controls
    hideurlbar: "yes", //Or 'no'
    closebuttoncaption: 'Back!',
    closebuttoncolor:'#ffffff',
    clearcache: 'yes',
    hardwareback: 'yes',
    hidenavigationbuttons: 'yes',
    footer:'yes',
    toolbar:'yes', 
    disallowoverscroll:'no',
    toolbarposition: 'bottom',
    //fullscreen:'yes',
   // enableViewportScale: 'yes',
   // usewkwebview:'yes',
  
  };


 
  open_out_url1(urlthis) {
   // alert(4544545);
    let URL = urlthis;
    let target = "_blank";
    const browser = this.iab.create(URL, target);
    browser.on("loadstop").subscribe(event => {
      // browser.insertCSS({ code: "body{color: red;" });
    });
    return false;
  }

  public open_out_url(urlthis: string) {
    console.log('External URL urlthis Chandan Video Post ==> ' + urlthis);
    let target = "_blank";
    this.iab.create(urlthis, target, this.options);
  }

  postDetail(postId) {
    let definedthis = window.itemsini;
    let ctt = 0; 
    for (let itemsingle of definedthis) {
      if (itemsingle["active"] == "active") {
        window.itemsini[ctt]["name"] = "videopost/" + postId;
      }
      ctt++;
    }

    // debugger;
    this.apiservice.PostDetail(postId, this.from_category).then(
      res => {
        this.result = res;

        if (this.result.code == "200") {
          this.PostData = this.result.data;
          for (let content of this.PostData) {
            if (content.pdf_image != "" && content.external_url == "") {
              // this.document.viewDocument(content.pdf_image, 'application/pdf', options)
              //window.open(content.pdf_image, "_system", "location=yes");

              // console.log(content.pdf_image);
              // this.ExternalURLFromAPI = content.pdf_image;
              // this.open_out_url(this.ExternalURLFromAPI);
			  
			  this.storage.get('pdf_local_url_'+postId).then(data=> { 
          
					if(data) { 
            if (this.plt.is("ios")) {
             //this.document.viewDocument(data, "application/pdf", {});
         // let PDFURL =  'http://www.africau.edu/images/default/sample.pdf'
          let PDFURL =  data;
          console.log('External URL urlthis Video Details Post Chandan ==> ' + PDFURL);
    
    let target = "_blank";
    const browser = this.iab.create(PDFURL, '_blank', 'location=no, zoom=no, toolbar=no, closebuttoncaption=Close, close.setText("Close") ' );

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
					}else{
						
					}				
				});
              window.history.back();
            } else if (content.external_url != "" && content.video_url == "") {
              this.ExternalURLFromAPI = content.external_url;
              console.log(this.ExternalURLFromAPI);
              this.external_url = "Yes";
              this.open_out_url(this.ExternalURLFromAPI);
              window.history.back();
            } else {
              this.PostVideo = content.video_url;
              this.videoPoster = content.video_poster;
              this.external_url = "No";
            }
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

  /*goBack() {
    window.history.back();
  }*/

  goBack(postId, type_sent) {
    if (
      this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline
    ) {
      window.history.back();
    } else {
      if (
        window.location.href.indexOf("from_search") >= 0 ||
        window.location.href.indexOf("from_category") >= 0
      ) {
        window.history.back();
      } else {
        this.apiservice.getParentPage(postId, type_sent).then(
          res => {
            this.result = res;
            if (this.result.code == "200") {
              // console.log('getParentPage ' + this.result.ParentPage_id);
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
  }
  loadData(refresh = false, refresher?) {

    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      if (refresher) {
        refresher.target.complete();
        //this.LoaderShow = false;
      }
    }else{
   
    this.apiservice.PostDetail(this.postId, this.from_category).then(
      res => {
        this.result = res;

        if (this.result.code == "200") {
          this.PostData = this.result.data;
          for (let content of this.PostData) {
            if (content.pdf_image != "" && content.external_url == "") {
              // this.document.viewDocument(content.pdf_image, 'application/pdf', options)
              window.open(content.pdf_image, "_system", "location=yes");

              // console.log(content.pdf_image);
              // this.ExternalURLFromAPI = content.pdf_image;
              // this.open_out_url(this.ExternalURLFromAPI);
              window.history.back();
            } else if (content.external_url != "" && content.video_url == "") {
              this.ExternalURLFromAPI = content.external_url;
              console.log(this.ExternalURLFromAPI);
              this.external_url = "Yes";
              this.open_out_url(this.ExternalURLFromAPI);
              window.history.back();
            } else {
              this.PostVideo = content.video_url;
              this.videoPoster = content.video_poster;
              this.external_url = "No";
            }
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
}





