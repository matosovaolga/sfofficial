
import { Component } from '@angular/core';

@Component({
  selector: 'sf-expertises.mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})

export class SFMobileAppsComponent {

  industries = [
    { id: 1, title: "Manufacturing", text: "We develop quality Manufacturing Mobility App to empower your employees with smart tools which they can manage from anywhere." },
    { id: 2, title: "Retail/e-Commerce", text: "We develop fully customised Retail & e-Commerce Mobility app to drive flawless sale and offer easy shopping experience to customers." },
    { id: 3, title: "Advertising", text: "We create Advertising Mobility apps for the advertising industry. Aglowid offers result oriented customised solutions for all." },
    { id: 4, title: "Healthcare", text: "Our team of enterprise app developers provide robust Healthcare Mobility app solutions that boost efficiency of medical & health sector." },
    { id: 5, title: "Media and Entertainment", text: "Aglowid IT Solutions develops quality mobility app for Media and Entertainment that caliber great creative results in terms of entertainment." },
    { id: 6, title: "Real Estate", text: "Turn everything into digital and offer your customer a quick and faster experience of Real Estate Mobility App Solution." },
    { id: 7, title: "Education", text: "We offer Education Mobility app solution that revolutionizes the entire approach in the education helping educational organizations." },
    { id: 8, title: "Finance/Banking", text: "Keeping the security in priority, we create productive and flexible Enterprise Mobility App solution for finance and banking sector." },
    { id: 9, title: "Hotel/Hospitality", text: "Enterprise Mobility app for hotel & hospitality industry that lets your employee serves your clients to get all services on fingertips." }
  ]

  mobileFeatures = [
    { id: 1, title: "Automation of Processes", text: "Enterprise Mobility App transforms manual process to automation and collects business operation data in real time. That means the automation process can save time, operation cost and simplify the process." },
    { id: 2, title: "Bimodal IT Approach", text: "The Bimodal IT Approach Gartner in 2014 that suggests the two parallel tracks -one deal in traditional IT and other in experimental IT. Similarly, the Enterprise Mobility app has to follow the same bimodal IT approach." },
    { id: 3, title: "Amazing User Experience", text: "The purpose of Enterprise Mobility App is to provide comfort and ease of operation such as sharing & getting data & information and getting office-on-the-go. Besides, it requires amazing user interface to be interactive." },
    { id: 4, title: "Real-Time Connectivity and Analytics", text: "One of the best benefits of enterprise Mobility App is that it offers real-time service and complete analytics report. Connectivity turns quite easy and helps field employees to perform tasks in a better way." },
    { id: 5, title: "Cloud Storage", text: "Cloud Storage helps organisations to share critical information, data and files to the executive, management, and staff on-the-go. This will also help the field employees to carry out office work remotely yet safely." },
    { id: 6, title: "Secure Data Transfer", text: "In the age of the internet, online data, information is the most vulnerable commodities and losing can cost you more severely. Enterprise Mobility App offers robust security while offering the best platform to do your job." }
  ]

}