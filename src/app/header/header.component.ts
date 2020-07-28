import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
    selector: 'sf-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class SFHeaderComponent implements OnInit {
    windowScrolled: boolean;
    constructor(@Inject(DOCUMENT) private document: Document) { }
    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    ngOnInit() { }

    currentSection: string = ''
    currentSubSection: string = ''
    services = [
        {name: "uxdesign", desc: "UX Design and Prototypes"},
        {name: "software", desc: "Web Appliction Development"},
        {name: "mobile", desc: "Mobile Application Development"},
        {name: "cms", desc: "CMS Development"},
        {name: "qa", desc: "QA and Testing"},
        {name: "integration", desc: "Application Integration"},
        {name: "discovery", desc: "Discovery Phase"},
        {name: "consulting", desc: "Software Architecture & Technology Consulting"}
    ]
    bussinesSolutions = [
        {name: "portals", desc: "Web and Enterprise Portals"},
        {name: "mobile", desc: "Enterprise Mobile Apps"},
        {name: "ecommerce", desc: "Ecommerce"},
        {name: "social", desc: "Social Networking"},
        {name: "automation", desc: "Business Process Automation"},
        {name: "hospital", desc: "Hospital Managment System"},

    ]

    developmentStack = [
        {name: "open-source", desc: "Open Source"},
        {name: "mobile-platforms", desc: "Mobile platforms"},
        {name: "javascript", desc: "JavaScript"},
        {name: "cloud-tech", desc: "Cloud Technologies"},
    ]

    companySection = [
        {name: "about", desc: "About Us"},
        {name: "vacancies", desc: "Vacancies"},
        {name: "process", desc: "Process"}
    ]

    click(sect, subSection) {

       this.currentSection = sect;
       this.currentSubSection = subSection;

    }

}