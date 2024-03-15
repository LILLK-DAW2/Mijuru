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
  myControl = new FormControl('');
  filteredUsers: Observable<any[]>;



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

  }

  ngOnInit(): void {
    this.filteredUsers = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
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

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.users.filter(user => user.name.toLowerCase().includes(filterValue));
  }
}
