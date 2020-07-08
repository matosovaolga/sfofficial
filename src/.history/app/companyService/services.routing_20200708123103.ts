import {Routes, RouterModule} from '@angular/router';
import {SFServicesComponent} from './companyService.component';
import {SFServiceArchiComponent} from './service-archi/service.archi.component';
import {SFServiceDiscoveryComponent} from './service-discovery/service.discovery.component';
import {SFServiceIntegComponent} from './service-integration/service.integ.component';
import {SFServiceMobileComponent} from './service-mobile/service.mobile.component';
import {SFServiceQaComponent} from './service-qa/service.qa.component';
import {SFServiceSoftComponent} from './service-soft/service.soft.component';
import {SFServiceUxdesComponent} from './service-uxdes/service.uxdes.component';
import {SFServiceCmsComponent} from './service-cms/service.cms.component';
const servicesRoutes: Routes = [

      {
        path: 'services/xdesign',
        component: SFServiceUxdesComponent
      },
      {
        path: 'software',
        component: SFServiceSoftComponent
      },
      {
        path: 'cms',
        component: SFServiceCmsComponent
      },
      {
        path: 'qa',
        component: SFServiceQaComponent
      },
      {
        path: 'consulting',
        component: SFServiceArchiComponent
      },
      {
        path: 'discovery',
        component: SFServiceDiscoveryComponent
      },
      {
        path: 'integration',
        component: SFServiceIntegComponent
      },
      {
        path: 'mobile',
        component: SFServiceMobileComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: SFServicesComponent
      }
    

];

export const servicesRouting = RouterModule.forChild(servicesRoutes);