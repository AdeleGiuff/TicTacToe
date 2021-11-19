import { Action, createReducer, createFeatureSelector, on } from '@ngrx/store';
import { faiUnaMossa, nuovaPartita } from './griglia.actions';

export interface GrigliaState {
  quadrati: any[];
  // quando la proprietà giocatore attuale è settata in true il vincitore ha valore null.
  giocatoreAttuale: 'X' | 'O' | null; //true == X, false == O
  vincitore: string | null;
}

export const initialState: GrigliaState = {
  quadrati: ([] = Array(9).fill(null)),
  giocatoreAttuale: 'X',
  vincitore: null,
};

const reducer = createReducer(
  initialState,
  on(nuovaPartita, (state) => ({
    ...state,
    ...initialState,
  })),
  on(faiUnaMossa, (state, action) => {
    const quadrati = state.quadrati.map((x, i) =>
      i === action.index ? state.giocatoreAttuale : x
    );
    const giocatoreAttuale = state.giocatoreAttuale === 'X' ? 'O' : 'X';
    const vincitore = fnCalcolaVincitore(quadrati);

    return {
      ...state,
      quadrati,
      giocatoreAttuale,
      vincitore,
    };
  })
);

export function grigliaReducer(state: GrigliaState, action: Action) {
  return reducer(state, action);
}

export const grigliaSelector = createFeatureSelector<GrigliaState>('griglia');

export function fnCalcolaVincitore(quadrati: any[]) {
  const righe = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < righe.length; i++) {
    const [a, b, c] = righe[i];
    if (
      quadrati[a] &&
      quadrati[a] === quadrati[b] &&
      quadrati[a] === quadrati[c]
    ) {
      return quadrati[a];
    }
  }
}

/*export function finePartita(vincitore: any, quadrati: any[]) {
  vincitore = fnCalcolaVincitore(quadrati);
  if (vincitore) {
    return vincitore;
  }
}*/
