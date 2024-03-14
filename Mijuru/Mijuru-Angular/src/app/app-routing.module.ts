import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandigPageComponent } from "./paginas/PreLoggin/landig-page/landig-page.component";
import {AboutUsComponent} from "./paginas/PreLoggin/about-us/about-us.component";
import {LoginComponent} from "./paginas/Login/login/login.component";
import {RegisterComponent} from "./paginas/Login/register/register.component";
import {FaqsComponent} from "./paginas/PreLoggin/faqs/faqs.component";
import {ContactUsComponent} from "./paginas/PreLoggin/contact-us/contact-us.component";
import {ErrorComponent} from "./paginas/error/error.component";
import {AppComponent} from "./app.component";
import {CampusDashboardComponent} from "./paginas/Campus/campus-dashboard/campus-dashboard.component";
import {AuthGuard} from "./guards/authGuard/auth.guard";

const routes: Routes = [
  {path: 'test', component:AppComponent },
  {path: 'welcome', component:LandigPageComponent },
  {path: 'login', component:LoginComponent },
  {path: 'register', component:RegisterComponent },
  {path: 'aboutUs', component:AboutUsComponent },
  {path: 'faqs', component:FaqsComponent },
  {path: 'contactUs', component:ContactUsComponent},
  {path: 'error', component:ErrorComponent},
  {path: 'dashboard', component:CampusDashboardComponent, canActivate:[AuthGuard]},
  {path: '',redirectTo: 'welcome',pathMatch: 'full'},
  {path: '**' ,redirectTo: '/error',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})
export class AppRoutingModule { }
