import { Action, createReducer, createFeatureSelector, on } from '@ngrx/store';
import {
  aggiungiSuggerimento,
  aggiungiTitolo,
  nuovaPartita,
} from './guess.actions';
import { MOVIES } from '../ListaMovies';
import { Film } from '../Film';
import { aggiungiLettera } from './guess.actions';

export interface GiocoGuessState {
  film: Film | null;
  nomeOffuscato: string;
  lettereUtente: string[];
  titoloUtente: string | null;
  counter: number;
  sconfitta: string | null;
  mostraSuggerimento: boolean;
}

const lettereUtente = [' ', 'a', 'e', 'i', 'o', 'u'];
const film = getRandomFilm(MOVIES);
const nomeOffuscato = offuscaNome(film.nome, lettereUtente);
const titoloUtente = null;
const counter = 5;
const sconfitta = null;
const mostraSuggerimento = false;

export const initialState: GiocoGuessState = {
  film,
  nomeOffuscato,
  lettereUtente,
  titoloUtente,
  counter,
  sconfitta,
  mostraSuggerimento,
};

const reducer = createReducer(
  initialState,
  on(nuovaPartita, (state) => ({
    ...state,
    ...initialState,
  })),
  on(aggiungiLettera, (state, action) => ({
    ...state,
    lettereUtente: [...state.lettereUtente, action.lettera],
    titoloUtente: null,
    nomeOffuscato: offuscaNome(state.film.nome, [
      ...state.lettereUtente,
      action.lettera,
    ]),
    counter: state.counter - 1,
    sconfitta: setSconfitta(counter),

    mostraSuggerimento,
  })),
  on(aggiungiTitolo, (state, action) => ({
    ...state,
    lettereUtente,
    titoloUtente: action.titoloFilm,
    nomeOffuscato: rivelaNomeIntero(film.nome, titoloUtente),
    sconfitta,

    mostraSuggerimento,
  })),
  on(aggiungiSuggerimento, (state) => ({
    ...state,
    lettereUtente,
    titoloUtente,
    nomeOffuscato,
    counter,
    sconfitta,
    mostraSuggerimento: !state.mostraSuggerimento,
  }))
);
export function GiocoGuessReducer(state: GiocoGuessState, action: Action) {
  return reducer(state, action);
}

export const GiocoGuessSelector =
  createFeatureSelector<GiocoGuessState>('giocoGuess');

function getRandomFilm(arr: Film[]) {
  // usare metodo map per estrapolare una propriet?? specifica dell'oggetto.
  //const elArr = arr.map(({ nome }) => nome);

  // usare MathRandom per estrapolare un elemento a caso della propriet?? dell'array selezionata
  const risultato = arr[Math.floor(Math.random() * arr.length)];
  // usare il metodo replace pi?? regex per eliminare le virgolette dalla stringa
  //const senzaVirgolette = randomel.replace(/"/g, '');

  //const nascondiConsonanti = randomEl.replaceAll('(?![aeiouAEIOU])[A-Z]', '_');

  return risultato;
}

function offuscaNome(nome: string, lettere: string[]) {
  // con lo spread operator creo un array di caratteri
  let risultato = [...nome];
  risultato = risultato.map((x) => (lettere.includes(x) ? x : '*'));

  return risultato.join('');
}

function rivelaNomeIntero(nome: string, titoloUtente: string) {
  // con lo spread operator creo un array di caratteri
  if (titoloUtente == nome) {
    nomeOffuscato == nome;
  }
  console.log('hi');
  // bisognava returnare il nome non il nomeOffuscato!!!!
  return nome;
}

function setSconfitta(counter: any) {
  if (counter < 0) {
    counter == null;
    return counter;
  }
}

/*
function mostraSuggerimento(suggerimento: string) {
  if (suggerimento !== null){
    return suggerimento
  }*/
