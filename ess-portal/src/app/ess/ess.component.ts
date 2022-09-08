import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ess',
  templateUrl: './ess.component.html',
  styleUrls: ['./ess.component.scss']
})
export class EssComponent {

  pass:string =""
  name:string = ""
  id:string = ""
  honorific:string = ""
  sex:string = ""
  dobEth: string = " " 
  dob:string = " "
  reportsTo:string = ""
  doeEth:string = ""
  doe:string = " "
  tinNo:string = " "
  pfPenNo:string = " "
  pfScheme:string = ""
  jobposition:string = " "
  grade:string =" "
  scale:string =" "
  basicSalary:string = " "
  deptL1:string = " "
  dutyStation:string = ""
  empType:string=""
  contStartDateEth:string = ""
  contStartDate:string =""
  contEndDateEth:string = ""
  contEndDate:string=""
  fieldofstudy:string = ""
  alsc:string = ""
  alscEth:string = ""
  permanentSince:string = ""
  Notassigned:string = ""

  datalist:any = []
  emptypelist:any = []
  professionlist:any = [ ]
  dutylist:any = [ ]
  deptlist:any = []
  jobPositionlist:any = []
  gradeList:any = []
  scaleList:any = []
  reportstoList:any =[]
  honorificlist:any = []
  sexList : any =[]

  constructor(private router:Router,private service:SharedService) { }
  isupdated_ess:boolean = false
  onUpdate(isupdate:boolean){
this.isupdated_ess=isupdate;
if(this.isupdated_ess){
  this.loadData();
}
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
    this.service.gethonorific().subscribe((data)=>{
      this.honorificlist=data;
         })
         this.service.getSex().subscribe((data)=>{
          this.sexList=data
         })
         this.service.getEmptype().subscribe((data)=>{
          this.emptypelist =data
        })
        this.service.profession_Cat().subscribe((data)=>{
          this.professionlist = data
        })
        this.service.duty_station().subscribe((data)=>{
    this.dutylist=data
        })
        this.service.getDept().subscribe((data)=>{
    this.deptlist=data
        })
        this.service.getjob_pos().subscribe((data)=>{
          this.jobPositionlist=data
        })
        this.service.getgrade().subscribe((data)=>{
          this.gradeList=data
        })
        this.service.getreportsTO().subscribe((data)=>{
          this.reportstoList=data
        })
  }

}
