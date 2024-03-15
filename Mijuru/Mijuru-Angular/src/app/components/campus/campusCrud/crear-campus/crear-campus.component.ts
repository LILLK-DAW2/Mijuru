import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ImageLoader} from "@angular/common";



@Component({
  selector: 'app-crear-campus',
  templateUrl: './crear-campus.component.html',
  styleUrls: ['./crear-campus.component.css']
})
export class CrearCampusComponent implements OnInit {


  constructor(private _formBuilder: FormBuilder) {}
  datosFormGroup: FormGroup = this._formBuilder.group({datosCtrl: ['']});
  imageFormGroup: FormGroup = this._formBuilder.group({imageCtrl: ['']});
  roleFormGroup: FormGroup = this._formBuilder.group({roleCtrl: ['']});

  foto: any;
  ngOnInit(): void {
  }

  onFileInputClick(): void {
    // Hacer clic en el input de tipo archivo al hacer clic en el botón
    const inputElement: HTMLElement | null = document.querySelector('input[type="file"]');
    if (inputElement) {
      inputElement.click();
    }
  }

  onFileSelected(event: any): void {
    // Manejar la selección de archivo aquí
    const file = event.target.files[0];
    if (file) {
      // Realizar acciones con el archivo seleccionado, como cargarlo o mostrar una vista previa
      console.log('Archivo seleccionado:', file);
    }

    // Leer el contenido del archivo como un objeto de datos URL
    const reader = new FileReader();
    reader.onload = () => {
      // Almacenar los datos de la imagen en la variable 'foto'
      this.foto = reader.result;
    };
    reader.readAsDataURL(file);
  }








}
