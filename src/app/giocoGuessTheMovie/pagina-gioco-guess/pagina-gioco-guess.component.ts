import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { nuovaPartita } from '../guess-stato-store/guess.actions';
import { giocoGuessSelector } from '../guess-stato-store/guess-reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pagina-gioco-guess',
  templateUrl: './pagina-gioco-guess.component.html',
  styleUrls: ['./pagina-gioco-guess.component.css'],
})
export class PaginaGiocoGuessComponent implements OnInit {
  constructor(private store: Store) {}

  giocoGuess$ = this.store.select(giocoGuessSelector);
  nomeFilm$ = this.giocoGuess$.pipe(map((x) => x.nomefilm));

  ngOnInit(): void {
    // Recuperare un film a caso tra i 6 proposti
  }

  clickNuovaPartita() {
    this.store.dispatch(nuovaPartita());
  }
}
