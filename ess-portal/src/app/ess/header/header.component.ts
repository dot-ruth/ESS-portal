import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service:SharedService) { }
  Active:string = ""
  pass:string =""
  name:string = ""
  id:string = ""
  honorific:string = ""
  sex:string = ""
  s:string = ""
  dobEth: string = " " 
  dob:string = " "
  

  datalist:any = []
  honorificlist:any = []
  sexList : any =[]

//datalist:any =[ ]
  ngOnInit(): void {
  this.Active= "Active"
   this.loadData();
  }
  loadData(){
    this.service.currentData.subscribe(message => this.pass = message)
    this.service.getName(this.pass).subscribe((data)=>{
      this.datalist = data;
      this.name = this.datalist[0].fullName;
      this.id = this.datalist[0].employeeId;
      this.honorific = this.datalist[0].title;
      this.sex = this.datalist[0].sex;
      this.dob = this.datalist[0].dob;
      this.dobEth = this.datalist[0].dobEth;
      
    })
    this.service.gethonorific().subscribe((data)=>{
      this.honorificlist=data;
         })
         this.service.getSex().subscribe((data)=>{
          this.sexList=data
         })
  }
  
    
 

}
