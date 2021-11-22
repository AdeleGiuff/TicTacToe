import { Action, createReducer, createFeatureSelector, on } from '@ngrx/store';
import { nuovaPartita } from './guess.actions';
import { MOVIES } from '../ListaMovies';
import { Film } from '../Film';

export interface GiocoGuessState {
  nomefilm: Film | null;
}

export const initialState: GiocoGuessState = {
  nomefilm: getRandomNome(MOVIES),
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

function getRandomNome(arr: any[]) {
  arr[Math.floor(Math.random() * arr.length)];
}
