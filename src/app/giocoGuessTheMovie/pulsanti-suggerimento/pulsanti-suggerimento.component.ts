import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pulsanti-suggerimento',
  templateUrl: './pulsanti-suggerimento.component.html',
  styleUrls: ['./pulsanti-suggerimento.component.css'],
})
export class PulsantiSuggerimentoComponent implements OnInit {
  suggerimento: string;

  @Output() aggiungiSuggerimento: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  buttonClick() {
    this.aggiungiSuggerimento.emit(this.suggerimento);
  }
}
