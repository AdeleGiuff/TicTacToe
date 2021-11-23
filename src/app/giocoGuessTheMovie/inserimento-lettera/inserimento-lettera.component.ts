import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inserimento-lettera',
  templateUrl: './inserimento-lettera.component.html',
  styleUrls: ['./inserimento-lettera.component.css'],
})
export class InserimentoLetteraComponent implements OnInit {
  lettera: string;

  @Output() aggiungiLettera: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  buttonClick() {
    if (!this.lettera) {
      alert('scrivi una lettera');
    }
    this.aggiungiLettera.emit(this.lettera);
    this.lettera = '';
  }
}
