import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../_class/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor( private http:HttpClient ) { }

  private route = `/${environment.endpoint}/v1/personas`;

  addPersona( persona:Persona ):Observable<Persona>{
    return this.http.post<Persona>(`${this.route}/add`, persona );
  }

  updatePersona( persona:Persona ):Observable<Persona>{
    return this.http.post<Persona>(`${this.route}/update`, persona );
  }

  selectPersona():Observable<Persona[]>{
    return this.http.post<Persona[]>(`${this.route}/select`, {} );
  }

  allPersona():Observable<Persona[]>{
    return this.http.post<Persona[]>(`${this.route}/all`, {} );
  }

  deletePersona( persona:Persona ):Observable<Persona>{
    return this.http.post<Persona>(`${this.route}/delete`, persona );
  }
}
