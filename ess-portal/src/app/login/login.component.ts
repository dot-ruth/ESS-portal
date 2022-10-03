import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { AuthenticationService } from '../shared/services/authentication.service';
import { AuthResponseDto } from '../_interface/response/auth-response-dto';
import { UserForAuthenticationDto } from '../_interface/user/user-for-authentication-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  

  
  loginForm!: FormGroup;
  errorMessage: string = '';
  showError: boolean = false;
  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute,private service:SharedService) { }
  
  fullname:string = "";
  ID:string = "";
  nav:boolean = false;
  datalist:any = [];
  logged:boolean = false;
  ngOnInit(): void { 
    this.service.currentData.subscribe(message => this.ID = message)
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }
    validateControl = (controlName: string) => {
      return this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched
    }
    hasError = (controlName: string, errorName: string) => {
      return this.loginForm.get(controlName)?.hasError(errorName)
    }
    loginUser = (loginFormValue: any) => {
      this.showError = false;
      const login = {... loginFormValue };
      const userForAuth: UserForAuthenticationDto = {
        username: login.username,
        password: login.password
      }
      this.authService.loginUser('https://localhost:7261/api/Accounts/Login', userForAuth)
      .subscribe({
        next: (res:AuthResponseDto) => {
         localStorage.setItem("token", res.token);
         this.logged=true;
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.message;
        this.showError = true;
      }})
      this.service.getName(this.ID).subscribe((data: any)=>{
        this.datalist = data;
        this.nav=(this.ID == this.datalist[0].employeeId)
      })
      if(this.nav && this.logged) this.router.navigateByUrl('/ESS-Portal');
      this.newData()
      }
  
      loadData(){
        this.service.getName(this.ID).subscribe((data: any)=>{
          this.datalist = data;
        })
      }

      openregister(){
        this.router.navigate(['/Register'])
      }  
      
      newData() {
        this.service.changeData(this.ID);
      
    }
  
}

  
  


  
  



