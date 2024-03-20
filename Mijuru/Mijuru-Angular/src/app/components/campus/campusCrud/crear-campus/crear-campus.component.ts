    import {Component, OnInit} from '@angular/core';
    import {FormBuilder, FormGroup, FormControl} from "@angular/forms"; // Importa FormControl también aquí
    import {Observable} from 'rxjs';
    import {map, startWith} from 'rxjs/operators';
    import {ElementRef, ViewChild} from '@angular/core';


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
      autocompleteFormGroup: FormGroup;
      herramientasFormGroup: FormGroup;
      autocompleteFormControl = new FormControl('');
      filteredUsers: Observable<any[]>;
      selectedRole: any | null  = null;

      foto: any;
      roleSelected: Boolean;
      herramientas = {"chat": false, "entradas": false};
      rolesData: any[] = [{"nombre": "Administrador","permisos": {"chat": true,"entradas": true, "calendario": true} }];
      users = [
        {name: 'John Doe', id: 1},
        {name: 'Jane Smith', id: 2},
        {name: 'Alice Johnson', id: 3},
        {name: 'Bob Brown', id: 4}
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
          calendario: false
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
        this.autocompleteFormGroup = this._formBuilder.group({
          selectedRole: [''] // Agregar este control de formulario
        });

      }

      ngOnInit(): void {
        this.filteredUsers = this.autocompleteFormControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || ''))
        );
      }
      onRoleSelectionChange(selectedRole: any): void {
        this.selectedRole = selectedRole; // Asignar el nombre del rol seleccionado
        console.log(this.selectedRole); // Verifica si el nombre del rol se está asignando correctamente

        if (selectedRole === 'Crear nuevo Rol') {
          this.roleSelected = false;
          this.roleFormGroup.reset();
        } else if (selectedRole && typeof selectedRole.nombre === 'string') { // Verificar si selectedRole es una cadena (nombre del rol)
          const index = this.rolesData.findIndex(role => role.nombre === selectedRole.nombre); // Buscar el índice del rol por nombre
          console.log(index);
          if (index !== -1) {
            this.roleFormGroup.patchValue(this.rolesData[index].permisos); // Actualizar los permisos del formulario según el rol seleccionado
            this.roleSelected = true;
          } else {
            console.error('Rol no encontrado para editar');
          }
        } else {
          this.roleSelected = false;
          this.roleFormGroup.reset();
        }
      }


      // Método para crear un nuevo rol
      crearRol() {
        // Obtiene el nombre del nuevo rol
        const newRoleName = this.nombreRolInput.nativeElement.value;

        // Obtiene los valores de los permisos del formulario
        const permisos = this.roleFormGroup.value;
        if (!permisos.chat && !permisos.calendario && !permisos.entradas) {
          permisos.chat = false;
          permisos.calendario = false;
          permisos.entradas = false;
        }

        if (this.roleSelected) {
          // Si se está editando un rol existente
          // Encuentra el índice del rol en el arreglo de rolesData
          const index = this.rolesData.findIndex(role => role.nombre === this.selectedRole.nombre);
          console.log(index)
          if (index !== -1) {
            // Actualiza los permisos del rol existente
            this.rolesData[index].permisos = permisos;
            console.log('Rol editado:', this.rolesData[index]);
          } else {
            console.error('Rol no encontrado para editar');
          }
        } else {
          // Si se está creando un nuevo rol
          if (newRoleName) {
            // Añade los datos del formulario al array de rolesData
            this.rolesData.push({nombre: newRoleName, permisos});
            console.log('Nuevo rol creado:', {nombre: newRoleName, permisos});
          } else {
            // Si el nombre está vacío, muestra un mensaje de error
            console.error('Por favor, ingrese un nombre');
          }
        }

        // Después de crear o editar el rol, limpia el formulario
        this.roleFormGroup.reset();
        this.nombreRolInput.nativeElement.value = '';
        this.roleSelected = false;
        this.selectedRole = null;

      }

      // Método para invitar al usuario
      invitarUsuario() {
        const selectedUserName = this.autocompleteFormControl.value;
        const selectedRoleName = this.autocompleteFormGroup.value.selectedRole;

        if (selectedUserName && selectedRoleName) {
          console.log(`Invitando a ${selectedUserName} con el rol ${selectedRoleName}`);
          // Aquí puedes agregar la lógica para invitar al usuario con el rol seleccionado
        } else {
          console.error('Por favor, seleccione un usuario y un rol');
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
