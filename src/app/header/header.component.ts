import { Component } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'sf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

export class SFHeaderComponent {
  faGlobe = faGlobe;
   inspiro = {
    core : { },
    documentOnResize: {
      
    }
   };
 
 

  constructor() {
  this.inspiro.core = {
    functions: function () {
      this.stickyHeader ();
    }
  };

 

  let stickyHeader = function () {

    /*let elem = this,
        shrinkHeader = elem.attr('data-shrink') || 0,
        shrinkHeaderActive = elem.attr('data-sticky-active') || 200,
        scrollOnTop = window.scrollTop();

    if ($header.hasClass("header-modern")) {
        shrinkHeader = 300;
    }

    if (!$header.is(".header-no-sticky, .header-static")) {

        if ($header.hasClass("header-sticky-resposnive") || $body.is('.device-lg, .device-md')) {

            if (scrollOnTop > $headerOffsetTop + shrinkHeader) {
                $("#header").addClass('header-sticky');

                if (scrollOnTop > $headerOffsetTop + shrinkHeaderActive) {
                    if (!$body.is(".overlay-menu") && $header.is(".header-transparent:not(.header-modern), .header-colored, .header-colored-transparent")) {
                        $header.addClass('sticky-active').removeClass("dark");
                    } else {
                        $header.addClass('sticky-active');
                    }
                }
            } else {
                $header.removeClass().addClass($headerCurrentClasses);
                INSPIRO.header.logoStatus();
            }
        }
    }*/

}
this.inspiro.documentOnResize = {
  functions: function () {
    this.stickyHeader();
  },
};


  }
}