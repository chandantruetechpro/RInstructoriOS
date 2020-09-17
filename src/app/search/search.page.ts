import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../providers/apiservice';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  search_keyword: any;
  n_id: any;
  private sub: any;
  private result: any;
  public search_result: any;
  
  constructor(private apiservice: Apiservice,private plt: Platform,private route: ActivatedRoute,public navCtrl: NavController) { }

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
		}else{
			this.search_result  ='No Posts';
		}
	}, (error) => {
		console.log('error')
		console.log(error)
		console.log('error')
	});
  }

  
  HomePostDetail(postId) {
    this.navCtrl.navigateForward(['postdetail/' + postId+ '?from_search=yes']);
  }
  playBtn(postId) {
    this.navCtrl.navigateForward(['videopost/' + postId+ '?from_search=yes']);
  }
  
  goBack() {
    window.history.back();
  }

}
