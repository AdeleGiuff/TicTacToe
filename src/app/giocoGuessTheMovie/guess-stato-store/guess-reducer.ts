import { Action, createReducer, createFeatureSelector, on } from '@ngrx/store';
import { Film } from '../Film';
import { nuovaPartita } from './guess.actions';
import { MOVIES } from '../ListaMovies';

export interface giocoGuessState {
  nomeFilm: Film;
}

export const initialState: giocoGuessState = {
  nomeFilm: null,
};

const reducer = createReducer(
  initialState,

  on(nuovaPartita, (state) => {
    const film = getRandomNome(state.nomeFilm);
    return {
      ...state,
      film,
    };
  })
);

export function PaginaGiocoGuessReducer(
  state: giocoGuessState,
  action: Action
) {
  return reducer(state, action);
}

export const giocoGuessSelector =
  createFeatureSelector<giocoGuessState>('GIOCOGUESS');

export function getRandomNome(film) {
  let index = Math.floor(Math.random() * 6);
  film = MOVIES[index];
}
