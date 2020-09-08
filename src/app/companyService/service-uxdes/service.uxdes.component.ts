import { Component } from '@angular/core';

@Component({
  selector: 'sf-service.uxdes',
  templateUrl: './service.uxdes.component.html',
  styleUrls: ['./service.uxdes.component.scss']
})
export class SFServiceUxdesComponent {
  title: string = 'Architecture: User Experience (UX) Design & Prototyping';
  textBanner: string = 'Creatively aligning user experience with business objectives, to produce engaging digital experiences.';


  

  uxdes = [
    {id:1, name: "UX/UI Research", text: "At CIS it is all about delivering stunning experiences and we achieve that we research and analyse various aspects of user interface design. Gathering requirements, audience analysis, online surveys we go lengths to achieve our design goals using the data we collect."},
    {id:2, name: "HUMAN FACTOR ANALYSIS", text: "We make sure your websites are user friendly and thus human factor analysis is done at CIS to determine the necessary changes needed in designs. With this we take on to important factors such as icon size, sound, colour palate, and others to deliver nothing but the best."},
    {id:3, name: "WIRE FRAMES AND PROTOTYPES", text: "To make sure your UX/UI design and development is impeccable we work with wireframes strengthening the development process. We design and develop the layout of your website, create clickable prototypes to make sure the design and user friendly and seamless."},
    {id:4, name: "UI Design", text: "One of the most important things for any website or applications is to have a class-A user experience. To make that sure we consider a lot of factors to never go wrong. The factors include user navigation, concept mapping, user mapping, visual design and architecture"},
    {id:5, name: "UX Evaluation", text: "At CIS we make sure your users are delivered with nothing less than awe-inspiring and thus we do a complete evaluation on the factors to understand how your websites and apps are being perceived graphically by your users. We do usability tests, content audit, expert reviews etc."}
  ]
  
}