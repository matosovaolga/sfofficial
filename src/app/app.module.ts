import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SFHeaderComponent } from './header/header.component';
import { SFFooterComponent } from './footer/footer.component';

import { SFHomeComponent } from './home/home.component';

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
import {ServicesModule} from './companyService/services.module';
import { FileUploadModule } from 'ng2-file-upload';
import { MatButtonModule } from '@angular/material';
import {CompanyModule} from './company/company.module';
import {EngagementModule} from './engagement/engagement.module';
import {SharedComponentModule} from './common/sharedModule';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import {ExpertisesModule} from './expertise/expertises.module';
import { AnimatedDigitComponent } from './home/animated-digit/animated-digit.component';

@NgModule({
  declarations: [
    AppComponent,
    SFHeaderComponent,
    SFFooterComponent,

    SFHomeComponent,
    PageNotFoundComponent,
    CarouselHolderComponent,
    SFContactComponent,
    SFScrollToTopComponent,
    SFContactPageComponent,
    SFRequestComponent,
AnimatedDigitComponent

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
    FileUploadModule,
    CompanyModule,
    SharedComponentModule,
    ServicesModule,
    EngagementModule,
    ExpertisesModule
  ],
  providers: [
    ConnectionService],
    exports: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
