import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sf-expertises.portals',
  templateUrl: './portals.component.html',
  styleUrls: ['./portals.component.scss']
})

export class SFEnterprisePortalsComponent {
  constructor(private router: Router) { }

  moveTo(): void {
    this.router.navigateByUrl('contacts');
  }

}