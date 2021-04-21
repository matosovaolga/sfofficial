import { Component } from '@angular/core';

@Component({
  selector: 'sf-service.cms',
  templateUrl: './service.cms.component.html',
  styleUrls: ['./service.cms.component.scss']
})
export class SFServiceCmsComponent {
    title: string = 'CMS Solutions';
    textBanner: string = 'Driving your content marketing and customer experience, we provide you with the CMS software that fits you best.';

    cmss = [
      {imgName: "cms2", title: "CMS website development", text: "We are an expert CMS development company that brings you the scalability and performance in your web applications. get powerful and user-friendly web application built to empower your business with relevant features and ease of customization."},
      {imgName: "cms3", title: "CMS customization", text: "Add more functionality and feature-richness. Get an easy upgrade on your current CMS websites allowing you to have a thematic design, customized features in your websites and applications. We help you from development to deployment of your website."},
      {imgName: "cms4", title: "Custom CMS integration", text: "Get a robust and dependable CMS system integrated to your current website. Our web developers give you seamless content management system software integration to your websites allowing you always staying ahead of your industrial curve "},
      {imgName: "cms5", title: "CMS migration", text: "We help you migrate to a more efficient CMS applications without disturbing your current processes. We help you in moving your existing web database to a whole new platform in a very secure way. With us you able to make shift your valuable database securely "},
      {imgName: "cms6", title: "CMS support & maintenance", text: "Get a reliable team for CMS Development helping you in maintaining your website and applications. We give you 3600 CMS support and maintenance services allowing you to lavish round the clock support on call or email with instant resolutions"}
    ]

   }