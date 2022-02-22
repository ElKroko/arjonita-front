import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProyectItem, ProposalItem, ProjectChiefItem } from '../models/proposal.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private apiUrl:string ='api/v1/proyectos/';

  constructor( private http: HttpClient ) { }

  projectData(projectData: ProyectItem): Observable<ProyectItem> {
    return this.http.post<ProyectItem>(this.apiUrl, projectData);
  }

  proposalData(projectData: ProposalItem): Observable<ProposalItem> {
    return this.http.post<ProposalItem>(this.apiUrl, projectData);
  }

  projectChiefData(projectData: ProjectChiefItem): Observable<ProjectChiefItem> {
    return this.http.post<ProjectChiefItem>(this.apiUrl, projectData);
  }

}
