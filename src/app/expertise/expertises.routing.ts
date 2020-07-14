import { Routes, RouterModule } from '@angular/router';
import { SFExpertisesComponent } from './expertises.component';
import { SFSocialNetworkingComponent } from './social-networking/socialNetworking.component';
import { SFHospitalManagementComponent } from './hospital-man-sys/hospital.component';


const expertiseRoutes: Routes = [
  {
    path: 'social',
    component: SFSocialNetworkingComponent
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