import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../_class/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http:HttpClient ) { }

  private route = `/${environment.endpoint}/v1/clientes`;

  addCliente( cliente:Cliente ):Observable<Cliente>{
    return this.http.post<Cliente>(`${this.route}/add`, cliente );
  }

  updateCliente( cliente:Cliente ):Observable<Cliente>{
    return this.http.post<Cliente>(`${this.route}/update`, cliente );
  }

  selectCliente():Observable<Cliente[]>{
    return this.http.post<Cliente[]>(`${this.route}/select`, {} );
  }

  allCliente():Observable<Cliente[]>{
    return this.http.post<Cliente[]>(`${this.route}/all`, {} );
  }

  deleteCliente( cliente:Cliente ):Observable<Cliente>{
    return this.http.post<Cliente>(`${this.route}/delete`, cliente );
  }
}
