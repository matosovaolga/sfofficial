import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SFServicesComponent } from './companyService/companyService.component';
import { SFExpertisesComponent } from './expertise/expertises.component';
import { SFExpertiseComponent } from './expertise/expertise-single/expertise.component';
import { SFHomeComponent } from './home/home.component';
import { SFContactPageComponent } from './contactPage/contactPage.component';
import { SFServiceArchiComponent } from './companyService/service-archi/service.archi.component';
import { SFServiceDiscoveryComponent } from './companyService/service-discovery/service.discovery.component';
import { SFServiceIntegComponent } from './companyService/service-integration/service.integ.component';
import { SFServiceMobileComponent } from './companyService/service-mobile/service.mobile.component';
import { SFServiceQaComponent } from './companyService/service-qa/service.qa.component';
import { SFServiceSoftComponent } from './companyService/service-soft/service.soft.component';
import { SFServiceUxdesComponent } from './companyService/service-uxdes/service.uxdes.component';
import { SFServiceCmsComponent } from './companyService/service-cms/service.cms.component';
const routes: Routes = [

  {
    path: 'services',
  
    loadChildren: './companyService/services.module#ServicesModule',
    /*children: [
      {
        path: 'uxdesign',
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
    ]*/
  },
  { path: 'expertises/:id', component: SFExpertiseComponent },
  {
    path: 'expertises',
    component: SFExpertisesComponent
  },
  {
    path: 'contacts',
    component: SFContactPageComponent,
    data: { title: 'Contact' }
  },
  {
    path: 'outsoursing',
    component: SFContactPageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: SFHomeComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
