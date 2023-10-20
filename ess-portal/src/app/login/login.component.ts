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

  constructor(private authService: AuthenticationService, private router: Router,private service:SharedService) { }
  
  username:string = "";
  password:string = "";
  pass:string = "";
  nav:boolean = false;
  err:boolean =false;
  logged:boolean = false;
  datalist:any = [];
  
  ngOnInit(): void { 
    this.service.currentData.subscribe(message => this.pass = message)
    console.log(this.pass)
  }

  onSubmit(form:NgForm){
    const userForAuth: UserForAuthenticationDto = {
      username: this.pass,
      password: this.password
    }
    console.log(this.pass)
    this.service.getName(this.pass).subscribe((data)=>{
      this.datalist = data;
      this.nav=( this.pass == this.datalist[0].employeeId)
    })
    this.authService.loginUser('http://localhost:7261/api/Accounts/Login',userForAuth)
    .subscribe({
      next: (res:AuthResponseDto) => {
       localStorage.setItem("token", res.token);
       this.logged=true;
       if(this.nav && this.logged) this.router.navigateByUrl('/ESS-Portal');
       else this.err = true;
    }})
    
    this.newData()
  }


   
    
newData() {
  this.service.changeData(this.pass)
}

      loadData(){
        this.service.getName(this.pass).subscribe((data: any)=>{
          this.datalist = data;
        })
      }
            
      openregister(){
        this.router.navigate(['/Register'])
      }  
      
  
}

  
  


  
  



