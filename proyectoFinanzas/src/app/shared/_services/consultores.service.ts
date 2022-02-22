import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consultor } from '../_class/consultor';

@Injectable({
  providedIn: 'root'
})
export class ConsultoresService {

  constructor( private http:HttpClient ) { }

  private route = `/${environment.endpoint}/v1/consultores`;

  addConsultor( consultor:Consultor ):Observable<Consultor>{
    return this.http.post<Consultor>(`${this.route}/add`, consultor );
  }

  updateConsultor( consultor:Consultor ):Observable<Consultor>{
    return this.http.post<Consultor>(`${this.route}/update`, consultor );
  }

  selectConsultor():Observable<Consultor[]>{
    return this.http.post<Consultor[]>(`${this.route}/select`, {} );
  }

  allConsultor():Observable<Consultor[]>{
    return this.http.post<Consultor[]>(`${this.route}/all`, {} );
  }

  deleteConsultor( consultor:Consultor ):Observable<Consultor>{
    return this.http.post<Consultor>(`${this.route}/delete`, consultor );
  }
}
