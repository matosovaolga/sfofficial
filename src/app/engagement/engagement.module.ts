import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {servicesRouting} from './engagement.router';
import { SharedComponentModule } from '../common/sharedModule';
import { MatButtonModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {SFOutsourceComponent} from './outsoursing/outsource.component';
import {SFDedicateComponent} from './dedicate/dedicate.component';
@NgModule({
    imports: [
        CommonModule,
        servicesRouting,
        SharedComponentModule,
        MatTabsModule,
        MatButtonModule

    ],
    declarations: [
        SFOutsourceComponent,
        SFDedicateComponent
    ],
    providers: [],
    exports: [RouterModule]
})
export class EngagementModule { }