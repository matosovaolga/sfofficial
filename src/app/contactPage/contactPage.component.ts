import { Component } from '@angular/core';

@Component({
  selector: 'sf-contactPage',
  templateUrl: './contactPage.component.html',
  styleUrls: ['./contactPage.component.scss']
})
export class SFContactPageComponent {
    title: string = 'Contact';
    text: string = 'Please submit your project details using the form below and we will get back to you promptly regarding your request.';
}