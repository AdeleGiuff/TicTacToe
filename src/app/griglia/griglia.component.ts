import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import {
  faiUnaMossa,
  nuovaPartita,
} from '../griglia-stato-store/griglia.actions';
import { grigliaSelector } from '../griglia-stato-store/griglia.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-griglia',
  templateUrl: './griglia.component.html',
  styleUrls: ['./griglia.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrigliaComponent implements OnInit {
  // i quadrati, cioè le nove mosse sono un array di stringhe.

  constructor(private store: Store) {}

  griglia$ = this.store.select(grigliaSelector);
  quadrati$ = this.griglia$.pipe(map((x) => x.quadrati));
  giocatoreAttuale$ = this.griglia$.pipe(map((x) => x.giocatoreAttuale));
  vincitore$ = this.griglia$.pipe(map((x) => x.vincitore));

  ngOnInit() {}

  clickFaiUnaMossa(index: number) {
    this.store.dispatch(faiUnaMossa({ index }));
  }

  clickNuovaPartita() {
    this.store.dispatch(nuovaPartita());
  }
}
