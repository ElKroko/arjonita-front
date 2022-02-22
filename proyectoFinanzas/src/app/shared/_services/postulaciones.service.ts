import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Postulacion } from '../_class/postulacion';

@Injectable({
  providedIn: 'root'
})
export class PostulacionesService {

  constructor( private http:HttpClient ) { }

  private route = `/${environment.endpoint}/v1/postulaciones`;

  addPostulacion( postulacion:Postulacion ):Observable<Postulacion>{
    return this.http.post<Postulacion>(`${this.route}/add`, postulacion );
  }

  updatePostulacion( postulacion:Postulacion ):Observable<Postulacion>{
    return this.http.post<Postulacion>(`${this.route}/update`, postulacion );
  }

  selectPostulacion(){
    return this.http.post(`${this.route}/select/`, {} );
  }

  allPostulacion():Observable<Postulacion[]>{
    return this.http.post<Postulacion[]>(`${this.route}/all`, {} );
  }

  deletePostulacion( postulacion:Postulacion ):Observable<Postulacion>{
    return this.http.post<Postulacion>(`${this.route}/delete`, postulacion );
  }
}
