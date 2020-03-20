import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Apiservice } from '../../providers/apiservice';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
let SearchPage = class SearchPage {
    constructor(apiservice, plt, route) {
        this.apiservice = apiservice;
        this.plt = plt;
        this.route = route;
    }
    ngOnInit() {
        // console.log('search result page');
        this.sub = this.route.params.subscribe(params => {
            this.search_keyword = params['search_keyword'];
        });
        console.log(this.search_keyword);
        this.apiservice.searching_callback(this.search_keyword).then((res) => {
            this.result = res;
            if (this.result.code == "200") {
                this.search_result = this.result.data;
                console.log(this.search_result);
            }
        }, (error) => {
            console.log('error');
            console.log(error);
            console.log('error');
        });
    }
    goBack() {
        window.history.back();
    }
};
SearchPage = tslib_1.__decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.page.html',
        styleUrls: ['./search.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Apiservice, Platform, ActivatedRoute])
], SearchPage);
export { SearchPage };
//# sourceMappingURL=search.page.js.map