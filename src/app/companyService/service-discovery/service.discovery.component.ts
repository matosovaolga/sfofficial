import { Component } from '@angular/core';

@Component({
  selector: 'sf-service.discovery',
  templateUrl: './service.discovery.component.html',
  styleUrls: ['./service.discovery.component.scss']
})
export class SFServiceDiscoveryComponent {
  title: string = 'Discovery Phase';
  textBanner: string = 'Get a defined timeline and cost estimate for your project in 2 to 4 weeks';

  discovers = [
    { name: "Architecture", imgSrc: "Microservices_header", text: "The detailed structure of the entire project presented in schematics and diagrams showing how the elements interact and how the product functions." },
    { name: "Design", imgSrc: "kisspng-computer", text: "Based on the research and the project roadmap, our team creates interactive prototypes ready to be tested out by real users." },
    { name: "Specification", imgSrc: "workflow", text: "User-story-based specification with a description of each page (of app functionality, between 80 and 200 pages in length)." },
    { name: "Estimation", imgSrc: "icons8", text: "An accurate development estimate, providing an exact description of all app features, budget, and development timeframe." },
  ]


}