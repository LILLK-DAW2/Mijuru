import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandigPageComponent } from "./Paginas/PreLoggin/landig-page/landig-page.component";
import {AboutUsComponent} from "./Paginas/PreLoggin/about-us/about-us.component";
import {LoginComponent} from "./Paginas/Login/login/login.component";
import {RegisterComponent} from "./Paginas/Login/register/register.component";
import {FaqsComponent} from "./Paginas/PreLoggin/faqs/faqs.component";
import {ContactUsComponent} from "./Paginas/PreLoggin/contact-us/contact-us.component";
import {ErrorComponent} from "./Paginas/error/error.component";

const routes: Routes = [
  {path: 'welcome', component:LandigPageComponent },
  {path: 'login', component:LoginComponent },
  {path: 'register', component:RegisterComponent },
  {path: 'about-us', component:AboutUsComponent },
  {path: 'Faqs', component:FaqsComponent },
  {path: 'ContactUs', component:ContactUsComponent},
  {path: 'error', component:ErrorComponent},
  {path: '',redirectTo: 'welcome',pathMatch: 'full'},
  {path: '**' ,redirectTo: '/error',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})
export class AppRoutingModule { }
