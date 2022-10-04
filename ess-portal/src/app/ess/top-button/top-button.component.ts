import {  Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { SharedService } from 'src/app/shared.service';
import { UpdateComponent } from '../update/update.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.scss']
})
export class TopButtonComponent { 

  constructor(public dialog:MatDialog,private router:Router,private service:SharedService){}

  openPreview(){
    this.dialog.open(PreviewComponent,{
      height: '100%',
      width: '80%',
    })
  }

  logout(){
      localStorage.removeItem("token");
      //this.sendAuthStateChangeNotification(false);
    
      window.location.reload();
  }

  openUpdate(){
    this.router.navigate(['/Updateinformation'])
  }

  goback()
  {
    this.router.navigate(['/ESS-Portal'])
  }
  

}

@Component({
  selector: 'preview',
  templateUrl: 'preview.component.html',
})
export class PreviewComponent implements OnInit{
  constructor(private service:SharedService) { }

  pass:string =""
  datalist:any =[]
  name:string = ""
  id:string = ""
  honorific:string=""
  sex:string = ""
  dob:string = ""
  dobEth:string = ""
  Notassigned:string = ""
  alsc:string = ""
  alscEth:string=""
  permanentSince:string = ""
  fieldofstudy:string = ""
  reportsTo:string = ""
  doe:string = ""
  doeEth:string = ""
  tinNo:string = ""
  pfPenNo:string= ""
  pfScheme:string = ""
  jobposition:string = ""
  grade:string = ""
  scale:string = ""
  basicSalary:String = ""
  deptL1:string = ""
  dutyStation:string = ""
  empType:string = ""
  contStartDate:string = ""
  contStartDateEth:string = ""
  contEndDate:string = ""
  contEndDateEth:string = ""
  ifnull:boolean = false


  ngOnInit() {
      this.loaddata()
      this.Notassigned = "N/A"
      this.ifnull = true
  }

  
  loaddata(){
    this.service.currentData.subscribe(message => this.pass = message)
    this.service.getName(this.pass).subscribe((data)=>{
this.datalist=data;
this.name = this.datalist[0].fullName;
      this.id = this.datalist[0].employeeId;
      this.honorific = this.datalist[0].title;
      this.sex = this.datalist[0].sex;
      this.dob = this.datalist[0].dob;
      this.dobEth = this.datalist[0].dobEth;
      this.alsc = this.datalist[0].alcStartDate;
      this.alscEth = this.datalist[0].alcStartDateEth;
      this.permanentSince = this.datalist[0].permanentSince;
      this.fieldofstudy = this.datalist[0].fieldOfStudy;
      this.reportsTo = this.datalist[0].reportsTo;
      this.doe= this.datalist[0].doe;
      this.doeEth = this.datalist[0].doeEth ;
      this.tinNo = this.datalist[0].tinNo;
      this.pfPenNo = this.datalist[0].pfPenNo;
      this.pfScheme = this.datalist[0].penPfSchem;
      this.jobposition = this.datalist[0].jobPosition;
      this.grade = this.datalist[0].grade;
      this.scale = this.datalist[0].scale;
      this.basicSalary = this.datalist[0].basicSalary;
      this.deptL1 = this.datalist[0].deptL1;
      this.dutyStation = this.datalist[0].dutyStation;
      this.empType = this.datalist[0].empType
      this.contStartDate = this.datalist[0].contStartDate;
      this.contStartDateEth = this.datalist[0].contStartDateEth;
      this.contEndDate = this.datalist[0].contEndDate;
      this.contEndDateEth = this.datalist[0].contEndDateEth;
    })

  }
}

