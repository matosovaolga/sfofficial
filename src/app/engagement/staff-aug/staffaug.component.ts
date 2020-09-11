import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sf-staffaug',
  templateUrl: './staffaug.component.html',
  styleUrls: ['./staffaug.component.scss']
})
export class SFStaffaugComponent {
  constructor(private router: Router) { }

  advantageArticles = [
    {
      title: 'Proven recruitment and project success',
      text: 'We have spent a decade shaping the workflows and processes that help technical teams maximize their resources.'
    },
    {
      title: 'Stay within budget',
      text: 'Outsourcing staff augmentation consulting services to our offshore and nearshore teams allows you to tap into a global talent pool with super-competitive rates.'
    },
    {
      title: 'Cross-functional teams',
      text: 'We can assemble a cross-functional agile contingent comprised of front and backend developers, database administrators, UI/UX designers, software testers (manual and automated), QA specialists, business analysts, and project managers.'
    },
    {
      title: 'Fast onboarding',
      text: 'Our teams are in the business of getting up to speed fast. No matter where your product is in the development cycle, we can jump in and hit the ground running.'
    },
    {
      title: 'Dedicated manager',
      text: 'One team member will be solely responsible for engagement and project management, helping to keep your new IT staff on track.'
    },
    {
      title: 'Scalable opportunities',
      text: 'Depending on the scope of your project, we can grow or shrink your outsourced IT staff as needed to help you stay on budget and meet deadlines.'
    },
    {
      title: 'High rate of retention and referrals',
      text: 'Spiral Scout team members stick around and refer other developers, designers, and project managers because they love the work and we take care of them.'
    }
  ]
  checklist = [
    'English proficiency', 'Timezone and workday overlap', 'Expertise and experience', 'Security standards and protocols', 'Workflow processes', 'Development methodology', 'Proven track record and portfolio', 'Client control and management support'
  ]


  moveTo(): void {
    window.scroll(0,0);

  }

}