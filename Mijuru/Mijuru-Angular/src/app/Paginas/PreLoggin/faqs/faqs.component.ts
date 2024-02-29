import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  questionsAndAnswers = [
    { question: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?', answer: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?' },
    { question: 'Enim dolore veniam labore commodo mollit enim?', answer: 'Enim dolore veniam labore commodo mollit enim?' },
    { question: 'Eu ex officia nostrud excepteur qui?', answer: 'Eu ex officia nostrud excepteur qui?' },
    { question: 'Sint occaecat dolor ea officia dolore veniam minim aliquip?', answer: 'Sint occaecat dolor ea officia dolore veniam minim aliquip?' },
    { question: 'Velit nulla ex nostrud consequat incididunt sint qui sint?', answer: 'Velit nulla ex nostrud consequat incididunt sint qui sint?' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
