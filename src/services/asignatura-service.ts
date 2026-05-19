import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Asignatura } from '../model/asignatura';
import { Alumno } from '../model/alumno';

@Injectable({
  providedIn: 'root',
})
export class AsignaturaService {
    
  private baseUrl = environment.apiUrl + '/asignatura';
  //private baseUrlAlumn = environment.apiUrl + '/alumnos';

  constructor(
    private _httpClient: HttpClient
  ){};

  getAsignaturas(): Observable<Asignatura[]>{
    return this._httpClient.get<Asignatura[]>(this.baseUrl);
  }

  getAsignaturaById(id: number): Observable<Asignatura>{
    return this._httpClient.get<Asignatura>(this.baseUrl + "/" + id);
  }

  /*getAlumnoByAsignatura(idAsignatura: number, idAlumno: number): Observable<Asignatura, Alumno>{
    let alumno = this._httpClient.get<Alumno>(this.baseUrl + "/" + idAlumno);
    return alumno;
  }*/

}
