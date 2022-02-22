import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ConsultantItem, PersonItem, ClientItem } from '../models/persons.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  private apiUrl:string ='api/v1/proyectos/';

  constructor( private http: HttpClient ) { }

  consultantData(projectData: ConsultantItem): Observable<ConsultantItem> {
    return this.http.post<ConsultantItem>(this.apiUrl, projectData);
  }

  personData(projectData: PersonItem): Observable<PersonItem> {
    return this.http.post<PersonItem>(this.apiUrl, projectData);
  }

  clientData(projectData: ClientItem): Observable<ClientItem> {
    return this.http.post<ClientItem>(this.apiUrl, projectData);
  }

}
