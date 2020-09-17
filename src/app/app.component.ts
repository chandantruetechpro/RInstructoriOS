import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core'

import { Platform } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { NetworkService, ConnectionStatus } from '../providers/network.service'
import { OfflineManagerService } from '../providers/offline-manager.service'
// import { CacheService } from "ionic-cache";
import { Storage } from '@ionic/storage'
import { Router } from '@angular/router'
import { NavController } from '@ionic/angular'
import { ActivatedRoute } from '@angular/router'
import { Apiservice } from '../providers/apiservice'
import * as $ from 'jquery';
// import { AppAvailability } from '@ionic-native/app-availability/ngx';

import {
  InAppBrowser,
  InAppBrowserObject,
  InAppBrowserOptions
} from "@ionic-native/in-app-browser/ngx";

declare let window: any




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  host: {
    '(document:click)': 'onClick($event)'
  }

  // template: '<ion-footer><ion-toolbar><ion-title>Footer</ion-title></ion-toolbar></ion-footer>'
})
export class AppComponent {
  selected: any
  myId: any
  status: boolean = false
  public route: string
  classApplied = false
  public show: boolean = false
  public buttonName: any = 'Show'
  
  //parentNode: any;
  touchtime = 0;
  constructor (
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private offlineManager: OfflineManagerService,
    private networkService: NetworkService,
    private storage: Storage,
    public router: Router,
    public navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private apiservice: Apiservice,
    private _eref: ElementRef,
    private iab: InAppBrowser,
    // private appAvailability: AppAvailability
  ) {
    this.splashScreen.show();
    this.initializeApp()
    if (this.platform.is('android')) {
      this.statusBar.overlaysWebView(false)
      this.statusBar.backgroundColorByHexString('#ffffff')
    }
    this.platform.backButton.subscribe(() => {})

    this.platform.backButton.subscribeWithPriority(0, () => {})
    window.itemsini = []
    window.itemsini = [
      { name: 'home', active: 'active', index: 1, PageNameNew: 'Home' },
      { name: 'video', active: false, index: 2, PageNameNew: 'Videos' },
      {
        name: 'cheatsheets',
        active: false,
        index: 3,
        PageNameNew: 'Cheat Sheets'
      },
      { name: 'whichtest', active: false, index: 4, PageNameNew: 'Which Test?' }
    ]
    
  }
  get items () {
    return window.itemsini
  }

  initializeApp () {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault()

      this.splashScreen.hide()

      this.networkService
        .onNetworkChange()
        .subscribe((status: ConnectionStatus) => {
          if (status == ConnectionStatus.Online) {
            this.offlineManager.checkForEvents().subscribe()
          }
        })
      setTimeout(function () {}, 500)
    })
  }

  

  ionViewWillEnter () {}
  // options: InAppBrowserOptions = {
  //   location: "no", //Or 'no'
  //   hidden: "no", //Or  'yes'
  //   zoom: "yes", //Android only ,shows browser zoom controls
  //   hideurlbar: "yes", //Or 'no'
  //   closebuttoncaption: 'Back',
  //   clearcache: 'yes',
  //   hardwareback: 'yes',
  //   hidenavigationbuttons: 'yes',
  //   footer: 'yes',
  //   toolbar: 'yes',
  //   disallowoverscroll: 'no',
  //   toolbarposition: 'bottom',
  //   fullscreen: 'yes'
  // };


  options: InAppBrowserOptions = {
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

  ngOnInit () {
    this.myId = this.activatedRoute.snapshot.paramMap.get('myid')

    let self = this
    setTimeout(function () {
      var path = window.location.pathname
      var page = path.split('/').pop()

      $('.CustomFooter ion-toolbar#' + page).addClass('active');
      $('.CustomFooter ion-toolbar#' + page).trigger('click');

     

    }, 500);

    setTimeout(function () {
    $('.footInner ion-toolbar').eq(0).trigger('click');

    },1000);
    const hostElem = self._eref.nativeElement
    // window.addEventListener('mouseup', function (event) {
    //   var pol = document.getElementById('SearchSection')
    //   if (event.target != pol) {
    //     var inputText = document.getElementById('search_input')
    //     if (event.target != inputText) {
    //       var buttonTxt = document.getElementById('SearchComponent')
    //       if (event.target != buttonTxt) {
    //         self.show = false
    //       }
    //     }
    //   }
    // });

    document.onclick = (e) => {
      try {

        let event = e || window.event;
        let element: any = event.target || event.srcElement;
        let target = "_blank";
        if (element.tagName !== 'A')
          element = element.parentNode;
        if (element.tagName == 'A' && element.href !== undefined) {
          //this.iab.create(element.href, target, this.options);
          console.log('url Click App Component');
          this.iab.create(element.href, target, this.options);

          //this.iab.create(element.href, "_system", "location=yes,enableviewportscale=yes");
       // } else {

          //this.iab.create(urlthis, target, this.options);
          //options


          // if (this._isApp) {
          //   this.iab.create(element.href, "_system", "location=yes,enableviewportscale=yes");
          // } else {
          //   window.open(element.href, "_system", "location=yes");
          // }
          return false;
        }
      } catch (e) {

      }
    };


  //   document.onclick =  (e) => {
  //     e = e ||  window.event;
  //     let element:any = e.target || e.srcElement;

  //     if (element.tagName == 'A') {
  //       alert('sadfasdfsa');
  //       e.preventDefault();
     
  //         window.open(element.href, "_blank", "location=yes");
  //         return false;
  //     }
  // };

    
    
    //console.log('URLA==>' + URLA.getAttribute("href"));

  }

  OnInput (event: any) {
    let self = this

    this.navCtrl.navigateForward(['search/' + event.target.value])
    self.show = false
  }

  goBack () {
    window.history.back()
  }

  select (item) {
	this.selected = item
	let definedthis = window.itemsini
	let ctt = 0
	for (let itemsingle of definedthis) {
		if (itemsingle['name'] == item.name) {
			window.itemsini[ctt]['active'] = 'active'
		} else {
			window.itemsini[ctt]['active'] = false
		}
		ctt++
	}
	  
	// alert(item.name);
	  
	if (this.touchtime == 0) {
        // set first click
        this.touchtime = new Date().getTime();
    } else {
        // compare first click to this click and see if they occurred within double click threshold
        if (((new Date().getTime()) - this.touchtime) < 800) {
            // double click occurred
			console.log('double click occurred');
            this.touchtime = 0;
			
			
			  let definedthis = window.itemsini;
          for (let itemsingle of definedthis) {
            if (itemsingle['active'] == 'active' && itemsingle['PageNameNew'] == 'Home') {
              window.itemsini[0]["name"] = "home";

              this.navCtrl.navigateForward(['home/']);
            } else if (itemsingle['active'] == 'active' && itemsingle['PageNameNew'] == 'Videos') {
              window.itemsini[1]["name"] = "video";

              this.navCtrl.navigateForward(['video/']);

            } else if (itemsingle['active'] == 'active' && itemsingle['PageNameNew'] == 'Cheat Sheets') {
              window.itemsini[2]["name"] = "cheatsheets";
              this.navCtrl.navigateForward(['cheatsheets/']);
            } else if (itemsingle['active'] == 'active' && itemsingle['PageNameNew'] == 'Which Test?') {
              window.itemsini[3]["name"] = "whichtest";
              this.navCtrl.navigateForward(['whichtest/']);
            }

          }
			
        } else {
            // not a double click so set as a new first click
            this.touchtime = new Date().getTime();
        }
    }
	
  }
  isActive (item) {
    return this.selected === item
  }

  onClick (event) {}

  showHide () {
    this.show = !this.show
    if (this.show) this.buttonName = 'Hide'
    else this.buttonName = 'Show'
  }
}
