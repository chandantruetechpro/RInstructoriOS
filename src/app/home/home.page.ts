import { Platform } from '@ionic/angular';
import { Component, OnInit,NgModule } from '@angular/core';
import { Apiservice } from '../../providers/apiservice';

import { NetworkService, ConnectionStatus } from '../../providers/network';
import { Storage } from '@ionic/storage';
import { Observable, from, observable } from 'rxjs';
import { tap, map, catchError } from "rxjs/operators";
import { OfflineManagerService } from '../../providers/offline-manager.service';
// import { CacheService } from "ionic-cache";
import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [NavController, SharedModule]      
}) export class PageOneModule {}


@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
    result: any;
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
    public show: boolean = true;
    public buttonName: any = 'Show';
    constructor(
        private apiservice: Apiservice,
        private plt: Platform,
        private networkService: NetworkService, private storage: Storage, 

        public loadingCtrl: LoadingController,
        public navCtrl: NavController
    ) {

    }
    ngOnInit() {
        this.plt.ready().then(() => {

            this.homeListing(true);
        });
    }
    homeListing(refresh = false) {
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
        

            this.storage.get('categories').then((val) => {
                this.result = val;
                if (this.result.code == "200") {
                    this.categories = this.result.data;
                    this.keys = Object.keys(this.categories);
                    var newArray = [];
                    let s = 1;
                    for (let catsPos of this.categories) {
                        var index = this.categories.findIndex(p => p.category_position == s);
                    
                        this.ArrangeCategory.push(this.categories[index]);
                        s++;
                    }
                }
            });
        } else { 
            this.apiservice.homeListing_dataNewSQLite().then((res) => {
                let subCatUrl = 'get_posts_and_subcategories?category_id=';
                this.result = res;
                if (this.result.code == "200") {
                    this.categories = this.result.data;
                    this.keys = Object.keys(this.categories);
                    var newArray = [];
                    let s = 1;
                    for (let catsPos of this.categories) {
                        var index = this.categories.findIndex(p => p.category_position == s);
               
                        this.ArrangeCategory.push(this.categories[index]);
                        s++;
                    }
                }
            }, (error) => {
                console.log('error')
                console.log(error)
                console.log('error')
            });

        }
    }
    HomeSubFn(id) {
        this.navCtrl.navigateForward(['subcategory/' + id]);
    }
    openContact() {
        this.navCtrl.navigateForward(['contact/']);
    }
    loadData(refresh = false, refresher?) {
        //window.location.reload(true);
        this.apiservice.homeListing_dataNewSQLite(refresh).then((res) => {
            this.result = res;
            if (this.result.code == "200") {
                this.categories = this.result.data;
                this.keys = Object.keys(this.categories);
                var newArray = [];
                let s = 1;this.ArrangeCategory = [];
                for (let catsPos of this.categories) {
                    var index = this.categories.findIndex(p => p.category_position == s);
           
                    this.ArrangeCategory.push(this.categories[index]);
                    s++;
                }
            }
            
            if (refresher) {
                refresher.target.complete();
            }
        }, (error) => {
            console.log('error');
            console.log(error);
            console.log('error');
        });
        
    }

    updateUser(id) {
    }


}
