import { Component, OnInit, Inject, HostListener} from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'sf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class SFHeaderComponent implements OnInit {
    windowScrolled: boolean;
    constructor(@Inject(DOCUMENT) private document: Document) {}
    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    ngOnInit() {}
}