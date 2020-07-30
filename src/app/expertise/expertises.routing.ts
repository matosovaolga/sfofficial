import { Routes, RouterModule } from '@angular/router';
import { SFExpertisesComponent } from './expertises.component';
import { SFSocialNetworkingComponent } from './social-networking/socialNetworking.component';
import { SFHospitalManagementComponent } from './hospital-man-sys/hospital.component';
import { SFEnterprisePortalsComponent } from './portals/portals.component';
import { SFMobileAppsComponent } from './mobile-apps/mobile.component';
import { SFEcommerceComponent } from './ecommerce/ecommerce.component';
import { SFBusinessAutomationComponent } from './automation/automation.component';
import { SFDataBaseComponent } from './database/database.component';
import { SFMobilePlatformsComponent } from './mobile-platforms/mobilePlatforms.component';
import { SFFrontEndComponent } from './front-end/front-end.component';
import { SFServerSideComponent } from './serverSide/serverSide.component';
import { SFCMSComponent } from './cms/cms.component';


const expertiseRoutes: Routes = [
  {
    path: 'front-end',
    component: SFFrontEndComponent
  },
  {
    path: 'server-side',
    component: SFServerSideComponent
  },
  {
    path: 'mobile-platforms',
    component: SFMobilePlatformsComponent
  },
  {
    path: 'database',
    component: SFDataBaseComponent
  },
  {
    path: 'cms',
    component: SFCMSComponent
  },
  {
    path: 'automation',
    component: SFBusinessAutomationComponent
  },
  {
    path: 'ecommerce',
    component: SFEcommerceComponent
  },
  {
    path: 'mobile-enterprise',
    component: SFMobileAppsComponent
  },
  {
    path: 'social',
    component: SFSocialNetworkingComponent
  },
  {
    path: 'portals',
    component: SFEnterprisePortalsComponent
  },
  {
    path: 'hospital',
    component: SFHospitalManagementComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: SFExpertisesComponent
  }
];

export const expertiseRouting = RouterModule.forChild(expertiseRoutes);