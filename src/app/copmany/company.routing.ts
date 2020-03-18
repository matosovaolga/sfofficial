import {Routes, RouterModule} from '@angular/router';
import {SFVacanciesComponent} from './vacancies/vacancies.component';
import {SFAboutComponent} from './about/about.component';

const companyRoutes: Routes = [
    {
        path: 'about',
        component: SFAboutComponent,
      
    },
    {
        path: 'vacancies',
        component: SFVacanciesComponent
    }
];

export const companyRouting = RouterModule.forChild(companyRoutes);