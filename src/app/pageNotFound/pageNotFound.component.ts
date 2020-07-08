import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sf-pageNotFound',
  templateUrl: './pageNotFound.component.html',
  styleUrls: ['./pageNotFound.component.scss']
})
export class PageNotFoundComponent {
  constructor(private router: Router) { }

  moveTo(): void {
    this.router.navigateByUrl('');
  }

}