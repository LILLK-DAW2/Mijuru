import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"; // Importa FormControl también aquí
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {  ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-crear-campus',
  templateUrl: './crear-campus.component.html',
  styleUrls: ['./crear-campus.component.css']
})
export class CrearCampusComponent implements OnInit {
  @ViewChild('nombreRolInput') nombreRolInput: ElementRef;
  datosFormGroup: FormGroup;
  imageFormGroup: FormGroup;
  roleFormGroup: FormGroup;
  autocompleteFormControl = new FormControl('');
  filteredUsers: Observable<any[]>;
  herramientasFormGroup: FormGroup;
  foto: any;
  rolesData: any[] = [];
  herramientas = { "chat": false, "entradas": false };
  users = [
    { name: 'John Doe', id: 1 },
    { name: 'Jane Smith', id: 2 },
    { name: 'Alice Johnson', id: 3 },
    { name: 'Bob Brown', id: 4 }
  ];

  constructor(private _formBuilder: FormBuilder) {
    // Inicialización de los formularios reactivos
    this.datosFormGroup = this._formBuilder.group({
      datosCtrl: ['']
    });
    this.imageFormGroup = this._formBuilder.group({
      imageCtrl: ['']
    });
    this.roleFormGroup = this._formBuilder.group({
      chat: false,
      entradas: false,
      calendario: false    });
    this.herramientasFormGroup = this._formBuilder.group({
      chat: false,
      entradas: false
    });
    // Suscripción a los cambios en el formulario de herramientas
    this.herramientasFormGroup.valueChanges.subscribe(value => {
      this.herramientas = value;
      console.log(this.herramientas)
    });

  }

  ngOnInit(): void {
    this.filteredUsers = this.autocompleteFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }
  // Método para crear un nuevo rol
  crearRol() {
    // Obtiene el nombre del nuevo rol
    const newRoleName   = this.nombreRolInput.nativeElement.value;

    console.log(newRoleName);
    // Obtiene los valores de los permisos del formulario
    const permisos = this.roleFormGroup.value;
    if (!permisos.chat && !permisos.calendario && !permisos.entradas) {
      permisos.chat = false;
      permisos.calendario = false;
      permisos.entradas = false;
    }
    if (newRoleName ) {

      // Añade los datos del formulario al array de arrays
      this.rolesData.push({ nombre: newRoleName,  permisos });

      // Puedes imprimir el array de arrays en la consola para ver los datos guardados
      console.log('Array de arrays con los datos del formulario:', this.rolesData);

      // Después de crear el rol, puedes limpiar el formulario
      this.roleFormGroup.reset();
      this.nombreRolInput.nativeElement.value = '';
    } else {
      // Si el nombre está vacío o ningún permiso está seleccionado, muestra un mensaje de error
      console.error('Por favor, ingrese un nombre');
    }
  }
  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.users.filter(user => user.name.toLowerCase().includes(filterValue));
  }

  // Función para abrir el selector de archivos al hacer clic en un botón
  onFileInputClick(): void {
    const inputElement: HTMLElement | null = document.querySelector('input[type="file"]');
    if (inputElement) {
      inputElement.click();
    }
  }

  // Función para manejar la selección de un archivo
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      console.log('Archivo seleccionado:', file);
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.foto = reader.result;
    };
    reader.readAsDataURL(file);
  }


}
