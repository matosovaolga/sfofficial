import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { expertiseRouting } from './expertises.routing';
import { SharedComponentModule } from '../common/sharedModule';
import { MatButtonModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { SFExpertisesComponent } from './expertises.component';
import { SFSocialNetworkingComponent } from './social-networking/socialNetworking.component';
import { SFHospitalManagementComponent } from './hospital-man-sys/hospital.component';

@NgModule({
    imports: [
        CommonModule,
        expertiseRouting,
        SharedComponentModule,
        MatTabsModule,
        MatButtonModule

    ],
    declarations: [
        SFExpertisesComponent,
        SFSocialNetworkingComponent,
        SFHospitalManagementComponent,
    ],
    providers: [],
    exports: [RouterModule]
})
export class ExpertisesModule { }
