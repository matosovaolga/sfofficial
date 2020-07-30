
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sf-expertises.mobile-platforms',
  templateUrl: './mobilePlatforms.component.html',
  styleUrls: ['./mobilePlatforms.component.scss']
})

export class SFMobilePlatformsComponent {
  constructor(private router: Router) { }

  categories = [
    "Learning Platforms",
    "Real time maps and social location apps",
    "E-Marketplaces",
    "Interactive Dashboards",
    "Social Networking Platforms",
    "Customized Search Engines",
    "Data Analysis & Mining",
    "Music & Video Streaming"
  ]

  iosDo = [
    { title: "Prototyping, Wireframes & Mockups", text: "We design wireframes and present options to you. The coding cycle begins once you select from the shortlisted wireframe designs." },
    { title: "Quality Coding & Debugging", text: "We follow agile development for high-quality coding cycle along with professional software testing for bug-free & fast release." },
    { title: "AI & ML Capabilities in iOS Apps", text: "We hold experience to add intelligence to your iOS apps with integration of AI & ML technologies using Core ML framework." },
    { title: "Third-party API Integration", text: "We provide methods for integrating third-party APIs with our iOS development allowing other programs to access the data easily." },
    { title: "Cloud Development & Integration", text: "We help you connect various applications and systems along cloud integration services to allow users to easily access the data." },
    { title: "App Upgrade & Maintenance", text: "We offer contract to upgrade your apps along with maintenance to ensure full compatibility with the latest OS version & features." },
  ]

  androidDo = [
    { title: "Prototyping, Wireframes & Mockups", text: "We design wireframes and present options to you. The coding cycle begins once you select from the shortlisted wireframe designs." },
    { title: "Quality Coding & Debugging", text: "We follow agile development for high-quality coding cycle along with professional software testing for bug-free & fast release." },
    { title: "AI & ML Capabilities in Android", text: "We hold experience to add intelligence to your Android apps with integration of AI & ML technologies using Core ML framework." },
    { title: "Third-party API Integration", text: "We provide methods for integrating third-party APIs with our Android development allowing other programs to access the data easily." },
    { title: "Cloud Development & Integration", text: "We help you connect various applications and systems along cloud integration services to allow users to easily access the data." },
    { title: "App Upgrade & Maintenance", text: "We offer contract to upgrade your apps along with maintenance to ensure full compatibility with the latest OS version & features." },
  ]

  reactDo = [
    { title: "Prototyping, Wireframes & Mockups", text: "We design wireframes and present options to you. The coding cycle begins once you select from the shortlisted wireframe designs." },
    { title: "Custom React Native App Development", text: "From PoCs to full-fledged mobile app, we offer React Naive development services for iOS, Android and web applications." },
    { title: "Integration of AI & ML Capabilities", text: "We infuse power of AI and ML to React Native app development to add intelligence and simplify human to machine interactions." },
    { title: "Quality Assurance & App Testing", text: "Comprehensive checking/ recording is performed to ensure that coding is efficient and bug-free that meets client expectations." },
    { title: "Server Side APIs Integration", text: "We deliver secure, adaptable server side APIs and integrate them with apps to make them robust and dynamic." },
    { title: "App Maintenance & Support", text: "We provide a contract system for maintenance and support services to assure your app is compatible with the latest OS version." },
  ]


  moveTo(): void {
    this.router.navigateByUrl('contacts');
  }
}