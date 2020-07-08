import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SFVacanciesComponent } from './vacancies/vacancies.component';
import { SFAboutComponent } from './about/about.component';
import { companyRouting } from './company.routing';
import { SFCompanyComponent } from './company.component';
import { SharedComponentModule } from '../common/sharedModule';
import { SFProcessComponent } from './process/process.component';
import { VacanciesService } from './vacancies/vacancies.service';
import { SFVacancyComponent } from './vacancies/vacancy/vacancy.component';
import { SFApplyFormComponent } from './vacancies/applyForm/applyForm.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';
import { MatButtonModule } from '@angular/material';
@NgModule({
    imports: [
        CommonModule,
        companyRouting,
        SharedComponentModule,
        MatFormFieldModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        FileUploadModule,
        MatButtonModule

    ],
    declarations: [
        SFVacanciesComponent,
        SFAboutComponent,
        SFCompanyComponent,
        SFProcessComponent,
        SFVacancyComponent,
        SFApplyFormComponent
    ],
    providers: [VacanciesService],
    exports: [RouterModule]
})
export class CompanyModule { }