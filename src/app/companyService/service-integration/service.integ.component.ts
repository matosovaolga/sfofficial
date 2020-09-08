import { Component } from '@angular/core';

@Component({
  selector: 'sf-service.integ',
  templateUrl: './service.integ.component.html',
  styleUrls: ['./service.integ.component.scss']
})
export class SFServiceIntegComponent {
    title: string = 'Being a seasoned integrator, we will guide you throughout the process and help you build sound Service Oriented and Event Driven Architectures.';
   
  integrations = [
    {id: 1, name: "Backend Integration", text: "Iflexion helps you deliver a rich set of services by integrating new software with existing corporate back office systems. Depending on your needs, we can create a consolidated backend for disparate solutions or integrate specific backend elements of different applications into one another."},
    {id: 2, name: "Data Integration", text: "Our experts integrate data sources across dispersed IT-environments, helping you establish deeper connections with databases and storage systems throughout your organization and facilitate data collection, conversion, formatting and processing."},
    {id: 3, name: "Web Services Integration", text: "We focus on web application interoperability with enterprise systems and 3rd-party web services via standard communication protocols. Iflexion integrates your infrastructure with web services to ensure seamless communication behind the scenes and facilitate business transactions, automate processes, organize information and more."},
    {id: 4, name: "API-Based Integration", text: "Iflexion makes it possible for your applications to piggyback on the online offerings of 3rd party services. We utilize their application programming interfaces so that you can benefit from fast and efficient interaction with payment gateways, geolocation services, e-commerce solutions, media services, advertising platforms, social networks and cloud storages. "},
  ]
  }