import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService} from "../../../services/userServices/user.service";
import {PopUpService} from "../../../services/popUpServices/pop-up.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private popup : PopUpService, private formBuilder: FormBuilder,public usersService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
      repetirContraseña: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('contraseña').value;
    const confirmPassword = formGroup.get('repetirContraseña').value;

    if (password !== confirmPassword) {
      formGroup.get('repetirContraseña').setErrors({ mismatch: true });
    } else {
      formGroup.get('repetirContraseña').setErrors(null);
    }
  }

  // Método para obtener los controles del formulario
  get f() { return this.registerForm.controls; }

  onSubmit() {
    // Si el formulario es inválido
    if (this.registerForm.invalid) {
      return this.popup.openDialog('Error', 'Por favor, complete todos los campos correctamente.');
    }

    this.register();
    // Si se llega aquí, el formulario es válido, se puede proceder con los datos
    console.log(this.registerForm.value);
  }
  register(){

    const nombre_u = this.registerForm.value.usuario;
    const nombre = this.registerForm.value.nombre;
    const apellidos = this.registerForm.value.apellido;
    const fecha_n = this.registerForm.value.fechaNacimiento;
    const email = this.registerForm.value.correo;
    const password= this.registerForm.value.contraseña;

    const token =this.usersService.register(nombre_u,nombre,apellidos,email,fecha_n, password).subscribe({
      next: value => { this.popup.openDialog('Usuario registrado!', 'Usuario ' + nombre_u + ' a sido registrado.');
        this.router.navigate(['/login'])
        //console.log('yehaaa');
      },
      error: err =>{var errorMessage = err.error.error;
        this.popup.openDialog('Error', errorMessage)
        console.log(errorMessage)}
    });




  }
}
