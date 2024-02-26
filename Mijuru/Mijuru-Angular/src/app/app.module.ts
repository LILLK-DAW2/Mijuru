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
import {HttpClientModule} from "@angular/common/http";


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
