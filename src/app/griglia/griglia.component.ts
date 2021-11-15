import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-griglia',
  templateUrl: './griglia.component.html',
  styleUrls: ['./griglia.component.css'],
})
export class GrigliaComponent implements OnInit {
  // i quadrati, cioè le nove mosse sono un array di stringhe.
  quadrati!: any[];
  giocatoreAttuale!: boolean;
  vincitore!: string | null;
  constructor() {}

  ngOnInit() {
    this.nuovaPartita();
  }

  nuovaPartita() {
    //per la proprietà quadrati creiamo un array di 9 elementi al quale inizialmente diamo il valore null.
    this.quadrati = Array(9).fill(null);
    // quando la proprietà giocatore attuale è settata in true il vincitore ha valore null.
    this.giocatoreAttuale = true;
    this.vincitore = null;
  }
  //con il getter gestiamo la logica della UI del pulsante giocatore
  get giocatore() {
    //quando la proprietà del giocatoreAttuale è true il giocatore sarà X, altrimenti O.
    //Tutte le volte che cambia il valore di giocatoreAttuale cambia la UI della proprietà giocatore.
    return this.giocatoreAttuale ? 'X' : 'O';
  }
  faiUnaMossa(index: number) {
    // se i quadrati sono già stati cliccati non sarà possibile ricliccarli.
    //Se i quadrati sono vuoti, utilizzando il metodo splice tagliamo l'array dalla posizione del quadrato su cui abbiamo cliccato
    //per cambiare la UI del giocatore settiamo il giocatoreAttuale al valore opposto.
    if (!this.quadrati[index]) {
      this.quadrati.splice(index, 1, this.giocatore);
      this.giocatoreAttuale = !this.giocatoreAttuale;
    }

    this.vincitore = this.calcolaVincitore();
  }
  calcolaVincitore() {
    //algoritmo su ogni combinazione di possibili vincite. Ci sono solo 9 mosse per cui solo 8 possibilità di vincere.
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
        this.quadrati[a] &&
        this.quadrati[a] === this.quadrati[b] &&
        this.quadrati[a] === this.quadrati[c]
      ) {
        return this.quadrati[a];
      }
    }
    return null;
  }
}
