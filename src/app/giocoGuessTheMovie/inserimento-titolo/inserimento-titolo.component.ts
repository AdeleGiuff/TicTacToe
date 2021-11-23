import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inserimento-titolo',
  templateUrl: './inserimento-titolo.component.html',
  styleUrls: ['./inserimento-titolo.component.css'],
})
export class InserimentoTitoloComponent implements OnInit {
  titoloFilm: string;
  @Output() aggiungiTitolo: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  buttonClick() {
    if (!this.titoloFilm) {
      alert('scrivi una titolo');
    }
    this.aggiungiTitolo.emit(this.titoloFilm);
    this.titoloFilm = '';
  }
}
