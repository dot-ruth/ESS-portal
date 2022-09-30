import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { UserForRegistrationDto } from 'src/app/_interface/user/user-for-registration-dto';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private authService: AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
       fullname:new FormControl('',[Validators.required]),
       password:new FormControl('',[Validators.required]),
       confirm:new FormControl(''),
    });
  }

  public validateControl = (controlName:string)=>{
    return this.registerForm.get(controlName)?.invalid && this.registerForm.get(controlName)?.touched
  }

  public hasError = (controlName:string,errorName:string)=>{
    return this.registerForm.get(controlName)?.hasError(errorName)
  }
  public openlogin(){
this.router.navigate(['/Login'])
  }


  public registerUser = (registerFormValue: any) => {
    const formValues = { ...registerFormValue };
    const user:UserForRegistrationDto = {
      fullname:formValues.fullname,
      password:formValues.password,
      confirmPassword:formValues.confirm
    };
    this.authService.registerUser("https://localhost:7261/api/Accounts/Registration",user)
    .subscribe({
      next:(_)=> console.log("Successful registration"),
      error:(err:HttpErrorResponse)=> console.log(err.error.errros)
    })
  }
}
