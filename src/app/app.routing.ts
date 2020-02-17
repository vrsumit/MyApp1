import {Routes, RouterModule} from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from "src/app/registration/registration.component";
import { PortalComponent } from "src/app/portal/portal.component";
import { HomePageComponent } from "src/app/home-page/home-page.component";
import { PortalAdminComponent } from "src/app/portal-admin/portal-admin.component";
import { ResourcesComponent } from "src/app/resources/resources.component";
import { LinksComponent } from './links/links.component';
import { TrainingComponent } from './training/training.component';
import { StudentRegistration } from './student-registration/student-registration.component';
import { CWCRegistrationComponent } from './cwc-registration/cwc-registration.component';
import { EventsComponent } from './events/events.component';
import { OVBSRegistrationComponent } from './ovbs-registration/ovbs-registration.component';
import { DiplomaExamRegistrationComponent } from './diploma-exam-registration/diploma-exam-registration.component';
import { TTCRegistrationComponent } from './ttc-registration/ttc-registration.component';
import { TextbookOrderComponent } from './textbook-order/textbook-order.component';
import { DiplomaSearchComponent } from './diploma-search/diploma-search.component';

const appRoutes: Routes = [
    { path: 'signin', component: SigninComponent} ,
    { path:'register', component:RegistrationComponent},
    { path:'portal', component:PortalComponent},
    { path:'', component:HomePageComponent},
    { path:'admin', component:PortalAdminComponent},
    { path:'resources', component:ResourcesComponent},
    { path:'links', component:LinksComponent},
    { path:'training', component:TrainingComponent},
    { path:'studentRegistration', component:StudentRegistration},
    { path:'cwcRegistration', component:CWCRegistrationComponent},
    { path:'events', component:EventsComponent},
    { path:'ovbsRegistration', component:OVBSRegistrationComponent},
    { path:'diplomaRegistration', component:DiplomaExamRegistrationComponent},
    { path:'ttcRegistration', component:TTCRegistrationComponent},
    { path:'textbookOrder', component:TextbookOrderComponent},
    { path:'diplomaSearch', component:DiplomaSearchComponent},
]

export const routing = RouterModule.forRoot(appRoutes);