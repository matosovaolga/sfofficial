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
    { ref: "mobile", classname: "ion-iphone", title: "Mobile Application Development" , text: "By targeting smartphone users, mobile application development allows businesses to increase the number of existing communication or sales channels and offer them even more varied content."},
    { ref: "cms", classname: "ion-ios-reload", title: "CMS Development" , text: "Driving your content marketing and customer experience, we provide you with the CMS software that fits you best. This includes utilizing cloud services and headless CMS solutions to gain independence from infrastructural needs."},
    { ref: "qa", classname: "ion-ios-speedometer-outline", title: "QA and Testing" , text: "Executed by expert QA testers, manual testing is essential to any successful software project and ensures the final product is ready to use."},
    { ref: "integration", classname: "ion-ios-analytics", title: "Application Integration" , text: "Based on our own knowledge and experience, we offer DevOps services that implement continuous integration and delivery into your development process. This drives faster release cycles while also optimizing for quality."},
    { ref: "discovery", classname: "ion-ios-pie", title: "Discovery Phase" , text: "Great code is just half of your digital product’s success. We will take care of every aspect of building your product, from early-stage research to go-to-market strategy."},
    { ref: "consulting", classname: "ion-ios-cog-outline", title: "Software Architecture & Technology Consulting" , text: "We offer development consulting for clients seeking to build exceptional software to fit their needs. This is a combined experience of our developers, designers, project managers, and more. "},
  ]
}