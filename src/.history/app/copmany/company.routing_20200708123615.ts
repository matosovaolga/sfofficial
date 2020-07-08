import {Routes, RouterModule} from '@angular/router';
import {SFVacanciesComponent} from './vacancies/vacancies.component';
import {SFAboutComponent} from './about/about.component';
import {SFProcessComponent} from './process/process.component';
import {SFVacancyComponent} from './vacancies/vacancy/vacancy.component';
const companyRoutes: Routes = [
    {
        path: 'about',
        component: SFAboutComponent
    },
    {
        path: 'vacancies',
        component: SFVacanciesComponent
    },
    { path: 'vacancies/:id', component: SFVacancyComponent },
    {
        path: 'process',
        component: SFProcessComponent
    },
    {
        path: '',
        component: SFAboutComponent
    }
];

export const companyRouting = RouterModule.forChild(companyRoutes);