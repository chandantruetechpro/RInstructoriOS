import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { BehaviorSubject } from 'rxjs';
import { ToastController, Platform } from '@ionic/angular';
export var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus[ConnectionStatus["Online"] = 0] = "Online";
    ConnectionStatus[ConnectionStatus["Offline"] = 1] = "Offline";
})(ConnectionStatus || (ConnectionStatus = {}));
let NetworkService = class NetworkService {
    constructor(network, toastController, plt) {
        this.network = network;
        this.toastController = toastController;
        this.plt = plt;
        this.status = new BehaviorSubject(ConnectionStatus.Offline);
        this.plt.ready().then(() => {
            this.initializeNetworkEvents();
            let status = this.network.type !== 'none' ? ConnectionStatus.Online : ConnectionStatus.Offline;
            this.status.next(status);
        });
    }
    initializeNetworkEvents() {
        this.network.onDisconnect().subscribe(() => {
            if (this.status.getValue() === ConnectionStatus.Online) {
                console.log('WE ARE OFFLINE');
                this.updateNetworkStatus(ConnectionStatus.Offline);
            }
        });
        this.network.onConnect().subscribe(() => {
            if (this.status.getValue() === ConnectionStatus.Offline) {
                console.log('WE ARE ONLINE');
                this.updateNetworkStatus(ConnectionStatus.Online);
            }
        });
    }
    updateNetworkStatus(status) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.status.next(status);
            let connection = status == ConnectionStatus.Offline ? 'Offline' : 'Online';
            let toast = this.toastController.create({
                message: `You are now ${connection}`,
                duration: 3000,
                position: 'bottom'
            });
            toast.then(toast => toast.present());
        });
    }
    onNetworkChange() {
        return this.status.asObservable();
    }
    getCurrentNetworkStatus() {
        return this.status.getValue();
    }
};
NetworkService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Network, ToastController, Platform])
], NetworkService);
export { NetworkService };
//# sourceMappingURL=network.service.js.map