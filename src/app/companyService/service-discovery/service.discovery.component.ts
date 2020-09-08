import { Component } from '@angular/core';

@Component({
  selector: 'sf-service.discovery',
  templateUrl: './service.discovery.component.html',
  styleUrls: ['./service.discovery.component.scss']
})
export class SFServiceDiscoveryComponent {
  title: string = 'Discovery Phase Gives You';

  discovers = [
    { name: "Architecture", imgSrc: "Microservices_header", text: "The detailed structure of the entire project presented in schematics and diagrams showing how the elements interact and how the product functions." },
    { name: "Design", imgSrc: "kisspng-computer", text: "A clickable dynamic prototype of all interrelated pages - an exact replica of what is to come." },
    { name: "Specification", imgSrc: "workflow", text: "User-story-based specification with a description of each page (of app functionality, between 80 and 200 pages in length)." },
    { name: "Estimation", imgSrc: "icons8", text: "An accurate development estimate, providing an exact description of all app features, budget, and development timeframe." },
  ]


}