import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campus-dashboard',
  templateUrl: './campus-dashboard.component.html',
  styleUrls: ['./campus-dashboard.component.css']
})
export class CampusDashboardComponent implements OnInit {
  slides = [];
  nSlides: number;
  nHex: number;

  constructor() {
    this.nHex = Math.floor(Math.random() * 49) + 2; // Genera un número aleatorio entre 2 y 50 para dejar espacio para el hexágono de ajustes
    this.nSlides = Math.ceil(this.nHex / 14); // Calcula el número de diapositivas necesario para mostrar todos los hexágonos

    for (let i = 0; i < this.nSlides; i++) {
      const hexagons = [];
      const hexagonsCount = (i === this.nSlides - 1) ? this.nHex % 13 || 13 : 13; // Si es la última diapositiva, ajusta la cantidad de hexágonos

      for (let j = 0; j < hexagonsCount; j++) {
        hexagons.push({
          imageUrl: 'https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg',
          title: 'Title ' + (i * 14 + j + 1),
          description: 'Description ' + (i * 14 + j + 1)
        });
      }
      hexagons.push({ // Agrega el hexágono de ajustes al final de cada diapositiva
        imageUrl: './assets/campusHexagon/plus.png',
        title: 'Ajustes',
        description: 'asd'
      });
      this.slides.push({ id: i + 1, hexagons: hexagons });
    }
  }



  ngOnInit(): void {
  }

}
