import { Action, createReducer, createFeatureSelector, on } from '@ngrx/store';
import { Stats } from 'fs';
import { calcolaVincitore, faiUnaMossa, nuovaPartita } from './griglia.actions';

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
    /*if (!state.quadrati[action.index]) {*/
    let quadrati = state.quadrati.map((x, i) =>
      i === action.index ? state.giocatoreAttuale : x
    );
    /*}*/
    let giocatoreAttuale = state.giocatoreAttuale === 'X' ? 'O' : 'X';

    let vincitore = state.vincitore;
    //vincitore = calcolaVincitore();
    return {
      ...state,
      quadrati: quadrati,
      giocatoreAttuale: giocatoreAttuale,
      vincitore: vincitore,
    };
  }),

  on(calcolaVincitore, (state) => {
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
          state.quadrati[a] &&
          state.quadrati[a] === state.quadrati[b] &&
          state.quadrati[a] === state.quadrati[c]
        ) {
          return state.quadrati[a];
        }}
        return {
            ...state,
            quadrati: state.quadrati = null,
            giocatoreAttuale: state.giocatoreAttuale = null,
            vincitore: state.vincitore = null
  }})
export function grigliaReducer(state: GrigliaState, action: Action) {
  return reducer(state, action);
}

export const grigliaSelector = createFeatureSelector<GrigliaState>('griglia');

/*if (state.vincitore) {
    return;
  }
  
    if (!state.quadrati[index]) {
        state.quadrati = state.quadrati.map(
        (x, i) => (i === index ? state.giocatoreAttuale : x)
      );
      state.giocatoreAttuale === 'X' ? 'O' : 'X';
    }

    state.vincitore = calcolaVincitore();
    
}

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
      state.quadrati[a] &&
      state.quadrati[a] === state.quadrati[b] &&
      state.quadrati[a] === state.quadrati[c]
    ) {
      return state.quadrati[a];
    }
  }
  return null;
}*/
