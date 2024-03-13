import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  login(nombre_u: string, password: string): Observable<any> {
    const body = { nombre_u, password }; // Creamos un objeto con los datos de inicio de sesión
    return this.http.post<any>('http://127.0.0.1:8000/login', body);
  }
  register(nombre_u: string, nombre: string, apellidos: string, email: string, fecha_n: Date, password: string): Observable<any> {
    const body = { nombre_u, nombre, apellidos, email, fecha_n, password }; // Creamos un objeto con los datos de registro
    return this.http.post('http://127.0.0.1:8000/register', body);
  }
  getUser(): Observable<any> {
    const body =  this.token; // Creamos un objeto con los datos de inicio de sesión
    return this.http.post<any>('http://127.0.0.1:8000/users/show', body);
  }

  logout(): Observable<any> {
    var token = this.getToken();
    console.log('logout: ' + token)
    return this.http.post('http://127.0.0.1:8000/logout?token='+token,{});
  }
  setToken(token:string):void{
    this.token =token;
    localStorage.setItem('token', token);
  }
  getToken(): string{
    return this.token;
  }
  isLogged(){
    if(this.token){
      return true
    }else {
      return false
    }
  }


  }
