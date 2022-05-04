import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Registro } from '../model/registro';

@Injectable()
export class RegistroService {

  registrosUrl = 'registros'
  constructor(private http: HttpClient) { }

  getAll() : Observable<Registro[]> {
    return this.http.get<Registro[]>(environment.apiUrl + this.registrosUrl);
  }

  add(registro: Registro): Observable<any> {
    return this.http.post<any>(environment.apiUrl + this.registrosUrl, registro);
  }
}
