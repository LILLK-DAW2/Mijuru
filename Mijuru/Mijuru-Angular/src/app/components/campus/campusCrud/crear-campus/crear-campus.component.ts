import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"; // Importa FormControl también aquí
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-crear-campus',
  templateUrl: './crear-campus.component.html',
  styleUrls: ['./crear-campus.component.css']
})
export class CrearCampusComponent implements OnInit {
  datosFormGroup: FormGroup;
  imageFormGroup: FormGroup;
  roleFormGroup: FormGroup;
  herramientasFormGroup: FormGroup;
  foto: any;
  herramientas = { "chat": false, "entradas": false };
  users = [
    { name: 'John Doe', id: 1 },
    { name: 'Jane Smith', id: 2 },
    { name: 'Alice Johnson', id: 3 },
    { name: 'Bob Brown', id: 4 }
  ];
  filteredUsers: Observable<any[]>;
  searchControl = new FormControl(); // Usa la importación de FormControl aquí

  constructor(private _formBuilder: FormBuilder) {
    // Inicialización de los formularios reactivos
    this.datosFormGroup = this._formBuilder.group({
      datosCtrl: ['']
    });
    this.imageFormGroup = this._formBuilder.group({
      imageCtrl: ['']
    });
    this.roleFormGroup = this._formBuilder.group({
      roleCtrl: ['']
    });
    this.herramientasFormGroup = this._formBuilder.group({
      chat: false,
      entradas: false
    });

    // Suscripción a los cambios en el formulario de herramientas
    this.herramientasFormGroup.valueChanges.subscribe(value => {
      this.herramientas = value;
      console.log(this.herramientas)
    });

    // Inicialización de la lista filtrada de usuarios
    this.filteredUsers = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  ngOnInit(): void {
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

  // Función para mostrar el nombre del usuario en el autocompletado
  displayFn(user: any): string {
    return user && user.name ? user.name : '';
  }

  // Función para filtrar la lista de usuarios basada en el valor de búsqueda
  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.users.filter(user => user.name.toLowerCase().includes(filterValue));
  }
}
