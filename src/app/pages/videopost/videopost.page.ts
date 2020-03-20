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

// import { CacheService } from "ionic-cache";
import { LoadingController } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DomSanitizer} from '@angular/platform-browser';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
declare let window: any;

// const options: DocumentViewerOptions = {
	  // title: 'My PDF'
	// }
	
@Component({
  selector: 'app-videopost',
  templateUrl: './videopost.page.html',
  styleUrls: ['./videopost.page.scss'],
})

export class VideopostPage implements OnInit {
  result: any;
  PostData: any = [];
  postId:any;
  post:any;
  postContent:any;
  PostTitle :any;
  optionalTitle:any;
  PostVideo:any;
  external_url:any;
  ExternalURLFromAPI:any;
  videoPoster:any;
  type_sent: any;
  from_category: any;

	
  constructor(
    private apiservice: Apiservice,
    private plt: Platform,
    private networkService: NetworkService, private storage: Storage, private offlineManager: OfflineManagerService,
    // private cache: CacheService,
    public loadingCtrl: LoadingController,
    private route: ActivatedRoute,
    public navCtrl: NavController,
	private sanitizer:DomSanitizer,
	private iab: InAppBrowser,
	// private document: DocumentViewer,
  ) { }
  

  ngOnInit() {
    // console.log('Post Detail Page');
    let n_id = this.plt.getQueryParam("postId");
   this.from_category = 'No';
   if(window.location.href.indexOf('from_category') >= 0){
	this.from_category = 'Yes';
   }
	this.type_sent = 'post';	
    this.post = this.route.params.subscribe(params => {
      this.postId = params['postId'];
      // console.log('pageID =>  ngInit ==> ' + this.postId);
      this.postDetail(this.postId);
    });
  }
  open_out_url(urlthis){
    let URL = urlthis;
    let target = "_blank";
    const browser = this.iab.create(URL, target);
    browser.on('loadstop').subscribe(event => {
      // browser.insertCSS({ code: "body{color: red;" });
    });
	return false;
	
  }
  postDetail(postId) {
	  
	  let definedthis = window.itemsini;let ctt = 0;
	  for (let itemsingle of definedthis) {
		  if(itemsingle['active'] == 'active'){ 
			  window.itemsini[ctt]['name'] = 'videopost/'+postId;
		  }
		  ctt++;
	  }
  
  
   // debugger;
    this.apiservice.PostDetail(postId, this.from_category).then((res) => {
      this.result = res;

       if (this.result.code == "200") {
        this.PostData = this.result.data;
        for (let content of this.PostData) {
		  if(content.pdf_image != '' && content.external_url == ''){
			  // this.document.viewDocument(content.pdf_image, 'application/pdf', options)
			  window.open(content.pdf_image, '_system', 'location=yes');
			  
			  // console.log(content.pdf_image);
			  // this.ExternalURLFromAPI = content.pdf_image;
			  // this.open_out_url(this.ExternalURLFromAPI);
			  window.history.back();
		  }else if(content.external_url != '' && content.video_url == ''){
			  this.ExternalURLFromAPI = content.external_url;
			  console.log(this.ExternalURLFromAPI);
			  this.external_url =   'Yes';
			  this.open_out_url(this.ExternalURLFromAPI);
			  window.history.back();
		  }else{
			  this.PostVideo =   content.video_url;
			  this.videoPoster =   content.video_poster;
			  this.external_url =   'No';
			  
		  }         
          
        }
        
      }
    }, (error) => {
      console.log('error')
      console.log(error)
      console.log('error')
    });
  }

  /*goBack() {
    window.history.back();
  }*/
  
  goBack(postId,type_sent) {
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) { 
      window.history.back();
    }else{
      if(window.location.href.indexOf('from_search') >= 0 || window.location.href.indexOf('from_category') >= 0){
        window.history.back();
      }else{
        this.apiservice.getParentPage(postId,type_sent).then((res) => {
          this.result = res;
          if (this.result.code == "200") {
            // console.log('getParentPage ' + this.result.ParentPage_id);
            if(this.result.ParentPage_id == 'home'){ //Home
              this.navCtrl.navigateForward('/home');	
            }else if(this.result.ParentPage_id == 'video'){ //Videos
              this.navCtrl.navigateForward('/video');		
            }else if(this.result.ParentPage_id == 'cheatsheets'){ //Cheat Sheet
              this.navCtrl.navigateForward('/cheatsheets');	
            }else if(this.result.ParentPage_id == 'whichtest'){ //Which Test
              this.navCtrl.navigateForward('/whichtest');	
            }else{
              this.navCtrl.navigateForward('subcategory/' + this.result.ParentPage_id);	
            }
            
          }			
          
        }, (error) => {
          console.log('error')
          console.log(error)
          console.log('error')
        });
      }
    }
  }	
  loadData(refresh = false, refresher?) {

    this.apiservice.PostDetail(this.postId, this.from_category).then((res) => {
      this.result = res;

       if (this.result.code == "200") {
        this.PostData = this.result.data;
        for (let content of this.PostData) {
          if(content.pdf_image != '' && content.external_url == ''){
            // this.document.viewDocument(content.pdf_image, 'application/pdf', options)
            window.open(content.pdf_image, '_system', 'location=yes');
            
            // console.log(content.pdf_image);
            // this.ExternalURLFromAPI = content.pdf_image;
            // this.open_out_url(this.ExternalURLFromAPI);
            window.history.back();
          }else if(content.external_url != '' && content.video_url == ''){
            this.ExternalURLFromAPI = content.external_url;
            console.log(this.ExternalURLFromAPI);
            this.external_url =   'Yes';
            this.open_out_url(this.ExternalURLFromAPI);
            window.history.back();
          }else{
            this.PostVideo =   content.video_url;
            this.videoPoster =   content.video_poster;
            this.external_url =   'No';
            
          }         
              
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
