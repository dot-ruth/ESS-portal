
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl = "http://localhost:7261/api/emp";
  readonly APIurl1 = "http://localhost:7261/api/Accounts/Registration";
  private Data = new BehaviorSubject('');
  currentData = this.Data.asObservable();
  private isupdated = new BehaviorSubject('');
  updated = this.isupdated.asObservable();

  constructor(private http:HttpClient) { }

  changeData(pass:string){
    this.Data.next(pass);
  }

  getfullName():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/getfullName');
  }

  getName(id:string){
    return this.http.get(this.APIurl + '/' + id);
  }
  
  getpfScheme():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/pfScheme');
  }

  gethonorific():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/gethonorific');
  }

  getEmptype():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/getEmptype');
  }

  profession_Cat():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/profession_Cat');
  }

  duty_station():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/duty_station');
  }

  getDept():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/getDept');
  }

  getjob_pos():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/getjob_pos');
  }

  getgrade():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/getgrade');
  }

  getSex():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/sex');
  }

  getreportsTO():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/reportsto');
  }

  update(id:string,val:any){
    return this.http.put(this.APIurl + '/' + id,val);
  }

  register(val:any){
    return this.http.put(this.APIurl1,val);
  }
  
}
