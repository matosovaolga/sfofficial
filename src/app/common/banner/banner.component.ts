import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'sf-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
  })
  
  export class SFBannerComponent {
    @Input() title: string;
    @Input() text: string;
    @Input() imageUrl: string = 'assets/images/macbook-mc.png';
  //  imgUrl: string = 'assets/images/macbook-mc.png'

    constructor(private router: Router){

    }
  }