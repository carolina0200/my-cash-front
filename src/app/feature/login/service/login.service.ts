import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Usuario } from 'src/app/shared/model/usuario';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(usuario: Usuario) : Observable<string> {
    return this.http.post<{valor: string}>(`${environment.apiUrl}login`, usuario)
    .pipe(
      tap(x => {localStorage.setItem("token", x.valor)}),
      map(x => x.valor)
    );
  }
}
