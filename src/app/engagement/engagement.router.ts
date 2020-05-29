import {Routes, RouterModule} from '@angular/router';
import {SFOutsourceComponent} from './outsoursing/outsource.component';
import {SFDedicateComponent} from './dedicate/dedicate.component';
import { from } from 'rxjs';

const engagementRoutes: Routes = [
    {
        path: 'outsourcing',
        component: SFOutsourceComponent
    },
    {
        path: 'dedicate',
        component: SFDedicateComponent
    }


];

export const servicesRouting = RouterModule.forChild(engagementRoutes);