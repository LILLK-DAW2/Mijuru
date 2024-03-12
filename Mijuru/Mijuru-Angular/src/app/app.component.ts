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
  slides = [];

  constructor(private popup: PopUpService) {
    for (let i = 0; i < 5; i++) {
      const hexagons = [];
      for (let j = 0; j < 14; j++) {
        hexagons.push({
          imageUrl: 'https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg',
          title: 'Title ' + (i * 4 + j + 1),
          description: 'Description ' + (i * 4 + j + 1)
        });
      }
      this.slides.push({ id: i + 1, hexagons: hexagons });
    }

  }

 /* async openConfirmationDialog(): Promise<void> {
    if (await this.popup.openConfirmationDialog('pepinollo', 'asdasda')) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
*/
}
