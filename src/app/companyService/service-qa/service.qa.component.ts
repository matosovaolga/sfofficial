import { Component } from '@angular/core';

@Component({
  selector: 'sf-service.qa',
  templateUrl: './service.qa.component.html',
  styleUrls: ['./service.qa.component.scss']
})
export class SFServiceQaComponent {
    title: string = 'QA and Testing';
    textBanner: string = 'Stableflow offers a wide range of independent software QA and testing services that adhere to the highest levels of security and industry standards.';
    qaTestings = [
      { id: 1, name: "FULL-CYCLE TESTING", text: "We render QA and testing services along the whole development lifecycle, including integration testing, regression testing, black/white box testing, environment testing, performance testing, stress testing, localization testing and user acceptance testing." },
      { id: 2, name: "PROJECT RESCUE", text: "Our team is well-skilled at rescuing mid-lifecycle projects. We can help you get things back on track and salvage a project in jeopardy. Iflexion puts together intelligent strategies and expertise to quickly identify problem areas and shore up your app code." },
      { id: 3, name: "SUPPORT AND ENHANCEMENT", text: "Iflexion is capable of providing continuous support and enhancement services in an ongoing effort to further improve your software and make it run as smoothly as possible after go-live." },
    ]
  }