import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {PopUpService} from "./services/popUpServices/pop-up.service";
import {ConfirmationPopUpComponent} from "./Components/popUps/confirmation-pop-up/confirmation-pop-up.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Mijuru-Angular';
  constructor(private popup: PopUpService) {}

 /* async openConfirmationDialog(): Promise<void> {
    if (await this.popup.openConfirmationDialog('pepinollo', 'asdasda')) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
*/
}
