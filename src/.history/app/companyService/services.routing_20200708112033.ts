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
        path: 'promos',
        component: PromosComponent,
        data: {
            breadcrumb: 'promos'
        }
        
        children: [
    {
        path: 'services',
        component: SFServicesComponent
    },
    {
        path: 'services/uxdesign',
        component: SFServiceUxdesComponent
    },
    {
        path: 'services/cms',
        component: SFServiceCmsComponent
    },
    {
        path: 'services/software',
        component: SFServiceSoftComponent
    },
    {
        path: 'services/qa',
        component: SFServiceQaComponent
    },
    {
        path: 'services/consulting',
        component: SFServiceArchiComponent
    },
    {
        path: 'services/discovery',
        component: SFServiceDiscoveryComponent
    },
    {
        path: 'services/integration',
        component: SFServiceIntegComponent
    },
    {
        path: 'services/mobile',
        component: SFServiceMobileComponent
    }]


];

export const servicesRouting = RouterModule.forChild(servicesRoutes);