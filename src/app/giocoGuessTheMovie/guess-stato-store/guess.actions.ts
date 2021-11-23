import { createAction, props } from '@ngrx/store';

export const nuovaPartita = createAction('GIOCOGUESS/nuovaPartita');
export const aggiungiLettera = createAction(
  'GIOCOGUESS/aggiungiLettera',
  props<{ lettera: string }>()
);

export const aggiungiTitolo = createAction(
  'GIOCOGUESS/aggiungiTitolo',
  props<{ titoloFilm: string }>()
);
export const aggiungiSuggerimento = createAction(
  'GIOCOGUESS/aggiungiSuggerimento'
);
