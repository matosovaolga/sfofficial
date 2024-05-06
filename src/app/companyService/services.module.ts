import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SFServicesComponent} from './companyService.component';
import {SFServiceArchiComponent} from './service-archi/service.archi.component';
import {SFServiceDiscoveryComponent} from './service-discovery/service.discovery.component';
import {SFServiceIntegComponent} from './service-integration/service.integ.component';
import {SFServiceMobileComponent} from './service-mobile/service.mobile.component';
import {SFServiceQaComponent} from './service-qa/service.qa.component';
import {SFServiceSoftComponent} from './service-soft/service.soft.component';
import {SFServiceUxdesComponent} from './service-uxdes/service.uxdes.component';
import { servicesRouting } from './services.routing';
import { SharedComponentModule } from '../common/sharedModule';
import { MatButtonModule } from "@angular/material/button";
import {MatTabsModule} from '@angular/material/tabs';
import {SFServiceCmsComponent} from './service-cms/service.cms.component';
@NgModule({
    imports: [
        CommonModule,
        servicesRouting,
        SharedComponentModule,
        MatTabsModule,
        MatButtonModule

    ],
    declarations: [
        SFServicesComponent,
        SFServiceUxdesComponent,
        SFServiceArchiComponent,
        SFServiceSoftComponent,
        SFServiceDiscoveryComponent,
        SFServiceIntegComponent,
        SFServiceQaComponent,
        SFServiceMobileComponent,
        SFServiceCmsComponent
    ],
    providers: [],
    exports: [RouterModule]
})
export class ServicesModule { }
