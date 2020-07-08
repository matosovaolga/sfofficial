import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SFExpertisesComponent } from './expertise/expertises.component';
import { SFExpertiseComponent } from './expertise/expertise-single/expertise.component';
import { SFHomeComponent } from './home/home.component';
import { SFContactPageComponent } from './contactPage/contactPage.component';

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
    path: 'contacts',
    component: SFContactPageComponent,
    data: { title: 'Contact' }
  },
  {
    path: 'outsoursing',
    
    loadChildren: './engagement/engagement.module#EngagementModule',
  },
  {
    path: '',
    pathMatch: 'full',
    component: SFHomeComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
