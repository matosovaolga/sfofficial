
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sf-expertises.social',
  templateUrl: './socialNetworking.component.html',
  styleUrls: ['./socialNetworking.component.scss']
})

export class SFSocialNetworkingComponent {
  constructor(private router: Router) { }

  title: string = 'SOCIAL NETWORKING SOLUTIONS';
  textBanner: string = 'We embed social features into traditional web solutions, accommodate corporate environments with social capabilities, build niche community portals and turn social networking ideas into compelling applications.';

  moveTo(): void {
    this.router.navigateByUrl('contacts');
  }

}