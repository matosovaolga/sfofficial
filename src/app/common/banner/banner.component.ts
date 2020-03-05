import { Component, Input } from '@angular/core';
@Component({
    selector: 'sf-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
  })
  
  export class SFBannerComponent {
    @Input() title: string;
    @Input() text: string;
  }