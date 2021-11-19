import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MOVIES } from '../ListaMovies';
import { Film } from '../Film';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  //titoloFilm: MOVIES: Film[];

  constructor() {}

  ngOnInit(): void {}
}
