import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SFServicesComponent } from './companyService/companyService.component';
import { SFExpertisesComponent } from './expertise/expertises.component';


const routes: Routes = [
  { path: 'services', component: SFServicesComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'expertises',
    component: SFExpertisesComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
