import { Component } from '@angular/core';

@Component({
  selector: 'sf-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class SFAboutComponent {
  imageUrl: string = 'assets/images/';
  title: string = 'About Us';
  textBanner: string = 'We provide customer-focused solutions that give companies the greatest possible benefits in terms of organization efficiency, security, and convenience.';
  
}