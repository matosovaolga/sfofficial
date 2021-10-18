import { Component } from '@angular/core';

@Component({
  selector: 'sf-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})


export class SFFooterComponent {
  currentSection: string = '';
  currentSubSection: string = '';
  expertises = [

    { name: "portals", desc: "Web and Enterprise Portals" },
    { name: "mobile-enterprise", desc: "Enterprise Mobile Apps" },
    { name: "ecommerce", desc: "Ecommerce" },
    { name: "social", desc: "Social Networking" },
    { name: "automation", desc: "Business Process Automation" },
    { name: "hospital", desc: "Hospital Managment System" }

  ]
  click(sect, subSection) {

    this.currentSection = sect;
    this.currentSubSection = subSection;
    window.scroll(0,0);

}

}