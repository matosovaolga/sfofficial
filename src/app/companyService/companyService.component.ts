import { Component } from '@angular/core';

@Component({
  selector: 'sf-services',
  templateUrl: './companyService.component.html',
  styleUrls: ['./companyService.component.scss']
})
export class SFServicesComponent {
  title: string = 'WEB, MOBILE, CMS, E-COMMERCE & CLOUD SOLUTIONS';
  textBanner: string = 'StableFlow is a software development company driven to deliver uncompromising quality, efficiency, and customer service. We provide a full range of outsourcing services to create and support custom Web and Mobile applications.';
  // imgUrl: string = 'assets/images/mac.png'

  companyServices = [
    { ref: "uxdesign", classname: "ion-android-color-palette", title: "UX Design and Prototypes", text: "We offer long-standing design expertise to incrementally produce stunning experiences from raw sketches to working prototypes." },
    { ref: "software", classname: "ion-laptop", title: "Web Appliction Development",   text: "Not every business is the same, neither their requirements. Our proficient development team will devise the best on-demand custom solutions for your business." },
    { ref: "mobile", classname: "ion-iphone", title: "Mobile Application Development" , text: "some text"},
    { ref: "cms", classname: "ion-ios-reload", title: "CMS Development" , text: "some text"},
    { ref: "qa", classname: "ion-ios-speedometer-outline", title: "QA and Testing" , text: "some text"},
    { ref: "integration", classname: "ion-ios-analytics", title: "Application Integration" , text: "some text"},
    { ref: "discovery", classname: "ion-ios-pie", title: "Discovery Phase" , text: "some text"},
    { ref: "consulting", classname: "ion-ios-cog-outline", title: "Software Architecture & Technology Consulting" , text: "some text"},
  ]
}