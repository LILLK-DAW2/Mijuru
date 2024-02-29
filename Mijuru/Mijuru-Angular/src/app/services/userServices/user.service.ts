import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login( nombre_u: string, password: string): Observable<any> {


    console.log(nombre_u);
    console.log('pass:::.'+password);

    return this.http.post('http://127.0.0.1:8000/login?nombre_u='+nombre_u+'&password='+password, {

    });
  }
  register(nombre_u: string, nombre:string, apellidos:string,email: string,fecha_n:Date, password: string): Observable<any> {

    console.log('fecha'+fecha_n);
    return this.http.post('http://127.0.0.1:8000/register?nombre_u='+nombre_u+'&nombre='+nombre+'&apellidos='+apellidos+'&fecha_n='+fecha_n+'&email='+email+'&password='+password, {

    });
  }
}
