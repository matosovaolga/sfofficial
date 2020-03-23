import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SFVacanciesComponent} from './vacancies/vacancies.component';
import {SFAboutComponent} from './about/about.component';
import {companyRouting} from './company.routing';
import {SFCompanyComponent} from './company.component';
import {SharedComponentModule} from '../common/sharedModule';
import {SFProcessComponent} from './process/process.component';
import {VacanciesService} from './vacancies/vacancies.service';
import {SFVacancyComponent} from './vacancies/vacancy/vacancy.component';

@NgModule({
    imports: [
        CommonModule,
        companyRouting,
        SharedComponentModule
    ],
    declarations: [
        SFVacanciesComponent,
        SFAboutComponent,
        SFCompanyComponent,
        SFProcessComponent,
        SFVacancyComponent
    ],
    providers: [VacanciesService],
    exports: [ RouterModule]
})
export class CompanyModule {}