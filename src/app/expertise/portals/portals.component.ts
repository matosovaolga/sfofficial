import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sf-expertises.portals',
  templateUrl: './portals.component.html',
  styleUrls: ['./portals.component.scss']
})

export class SFEnterprisePortalsComponent {


  hoverdId: number;

  constructor(private router: Router) {
    this.hoverdId = null;
  }
  integrations = [
    { id: 1, title: "Integration Capability", text: "We have capabilities to connect a portal solution to multiple data sources and applications, including implementation of Enterprise Service Bus (ESB) and integration with third-party web services, data feeds, payment systems and social collaboration tools." },
    { id: 2, title: "Scalability and Performance", text: "We build portals with flexible software architecture having in view growth in terms of both technology and user numbers." },
    { id: 3, title: "Cost Efficiency", text: "Employee productivity, improved sales generation, better cooperation, fast and secured information sharing of well built portals lead to quick ROI." },
    { id: 4, title: "Cross-Platform Connectivity", text: "In today’s rather hypersonic digital environment, consumers and employees prefer dealing with businesses with a multiple touchpoint strategy. Keeping in mind the changing demands of your potential users, we design portals and applications that provide extensive cross platform connectivity and multiple touch points." }
  ]

  moveTo(): void {

    window.scroll(0, 0);
  }

}