import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:SharedService,) { }
  fullname:string = "";
  password:string = "";
  nav:boolean = false;
  err:boolean = false;
  datalist:any = [];
  
  ngOnInit(): void { 
    this.service.currentData.subscribe(message => this.password = message)
    
  }

  
  
  onSubmit(form:NgForm){
    this.service.getName(this.password).subscribe((data)=>{
      this.datalist = data;
      this.nav=(this.fullname == this.datalist[0].fullName && this.password == this.datalist[0].employeeId)
      if(this.nav) this.router.navigateByUrl('/ESS-Portal');
      else this.err = true;
    })
    this.newData()
  }
  loadData(){
    this.service.getName(this.password).subscribe((data)=>{
      this.datalist = data;
    })
  }

  
  openregister(){
    this.router.navigate(['/Register'])
  }  
   


  newData() {
    this.service.changeData(this.password)
  }
  
}
