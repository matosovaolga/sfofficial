import { Component, ViewChild,ElementRef, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
@Component({
    selector: 'sf-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class SFHeaderComponent implements OnInit {
    // clickItem() {
    //     const menuZordMenu = document.querySelector('.menuzord-menu');
        
    // }
  
    currentSection: string = '';
    currentSubSection: string = '';
    menuCheckbox;
    services = [
        { name: "uxdesign", desc: "UX Design and Prototypes" },
        { name: "software", desc: "Web Appliction Development" },
        { name: "mobile", desc: "Mobile Application Development" },
        { name: "cms", desc: "CMS Development" },
        { name: "qa", desc: "QA and Testing" },
        { name: "integration", desc: "Application Integration" },
        { name: "discovery", desc: "Discovery Phase" },
        { name: "consulting", desc: "Software Architecture & Technology Consulting" }
    ];

    expertises = [
        {
            title: /*"Bussines solutions"*/"", subSection: [
                { name: "portals", desc: "Web and Enterprise Portals" },
                { name: "mobile-enterprise", desc: "Enterprise Mobile Apps" },
                { name: "ecommerce", desc: "Ecommerce" },
                { name: "social", desc: "Social Networking" },
                { name: "automation", desc: "Business Process Automation" },
                { name: "hospital", desc: "Hospital Managment System" },

            ]
        }
    ];

    engagementModels = [
        { name: "outsourcing", desc: "Project-based Outsourcing" },
        { name: "dedicate", desc: "Dedicated Team" },
        { name: "staff-augmentation", desc: "Staff Augmentation" }
    ];

    companySection = [
        { name: "about", desc: "About Us" },
        { name: "vacancies", desc: "Vacancies" },
        { name: "process", desc: "Process" }
    ];
    someR;

    windowScrolled: boolean;
    constructor( router: Router, @Inject(DOCUMENT) private document: Document) {
        this.someR = router;
      
    }
    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }


    click(sect, subSection) {
     
        this.currentSection = sect;
        this.currentSubSection = subSection;
        window.scroll(0, 0);
    }

    windowWidth = window.innerWidth;

    onResize() {
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth;
        });
    }

    dropDownBurger() {
        let menus = document.querySelectorAll('.menuzord-item'),
            subMenus = document.querySelectorAll('.dropdown'),
            close = document.querySelector('.menu__btn');
        
        if (this.windowWidth < 768) {
            
            menus.forEach((menu, i) => {
                if (menu.children.length < 2) {
                    menu.addEventListener('click', () => {
                        let foo = close as HTMLElement;
                        foo.click();
                    });
                } else {
                    menu.addEventListener('click', () => {
                        if (!subMenus[i - 1].classList.contains('burger')) {
                            subMenus.forEach(subMenu => {
                                if (subMenu.classList.contains('burger')) {
                                    subMenu.classList.remove('burger');
                                }
                            });
            
                            if (menu.children.length > 1) {
                                subMenus[i - 1].classList.add('burger');
                            }
                        } else {
                            let foo = close as HTMLElement;
                            foo.click();
                        }
                    });
                }
            });
        }

        close.addEventListener('click', () => {
            subMenus.forEach(subMenu => {
                if (subMenu.classList.contains('burger')) {
                    subMenu.classList.remove('burger');
                }
            });
        });

        window.addEventListener('orientationchange', () => {
            window.location.reload();
        });
    }

    // dropUpBurger() {
    //     let menus = document.querySelectorAll('.menuzord-item'),
    //         subMenus = document.querySelectorAll('.dropdown'),
    //         close = document.querySelector('.menu__btn');
        
    //     menus.forEach((menu, i) => {
    //         menu.addEventListener('mouseenter', () => {
    //             if (menu.children.length > 1) {
    //                 if (!subMenus[i - 1].classList.contains('burger')) {
    //                     subMenus.forEach(subMenu => {
    //                         if (subMenu.classList.contains('burger')) {
    //                             subMenu.classList.remove('burger');
    //                         }
    //                     });
        
    //                     if (menu.children.length > 1) {
    //                         subMenus[i - 1].classList.add('burger');
    //                     }
    //                 }
    //             }
    //         });
    //         menu.addEventListener('mouseleave', () => {
    //             subMenus.forEach(subMenu => {
    //                 if (subMenu.classList.contains('burger')) {
    //                     subMenu.classList.remove('burger');
    //                 }
    //             });
    //         });
    //     });
    // }

    ngOnInit() {
        this.menuCheckbox = document.getElementById('menu__toggle');

        this.dropDownBurger();
    }

}