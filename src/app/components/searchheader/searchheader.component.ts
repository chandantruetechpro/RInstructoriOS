import { Component, OnInit, ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'app-searchheader',
  templateUrl: './searchheader.component.html',
  styleUrls: ['./searchheader.component.scss'],
})
export class SearchheaderComponent implements OnInit {
  public show: boolean = false
  public buttonName: any = 'Show'

  constructor(
    public navCtrl: NavController,
    private _eref: ElementRef,
    public router: Router,

  ) { }

  ngOnInit() {
    let self = this
    setTimeout(function () {
      var path = window.location.pathname
      var page = path.split('/').pop()

      $('.CustomFooter ion-toolbar#' + page).addClass('active');
      $('.CustomFooter ion-toolbar#' + page).trigger('click');
    }, 500)
    const hostElem = self._eref.nativeElement
    window.addEventListener('mouseup', function (event) {
      var pol = document.getElementById('SearchSection')
      if (event.target != pol) {
        var inputText = document.getElementById('search_input')
        if (event.target != inputText) {
          var buttonTxt = document.getElementById('SearchComponent')
          if (event.target != buttonTxt) {
            self.show = false
          }
        }
      }
    })
  }

  OnInput(event: any) {
    let self = this

    this.navCtrl.navigateForward(['search/' + event.target.value])
    self.show = false
  }
  showHide() {
    this.show = !this.show
    if (this.show) this.buttonName = 'Hide'
    else this.buttonName = 'Show'
  }  

}
