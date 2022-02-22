import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }

  getProyecto():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/home/');
  }

  addProyecto(val:any){
    return this.http.post(this.APIUrl + '/home/', val);
  }

  updateProyecto(val:any){
    return this.http.put(this.APIUrl + '/home/', val);
  }

  deleteProyecto(val:any){
    return this.http.delete(this.APIUrl + '/home/'+val);
  }

  getAllProjectNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/home/');
  }

}
