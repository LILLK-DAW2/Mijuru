import { Injectable } from '@angular/core';
import {ConfirmationPopUpComponent} from "../../components/popUps/confirmation-pop-up/confirmation-pop-up.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PopUpComponent} from "../../components/popUps/pop-up/pop-up.component";

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor(private dialog: MatDialog) { }

  openConfirmationDialog(titulo: string, message: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const dialogRef: MatDialogRef<ConfirmationPopUpComponent> = this.dialog.open(ConfirmationPopUpComponent, {
        width: '250px',
        data: { title: titulo, message: message }
      });
      dialogRef.afterClosed().subscribe(result => {
        // Resuelve la promesa con el resultado del diálogo
        resolve(result);
      });
    });
  }

  openDialog(titulo: string, message: string): void {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '250px',
      data: {
        title: titulo,
        message: message
      },
    });
  }
}
