import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {

  constructor( private service:SharedService) { }
  Active:string = ""
  pass:string =""
  reportsTo:string = ""
  doeEth:string = " "
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

  ngOnInit(): void {
    this.Notassigned = "N/A"
    this.loadData()
  }

  loadData(){
    this.service.currentData.subscribe(message => this.pass = message)
    this.service.getName(this.pass).subscribe((data)=>{
      this.datalist = data;
      this.alsc = this.datalist[0].alcStartDate;
      this.alscEth = this.datalist[0].alcStartDateEth;
      this.permanentSince = this.datalist[0].permanentSince;
      this.fieldofstudy = this.datalist[0].fieldOfStudy;
      this.reportsTo = this.datalist[0].reportsTo;
      this.doe= this.datalist[0].doe;
      this.doeEth = this.datalist[0].doeEth;
      this.tinNo = this.datalist[0].tinNo;
      this.pfPenNo = this.datalist[0].pfPenNo;
      this.pfScheme = this.datalist[0].penPfSchem;
      this.jobposition = this.datalist.jobPosition;
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
      console.log(this.doeEth)
      
     
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
  }
}
