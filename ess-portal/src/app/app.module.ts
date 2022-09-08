import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon'
import { CommonModule } from '@angular/common';  


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { EssComponent } from './ess/ess.component';
import { EmploymentComponent } from './ess/employment/employment.component';
import { HeaderComponent } from './ess/header/header.component';
import { PersonalComponent } from './ess/personal/personal.component';
import { TopButtonComponent } from './ess/top-button/top-button.component';
import { UpdateComponent } from './ess/update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EssComponent,
    EmploymentComponent,
    HeaderComponent ,
    PersonalComponent,
    TopButtonComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    MatRippleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule,
    MatDialogModule,
    CommonModule,
    MatCardModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  entryComponents:[UpdateComponent]
})
export class AppModule { }
