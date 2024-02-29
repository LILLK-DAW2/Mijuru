import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Paginas/PreLoggin/about-us/about-us.component';
import { LandigPageComponent } from './Paginas/PreLoggin/landig-page/landig-page.component';
import { ContactUsComponent } from './Paginas/PreLoggin/contact-us/contact-us.component';
import { FaqsComponent } from './Paginas/PreLoggin/faqs/faqs.component';
import { LoginComponent } from './Paginas/Login/login/login.component';
import { RegisterComponent } from './Paginas/Login/register/register.component';
import { NavBarPrelogginComponent } from './Components/nav-bar-preloggin/nav-bar-preloggin.component';
import { FooterPrelogginComponent } from './Components/footer-preloggin/footer-preloggin.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PreguntasComponent} from "./Paginas/PreLoggin/faqs/preguntas/preguntas.component";
import { CampusDashboardComponent } from './Paginas/Campus/campus-dashboard/campus-dashboard.component';
import { CampusNavbarComponent } from './Components/Campus/campus-navbar/campus-navbar.component';
import { CampusIconoComponent } from './Components/Campus/campus-icono/campus-icono.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
