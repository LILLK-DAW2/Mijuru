import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  @Input() question: string;
  @Input() answer: string;
  expanded: boolean = false;

  toggleAnswer() {
    this.expanded = !this.expanded;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
