import { Injectable } from '@angular/core';

@Injectable()
export class PartitaService {
  constructor() {
    console.log('hi');
  }
  quadrati: any[] = Array(9).fill(null);
  // quando la proprietà giocatore attuale è settata in true il vincitore ha valore null.
  giocatoreAttuale: 'X' | 'O' | null = 'X'; //true == X, false == O
  vincitore: string | null = null;
}
