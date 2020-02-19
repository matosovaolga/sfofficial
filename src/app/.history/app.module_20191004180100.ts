import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SFHeaderComponent } from './header/header.component';
import { SFFooterComponent } from './footer/footer.component';
import { SFExpertisesComponent } from './expertise/expertises.component';
import { SFServicesComponent } from './companyService/companyService.component';
import { SFExpertiseComponent } from './expertise/expertise-single/expertise.component';

@NgModule({
  declarations: [
    AppComponent,
    SFHeaderComponent,
    SFFooterComponent,
    SFExpertisesComponent,
    SFExpertiseComponent,
    SFServicesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
