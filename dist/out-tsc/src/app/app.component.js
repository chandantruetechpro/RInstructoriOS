import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NetworkService, ConnectionStatus } from '../providers/network.service';
import { OfflineManagerService } from '../providers/offline-manager.service';
// import { CacheService } from "ionic-cache";
import { Storage } from '@ionic/storage';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, offlineManager, networkService, storage) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.offlineManager = offlineManager;
        this.networkService = networkService;
        this.storage = storage;
        this.initializeApp();
        if (this.platform.is('android')) {
            this.statusBar.overlaysWebView(false);
            this.statusBar.backgroundColorByHexString('#ffffff');
        }
        this.platform.backButton.subscribe(() => {
            // code that is executed when the user pressed the back button
        });
        // cache.setDefaultTTL(0 * 0);
        // To prevent interference with ionic's own backbutton handling
        // you can subscribe with a low priority instead
        this.platform.backButton.subscribeWithPriority(0, () => {
            // code that is executed when the user pressed the back button
            // and ionic doesn't already know what to do (close modals etc...)
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.networkService.onNetworkChange().subscribe((status) => {
                if (status == ConnectionStatus.Online) {
                    this.offlineManager.checkForEvents().subscribe();
                }
            });
            setTimeout(function () {
                //navigator.splashScreen.hide();
            }, 500);
        });
        // this.goBack();
    }
    goBack() {
        //  alert('Hello World');
        console.log('back Button Inli...');
        window.history.back();
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        SplashScreen,
        StatusBar,
        OfflineManagerService,
        NetworkService,
        Storage])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map