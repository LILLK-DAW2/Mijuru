import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/userServices/user.service";
import {PopUpService} from "../../../services/popUpServices/pop-up.service";

@Component({
  selector: 'app-campus-navbar',
  templateUrl: './campus-navbar.component.html',
  styleUrls: ['./campus-navbar.component.css']
})
export class CampusNavbarComponent implements OnInit {
  notificaciones: boolean = false;

  constructor(protected router: Router, private usersService: UserService, private popup : PopUpService) { }

  ngOnInit(): void {
  }

  notificacion() {
    this.notificaciones = !this.notificaciones;
  }

  async logout() {
    if (await this.popup.openConfirmationDialog('Desconectar', 'Quiere cerrar session?')) {
      this.usersService.logout().subscribe({
        next: response => {
          this.router.navigate(['/welcome']); // Redirige al usuario a la página de inicio de sesión
          this.usersService.setToken('');
          localStorage.removeItem('token');
          this.popup.openDialog('Session cerada', 'Se a cerrado la session exitosamente')
        },
        error: err => {
          const errorMessage = err.error.error;
          this.popup.openDialog('Error', errorMessage);
          console.error(errorMessage);
        }
      });
    } else {
      console.log(false)
    }

  }

}
