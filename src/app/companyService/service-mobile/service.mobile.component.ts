import { Component } from '@angular/core';

@Component({
  selector: 'sf-service.mobile',
  templateUrl: './service.mobile.component.html',
  styleUrls: ['./service.mobile.component.scss']
})
export class SFServiceMobileComponent {
  title: string = 'Mobile Application Development';
  textBanner: string = 'Creatively aligning user experience with business objectives, to produce engaging digital experiences.';

  mobiles = [
    { id: 1, name: "Swift", text: "A multi-purpose language used for developing apps for various iOS devices from Apple TV, to Apple Watch to iPhone and iPad devices." },
    { id: 2, name: "Objective-C", text: "Object oriented and General Purpose Mobile App development language for developing next-generation iOS devices such as OS X." },
    { id: 3, name: "React Native", text: "Robust and the most sought-after Mobile App Development toolset for native and custom mobile application development for Android to iOS device line-up.    " },
    { id: 4, name: "Java", text: "For native and custom mobile app development, we are a mobile app development company that rule the world of Java." },
    { id: 5, name: "Android Wear", text: "Complete range of technology and toolset for developing intuitive and interactive wearable devices integrated with useful API for better experience." },
    { id: 6, name: "PhoneGap", text: "Find expert mobile app developers helping you develop hybrid app experiences for iOS, Android devices while relinquishing astute native-like experience." },
    { id: 7, name: "Ionic", text: "We are expert Mobile App Development Company that helps you get global merchandising by providing powerful hybrid mobile app development on platforms such as Ionic." },
    { id: 8, name: "Sencha Touch", text: "For added User Interface for much better user experience and enhanced overall app feel. Find expert mobile app developers and designers at Stableflow that help you render the needed quality." },
    { id: 9, name: "Xamarin", text: "Cross platform app development language used in building web apps, mobile applications for windows, iOS, Android with high community support." },
  ]

  swipe(): void {
    const menu: HTMLDivElement = document.querySelector('.mat-tab-list');

    let x1 = null,
        position = null,
        end = null;
    
    function endPosition(): void {
      if (window.innerWidth < 768 && window.innerWidth > 599) {
        end = window.innerWidth - 767 - 737;
      } else {
        end = window.innerWidth - 767 + 27;
      }
    }

    function getPositionX(): number {
      const style = window.getComputedStyle(menu),
            matrix = new WebKitCSSMatrix(style.transform);
      
      return matrix.m41;
    }

    menu.addEventListener('touchstart', e => {
      x1 = e.touches[0].clientX;
      position = getPositionX();
      endPosition();
    });

    menu.addEventListener('touchmove', e => {
      if (!x1) {
        return false;
      }

      let x2 = e.touches[0].clientX;
      let result;

      result = x1 - x2;
      menu.style.transform = `translateX(${position - result}px)`;
    });

    menu.addEventListener('touchend', () => {
      x1 = null;
      position = getPositionX();
      if (position > 0) {
        menu.style.transform = `translateX(${0}px)`;
      } else if (position < end) {
        menu.style.transform = `translateX(${end}px)`;
      }
    });
  }

  ngOnInit() {
    this.swipe();
  }
}