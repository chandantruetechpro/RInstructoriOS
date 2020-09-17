import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouteReuseStrategy } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';
 

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { Network } from '@ionic-native/network/ngx';
import { Apiservice } from '../providers/apiservice';
 import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { Storage } from '@ionic/storage';
import {SharedModule} from './shared/shared.module';
import { HTTP } from '@ionic-native/http/ngx';
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { File } from "@ionic-native/File/ngx";
//import { Capacitor } from '@capacitor/core';
//import { Plugins } from '@capacitor/core';
// import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { Device } from '@ionic-native/device/ngx';





// import { CacheModule } from "ionic-cache";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer/ngx";
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, SharedModule, IonicModule.forRoot(), AppRoutingModule, BrowserModule,  IonicStorageModule.forRoot({
    name: '__mydb', driverOrder: ['indexeddb', 'sqlite', 'websql'] }),
    HttpClientModule, ],

  providers: [
    StatusBar,
    SplashScreen,
    // VideoPlayer,
    InAppBrowser,
    Apiservice,
    HTTP,
    DocumentViewer,
    FileOpener,
    File,
    FileTransfer,
     AppAvailability,
     Device,
 { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Network,
    //Storage,
    

   ],
  bootstrap: [AppComponent]
})
export class AppModule {}
