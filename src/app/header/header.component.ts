import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../providers/apiservice';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})


export class HeaderComponent implements OnInit {
	public show: boolean = true;
	public buttonName: any = 'Show';
  constructor(private apiservice: Apiservice,public navCtrl: NavController) { }

  ngOnInit() {}
  OnInput(event: any) {
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


}
