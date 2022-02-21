import { Component } from '@angular/core';

@Component({
  selector: 'sf-service.soft',
  templateUrl: './service.soft.component.html',
  styleUrls: ['./service.soft.component.scss']
})
export class SFServiceSoftComponent {
  title: string = 'Web Appliction Development';
  textBanner: string = 'TECHNOLOGIES THAT EMPOWERS YOUR CUSTOM SOFTWARE DEVELOPMENT';
  webApps = [
    { id: 1, name: "Python", text: "Find custom software development services powered on giving you the needed flexibility and robustness in your products. With Python you are able to get a perfect data visualization, easy-to-use interface on multi-source Data, data analysis, solid infrastructure and easy management of massive data in one go." },
    { id: 2, name: "PHP", text: "PHP as wonderful and object-oriented as it is can be used for about almost everything from web applications to data analysis. It lands great functionality and feature-richness in business applications, enterprise applications, with all the customization needed to give you an enriched experience." },
    { id: 3, name: "Microsoft", text: "We are all rounder custom software development company that helps you get custom software specifically for challenging business environments. With Microsoft, we are able to lend you amazing opportunities, from custom application development to data management systems it sees to the rich customization, business logic, security capabilities in your custom software development." },
    { id: 4, name: "Java", text: "Java’s technical prowess allows you to enhance efficiency and scalability in the custom software development services. Our software development services, profoundly use the power of Java to give amazing advantages such as smart solutions adoption, faster and more efficient Big Data Processing, cost reduction, easy maintenance of projects, integrated protection and database access security on multi-functional java based applications." },
    { id: 5, name: "Mobile App", text: " Mobile Apps are doing more than just entertaining the users, rather they have grown business centric and are now handling massive enterprise oriented operations. We do custom application development for web and mobile platforms. Our enterprise mobile applications are easy-to-use, secure, efficient and lends you high scalability with perks of enhance productivity." },
    { id: 6, name: "Ecommerce", text: "We make your online business management easy and comprehensive, from web applications to mobile applications to robust software products we provide our custom software development in very niche to bring the ease of functionality that help you enhance your product visibility, better data management, improved customer relations and of course a increased ROI." },
    { id: 7, name: "OpenSource", text: "Open source allows you to gain the technical superiority in your business operations, it allows you to respond well to the market challenges and help you gain an upper hand in your business domain. We are Development software company that exploits the benefits of open source to provide you growth, efficiency and development. Some of the open source technologies we extensively use are PHP, MySQL, Apache, WordPress, Java, HTML." },
    { id: 8, name: "SAP", text: "It leads the show for enterprise application software and provides us the needed edge in customizing your products as per your unique needs. SAP is an innovative solutions that allows you to track custom and business interactions and very compliant to provide you great Enterprise Resource planning and Data Management Programs." },
    { id: 9, name: "IOT", text: "Find the right set of technology toolset and expert developers that help you build robust and dependable IoT technology, developed to total your business unique needs. We help you integrate IoT to your simple to crucial business operations, reducing your efforts while giving you time to think beyond and grow." },
    { id: 10, name: "AI/BI", text: "Lead your domain with intelligent technologies helping you gain impetus in your vertical while providing you data-driven business centric solutions. Here we cater you quality integration by skilful expert developers of technologies such as AI and BI that help you make more precise decisions while reducing your efforts sublimely." },
    { id: 11, name: "Cloud", text: " Massive amount of data is generated each day, but rather than thinking it as a waste, you can definitely use it in your benefits. With our cloud integration services you are able to manage you data better and using it further in building better customer relationships also it allows you to access all the information on one go while enhancing your productivity." },
    { id: 12, name: "BlockChain", text: " It is way past the time when BlockChain was merely a crypto currency tool. Rather its security, agility is now being used in developing flexible, highly functional and secure programmes helping you grow better in your business vertical." },
  ]

  swipe(): void {
    const menu: HTMLDivElement = document.querySelector('.mat-tab-list');

    let x1 = null,
        position = null,
        end = null;
    
    function endPosition(): void {
      if (window.innerWidth === 767) {
        end = -497;
      } else {
        end = window.innerWidth - 767 - 497;
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