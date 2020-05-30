import {Routes, RouterModule} from '@angular/router';
import {SFOutsourceComponent} from './outsoursing/outsource.component';
import {SFDedicateComponent} from './dedicate/dedicate.component';
import {SFStaffaugComponent} from './staff-aug/staffaug.component';


const engagementRoutes: Routes = [
    {
        path: 'outsourcing',
        component: SFOutsourceComponent
    },
    {
        path: 'dedicate',
        component: SFDedicateComponent
    },
    {
        path: 'staff-augmentation',
        component: SFStaffaugComponent
    }


];

export const servicesRouting = RouterModule.forChild(engagementRoutes);