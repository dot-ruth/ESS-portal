import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private service:SharedService,private snackbar:MatSnackBar){}
  datalist:any = []
  pass:string = ""
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

  isupdated:boolean=false;
  honorificlist:any = []
  sexList : any =[]
  emptypelist:any = []
  professionlist:any = [ ]
  dutylist:any = [ ]
  deptlist:any = []
  jobPositionlist:any = []
  gradeList:any = []
  scaleList:any = []
  reportstoList:any =[]

ngOnInit(): void {
 this.loadData()
}

 loadData(){
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

 updateData(){
  var val= {
    fullName:this.name,
    reportsTo:this.reportsTo,
    sex:this.sex,
    title:this.honorific,
    dobEth:this.dobEth,
    dob:this.dob,
    doeEth:this.doeEth,
    doe:this.doe,
    tinNo:this.tinNo,
    pfPenNo:this.pfPenNo,
    jobPosition:this.jobposition,
    grade:this.grade,
    scale:this.scale,
    basicSalary:this.basicSalary,
    deptL1:this.deptL1,
    dutyStation:this.dutyStation,
    empType:this.empType,
    contStartDate:this.contStartDate,
    contEndDateEth:this.contEndDateEth,
    contEndDate:this.contEndDate,
    fieldofStudy:this.fieldofstudy,
    permanentSince:this.permanentSince,
    alcStartDateEth:this.alscEth,
    alcStartDate:this.alsc,
    penPfSchem:this.pfScheme,
    contStartDateEth:this.contStartDateEth
  }

  this.service.currentData.subscribe(message => this.pass = message)
  this.snackbar.open("Are you Sure you want to update your personal informtion","Okay").onAction().subscribe(()=>{
    
    this.service.update(this.pass,val).subscribe(()=>{
      this.snackbar.open("Your personal information  has been updated,please refresh the page and login to see the updated data","",{duration:5000})
      this.loadData();
      this.isupdated = true;
    })
  })
  
 
 }

}
