import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Propuesta } from '../_class/propuesta';
import { ResponsePropuesta } from '../_class/responsePropuesta';

@Injectable({
  providedIn: 'root'
})
export class PropuestasService {

  constructor( private http:HttpClient ) { }

  private route = `/${environment.endpoint}/v1/propuestas`;

  addPropuesta( propuesta:Propuesta ):Observable<Propuesta>{
    return this.http.post<Propuesta>(`${this.route}/add/`, propuesta );
  }

  updatePropuesta( propuesta:Propuesta ):Observable<Propuesta>{
    return this.http.post<Propuesta>(`${this.route}/update/`, propuesta );
  }

  selectPropuesta(params:{}):Observable<ResponsePropuesta>{
    return this.http.post<ResponsePropuesta>(`${this.route}/select/`, params );
  }

  allPropuesta(params:{}):Observable<ResponsePropuesta>{
    return this.http.post<ResponsePropuesta>(`${this.route}/all/`, params );
  }

  deletePropuesta( propuesta:Propuesta ):Observable<ResponsePropuesta>{
    return this.http.post<ResponsePropuesta>(`${this.route}/delete/`, propuesta );
  }

}
