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
    @Input() imgUrl1: string;
    @Input() imgUrl2: string;
    constructor(private router: Router){

    }
  }