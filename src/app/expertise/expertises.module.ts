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
import { SFEnterprisePortalsComponent } from './portals/portals.component';
import { SFEcommerceComponent } from './ecommerce/ecommerce.component';
import { SFMobileAppsComponent } from './mobile-apps/mobile.component';
import { SFBusinessAutomationComponent } from './automation/automation.component';
import { SFDataBaseComponent } from './database/database.component';
import { SFMobilePlatformsComponent } from './mobile-platforms/mobilePlatforms.component';
import { SFFrontEndComponent } from './front-end/front-end.component';
import { SFServerSideComponent } from './serverSide/serverSide.component';
import { SFCMSComponent } from './cms/cms.component';

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
        SFEnterprisePortalsComponent,
        SFEcommerceComponent,
        SFMobileAppsComponent,
        SFBusinessAutomationComponent,
        SFDataBaseComponent,
        SFMobilePlatformsComponent,
        SFFrontEndComponent,
        SFServerSideComponent,
        SFCMSComponent
    ],
    providers: [],
    exports: [RouterModule]
})
export class ExpertisesModule { }
