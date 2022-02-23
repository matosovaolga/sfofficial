import { Component } from '@angular/core';

@Component({
  selector: 'sf-service.archi',
  templateUrl: './service.archi.component.html',
  styleUrls: ['./service.archi.component.scss']
})
export class SFServiceArchiComponent {
  title: string = 'Software Architecture & Technology Consulting';
  textBanner: string = 'StableFlow offers software architecture consulting in different directions: within project implementations as a part of pre-production activities and as validation services to ensure that architectural decisions were made right.';

  windowWidth: number = window.innerWidth;

  swipe(): void {
    const menu: HTMLDivElement = document.querySelector('.mat-tab-list'),
          left: HTMLDivElement = document.querySelector('.mat-tab-header-pagination-before'),
          right: HTMLDivElement = document.querySelector('.mat-tab-header-pagination-after');

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

    function setAt(button: HTMLDivElement, bool: string) {
      button.setAttribute('ng-reflect-disabled', bool);
    }

    function addClass(button: HTMLDivElement) {
      button.classList.add('mat-tab-header-pagination-disabled');
    }

    function removeClass(button: HTMLDivElement) {
      button.classList.remove('mat-tab-header-pagination-disabled');
    }

    function removeAll() {
      setAt(left, 'false');
      removeClass(left);
      setAt(right, 'false');
      removeClass(right);
    }

    function addLeftRemoveRight() {
      setAt(left, 'true');
      addClass(left);
      setAt(right, 'false');
      removeClass(right);
    }

    function removeLeftAddRight() {
      setAt(left, 'false');
      removeClass(left);
      setAt(right, 'true');
      addClass(right);
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
      let result = x1 - x2;

      menu.style.transform = `translateX(${position - result}px)`;
    });

    menu.addEventListener('touchend', () => {
      x1 = null;
      position = getPositionX();
      endPosition();
      if (position > 0) {
        menu.style.transform = `translateX(${0}px)`;
        position = 0;
        addLeftRemoveRight();
      } else if (position < end) {
        menu.style.transform = `translateX(${end}px)`;
        position = end;
        removeLeftAddRight();
      } else {
        removeAll();
      }
    });

    right.addEventListener('click', () => {
      let remainder: number;
      if (this.windowWidth > 599) {
        remainder = position % 160;
      } else {
        remainder = position % 100.22;
      }
      if (remainder === 0) {
        if (this.windowWidth > 599) {
          menu.style.transform = `translateX(${position - 160}px)`;
        } else {
          menu.style.transform = `translateX(${position - 100.22}px)`;
        }
        position = getPositionX();
      } else {
        if (this.windowWidth > 599) {
          menu.style.transform = `translateX(${position - (160 + remainder)}px)`;
        } else {
          menu.style.transform = `translateX(${position - (100.22 + remainder)}px)`;
        }
        position = getPositionX();
      }

      if (position < end) {
        menu.style.transform = `translateX(${end}px)`;
        position = end;
        removeLeftAddRight();
      } else {
        removeAll();
      }
      endPosition();
    });

    left.addEventListener('click', () => {
      let remainder: number;
      if (this.windowWidth > 599) {
        remainder = position % 160;
      } else {
        remainder = position % 100.22;
      }
      if (position < 0) {
        if (remainder === 0) {
          if (this.windowWidth > 599) {
            menu.style.transform = `translateX(${position + 160}px)`;
          } else {
            menu.style.transform = `translateX(${position + 100.22}px)`;
          }
          position = getPositionX();
        } else {
          menu.style.transform = `translateX(${position - remainder}px)`;
          position = getPositionX();
        }
        removeAll();
      } else if (position === 0) {
        menu.style.transform = `translateX(${0}px)`;
        position = getPositionX();
        addLeftRemoveRight();
      }
    });
  }

  ngOnInit() {
    this.swipe();

    window.addEventListener('orientationchange', () => {
      const left: HTMLDivElement = document.querySelector('.mat-tab-header-pagination-before');
      for (let i = 0; i < 4; i++) {
        left.click();
      }
    });

    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
  }
}