import {Routes, RouterModule} from '@angular/router';
import {SFVacanciesComponent} from './vacancies/vacancies.component';
import {SFAboutComponent} from './about/about.component';
import {SFProcessComponent} from './process/process.component';
const companyRoutes: Routes = [
    {
        path: 'about',
        component: SFAboutComponent
    },
    {
        path: 'vacancies',
        component: SFVacanciesComponent
    },
    { path: 'vacancies/:id', component: SFVacanciesComponent },
    {
        path: 'process',
        component: SFProcessComponent
    }
];

export const companyRouting = RouterModule.forChild(companyRoutes);