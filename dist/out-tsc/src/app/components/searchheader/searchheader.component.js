import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as $ from 'jquery';
let SearchheaderComponent = class SearchheaderComponent {
    constructor(navCtrl, _eref, router) {
        this.navCtrl = navCtrl;
        this._eref = _eref;
        this.router = router;
        this.show = false;
        this.buttonName = 'Show';
    }
    ngOnInit() {
        let self = this;
        setTimeout(function () {
            var path = window.location.pathname;
            var page = path.split('/').pop();
            $('.CustomFooter ion-toolbar#' + page).addClass('active');
            $('.CustomFooter ion-toolbar#' + page).trigger('click');
        }, 500);
        const hostElem = self._eref.nativeElement;
        window.addEventListener('mouseup', function (event) {
            var pol = document.getElementById('SearchSection');
            if (event.target != pol) {
                var inputText = document.getElementById('search_input');
                if (event.target != inputText) {
                    var buttonTxt = document.getElementById('SearchComponent');
                    if (event.target != buttonTxt) {
                        self.show = false;
                    }
                }
            }
        });
    }
    OnInput(event) {
        let self = this;
        this.navCtrl.navigateForward(['search/' + event.target.value]);
        self.show = false;
    }
    showHide() {
        this.show = !this.show;
        if (this.show)
            this.buttonName = 'Hide';
        else
            this.buttonName = 'Show';
    }
};
SearchheaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-searchheader',
        templateUrl: './searchheader.component.html',
        styleUrls: ['./searchheader.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        ElementRef,
        Router])
], SearchheaderComponent);
export { SearchheaderComponent };
//# sourceMappingURL=searchheader.component.js.map