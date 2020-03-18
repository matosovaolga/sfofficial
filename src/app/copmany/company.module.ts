import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SFVacanciesComponent} from './vacancies/vacancies.component';
import {SFAboutComponent} from './about/about.component';
import {companyRouting} from './company.routing';
import {SFCompanyComponent} from './company.component';
import { from } from 'rxjs';
@NgModule({
    imports: [
        CommonModule,
        companyRouting,
    ],
    declarations: [
        SFVacanciesComponent,
        SFAboutComponent,
        SFCompanyComponent
    ],
    providers: [],
    exports: [ RouterModule]
})
export class CompanyModule {}