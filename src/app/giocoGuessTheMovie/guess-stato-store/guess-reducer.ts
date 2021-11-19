import { Action, createReducer, createFeatureSelector, on } from '@ngrx/store';
import { Film } from '../Film';
import { nuovaPartita } from './guess.actions';
import { MOVIES } from '../ListaMovies';

export interface GiocoGuessState {
  nomefilm: Film | null;
}

const randomNome = Math.floor(Math.random() * 6);

export const initialState: GiocoGuessState = {
  nomefilm: MOVIES[randomNome],
};

const reducer = createReducer(
  initialState,

  on(nuovaPartita, (state) => ({
    ...state,
    ...initialState,
  }))
);

export function PaginaGiocoGuessReducer(
  state: GiocoGuessState,
  action: Action
) {
  return reducer(state, action);
}

export const giocoGuessSelector =
  createFeatureSelector<GiocoGuessState>('GIOCOGUESS');
