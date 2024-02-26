import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from "rxjs";
import {UserService} from "../../../services/userServices/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,public userService: UserService) { }

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
      next: value => console.log(value),
      error: err => alert(err)
    });
    console.log(token);
  }
}
