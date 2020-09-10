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
    { id: 1, title: "Integration Capability", text: "We are able to connect a portal solution to multiple data sources and applications, including implementation of Enterprise Service Bus (ESB) and integration with third-party web services, data feeds, payment systems and social collaboration tools." },
    { id: 2, title: "Scalability and Performance", text: "Technology never stops evolving, so don’t let your portal to. Raasoft designs incredibly flexible portal architectures with an eye for growth, fault tolerance, and comfortable accommodation of increasing loads and user numbers." },
    { id: 3, title: "Integration Capability", text: "We are able to connect a portal solution to multiple data sources and applications, including implementation of Enterprise Service Bus (ESB) and integration with third-party web services, data feeds, payment systems and social collaboration tools." },
    { id: 4, title: "Integration Capability", text: "We are able to connect a portal solution to multiple data sources and applications, including implementation of Enterprise Service Bus (ESB) and integration with third-party web services, data feeds, payment systems and social collaboration tools." }
  ]

  moveTo(): void {

    window.scroll(0, 0);
  }

}