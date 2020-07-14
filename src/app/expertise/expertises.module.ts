import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { expertiseRouting } from './expertises.routing';
import { SharedComponentModule } from '../common/sharedModule';
import { MatButtonModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { SFExpertiseComponent } from './expertise-single/expertise.component';
import { SFSocialNetworkingComponent } from './social-networking/socialNetworking.component';

@NgModule({
    imports: [
        CommonModule,
        expertiseRouting,
        SharedComponentModule,
        MatTabsModule,
        MatButtonModule

    ],
    declarations: [
        SFExpertiseComponent,
        SFSocialNetworkingComponent
    ],
    providers: [],
    exports: [RouterModule]
})
export class ExpertisesModule { }
