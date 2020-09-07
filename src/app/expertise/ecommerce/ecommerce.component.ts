import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sf-expertises.ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})

export class SFEcommerceComponent {
  constructor(private router: Router) { }

  features = [
    { id: 1, title: "Consulting", text: "We listen to and analyze your existing ecommerce strategies, initiatives, and results to chart out a customized growth plan in line with your overall business goals" },
    { id: 2, title: "Design and Development", text: "Be it a progressive web app or and native mobile app, we design, develop, and integrate responsive e-commerce applications" },
    { id: 3, title: "Testing and Implementation", text: "We migrate, implement bug free e-commerce platforms on-time and on-budget with industry’s best practices" },
    { id: 4, title: "Data Analytics and Management", text: "We measure commerce in real-time with actionable insights to drive business performance in meeting set goals" },
    { id: 5, title: "Support and Maintenance", text: "We maximize your e-commerce platform’s performance, customer engagement, and conversion rate under peak load conditions" },
  ]

  moveTo(): void {
    this.router.navigateByUrl('contacts');
    window.scroll(0,0);
  }
}