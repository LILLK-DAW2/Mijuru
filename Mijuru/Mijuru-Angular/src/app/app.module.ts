import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './paginas/PreLoggin/about-us/about-us.component';
import { LandigPageComponent } from './paginas/PreLoggin/landig-page/landig-page.component';
import { ContactUsComponent } from './paginas/PreLoggin/contact-us/contact-us.component';
import { FaqsComponent } from './paginas/PreLoggin/faqs/faqs.component';
import { LoginComponent } from './paginas/Login/login/login.component';
import { RegisterComponent } from './paginas/Login/register/register.component';
import { NavBarPrelogginComponent } from './components/nav-bar-preloggin/nav-bar-preloggin.component';
import { FooterPrelogginComponent } from './components/footer-preloggin/footer-preloggin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ErrorComponent} from "./paginas/error/error.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PreguntasComponent} from "./paginas/PreLoggin/faqs/preguntas/preguntas.component";
import { CampusDashboardComponent } from './paginas/Campus/campus-dashboard/campus-dashboard.component';
import { CampusNavbarComponent } from './components/campus/campus-navbar/campus-navbar.component';
import { CampusIconoComponent } from './components/campus/campus-icono/campus-icono.component';
import {HttpClientModule} from "@angular/common/http";
import { NotificationPageComponent } from './components/campus/notification-page/notification-page.component';
import { NotificationComponent } from './components/campus/notification-page/notification/notification.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { ConfirmationPopUpComponent } from './components/popUps/confirmation-pop-up/confirmation-pop-up.component';
import {PopUpComponent} from "./components/popUps/pop-up/pop-up.component";
import {PopUpService} from "./services/popUpServices/pop-up.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrearCampusComponent } from './components/campus/campusCrud/crear-campus/crear-campus.component';
import {MatIconModule} from "@angular/material/icon";
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatFileUploadModule} from "angular-material-fileupload";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatAutocompleteModule} from "@angular/material/autocomplete";


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    LandigPageComponent,
    ContactUsComponent,
    FaqsComponent,
    LoginComponent,
    RegisterComponent,
    NavBarPrelogginComponent,
    FooterPrelogginComponent,
    ErrorComponent,
    PreguntasComponent,
    CampusDashboardComponent,
    CampusNavbarComponent,
    CampusIconoComponent,
    NotificationPageComponent,
    NotificationComponent,
    PopUpComponent,
    ConfirmationPopUpComponent,
    CrearCampusComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatDialogModule,
        MatButtonModule,
        NgbModule,
        MatIconModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatFileUploadModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        FormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
