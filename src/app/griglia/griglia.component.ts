import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { PartitaService } from '../partita.service';

@Component({
  selector: 'app-griglia',
  templateUrl: './griglia.component.html',
  styleUrls: ['./griglia.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrigliaComponent implements OnInit {
  // i quadrati, cioè le nove mosse sono un array di stringhe.

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public partitaService: PartitaService
  ) {}

  ngOnInit() {}

  nuovaPartita() {
    //per la proprietà quadrati creiamo un array di 9 elementi al quale inizialmente diamo il valore null.
    this.partitaService.quadrati = Array(9).fill(null);
    // quando la proprietà giocatore attuale è settata in true il vincitore ha valore null.
    this.partitaService.giocatoreAttuale = 'X'; //true == X, false == O
    this.partitaService.vincitore = null;
  }
  //con il getter gestiamo la logica della UI del pulsante giocatore
  // get giocatore() {
  //   //quando la proprietà del giocatoreAttuale è true il giocatore sarà X, altrimenti O.
  //   //Tutte le volte che cambia il valore di giocatoreAttuale cambia la UI della proprietà giocatore.
  //   return this.giocatoreAttuale ? 'X' : 'O';
  // }
  faiUnaMossa(index: number, event: string) {
    if (this.partitaService.vincitore) {
      return;
    }
    console.log(event);
    // se i quadrati sono già stati cliccati non sarà possibile ricliccarli.
    //Se i quadrati sono vuoti, utilizzando il metodo splice tagliamo l'array dalla posizione del quadrato su cui abbiamo cliccato
    //per cambiare la UI del giocatore settiamo il giocatoreAttuale al valore opposto.
    setTimeout(() => {
      if (!this.partitaService.quadrati[index]) {
        this.partitaService.quadrati = this.partitaService.quadrati.map(
          (x, i) => (i === index ? this.partitaService.giocatoreAttuale : x)
        );
        //this.quadrati.splice(index, 1, this.giocatoreAttuale);
        this.partitaService.giocatoreAttuale =
          this.partitaService.giocatoreAttuale === 'X' ? 'O' : 'X';
      }

      this.partitaService.vincitore = this.calcolaVincitore();
      this.changeDetectorRef.detectChanges();
    }, 0);
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
        this.partitaService.quadrati[a] &&
        this.partitaService.quadrati[a] === this.partitaService.quadrati[b] &&
        this.partitaService.quadrati[a] === this.partitaService.quadrati[c]
      ) {
        return this.partitaService.quadrati[a];
      }
    }
    return null;
  }
}
