import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandigPageComponent } from "./Paginas/PreLoggin/landig-page/landig-page.component";
import {AboutUsComponent} from "./Paginas/PreLoggin/about-us/about-us.component";
import {LoginComponent} from "./Paginas/Login/login/login.component";
import {RegisterComponent} from "./Paginas/Login/register/register.component";
import {FaqsComponent} from "./Paginas/PreLoggin/faqs/faqs.component";
import {ContactUsComponent} from "./Paginas/PreLoggin/contact-us/contact-us.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'welcome', component:LandigPageComponent },
    {path: 'login', component:LoginComponent },
    {path: 'register', component:RegisterComponent },
    {path: 'about-us', component:AboutUsComponent },
    {path: 'Faqs', component:FaqsComponent },
    {path: 'ContactUs', component:ContactUsComponent   },


  ])],
  exports: [RouterModule],


})
export class AppRoutingModule { }
