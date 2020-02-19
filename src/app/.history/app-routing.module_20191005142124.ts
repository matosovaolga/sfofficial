import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SFServicesComponent } from './companyService/companyService.component';
import { SFExpertisesComponent } from './expertise/expertises.component';
import { SFExpertiseComponent } from './expertise/expertise-single/expertise.component';
import { SFHomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'services', component: SFServicesComponent },
  { path: 'expertises/:id', component: SFExpertiseComponent },
  {
    path: 'expertises',
    component: SFExpertisesComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: SFHomeComponent
  },
  // { path: '**', component: PageNotFoundComponent }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
