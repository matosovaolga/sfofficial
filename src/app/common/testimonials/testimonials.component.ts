import { Component } from '@angular/core';
@Component({
  selector: 'sf-testimonials',
  templateUrl: 'testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class CarouselHolderComponent {
 
  customOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: false,
    margin: 50,
    navText: [ '<span class="leftArrow"></span>', '<span class="rightArrow"></span>' ],

    stagePadding: 15,
        smartSpeed: 1200,
        responsive: {
          0: {
              items: 1,
              margin: 10,
              stagePadding: 0
          },
          480: {
              items: 1,
          },
          992: {
              items: 2,
          }
      },
    nav: true
  };
 
  slidesStore = [
    {
      id: 1,
      comment: 'Working with StableFlow is like having your own development team in your own office. Not only is their quality of work amazing, they are creative, professional, and on time with all of their deliveries. You will never have to worry about lack of communication, as they keep their clients updated with all stages of work. Highly recommended - a pleasure to work with.',
      author: 'Brian Cozzy',
      company:'Creative Director, Creative Cellutions',
      src: '',
      alt: 'Brian Cozzy',
      title: ''

    },
    {
      id: 2,
      comment: 'I cannot express how absolutely satisfied I was working with StableFlow. They were extremely knowledgeable in the programming skills required for my project, and were very responsive throughout every step of the process, not to mention they were quite patient with my many questions along the way. I will ABSOLUTELY be using them again in the future. Great job guys!',
      author: 'Igor Vishnevskiy',
      company:'Russian Google TV',
      src: '',
      alt: '',
      title: ''

    }, {
      id: 3,
      comment: 'Oleksandr and his team are EXCELLENT! We continue to rely on them weekly for all of our needs. Always prompt and any issues are resolved quickly and professionally. Excited to continue with him and his team.',
      author: 'Some Good Customer',
      company:'Lttd',
      src: '',
      alt: '',
      title: ''

    }, {
      id: 4,
      comment: 'I required some independent feedback and these guys were exceptional - very quick to respond and invaluable feedback abou Yii / Laravel! Big thanks!',
      author: 'One more sutisfited',
      company: 'Apple Tv',
      src: '',
      alt: '',
      title: ''

    }
    , {
      id: 5,
      comment: 'I have worked with StableFlow on a large and ambitions web development project for the last 3 months. I have found them to be of exceptional value during the ongoing project. They have fantastic capability within the team and seem able to come up with a solution to any technical problem. I highly recommend StableFlow.',
      author: 'Paul Doffman',
      company:'Visit West Lothian',
      src: '',
      alt: '',
      title: ''

    }, {
      id: 6,
      comment: 'We have been working with StableFlow for around a year. We have found them to be extremely professional and very pleasant to work with. Communication is excellent. We always receive replies to emails within a couple of hours, and project updates are frequent. They deliver every project on time, and on budget.',
      author: 'Lee Barlow',
      company:'Splash Design Studio Ltd',
      src: '',
      alt: '',
      title: ''

    }

  ]
}