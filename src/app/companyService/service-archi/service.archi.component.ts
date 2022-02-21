import { Component } from '@angular/core';

@Component({
  selector: 'sf-service.archi',
  templateUrl: './service.archi.component.html',
  styleUrls: ['./service.archi.component.scss']
})
export class SFServiceArchiComponent {
    title: string = 'Software Architecture & Technology Consulting';
    textBanner: string = 'StableFlow offers software architecture consulting in different directions: within project implementations as a part of pre-production activities and as validation services to ensure that architectural decisions were made right.';
  
  swipe(): void {
    const menu: HTMLDivElement = document.querySelector('.mat-tab-list');

    let x1 = null,
        position = null,
        end = null;
    
    function endPosition(): void {
      if (window.innerWidth < 768 && window.innerWidth > 599) {
        end = window.innerWidth - 767 - 257;
      } else {
        end = window.innerWidth - 767 + 102;
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