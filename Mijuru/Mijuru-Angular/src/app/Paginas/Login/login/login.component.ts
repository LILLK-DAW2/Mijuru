import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from "rxjs";
import {UserService} from "../../../services/userServices/user.service";
import {Router} from "@angular/router";
import {PopUpService} from "../../../services/popUpServices/pop-up.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private userService: UserService,private router: Router,private popup :PopUpService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.login();

  }


  login() {

    const nombre_u = this.loginForm.value.usuario;
    const password = this.loginForm.value.contraseña;


    const token = this.userService.login(nombre_u, password).subscribe({
      next: response => {
        const token = response.token; // Aquí obtenemos el token de la respuesta
        console.log(token);
        this.userService.setToken(token);
        this.router.navigate(['/dashboard']);
      },
      error: err =>{
        var errorMessage = err.error.error;
        this.popup.openDialog('Error', errorMessage)
        console.log(errorMessage)
      }
    });
    console.log( token);

  }
}
