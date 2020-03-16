import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SFHeaderComponent } from './header/header.component';
import { SFFooterComponent } from './footer/footer.component';
import { SFExpertisesComponent } from './expertise/expertises.component';
import { SFServicesComponent } from './companyService/companyService.component';
import { SFExpertiseComponent } from './expertise/expertise-single/expertise.component';
import { SFHomeComponent } from './home/home.component';
import {SFBtnComponent} from './common/btn/btn.component';
import {CarouselHolderComponent} from './common/testimonials/testimonials.component';
import { OwlModule } from 'ngx-owl-carousel';
import {SFContactComponent} from './home/contactForm/contactForm.component';
import {SFRequestComponent} from './contactPage/requestForm/requestForm.component';
import {ConnectionService} from './home/contactForm/connection.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {SFScrollToTopComponent} from './common/scrollToTop/scrollToTop.component';
import {SFContactPageComponent} from './contactPage/contactPage.component';
import {SFBannerComponent} from './common/banner/banner.component';
import {SFServiceComponent} from './companyService/service-single/single-service.component';
import { FileUploadModule } from 'ng2-file-upload';
import { MatButtonModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    SFHeaderComponent,
    SFFooterComponent,
    SFExpertisesComponent,
    SFExpertiseComponent,
    SFServicesComponent,
    SFHomeComponent,
    SFBtnComponent,
    CarouselHolderComponent,
    SFContactComponent,
    SFScrollToTopComponent,
    SFContactPageComponent,
    SFBannerComponent,
    SFServiceComponent,
    SFRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule,
    OwlModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    FileUploadModule
  ],
  providers: [
    ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
