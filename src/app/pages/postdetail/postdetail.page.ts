import { Component, OnInit } from "@angular/core";
import { Apiservice } from "../../../providers/apiservice";
import { Platform } from "@ionic/angular";
import { NetworkService, ConnectionStatus } from "../../../providers/network";
import { Storage } from "@ionic/storage";
import { Observable, from } from "rxjs";
import { tap, map, catchError } from "rxjs/operators";
import { OfflineManagerService } from "../../../providers/offline-manager.service";
// import { CacheService } from "ionic-cache";
import { LoadingController } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { InAppBrowser, InAppBrowserObject, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { DocumentViewer, DocumentViewerOptions  } from '@ionic-native/document-viewer/ngx';
import {  FileTransfer,  FileUploadOptions,  FileTransferObject} from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/File/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import * as $ from 'jquery';

declare let window: any;
@Component({
  selector: "app-postdetail",
  templateUrl: "./postdetail.page.html",
  styleUrls: ["./postdetail.page.scss"]
})
export class PostdetailPage implements OnInit {
  result: any;
  resultpdf: any;
  PostData: any = [];
  postId: any;
  post: any;
  postContent: any;
  PostTitle: any;
  optionalTitle: any;
  PostVideo: any;
  PostID: any;
  pdf_image: any;
  type_sent: any;
  public show: boolean = false;
  public showpdf: boolean = false;
  postUrl: any;
  options: any;

  constructor(
    private apiservice: Apiservice,
    private plt: Platform,
    private networkService: NetworkService,
    private storage: Storage,
    private offlineManager: OfflineManagerService,
    public loadingCtrl: LoadingController,
    private route: ActivatedRoute,
    private iab: InAppBrowser,
    public navCtrl: NavController,
    private document: DocumentViewer,
    private fileOpener: FileOpener,
    private file: File,
    private ft: FileTransfer
  ) {
    const options: DocumentViewerOptions = {
      title: "pdf_image"
    };
  }

  ngOnInit() {
    let n_id = this.plt.getQueryParam("postId");
    // this.type_sent = 'post';

    let definedthis2 = window.itemsini;
    this.type_sent = "post";
    for (let itemsingle2 of definedthis2) {
      if (
        itemsingle2["active"] == "active" &&
        itemsingle2["PageNameNew"] == "Cheat Sheets"
      ) {
        this.type_sent = "post";
      }
    }

    this.post = this.route.params.subscribe(params => {
      this.postId = params["postId"];
      this.postDetail(true, this.postId);
    });
    console.log(this.postId);
    // if(this.postId  == 47 || this.postId  == 100 || this.postId  == 102 || this.postId  == 104){
    // this.type_sent = 'post';
    // }
    this.videoBtnFn();
    this.docClick();
  }

  pdfClickOption1(pdf_image, options) {
    // this.document.viewDocument(`${pdf_image}/my.pdf`, 'application/pdf', options);
    //<Route path="" component={}/> this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)

    this.document.viewDocument(`${pdf_image}`, "application/pdf", options);
    // <Route path="" component = {} /> this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)
  }

  pdfClickOption(post_id) {
    console.log('Post Event Fire==>' + post_id);
    this.storage.get('pdf_local_url_' + post_id).then(data => {
      if (data) {
        console.log('Post Event Data ==>' + data);
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
		/*this.apiservice.getpdf_for_specific_id(post_id).then(
		  res => {
			this.resultpdf = res;
			  if (this.resultpdf.code == "200") {
				this.pdfposts = this.resultpdf.data; 
				let pdf_image = this.pdfposts.pdf_image
				let post_title = this.pdfposts.post_title
				let newpdfname = post_title + '.pdf';
				if (this.plt.is("ios")) {
                    transfer.download(pdf_image, this.file.documentsDirectory + newpdfname).then((entry) => {
                      console.log('download complete: ' + entry.toURL());
                      this.storage.set('pdf_local_url_' + post_id, entry.toURL());
					  this.document.viewDocument(entry.toURL(), "application/pdf", {});
                    }, (error) => {
                      console.log('pdf save error')
                      console.log(error)
                    });
				} else {
                    transfer.download(pdf_image, this.file.dataDirectory + newpdfname).then((entry) => {
                      console.log('download complete: ' + entry.toURL());
                      this.storage.set('pdf_local_url_' + post_id, entry.toURL());
					  this.fileOpener
						.open(entry.toURL(), "application/pdf")
						.then(() => console.log("File is opened"))
						.catch(e => console.log("Error opening file", e));
					  console.log("PDF AndroidS");
                    }, (error) => {
                      console.log('pdf save error')
                      console.log(error)
                    });

				}
		      }
			},
			error => {
			  console.log("error");
			  console.log(error);
			  setTimeout(function () {
				$('.footInner ion-toolbar').eq(0).trigger('click');
			  }, 2000);
			  console.log("error");
			}
		);*/
      }
    });
  }


  docClick(){
    let self = this;
   $(document).on('click', 'a[href^=http], a[href^=https], a[href^=www]', function(e){
   
      e.preventDefault();
      var $this = $(this); 
      //var target = $this.data('inAppBrowser') || '_blank';
      let  linkurl = $this.attr('href');
      let target = "_blank";
  console.log('a Tag Href = > '+ linkurl);
  self.OpenExtUrl(linkurl);
      // const browser = this.iab.create(URL, target);
      // browser.on("loadstop").subscribe(event => {
      //   // browser.insertCSS({ code: "body{color: red;" });
      // });
      // return false;
    
     // window.open($this.attr('href'), target, 'location=no');
    });
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
  OpenExtUrl(HREFURL){
    let  hrefUrlNew = HREFURL;
      console.log('a Tag Click => '+hrefUrlNew);
      
      let target = "_blank";
      const browser = this.iab.create(HREFURL, target, this.option);
      browser.on("loadstop").subscribe(event => {
        // browser.insertCSS({ code: "body{color: red;" });
      });
      return false;
    }
  open_out_url(urlthis) {
    console.log('External URL urlthis Post Chandan ==> ' + urlthis);
    let URL = urlthis;
    let target = "_blank";
    const browser = this.iab.create(URL, target);
    browser.on("loadstop").subscribe(event => {
      // browser.insertCSS({ code: "body{color: red;" });
    });
    return false;
  }

  openURL(postUrl) {
    console.log('External URL postUrl Chandan  Post ==> ' + postUrl);
    let postUrNew = postUrl;
    let target = "_blank";
    const browser = this.iab.create(postUrNew, target);
    browser.on("loadstop").subscribe(event => {
      // browser.insertCSS({ code: "body{color: red;" });
    });
    return false;
  }

  postDetail(refresh = false, postId) {
    if (
      this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline
    ) {
      console.log('Post Details  Page =>');
      this.storage.get("PostDataSQLite").then(val => {
        this.result = val;
        console.log('Post Details  Data Offline => '+ JSON.stringify(this.result));

        for (let CatData of this.result) {
          let postDataArray = CatData.data;

          for (let newArray of postDataArray) {
            let catIDNew = newArray.post_id;

            if (catIDNew == postId) {
              newArray.post_id;
              this.PostTitle = newArray.post_title;
              this.optionalTitle = newArray.detail_page_name;
              this.postContent = newArray.post_content;
              this.PostVideo = newArray.video_url;
              this.PostID = newArray.post_id;
			  
              this.pdf_image = newArray.pdf_image;

              if (this.PostVideo != "" && this.PostVideo != "undefined") {
                this.show = true;
              } else {
              }

              if (this.pdf_image != "" && this.pdf_image != "undefined") {
                this.showpdf = true;
              } else {
              }
            }
          }
        }
      });
    } else {
      let definedthis = window.itemsini;
      let ctt = 0;
      for (let itemsingle of definedthis) {
        if (itemsingle["active"] == "active") {
          window.itemsini[ctt]["name"] = "postdetail/" + postId;
        }
        ctt++;
      }
      this.apiservice.PostDetail(postId, "No").then(
        res => {
          this.result = res;
          if (this.result.code == "200") {
            this.PostData = this.result.data;
            for (let content of this.PostData) {
              this.PostTitle = content.post_title;
              this.optionalTitle = content.detail_page_name;
              this.postContent = content.post_content;
              this.PostVideo = content.video_url;
              this.PostID = content.post_id;
              this.pdf_image = content.pdf_image;

              if (this.PostVideo != "" && this.PostVideo != "undefined") {
                this.show = true;
              } else {
              }

              if (this.pdf_image != "" && this.pdf_image != "undefined") {
                this.showpdf = true;
              } else {
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
  }

  /* goBack() {
    window.history.back();
  }*/

  goBackFull() {
    this.navCtrl.navigateBack("/home");
  }

  goBack(postId, type_sent) {
    if (
      this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline
    ) {
      window.history.back();
    } else {
      if (window.location.href.indexOf("from_search") >= 0) {
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

  playBtn(postId) {
    this.navCtrl.navigateForward(["videopost/" + postId + "?from_search=yes"]);
  }

  loadData(refresh = false, refresher?) {
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      if (refresher) {
        refresher.target.complete();
        //this.LoaderShow = false;
      }
    }else{

    //this.postDetail(true, this.postId);
    this.apiservice.PostDetail(this.postId, "No").then(
      res => {
        this.result = res;
        if (this.result.code == "200") {
          this.PostData = this.result.data;
          for (let content of this.PostData) {
            this.PostTitle = content.post_title;
            this.optionalTitle = content.detail_page_name;
            this.postContent = content.post_content;
            this.PostVideo = content.video_url;
            this.PostID = content.post_id;

            if (this.PostVideo != "" && this.PostVideo != "undefined") {
              this.show = true;
            } else {
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

  videoBtnFn() {}
}
