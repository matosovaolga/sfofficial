import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SFExpertisesComponent } from './expertise/expertises.component';
import { SFExpertiseComponent } from './expertise/expertise-single/expertise.component';
import { SFHomeComponent } from './home/home.component';
import { SFContactPageComponent } from './contactPage/contactPage.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { SFVacancyComponent } from './company/vacancies/vacancy/vacancy.component';
import { SFVacanciesComponent } from './company/vacancies/vacancies.component';

const routes: Routes = [
  {
    path: 'services',
    loadChildren: './companyService/services.module#ServicesModule',
  },

  { path: 'expertises/:id', component: SFExpertiseComponent },
  {
    path: 'expertises',
    component: SFExpertisesComponent
  },
  {
    path: 'company',
    loadChildren: './company/company.module#CompanyModule',
  },
  {
    path: 'vacancies',
    component: SFVacanciesComponent
  },
  { path: 'vacancies/:id', component: SFVacancyComponent },
  {
    path: 'contacts',
    component: SFContactPageComponent,
    data: { title: 'Contact' }
  },
  {
    path: 'engagement',
    loadChildren: './engagement/engagement.module#EngagementModule',
  },
  {
    path: '',
    pathMatch: 'full',
    component: SFHomeComponent
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
