import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  constructor(private service:SharedService) { }

  Notassigned:string = ""
  pass:string = ""
  city:string = ""
  subcity:string = ""
  woreda:string = ""
  houseNo:string = ""
  telNo:string = ""
  celNo:string = ""

  datalist:any = []

  ngOnInit(): void {
    this.Notassigned = "N/A"
    this.loadData()
  }

  loadData(){
    this.service.currentData.subscribe(message => this.pass = message)
    this.service.getName(this.pass).subscribe((data)=>{
      this.datalist = data;
      this.city = this.datalist[0].cacity
      this.subcity = this.datalist[0].casubCity
      this.woreda = this.datalist[0].caworeda
      this.houseNo = this.datalist[0].cahouseNo
      this.telNo = this.datalist[0].catelNo
      this.celNo = this.datalist[0].cacellNo
  })
    
  }

}
