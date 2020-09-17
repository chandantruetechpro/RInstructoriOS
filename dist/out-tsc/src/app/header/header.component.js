import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Apiservice } from '../../providers/apiservice';
import { NavController } from '@ionic/angular';
let HeaderComponent = class HeaderComponent {
    constructor(apiservice, navCtrl) {
        this.apiservice = apiservice;
        this.navCtrl = navCtrl;
        this.show = true;
        this.buttonName = 'Show';
    }
    ngOnInit() { }
    OnInput(event) {
        // console.log(event.target.value);
        this.navCtrl.navigateForward(['search/' + event.target.value]);
        /*this.apiservice.searching_callback(event.target.value).then((res) => {
            // console.log(res.code);
            
            // let subCatUrl = 'get_posts_and_subcategories?category_id=';
            this.result = res;
            if (this.result.code == "200") {
                this.search_result = this.result.data;
                console.log(this.search_result);
                // this.keys = Object.keys(this.categories);
                // var newArray = [];
                // let s = 1;
                // for (let catsPos of this.categories) {
                    // var index = this.categories.findIndex(p => p.category_position == s);
                    // console.log(index);
                    // this.ArrangeCategory.push(this.categories[index]);
                    // s++;
                // }
            }
        }, (error) => {
            console.log('error')
            console.log(error)
            console.log('error')
        });*/
    }
    showHide() {
        //SearchBox  
        console.log("pause");
        this.show = !this.show;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
        // this.classApplied = !this.classApplied;
        // var x = document.getElementsByClassName("SearchBox").show();;
        //   if (x.style.display === "none") {
        //     x.style.display = "block";
        //   } else {
        //     x.style.display = "none";
        //   }
    }
};
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Apiservice, NavController])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map