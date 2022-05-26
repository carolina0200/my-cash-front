import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/model/usuario';
import { environment } from 'src/environments/environment';

@Injectable()
export class SignUpService {

  constructor(private http: HttpClient) { }

  singUp(usuario: Usuario) : Observable<number> {
    return this.http.post<{valor: number}>(`${environment.apiUrl}usuarios`, usuario).pipe(map(x => x.valor));
  }
}
