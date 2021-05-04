import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SFHomeComponent } from './home/home.component';
import { SFContactPageComponent } from './contactPage/contactPage.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { SFVacancyComponent } from './company/vacancies/vacancy/vacancy.component';
import { SFVacanciesComponent } from './company/vacancies/vacancies.component';

const routes: Routes = [
  { 
    path: 'services', loadChildren: () => import('./companyService/services.module').then(m => m.ServicesModule) 
 
  },
  {
    path: 'expertises', loadChildren: () => import('./expertise/expertises.module').then(m => m.ExpertisesModule) 
 
  },
  {

    path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) 
 
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
    path: 'engagement', loadChildren: () => import('./engagement/engagement.module').then(m => m.EngagementModule)
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
