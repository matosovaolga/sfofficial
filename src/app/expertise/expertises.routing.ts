import {Routes, RouterModule} from '@angular/router';
import { SFExpertiseComponent } from './expertise-single/expertise.component';
import { SFSocialNetworkingComponent } from './social-networking/socialNetworking.component';


const expertiseRoutes: Routes = [

    
      {
        path: 'socialNetworking',
        component: SFSocialNetworkingComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: SFExpertiseComponent
      }
];

export const expertiseRouting = RouterModule.forChild(expertiseRoutes);