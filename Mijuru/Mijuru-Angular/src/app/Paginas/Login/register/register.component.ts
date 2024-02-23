import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, ]],
      contraseña: ['', [Validators.required,]],
      repetirContraseña: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    });
  }

  // Método para obtener los controles del formulario
  get f() { return this.registerForm.controls; }

  onSubmit() {
    // Si el formulario es inválido, no se hace nada
    if (this.registerForm.invalid) {
      return;
    }


    // Si se llega aquí, el formulario es válido, se puede proceder con los datos
    console.log(this.registerForm.value);
  }
}
