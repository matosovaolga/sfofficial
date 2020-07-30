import { Routes, RouterModule } from '@angular/router';
import { SFExpertisesComponent } from './expertises.component';
import { SFSocialNetworkingComponent } from './social-networking/socialNetworking.component';
import { SFHospitalManagementComponent } from './hospital-man-sys/hospital.component';
import { SFEnterprisePortalsComponent } from './portals/portals.component';
import { SFMobileAppsComponent } from './mobile-apps/mobile.component';
import { SFEcommerceComponent } from './ecommerce/ecommerce.component';
import { SFBusinessAutomationComponent } from './automation/automation.component';
import { SFOpenSourceComponent } from './open-source/openSource.component';
import { SFMobilePlatformsComponent } from './mobile-platforms/mobilePlatforms.component';
import { SFJavaScriptComponent } from './javascript/javascript.component';
import { SFCloudTechnologiesComponent } from './cloud-tech/cloudTech.component';


const expertiseRoutes: Routes = [
  {
    path: 'javascript',
    component: SFJavaScriptComponent
  },
  {
    path: 'cloud-tech',
    component: SFCloudTechnologiesComponent
  },
  {
    path: 'mobile-platforms',
    component: SFMobilePlatformsComponent
  },
  {
    path: 'open-source',
    component: SFOpenSourceComponent
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