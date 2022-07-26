import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EssComponent } from './ess/ess.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './ess/update/update.component';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './authentication/register-user/register-user.component'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'ESS-Portal',component:EssComponent},
      {path:'Login',component:LoginComponent},
      {path:'Register',component:RegisterUserComponent},
      {path:'Home',component:HomeComponent},
      {path:'Updateinformation',component:UpdateComponent},
      {path: '', redirectTo: '/Login', pathMatch: 'full'},
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
