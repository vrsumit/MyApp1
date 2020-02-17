import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { TestService } from './test.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule , MatSelectModule} from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';
import { PortalComponent } from './portal/portal.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FileSelectDirective } from 'ng2-file-upload'; 
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PortalAdminComponent } from './portal-admin/portal-admin.component';
import { ResourcesComponent } from './resources/resources.component';
import { LinksComponent } from './links/links.component';
import { TrainingComponent } from './training/training.component';
import { StudentRegistration } from './student-registration/student-registration.component';
import { CWCRegistrationComponent } from './cwc-registration/cwc-registration.component';
import { EventsComponent } from './events/events.component';
import { OVBSRegistrationComponent } from './ovbs-registration/ovbs-registration.component';
import { DiplomaExamRegistrationComponent } from './diploma-exam-registration/diploma-exam-registration.component';
import { TTCRegistrationComponent } from './ttc-registration/ttc-registration.component';
import { TextbookOrderComponent } from './textbook-order/textbook-order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiplomaSearchComponent } from './diploma-search/diploma-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegistrationComponent,
    PortalComponent,
    HomePageComponent,
    FileSelectDirective,
    PortalAdminComponent,
    ResourcesComponent,
    LinksComponent,
    TrainingComponent,
    StudentRegistration,
    CWCRegistrationComponent,
    EventsComponent,
    OVBSRegistrationComponent,
    DiplomaExamRegistrationComponent,
    TTCRegistrationComponent,
    TextbookOrderComponent,
    DiplomaSearchComponent 
  ],
  imports: [
    BrowserModule, 
    routing, 
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    AngularFontAwesomeModule,
    NgbModule 
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
