
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { text } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'sf-expertises.portals',
  templateUrl: './portals.component.html',
  styleUrls: ['./portals.component.scss']
})

export class SFEnterprisePortalsComponent {
  constructor(private router: Router) { }



  domains = [
    { id: 1, name: "ECOMMERCE PLATFORMS", text: "Addressing the growing demand for better user journeys, advanced back-end capabilities and new transactional models, Raasoft enables businesses to smoothly launch multi-vendor online marketplaces and reach scale saving years of guesswork and spared investments." },
    { id: 2, name: "SELF-SERVICE PORTALS", text: "For utility and public service companies we offer development of digital engagement solutions designed to improve self-service rates, reduce the overall cost to serve customers and introduce new products and services enabled by digital technologies." },
    { id: 3, name: "PARTNER NETWORKS", text: "Our technological solutions for business partner and supply networks span extensive functionality scope, including facilitated supplier discovery and interaction, streamlined purchase order and invoice collaboration, and complete visibility into expenses and transactions." },
    { id: 4, name: "KNOWLEDGE PORTALS", text: "Discover how Raasoft’s expertise in eLearning, video streaming and collaboration technologies combines to deliver ahead-of-the-curve knowledge sharing and management solutions designed to facilitate creation, distribution, retention, and reuse of knowledge inside your organization and beyond." },
    { id: 5, name: "MEDIA & ENTERTAINMENT", text: "Raasoft Infotech serves companies operating in the digital editing and distribution domain, offering leading-edge technological solutions to support new ways of digital traffic monetization, engagement of fragmented viewers and management of exponentially growing digital assets." },
    { id: 6, name: "CORPORATE COLLABORATION", text: "Collaboration is the backbone of both internal and customer-centric activities. Be it document-centric collaboration or collaboration-driven work management, Raasoft delivers the full cycle of enterprise-level portal development services to meet your specific collaboration-centered needs." },
    { id: 7, name: "SOCIAL NETWORKS", text: "From niche social networking platforms built on previously untapped use cases to enterprise social networks, community portals, social CRM and social commerce solutions, Raasoft provides full-grown project teams to tackle first-rate solution delivery." },
    { id: 8, name: "VERTICAL PORTALS", text: "A versatile, long-standing portal development experience enables Raasoft Infotech to undertake delivery of a wide range of solutions spanning the whole value chain for specific industry verticals like real estate, healthcare, oil & gas, finance & banking, telecom, energy & utilities services, and more." }
  ]

  currentDomain = this.domains[0]

  switchDomain(domain): void {
    this.currentDomain = domain
  }

  moveTo(): void {
    this.router.navigateByUrl('contacts');
  }

}