import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../_class/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor( private http:HttpClient ) { }

  private route = `/${environment.endpoint}/v1/proyectos`;

  addProyecto( proyecto:Proyecto ):Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.route}/add/`, proyecto );
  }

  updateProyecto( proyecto:Proyecto ):Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.route}/update/`, proyecto );
  }

  selectProyecto():Promise<Proyecto[]>{
    return this.http.post<Proyecto[]>(`${this.route}/select/`, {} ).toPromise();
  }

  allProyecto():Observable<Proyecto[]>{
    return this.http.post<Proyecto[]>(`${this.route}/all/`, {} );
  }

  deleteProyecto( proyecto:Proyecto ):Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.route}/delete/`, proyecto );
  }

  explorativo():Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.route}/explorativo/`, {} );
  }

}
