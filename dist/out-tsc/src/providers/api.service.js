import * as tslib_1 from "tslib";
import { OfflineManagerService } from './offline-manager.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NetworkService, ConnectionStatus } from './network.service';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';
import { tap, map, catchError } from "rxjs/operators";
const API_STORAGE_KEY = 'specialkey';
const API_URL = 'https://reqres.in/api';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import { map } from 'rxjs/operators';
const apiUrl = 'http://rinstructor.truetechpro.com/wp-json/wp/v2/';
//http://rinstructor.truetechpro.com/wp-json/wp/v2/posts
//let apiUrl = 'http://223.196.72.250/takeacross';
//let apiUrl = 'http://192.168.1.4/takeacross';
var internetMsg = 'Please check your internet connection';
var serverRespondMsg = 'Wait for server to respond, Please try again later';
var wrongMsg = 'Error in services connection';
var timeoutMsg = 'Timeout has occurred';
let ApiService = class ApiService {
    constructor(http, networkService, storage, offlineManager) {
        this.http = http;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
        this.homeCategory = [];
        this.getApiUrl = "http://rinstructor.truetechpro.com/wp-json/wp/v2/";
        this.API_URL_NEW = 'http://rinstructor.truetechpro.com/wp-json/wp/v2/';
    }
    get(query = '') {
        return this.http.get(this.API_URL_NEW + query);
    }
    getCategoriesHome() {
        this.get('homeCategory').subscribe((data) => {
            this.homeCategory = data;
        });
    }
    getcountries() {
        //   return new Promise((resolve, reject) => {
        //     if (this.InternetAvail != 'none') {
        //        // let headers = new Headers();
        //        // headers.append('Content-Type', 'application/json; charset=UTF-8');
        //         this.http.post(apiUrl + '/api/Get_countryList', null, { headers: Headers }).timeout(10000)
        //             .subscribe(res => {
        //                 resolve(res.json());
        //             }, (err) => {
        //                 if (err.message == timeoutMsg) {
        //                     reject(serverRespondMsg);
        //                 } else {
        //                     reject(wrongMsg);
        //                 }
        //             });
        //     } else {
        //         reject(internetMsg);
        //     };
        // });
        // this.http.get(apiUrl+'categories?parent=8', {}, {})
        // .then(data => {
        //   console.log(data.status);
        //   console.log(data.data); // data received by server
        //   console.log(data.headers);
        // })
        // .catch(error => {
        //   console.log(error.status);
        //   console.log(error.error); // error message as string
        //   console.log(error.headers);
        // });
    }
    howWorkshomePages() {
        //  this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
        //  return  this.http.get(this.getApiUrl).map((res : Response ) => res.json())    .catch(error => console.log(error));
        // return this.http.get('http://rinstructor.truetechpro.com/wp-json/wp/v2/categories?parent=8').pipe(
        //   map(res => res['data']), tap(res => {
        //     console.log('res CK => ' + res );
        //     this.setLocalData('homeData', res);
        //   })
        // )
    }
    homePages(forceRefresh = false) {
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
            // Return the cached data from Storage
            return from(this.getLocalData('users'));
        }
        else {
            // Just to get some "random" data
            let page = Math.floor(Math.random() * Math.floor(6));
            // Return real API data and store it locally
            return this.http.get(`${apiUrl}/categories?parent=8`).pipe(map(res => res['data']), tap(res => {
                this.setLocalData('homecat', res);
            }));
        }
    }
    getUsers(forceRefresh = false) {
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
            // Return the cached data from Storage
            return from(this.getLocalData('users'));
        }
        else {
            // Just to get some "random" data
            let page = Math.floor(Math.random() * Math.floor(6));
            // Return real API data and store it locally
            return this.http.get(`${API_URL}/users?per_page=2&page=${page}`).pipe(
            // return this.http.get(`${apiUrl}categories?parent=8`).pipe(
            map(res => res['data']), tap(res => {
                console.log('res ==> Working------' + JSON.stringify(res));
                this.setLocalData('users', res);
            }));
        }
    }
    updateUser(user, data) {
        let url = `${API_URL}/users/${user}`;
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
            return from(this.offlineManager.storeRequest(url, 'PUT', data));
        }
        else {
            return this.http.put(url, data).pipe(catchError(err => {
                this.offlineManager.storeRequest(url, 'PUT', data);
                throw new Error(err);
            }));
        }
    }
    // Save result of API requests
    setLocalData(key, data) {
        this.storage.set(`${API_STORAGE_KEY}-${key}`, data);
    }
    // Get cached API result
    getLocalData(key) {
        return this.storage.get(`${API_STORAGE_KEY}-${key}`);
    }
};
ApiService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient, NetworkService, Storage, OfflineManagerService])
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map