import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { from, of, forkJoin } from 'rxjs';
import { switchMap, finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
const STORAGE_REQ_KEY = 'storedreq';
let OfflineManagerService = class OfflineManagerService {
    constructor(storage, http, toastController) {
        this.storage = storage;
        this.http = http;
        this.toastController = toastController;
    }
    checkForEvents() {
        return from(this.storage.get(STORAGE_REQ_KEY)).pipe(switchMap(storedOperations => {
            let storedObj = JSON.parse(storedOperations);
            if (storedObj && storedObj.length > 0) {
                return this.sendRequests(storedObj).pipe(finalize(() => {
                    let toast = this.toastController.create({
                        message: `Local data succesfully synced to API!`,
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.then(toast => toast.present());
                    this.storage.remove(STORAGE_REQ_KEY);
                }));
            }
            else {
                console.log('no local events to sync');
                return of(false);
            }
        }));
    }
    storeRequest(url, type, data) {
        let toast = this.toastController.create({
            message: `Your data is stored locally because you seem to be offline.`,
            duration: 3000,
            position: 'bottom'
        });
        toast.then(toast => toast.present());
        let action = {
            url: url,
            type: type,
            data: data,
            time: new Date().getTime(),
            id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
        };
        // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
        return this.storage.get(STORAGE_REQ_KEY).then(storedOperations => {
            let storedObj = JSON.parse(storedOperations);
            if (storedObj) {
                storedObj.push(action);
            }
            else {
                storedObj = [action];
            }
            // Save old & new local transactions back to Storage
            return this.storage.set(STORAGE_REQ_KEY, JSON.stringify(storedObj));
        });
    }
    sendRequests(operations) {
        let obs = [];
        for (let op of operations) {
            console.log('Make one request: ', op);
            let oneObs = this.http.request(op.type, op.url, op.data);
            obs.push(oneObs);
        }
        // Send out all local events and return once they are finished
        return forkJoin(obs);
    }
};
OfflineManagerService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Storage, HttpClient, ToastController])
], OfflineManagerService);
export { OfflineManagerService };
//# sourceMappingURL=offline-manager.service.js.map