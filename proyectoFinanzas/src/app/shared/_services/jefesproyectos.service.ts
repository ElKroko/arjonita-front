import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JefeProyecto } from '../_class/jefeproyecto';

@Injectable({
  providedIn: 'root'
})
export class JefesproyectosService {

  constructor( private http:HttpClient ) { }

  private route = `/${environment.endpoint}/v1/jefesproyectos`;

  addJefeProyecto( jefeProyecto:JefeProyecto ):Observable<JefeProyecto>{
    return this.http.post<JefeProyecto>(`${this.route}/add`, jefeProyecto );
  }

  updateJefeProyecto( jefeProyecto:JefeProyecto ):Observable<JefeProyecto>{
    return this.http.post<JefeProyecto>(`${this.route}/update`, jefeProyecto );
  }

  selectJefeProyecto():Observable<JefeProyecto[]>{
    return this.http.post<JefeProyecto[]>(`${this.route}/select`, {} );
  }

  allJefeProyecto():Observable<JefeProyecto[]>{
    return this.http.post<JefeProyecto[]>(`${this.route}/all`, {} );
  }

  deleteJefeProyecto( jefeProyecto:JefeProyecto ):Observable<JefeProyecto>{
    return this.http.post<JefeProyecto>(`${this.route}/delete`, jefeProyecto );
  }
}
