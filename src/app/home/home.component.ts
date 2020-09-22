import { Component } from '@angular/core';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class SFHomeComponent {
  faCogs = faCogs;
  constructor( ) {
  }
   title: string = "ONLY THE BEST PRACTICES IN WEB AND MOBILE APPLICATIONS DEVELOPMENT";
   bannerText:string = "StableFlow is a software development company driven to deliver uncompromising quality, efficiency, and customer service.";
   imgUrl: string = 'assets/images/mac.png'
  }