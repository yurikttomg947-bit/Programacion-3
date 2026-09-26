import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SolicitudAcceso, RespuestadAcceso} from '../interface/acceso-model';

@Injectable({
  providedIn: 'root',
})
export class ValidarAccesoService {
  url: string = 'http://localhost:8080/api/evento/validarAcceso';
  constructor(private http: HttpClient) { }

  validarAcceso(datos: SolicitudAcceso): Observable<RespuestadAcceso>{
    return this.http.post<RespuestadAcceso>(this.url,datos);
  }
}
