import { createAction, props } from '@ngrx/store';

export const nuovaPartita = createAction('GIOCOGUESS/nuovaPartita');
export const aggiungiLettera = createAction(
  'GIOCOGUESS/aggiungiLettera',
  props<{ lettera: string }>()
);

export const gameOver = createAction('GIOCOGUESS/gameOver');
export const aggiungiTitolo = createAction(
  'GIOCOGUESS/aggiungiLettera',
  props<{ titoloFilm: string }>()
);
