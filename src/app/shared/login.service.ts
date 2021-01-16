import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './../model/login';
import { Constantes } from './../../services';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  authenticationUser(user : Login): Observable<any>{
    return this.http.post(Constantes.login, user);
  }
}
