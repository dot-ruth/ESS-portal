import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EssComponent } from './ess/ess.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './ess/update/update.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'ESS-Portal',component:EssComponent},
      {path:'Login',component:LoginComponent},
      {path:'Updateinformation',component:UpdateComponent},
      {path: '', redirectTo: '/Login', pathMatch: 'full'},
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
