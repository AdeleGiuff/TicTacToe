import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  aggiungiSuggerimento,
  aggiungiTitolo,
  nuovaPartita,
} from '../guess-stato-store/guess.actions';
import { GiocoGuessSelector } from '../guess-stato-store/guess-reducer';
import { map } from 'rxjs/operators';
import { aggiungiLettera } from '../guess-stato-store/guess.actions';

@Component({
  selector: 'app-pagina-gioco-guess',
  templateUrl: './pagina-gioco-guess.component.html',
  styleUrls: ['./pagina-gioco-guess.component.css'],
})
export class PaginaGiocoGuessComponent implements OnInit {
  constructor(private store: Store) {}

  giocoGuess$ = this.store.select(GiocoGuessSelector);
  nomeFilm$ = this.giocoGuess$.pipe(map((x) => x.film.nome));
  nomeFilmOffuscato$ = this.giocoGuess$.pipe(map((x) => x.nomeOffuscato));
  lettereUtente$ = this.giocoGuess$.pipe(map((x) => x.lettereUtente));
  counter$ = this.giocoGuess$.pipe(map((x) => x.counter));
  suggerimento$ = this.giocoGuess$.pipe(map((x) => x.suggerimento));

  ngOnInit(): void {}

  clickAggiungiLettera(lettera: string) {
    console.log(lettera);
    this.store.dispatch(aggiungiLettera({ lettera }));
  }
  clickAggiungiTitolo(titoloFilm: string) {
    console.log(titoloFilm);

    this.store.dispatch(aggiungiTitolo({ titoloFilm }));
  }

  clickNuovaPartita() {
    this.store.dispatch(nuovaPartita());
  }
  clickSuggerimento(suggerimento: string) {
    this.store.dispatch(aggiungiSuggerimento({ suggerimento }));
  }
}
